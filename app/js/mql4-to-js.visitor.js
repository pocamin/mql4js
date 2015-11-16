var MQL4ToJsVisitor = function (keepType, keepOriginal, tokens, keepComments) {
  this.keepComments = keepComments;
  this.tokens = tokens;
  this.typeKept = keepType;
  this.isOriginalKept = keepOriginal;
  this.externalParameters = [];
  this.callableFunctions = [];
  return this;
};

MQL4ToJsVisitor.prototype.getMql4DefaultValue = function (type, arrayIndexes, dynamicArray) {
  var defaultValue = "{}";
  switch (type) {
    case "bool" :
      defaultValue = "false";
      break;
    case "char":
    case "float":
    case "uchar":
    case "int":
    case "uint":
    case "long":
    case "ulong":
    case "ushort":
    case "double":
      defaultValue = "0";
      break;
    case "datetime":
      defaultValue = "new Date()";
      break;
    case "string" :
      defaultValue = '""';
  }

  if (arrayIndexes) {
    return "mql4.newArray({dimensions:[" + arrayIndexes.join(",") + "], dynamic : " + dynamicArray + ", defaultValue:" + defaultValue + "})";
  } else {
    return defaultValue;
  }
};

MQL4ToJsVisitor.prototype.pad = function (str, nbTab) {
  return str.replace(/\s*$/, '').split("\n").map(function (line) {
    return _.repeat("  ", nbTab || 1) + line + "\n";
  }).join("");
};

MQL4ToJsVisitor.prototype.isBlock = function (ctx) {
  return ctx.constructor.name == "BlockOperationContext";
};


MQL4ToJsVisitor.prototype.textAsJs = function (ctx) {
  return this.wrapJS(ctx.getText());
};

MQL4ToJsVisitor.prototype.wrapJS = function (js) {
  return {js: js};
};

MQL4ToJsVisitor.prototype.originalText = function (ctx) {
  return ctx.start.getInputStream().strdata.substring(ctx.start.start, ctx.stop.stop + 1);
};

MQL4ToJsVisitor.prototype.printOriginal = function (ctx) {
  return this.isOriginalKept ? "//" + this.originalText(ctx).replace(/\n/g, '\n//') + "\n" : "";
};

MQL4ToJsVisitor.prototype.convertType = function (type, arrayIndexes) {
  return this.typeKept ? "/*<" + type + ((arrayIndexes) ? "[]" : "") + ">*/ " : "";
};

MQL4ToJsVisitor.prototype.biOp = function (opConvertTo) {
  return function (ctx) {
    //noinspection JSPotentiallyInvalidUsageOfThis partial function
    return this.wrapJS(this.js(ctx.expression(0)) + opConvertTo + this.js(ctx.expression(1)));
  }
};

MQL4ToJsVisitor.prototype.leftUniOp = function (opConvertTo) {
  return function (ctx) {
    //noinspection JSPotentiallyInvalidUsageOfThis partial function
    return this.wrapJS(opConvertTo + this.js(ctx.expression(0)));
  }
};

MQL4ToJsVisitor.prototype.rightUniOp = function (opConvertTo) {
  return function (ctx) {
    //noinspection JSPotentiallyInvalidUsageOfThis partial function
    return this.wrapJS(this.js(ctx.expression(0)) + opConvertTo);
  }
};


MQL4ToJsVisitor.prototype.visitStruct = function (ctx) {
  var that = this;
  var js = "mql4.defineStruct('" + ctx.name.text + "'";
  js += ctx.structElement().map(function (e) {
    return ", " + that.convertType(e.elementType.getText()) + "'" + e.name.text + "'"
  }).join("");
  js += ");\n";
  return this.wrapJS(this.showComment(ctx) + js);
};


MQL4ToJsVisitor.prototype.visitExpressionOperation = function (ctx) {
  return this.wrapJS(this.showComment(ctx) + this.js(ctx.expression(0)) + ";");

};

MQL4ToJsVisitor.prototype.visitDateExpression = function (ctx) {
  return this.wrapJS("mql4.date(" + ctx.getText().substring(1) + ")");
};


MQL4ToJsVisitor.prototype.visitDefine = function (ctx) {
  return this.wrapJS("var " + ctx.name.text + " = " + this.js(ctx.expression()) + ";")
};

MQL4ToJsVisitor.prototype.visitInclude = function (ctx) {
  var filename = ctx.filename ? ctx.filename.text.substring(1, ctx.filename.text.length - 1) : this.js(ctx.expression());
  return this.wrapJS('mql4.include("' + filename + '.js");');
};

MQL4ToJsVisitor.prototype.visitEnumDef = function (ctx) {
  var that = this;
  var js = "var " + ctx.name.text + " = {\n";

  var maxValue = 0;
  ctx.enumInstance().forEach(
    function (enumInstance) {
      if (enumInstance.value && enumInstance.value.text > maxValue) {
        maxValue = 1 * enumInstance.value.text;
      }
    }
  );

  js += that.pad(ctx.enumInstance().map(
    function (enumInstance) {
      var toReturn = that.showComment(enumInstance) + enumInstance.name.text + ":";
      if (enumInstance.value)
        return toReturn + enumInstance.value.text;
      else return toReturn + "/*auto-gen*/ " + ++maxValue;
    }
  ).join(",\n"));
  js += "}";
  return this.wrapJS(this.showComment(ctx) + js)
};


MQL4ToJsVisitor.prototype.visitFunctionDecl = function (ctx) {
  var that = this;
  var js = "var " + that.convertType(ctx.type().getText()) + ctx.name.text + "= function(";


  var nbArguments = ctx.functionArgument().length;

  if (nbArguments == 0) {
    this.callableFunctions.push(ctx.name.text);
  }

  var optionalArguments = [];

  js += ctx.functionArgument().map(function (functionArgument) {
    var functionArgumentResult = that.visit(functionArgument);
    if (functionArgumentResult.hasDefaultValue) {
      optionalArguments.push({name: functionArgumentResult.name, defaultValue: functionArgumentResult.defaultValue});
    }
    return that.js(functionArgument)
  }).join(", ");
  js += "){";
  js += "\n";

  if (optionalArguments.length > 0) {
    js += that.pad("switch(arguments.length) {");
    optionalArguments.forEach(function (optionalArgument, idx) {
      js += that.pad("case " + (nbArguments - optionalArguments.length + idx) + ": " + optionalArgument.name + "=" + optionalArgument.defaultValue + ";", 2);
    });
    js += that.pad("}");
  }
  js += that.pad(that.js(ctx.functionContent));

  js += "}\n";
  return this.wrapJS(this.showComment(ctx) + js)
};


MQL4ToJsVisitor.prototype.visitFunctionArgument = function (ctx) {
  var toReturn = this.wrapJS(this.convertType(ctx.type().getText()) + ctx.name.text);
  toReturn.hasDefaultValue = false;
  if (ctx.expression()) {
    toReturn.hasDefaultValue = true;
    toReturn.defaultValue = this.js(ctx.expression());
  }
  toReturn.name = ctx.name.text;
  return toReturn;
};

// expression
// unary expression
MQL4ToJsVisitor.prototype.visitUnaryMinusExpression = MQL4ToJsVisitor.prototype.leftUniOp("-");
MQL4ToJsVisitor.prototype.visitNotExpression = MQL4ToJsVisitor.prototype.leftUniOp("!");
MQL4ToJsVisitor.prototype.visitComplementExpression = MQL4ToJsVisitor.prototype.leftUniOp("~");

// assignement expression
MQL4ToJsVisitor.prototype.visitAssignExpression = MQL4ToJsVisitor.prototype.biOp("=");
MQL4ToJsVisitor.prototype.visitAssignAddExpression = MQL4ToJsVisitor.prototype.biOp("+=");
MQL4ToJsVisitor.prototype.visitAssignMinusExpression = MQL4ToJsVisitor.prototype.biOp("-=");
MQL4ToJsVisitor.prototype.visitAssignMultiplyExpression = MQL4ToJsVisitor.prototype.biOp("*=");
MQL4ToJsVisitor.prototype.visitAssignDivideExpression = MQL4ToJsVisitor.prototype.biOp("/=");
MQL4ToJsVisitor.prototype.visitAssignModulusExpression = MQL4ToJsVisitor.prototype.biOp("%=");
MQL4ToJsVisitor.prototype.visitAssignShiftBitRightExpression = MQL4ToJsVisitor.prototype.biOp(">>=");
MQL4ToJsVisitor.prototype.visitAssignShiftBitLeftExpression = MQL4ToJsVisitor.prototype.biOp("<<=");
MQL4ToJsVisitor.prototype.visitAssignBitAndExpression = MQL4ToJsVisitor.prototype.biOp("&=");
MQL4ToJsVisitor.prototype.visitAssignBitOrExpression = MQL4ToJsVisitor.prototype.biOp("|=");
MQL4ToJsVisitor.prototype.visitAssignBitXorExpression = MQL4ToJsVisitor.prototype.biOp("^=");

// inc dec expression
MQL4ToJsVisitor.prototype.visitPreDecExpression = MQL4ToJsVisitor.prototype.leftUniOp("--");
MQL4ToJsVisitor.prototype.visitPreIncExpression = MQL4ToJsVisitor.prototype.leftUniOp("++");
MQL4ToJsVisitor.prototype.visitPostDecExpression = MQL4ToJsVisitor.prototype.rightUniOp("--");
MQL4ToJsVisitor.prototype.visitPostIncExpression = MQL4ToJsVisitor.prototype.rightUniOp("++");

// bit manipulation expression
MQL4ToJsVisitor.prototype.visitShiftBitRightExpression = MQL4ToJsVisitor.prototype.biOp(">>");
MQL4ToJsVisitor.prototype.visitShiftBitLeftExpression = MQL4ToJsVisitor.prototype.biOp("<<");
MQL4ToJsVisitor.prototype.visitBitAndExpression = MQL4ToJsVisitor.prototype.biOp("&");
MQL4ToJsVisitor.prototype.visitBitOrExpression = MQL4ToJsVisitor.prototype.biOp("|");
MQL4ToJsVisitor.prototype.visitBitXorExpression = MQL4ToJsVisitor.prototype.biOp("^");

// math expression
MQL4ToJsVisitor.prototype.visitAddExpression = MQL4ToJsVisitor.prototype.biOp("+");
MQL4ToJsVisitor.prototype.visitSubtractExpression = MQL4ToJsVisitor.prototype.biOp("-");
MQL4ToJsVisitor.prototype.visitMultiplyExpression = MQL4ToJsVisitor.prototype.biOp("*");
MQL4ToJsVisitor.prototype.visitDivideExpression = MQL4ToJsVisitor.prototype.biOp("/");
MQL4ToJsVisitor.prototype.visitModulusExpression = MQL4ToJsVisitor.prototype.biOp("%");

// Boolean operation
MQL4ToJsVisitor.prototype.visitGtEqExpression = MQL4ToJsVisitor.prototype.biOp(">=");
MQL4ToJsVisitor.prototype.visitLtEqExpression = MQL4ToJsVisitor.prototype.biOp("<=");
MQL4ToJsVisitor.prototype.visitGtExpression = MQL4ToJsVisitor.prototype.biOp(">");
MQL4ToJsVisitor.prototype.visitLtExpression = MQL4ToJsVisitor.prototype.biOp("<");
MQL4ToJsVisitor.prototype.visitEqExpression = MQL4ToJsVisitor.prototype.biOp("===");
MQL4ToJsVisitor.prototype.visitNotEqExpression = MQL4ToJsVisitor.prototype.biOp("!==");
MQL4ToJsVisitor.prototype.visitAndExpression = MQL4ToJsVisitor.prototype.biOp(" && ");
MQL4ToJsVisitor.prototype.visitOrExpression = MQL4ToJsVisitor.prototype.biOp(" || ");

// Ternary operation
MQL4ToJsVisitor.prototype.visitTernaryExpression = function (ctx) {
  return this.wrapJS(this.js(ctx.expression(0)) + "?" + this.js(ctx.expression(1)) + ":" + this.js(ctx.expression(2)))
};

// direct value operation
MQL4ToJsVisitor.prototype.visitStringExpression = MQL4ToJsVisitor.prototype.textAsJs;
MQL4ToJsVisitor.prototype.visitBoolExpression = MQL4ToJsVisitor.prototype.textAsJs;
MQL4ToJsVisitor.prototype.visitNumberExpression = MQL4ToJsVisitor.prototype.textAsJs;
MQL4ToJsVisitor.prototype.visitCharExpression = function (ctx) {
  return this.wrapJS(ctx.getText() + ".charCodeAt(0)");
};


MQL4ToJsVisitor.prototype.visitIdentifierExpression = function (ctx) {
  return this.wrapJS(MQL4_IDENTIFIER.toJs(ctx.getText()))
};

MQL4ToJsVisitor.prototype.visitSpecializationExpression = function (ctx) {
  return this.wrapJS(ctx.name.text + "." + this.js(ctx.right));
};


MQL4ToJsVisitor.prototype.visitNullExpression = function () {
  return this.wrapJS("null");
};


// function call
MQL4ToJsVisitor.prototype.visitFunctionCallExpression = function (ctx) {
  var that = this;
  var name = ctx.Identifier().getText();
  var argsAsJs = ctx.expression().map(function (expression) {
    return that.js(expression);
  });
  if (mql4Functions.hasOwnProperty(name)) {
    return this.wrapJS(mql4Functions[name](argsAsJs));
  } else {
    var js = name + "(";
    js += argsAsJs.join(", ");
    js += ")";
    return this.wrapJS(js);
  }
};

// indexing
MQL4ToJsVisitor.prototype.visitIndexingExpression = function (ctx) {
  var that = this;
  var js = this.js(ctx.expression(0));
  js += ctx.expression().slice(1).map(function (expression) {
    return '[' + that.js(expression) + ']'
  }).join("");
  return this.wrapJS(js);
};
// Others
MQL4ToJsVisitor.prototype.visitBlockOperation = function (ctx) {
  var that = this;
  var js = ctx.statement().map(function (statement) {
    return that.printOriginal(statement) + that.js(statement.getChild(0));
  }).join("\n");
  return this.wrapJS(this.showComment(ctx) + js);
};


MQL4ToJsVisitor.prototype.visitExpressionExpression = function (ctx) {
  return this.wrapJS("(" + this.js(ctx.expression(0)) + ")");
};

MQL4ToJsVisitor.prototype.visitReturnExpression = function (ctx) {
  if (ctx.expression(0)) {
    return this.wrapJS("return " + this.js(ctx.expression(0)).replace(/^\((.*)\)$/, "$1"));
  }
  return this.wrapJS("return");
};


MQL4ToJsVisitor.prototype.visitDeclaration = function (ctx) {
  var that = this;
  var external = (ctx.memoryClass && (ctx.memoryClass.text == "extern" || ctx.memoryClass.text == "input"));
  var type = ctx.type().getText();


  var js = ctx.declarationElement().map(function (variable) {
    var arrayIndexes = variable.indexes() && variable.indexes().expression().map(function (e) {
        return that.js(e);
      });
    var dynamicArray = (variable.indexes() && variable.indexes().dynamic) ? true : false;
    var initValue = variable.declarationInitialValue();
    var name = variable.name.text;
    var value = null;
    if (!initValue) {
      value = that.getMql4DefaultValue(type, arrayIndexes, dynamicArray);
    } else if (initValue.expression()) {
      value = that.js(initValue.expression());
    } else if (initValue.structInit()) {
      if (arrayIndexes) {
        value = "mql4.newArray({dimensions:[" + arrayIndexes.join(",") + "],  dynamic : " + dynamicArray + ", data:[";
        value += initValue.structInit().expression().map(function (expr) {
          return that.js(expr)
        }).join(", ");
        value += "]})"
      } else {
        value = "mql4.newStruct('" + type + "', ";
        value += initValue.structInit().expression().map(function (expr) {
          return that.js(expr)
        }).join(", ");
        value += ")"
      }
    }
    if (external) {
      that.externalParameters.push({name: name, type: type, defaultValue: value});
      value = "$parameters." + name;
    }

    return "var " + that.convertType(type, arrayIndexes) + name + "=" + value + ";";
  }).join("");

  return this.wrapJS(this.printOriginal(ctx) + this.showComment(ctx) + js);
};


MQL4ToJsVisitor.prototype.visitIfElseOperation = function (ctx) {
  var opTrueIsBlock = this.isBlock(ctx.opTrue);
  var opFalseIsBlock = ctx.opFalse && this.isBlock(ctx.opFalse);
  var js = "if (" + this.js(ctx.condition) + ")" + (opTrueIsBlock ? "{" : "") + "\n";
  js += this.pad(this.js(ctx.opTrue));
  if (opTrueIsBlock) {
    js += "} ";
  }
  if (ctx.opFalse) {
    if (opFalseIsBlock) {
      js += "else {\n" + this.pad(this.js(ctx.opFalse)) + "}";
    } else js += "else " + this.js(ctx.opFalse);
  }

  return this.wrapJS(this.showComment(ctx) + js);
};

MQL4ToJsVisitor.prototype.visitSwitchOperation = function (ctx) {
  var that = this;
  var js = "switch(" + this.js(ctx.leftCondition) + "){\n";
  ctx.switchCase().forEach(function (sc) {
      if (sc.rightCondition) {
        js += that.pad("case " + that.js(sc.rightCondition) + ":");
      } else {
        js += that.pad("default:");
      }
      sc.statement().forEach(function (statement) {
        js += that.pad(that.js(statement.getChild(0)), 2);
      });
    }
  );
  js += "}";
  return this.wrapJS(this.showComment(ctx) + js);
};


MQL4ToJsVisitor.prototype.visitForMultiExpressions = function (ctx) {
  var that = this;
  return this.wrapJS(ctx.forExpression().map(function (forExpression) {
    return that.js(forExpression.getChild(0))
      .replace(/;$/, ''); // TODO for declaration not very clean
  }).join(", "));
};

MQL4ToJsVisitor.prototype.visitWhileOperation = function (ctx) {
  js = "while (" + this.js(ctx.expression(0)) + "){\n";
  js += this.pad(this.js(ctx.operation(0)));
  js += "}";
  return this.wrapJS(this.showComment(ctx) + js);
};


MQL4ToJsVisitor.prototype.visitDoWhileOperation = function (ctx) {
  js = "do {\n";
  js += this.pad(this.js(ctx.operator));
  js += "} while (" + this.js(ctx.condition) + ")\n";
  return this.wrapJS(this.showComment(ctx) + js);
};

MQL4ToJsVisitor.prototype.visitForOperation = function (ctx) {
  js = "for(" + this.js(ctx.init) + ";" + this.js(ctx.term) + ";" + this.js(ctx.inc) + "){\n";
  js += this.pad(this.js(ctx.operator));
  js += "}";
  return this.wrapJS(this.showComment(ctx) + js);
};

MQL4ToJsVisitor.prototype.visitTerminal = function () {
  return this.wrapJS("");
};


MQL4ToJsVisitor.prototype.visitNotSupportedPreprocessor = function (ctx) {
  return this.wrapJS(this.showComment(ctx) + "// NOT SUPPORTED\n" + this.originalText(ctx).split("\n").map(function (line) {
      return "//" + line + "\n"
    }).join(""));
};


MQL4ToJsVisitor.prototype.visitRoot = function (ctx) {
  var that = this;
  var toReturn = this.wrapJS(
    ctx.children
      .map(function (ctx) {
        return that.visit(ctx)
      })
      .filter(function (result) {
        return result && result.js
      })
      .map(function (result) {
        return result.js
      })
      .join("\n")
  );
  toReturn.externalParameters = this.externalParameters;
  toReturn.callableFunctions = this.callableFunctions;
  toReturn.js = this.notice() + this.init() + this.externalParametersAsJs() + toReturn.js;
  return toReturn;
};

MQL4ToJsVisitor.prototype.init = function () {
  return "var mql4 = new MQL4();\n"
};

// -----------------------//
// TODO simple fix should be updated in a future version of antlr js (>= 4.5.2).
MQL4ToJsVisitor.prototype.visit = function (ctx) {
  var contextClassName = ctx.constructor.name;
  if (contextClassName.match(/.*Context$/)) {
    contextClassName = contextClassName.substring(0, contextClassName.length - 7);
  }
  if (contextClassName == "TerminalNodeImpl") {
    contextClassName = "Terminal";
  }


  var funcName = "visit" + contextClassName;
  return this[funcName](ctx);
};

MQL4ToJsVisitor.prototype.notice = function () {
  return "// Js file generated using Mql4ToJs on " + new Date() + "\n";
};

MQL4ToJsVisitor.prototype.externalParametersAsJs = function () {
  var js = "//BEGIN Script Parameters \n";

  js += "var $externalParameters = [";

  js += this.externalParameters.map(function (param) {
    return "\n\t{" + param.name + ": {'type': '" + param.type + "', defaultValue:" + param.defaultValue + "}}"
  }).join(", ");
  js += "];\n";


  js += "var $parameters = {" +
    this.externalParameters.map(function (param) {
      return "\n\t" + param.name + ":" + param.defaultValue
    }).join(", ") + "};\n";
  js += "// END Script Parameters \n\n";
  return js;
};


MQL4ToJsVisitor.prototype.js = function (ctx) {
  return (ctx) ? this.visit(ctx).js : "";
};

MQL4ToJsVisitor.prototype.showComment = function (ctx) {
  var comments = this.tokens.getHiddenTokensToLeft(ctx.start.tokenIndex, 2);
  if (comments && this.keepComments) {
    return comments.map(function (comment) {
      return comment.text.split("\n").map(function (str) {
        return str.trim() + "\n"
      }).join("")
    }).join("");
  }
  return "";
};
