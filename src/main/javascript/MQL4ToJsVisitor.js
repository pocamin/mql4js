var mql4Visitor = require('./antlr4-gen/MQL4Visitor');
var externalParameters;
var typeKept;
var originalKept;
var callableFunctions = [];

var getMql4DefaultValue = function (type, arrayIndexes, dynamicArray) {

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
    return "mql4.newArray({dimensions:[" + arrayIndexes.join(",") + "], dynamic : " + dynamicArray + " , defaultValue:" + defaultValue + ")";
  } else {
    return defaultValue;
  }
};


var utils = {
  isDefined: _.negate(_.isUndefined),
  pad: function (str, nbTab) {
    return str.replace(/\s*$/, '').split("\n").map(function (line) {
      return _.repeat("  ", nbTab || 1) + line + "\n";
    }).join("");
  },
  isBlock: function (ctx) {
    return ctx.constructor.name == "BlockOperationContext";
  },
  resultToJS: function (result) {
    return result.js;
  },
  visit: function (that) {
    return function (x) {
      return that.visit(x)
    };
  },
  visitAndUnwrapJS: function (that, ctx) {
    return that.js(ctx);
  },
  aggregate: function (acc, val) {
    return acc + "\n" + val;
  },
  noConversion: function (ctx) {
    return utils.wrapJS(ctx.getText());
  },
  wrapJS: function (js) {
    return {js: js};
  },
  passThrough: function (that) {
    return function (ctx) {
      return utils.wrapJS(_(ctx.children)
        .map(utils.visit(that))
        .filter(utils.isDefined)
        .map(utils.resultToJS)
        .reduce(utils.aggregate));
    };
  },
  originalText: function (ctx) {
    return ctx.start.getInputStream().strdata.substring(ctx.start.start, ctx.stop.stop);
  },
  convertType: function (type, arrayIndexes) {
    return typeKept ? "/*<" + type + ((arrayIndexes) ? "[]" : "") + ">*/ " : "";
  },
  biOp: function (opConvertTo) {
    return function (ctx) {
      return utils.wrapJS(utils.visitAndUnwrapJS(this, ctx.expression(0)) + opConvertTo + utils.visitAndUnwrapJS(this, ctx.expression(1)));
    }
  },
  leftUniOp: function (opConvertTo) {
    return function (ctx) {
      return utils.wrapJS(opConvertTo + utils.visitAndUnwrapJS(this, ctx.expression(0)));
    }
  },
  rightUniOp: function (opConvertTo) {
    return function (ctx) {
      return utils.wrapJS(utils.visitAndUnwrapJS(this, ctx.expression(0)) + opConvertTo);
    }
  },
  printStatement: function (ctx) {
    return originalKept ? "//" + this.originalText(ctx) + "\n" : "";
  }
};

var MQL4ToJsVisitor = function (keepType, keepOriginal, tokens, keepComments) {
  this.keepComments = keepComments;
  this.tokens = tokens;
  typeKept = keepType;
  originalKept = keepOriginal;
  externalParameters = [];
  callableFunctions = [];
  mql4Visitor.MQL4Visitor.call(this);
  return this;
};


MQL4ToJsVisitor.prototype = Object.create(mql4Visitor.MQL4Visitor.prototype);


MQL4ToJsVisitor.prototype.visitStruct = function (ctx) {
  var js = "mql4.defineStruct('" + ctx.name.text + "'";
  js += ctx.structElement().map(function (e) {
    return ", " + utils.convertType(e.elementType.getText()) + "'" + e.name.text + "'"
  }).join("");
  js += ");\n";
  return utils.wrapJS(this.showComment(ctx) + js);
};


MQL4ToJsVisitor.prototype.visitExpressionOperation = function (ctx) {
  return utils.wrapJS(this.showComment(ctx) + this.js(ctx.expression(0)) + ";");

};

MQL4ToJsVisitor.prototype.visitDateExpression = function (ctx) {
  return utils.wrapJS("mql4.date(" + ctx.getText().substring(1) + ")");
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

  js += utils.pad(ctx.enumInstance().map(
    function (enumInstance) {
      var toReturn = that.showComment(enumInstance) + enumInstance.name.text + ":";
      if (enumInstance.value)
        return toReturn + enumInstance.value.text;
      else return toReturn + "/*auto-gen*/ " + ++maxValue;
    }
  ).join(",\n"));
  js += "}";
  return utils.wrapJS(this.showComment(ctx) + js)
};


MQL4ToJsVisitor.prototype.visitFunctionDecl = function (ctx) {
  var that = this;
  var js = "var " + utils.convertType(ctx.type().getText()) + ctx.name.text + "= function(";


  var nbArguments = ctx.functionArgument().length;

  if (nbArguments == 0) {
    callableFunctions.push(ctx.name.text);
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
    js += utils.pad("switch(arguments.length) {");
    optionalArguments.forEach(function (optionalArgument, idx) {
      js += utils.pad("case " + (nbArguments - optionalArguments.length + idx) + ": " + optionalArgument.name + "=" + optionalArgument.defaultValue + ";", 2);
    });
    js += utils.pad("}");
  }
  js += utils.pad(that.js(ctx.functionContent));

  js += "}\n";
  return utils.wrapJS(this.showComment(ctx) + js)
};


MQL4ToJsVisitor.prototype.visitFunctionArgument = function (ctx) {
  var toReturn = utils.wrapJS(utils.convertType(ctx.type().getText()) + ctx.name.text);
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
MQL4ToJsVisitor.prototype.visitUnaryMinusExpression = utils.leftUniOp("-");
MQL4ToJsVisitor.prototype.visitNotExpression = utils.leftUniOp("!");
MQL4ToJsVisitor.prototype.visitComplementExpression = utils.leftUniOp("~");

// assignement expression
MQL4ToJsVisitor.prototype.visitAssignExpression = utils.biOp("=");
MQL4ToJsVisitor.prototype.visitAssignAddExpression = utils.biOp("+=");
MQL4ToJsVisitor.prototype.visitAssignMinusExpression = utils.biOp("-=");
MQL4ToJsVisitor.prototype.visitAssignMultiplyExpression = utils.biOp("*=");
MQL4ToJsVisitor.prototype.visitAssignDivideExpression = utils.biOp("/=");
MQL4ToJsVisitor.prototype.visitAssignModulusExpression = utils.biOp("%=");
MQL4ToJsVisitor.prototype.visitAssignShiftBitRightExpression = utils.biOp(">>=");
MQL4ToJsVisitor.prototype.visitAssignShiftBitLeftExpression = utils.biOp("<<=");
MQL4ToJsVisitor.prototype.visitAssignBitAndExpression = utils.biOp("&=");
MQL4ToJsVisitor.prototype.visitAssignBitOrExpression = utils.biOp("|=");
MQL4ToJsVisitor.prototype.visitAssignBitXorExpression = utils.biOp("^=");

// inc dec expression
MQL4ToJsVisitor.prototype.visitPreDecExpression = utils.leftUniOp("--");
MQL4ToJsVisitor.prototype.visitPreIncExpression = utils.leftUniOp("++");
MQL4ToJsVisitor.prototype.visitPostDecExpression = utils.rightUniOp("--");
MQL4ToJsVisitor.prototype.visitPostIncExpression = utils.rightUniOp("++");

// bit manipulation expression
MQL4ToJsVisitor.prototype.visitShiftBitRightExpression = utils.biOp(">>");
MQL4ToJsVisitor.prototype.visitShiftBitLeftExpression = utils.biOp("<<");
MQL4ToJsVisitor.prototype.visitBitAndExpression = utils.biOp("&");
MQL4ToJsVisitor.prototype.visitBitOrExpression = utils.biOp("|");
MQL4ToJsVisitor.prototype.visitBitXorExpression = utils.biOp("^");

// math expression
MQL4ToJsVisitor.prototype.visitAddExpression = utils.biOp("+");
MQL4ToJsVisitor.prototype.visitSubtractExpression = utils.biOp("-");
MQL4ToJsVisitor.prototype.visitMultiplyExpression = utils.biOp("*");
MQL4ToJsVisitor.prototype.visitDivideExpression = utils.biOp("/");
MQL4ToJsVisitor.prototype.visitModulusExpression = utils.biOp("%");

// Boolean operation
MQL4ToJsVisitor.prototype.visitGtEqExpression = utils.biOp(">=");
MQL4ToJsVisitor.prototype.visitLtEqExpression = utils.biOp("<=");
MQL4ToJsVisitor.prototype.visitGtExpression = utils.biOp(">");
MQL4ToJsVisitor.prototype.visitLtExpression = utils.biOp("<");
MQL4ToJsVisitor.prototype.visitEqExpression = utils.biOp("===");
MQL4ToJsVisitor.prototype.visitNotEqExpression = utils.biOp("!==");
MQL4ToJsVisitor.prototype.visitAndExpression = utils.biOp(" && ");
MQL4ToJsVisitor.prototype.visitOrExpression = utils.biOp(" || ");

// Ternary operation
MQL4ToJsVisitor.prototype.visitTernaryExpression = function (ctx) {
  return utils.wrapJS(this.js(ctx.expression(0)) + "?" + this.js(ctx.expression(1)) + ":" + this.js(ctx.expression(2)))
};

// direct value operation
MQL4ToJsVisitor.prototype.visitStringExpression = utils.noConversion;
MQL4ToJsVisitor.prototype.visitBoolExpression = utils.noConversion;
MQL4ToJsVisitor.prototype.visitNumberExpression = utils.noConversion;
MQL4ToJsVisitor.prototype.visitCharExpression = function (ctx) {
  return utils.wrapJS(ctx.getText() + ".charCodeAt(0)");
};


MQL4ToJsVisitor.prototype.visitIdentifierExpression = function (ctx) {
  return utils.wrapJS(MQL4_IDENTIFIER.toJs(ctx.getText()))
};

MQL4ToJsVisitor.prototype.visitSpecializationExpression = function (ctx) {
  return utils.wrapJS(ctx.name.text + "." + this.js(ctx.right));
};


MQL4ToJsVisitor.prototype.visitNullExpression = function () {
  return utils.wrapJS("null");
};


// function call
MQL4ToJsVisitor.prototype.visitFunctionCallExpression = function (ctx) {
  var that = this;
  var name = ctx.Identifier().getText();
  var argsAsJs = ctx.expression().map(function (expression) {
    return that.js(expression);
  });
  if (mql4Functions.hasOwnProperty(name)) {
    return utils.wrapJS(mql4Functions[name](argsAsJs));

  } else {
    var js = name + "(";
    js += argsAsJs.join(", ");
    js += ")";
    return utils.wrapJS(js);
  }
};

// indexing
MQL4ToJsVisitor.prototype.visitIndexingExpression = function (ctx) {
  var that = this;
  var js = this.js(ctx.expression(0));
  js += ctx.expression().slice(1).map(function (expression) {
    return '[' + that.js(expression) + ']'
  }).join("");
  return utils.wrapJS(js);
};
// Others
MQL4ToJsVisitor.prototype.visitBlockOperation = function (ctx) {
  var that = this;
  var js = ctx.statement().map(function (statement) {
    return utils.printStatement(statement) + that.js(statement.getChild(0));
  }).join("\n");
  return utils.wrapJS(this.showComment(ctx) + js);
};


MQL4ToJsVisitor.prototype.visitExpressionExpression = function (ctx) {
  return utils.wrapJS("(" + this.js(ctx.expression(0)) + ")");
};

MQL4ToJsVisitor.prototype.visitReturnExpression = function (ctx) {
  if (ctx.expression(0)) {
    return utils.wrapJS("return " + this.js(ctx.expression(0)).replace(/^\((.*)\)$/, "$1"));
  }
  return utils.wrapJS("return;");
};


MQL4ToJsVisitor.prototype.visitIndexes = function (ctx) {
  return this.visit(ctx.expression(0));
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
      value = getMql4DefaultValue(type, arrayIndexes, dynamicArray);
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
        value += "})"
      }
    }
    if (external) {
      externalParameters.push({name: name, type: type, defaultValue: value});
      value = "$parameters." + name;
    }

    return "var " + utils.convertType(type, arrayIndexes) + name + "=" + value + ";";
  }).join("");

  return utils.wrapJS(this.showComment(ctx) + js);
};


MQL4ToJsVisitor.prototype.visitIfElseOperation = function (ctx) {
  var opTrueIsBlock = utils.isBlock(ctx.opTrue);
  var opFalseIsBlock = ctx.opFalse && utils.isBlock(ctx.opFalse);
  var js = "if (" + this.js(ctx.condition) + ")" + (opTrueIsBlock ? "{" : "") + "\n";
  js += utils.pad(this.js(ctx.opTrue));
  if (opTrueIsBlock) {
    js += "} ";
  }
  if (ctx.opFalse) {
    if (opFalseIsBlock) {
      js += "else {\n" + utils.pad(this.js(ctx.opFalse)) + "}";
    } else js += "else " + this.js(ctx.opFalse);
  }

  return utils.wrapJS(this.showComment(ctx) + js);
};

MQL4ToJsVisitor.prototype.visitSwitchOperation = function (ctx) {
  var that = this;
  var js = "switch(" + this.js(ctx.leftCondition) + "){\n";
  ctx.switchCase().forEach(function (sc) {
      if (sc.rightCondition) {
        js += utils.pad("case " + that.js(sc.rightCondition) + ":");
      } else {
        js += utils.pad("default:");
      }
      sc.statement().forEach(function (statement) {
        js += utils.pad(that.js(statement.getChild(0)), 2);
      });
    }
  );
  js += "}";
  return utils.wrapJS(this.showComment(ctx) + js);
};


MQL4ToJsVisitor.prototype.visitForMultiExpressions = function (ctx) {
  var that = this;
  return utils.wrapJS(ctx.forExpression().map(function (forExpression) {
    return that.js(forExpression.getChild(0));
  }).join(", "));
};

MQL4ToJsVisitor.prototype.visitWhileOperation = function (ctx) {
  js = "while (" + this.js(ctx.expression(0)) + "){\n";
  js += utils.pad(this.js(ctx.operation(0)));
  js += "}";
  return utils.wrapJS(this.showComment(ctx) + js);
};


MQL4ToJsVisitor.prototype.visitDoWhileOperation = function (ctx) {
  js = "do {\n";
  js += utils.pad(this.js(ctx.operator));
  js += "} while (" + this.js(ctx.condition) + ")\n";
  return utils.wrapJS(this.showComment(ctx) + js);
};

MQL4ToJsVisitor.prototype.visitForOperation = function (ctx) {
  js = "for(" + this.js(ctx.init) + ";" + this.js(ctx.term) + ";" + this.js(ctx.inc) + "){\n";
  js += utils.pad(this.js(ctx.operator));
  js += "}";
  return utils.wrapJS(this.showComment(ctx) + js);
};

MQL4ToJsVisitor.prototype.visitTerminalNodeImpl = function () {
  return utils.wrapJS("");
};


MQL4ToJsVisitor.prototype.visitProperty = function (ctx) {
  return utils.wrapJS(this.showComment(ctx) + "// mql4-to-js[PROPERTIES_NOT_SUPPORTED] : " + utils.originalText(ctx) + "\n");
};


MQL4ToJsVisitor.prototype.visitRoot = function (ctx) {
  var toReturn = utils.passThrough(this)(ctx);
  toReturn.externalParameters = externalParameters;
  toReturn.callableFunctions = callableFunctions;
  toReturn.js = this.notice() + this.externalParametersAsJs() + toReturn.js;
  return toReturn;
};

MQL4ToJsVisitor.prototype.notice = function () {
  return "// Js file generated using Mql4ToJs on " + new Date() + "\n";
};

MQL4ToJsVisitor.prototype.externalParametersAsJs = function () {
  var js = "//BEGIN Script Parameters \n";

  js += "var $externalParameters = [";

  js += externalParameters.map(function (param) {
    return "\n\t{" + param.name + ": {'type': '" + param.type + "', defaultValue:" + param.defaultValue + "}}"
  }).join(", ");
  js += "];\n";


  js += "var $parameters = {" +
    externalParameters.map(function (param) {
      return "\n\t" + param.name + ":" + param.defaultValue
    }).join(", ") + "};\n";
  js += "// END Script Parameters \n\n";
  return js;
};


// -----------------------//
// TODO simple fix should be updated in a future version of antlr js (>= 4.5.2).
MQL4ToJsVisitor.prototype.visit = function (ctx) {
  var contextClassName = ctx.constructor.name;
  if (contextClassName.match(/.*Context$/)) {
    contextClassName = contextClassName.substring(0, contextClassName.length - 7);
  }
  var funcName = "visit" + contextClassName;
  return this[funcName](ctx);
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


exports.MQL4ToJsVisitor = MQL4ToJsVisitor;