var mql4Visitor = require('./antlr4-gen/MQL4Visitor');

var externalParameters;
var typeKept;

var utils = {
  isDefined: _.negate(_.isUndefined),
  resultToJS: function (result) {
    return result.js;
  },
  visit: function (that) {
    return function (x) {
      return that.visit(x)
    };
  },
  visitAndUnwrapJS: function (that, ctx) {
    return that.visit(ctx).js;
  },
  aggregate: function (acc, val) {
    return acc + val;
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
  convertType: function (type) {
    return typeKept ? "/*<" + type + ">*/ " : "";
  },
  biOp: function (opConvertTo) {
    return function (ctx) {
      return utils.wrapJS(utils.visitAndUnwrapJS(this, ctx.expression(0)) + " " + opConvertTo + " " + utils.visitAndUnwrapJS(this, ctx.expression(1)));
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
  }

};


var MQL4ToJsVisitor = function (keepType) {
  typeKept = keepType;
  externalParameters = [];
  mql4Visitor.MQL4Visitor.call(this);
  return this;
};


MQL4ToJsVisitor.prototype = Object.create(mql4Visitor.MQL4Visitor.prototype);


MQL4ToJsVisitor.prototype.visitFunctionDecl = function (ctx) {
  var that = this;
  var js = "var " + utils.convertType(ctx.type().getText()) + ctx.name.text + "= function(";


  var nbArguments = ctx.functionArgument().length;
  var optionalArguments = [];

  js += ctx.functionArgument().map(function (functionArgument) {
    var functionArgumentResult = that.visit(functionArgument);
    optionalArguments.push({name: functionArgumentResult.name, defaultValue: functionArgumentResult.defaultValue});
    return that.visit(functionArgument).js
  }).join(", ");
  js += "){\n";

  if (optionalArguments) {
    js += "\tswitch(arguments.length) {\n";
    optionalArguments.forEach(function (optionalArgument, idx) {
      js += "\t\tcase " + (nbArguments - optionalArguments.length + idx) + ": " + optionalArgument.name + "=" + optionalArgument.defaultValue + ";\n";
    });
    js += "}\n";
  }


  js += ctx.block().statement().map(function (statement) {
    return "\n\t" + that.visit(statement.getChild(0)).js
  }).join(";");
  js += "\n}\n\n";

  return utils.wrapJS(js)
};

MQL4ToJsVisitor.prototype.visitFunctionArgument = function (ctx) {
  var toReturn = utils.wrapJS(utils.convertType(ctx.type().getText()) + ctx.name.text);
  if (ctx.expression()) {
    toReturn.defaultValue = this.visit(ctx).js;
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
MQL4ToJsVisitor.prototype.visitAndExpression = utils.biOp("&&");
MQL4ToJsVisitor.prototype.visitOrExpression = utils.biOp("||");

// Ternary operation
MQL4ToJsVisitor.prototype.visitTernaryExpression = function (ctx) {
  return utils.wrapJS(this.visit(ctx.expression(0)).js + "?" + this.visit(ctx.expression(1)).js + ":" + this.visit(ctx.expression(2)).js)
};

// direct value operation
MQL4ToJsVisitor.prototype.visitStringExpression = utils.noConversion;
MQL4ToJsVisitor.prototype.visitBoolExpression = utils.noConversion;
MQL4ToJsVisitor.prototype.visitNumberExpression = utils.noConversion;
MQL4ToJsVisitor.prototype.visitIdentifierExpression = utils.noConversion;
MQL4ToJsVisitor.prototype.visitNullExpression = function () {
  return utils.wrapJS("null");
};

// function call
MQL4ToJsVisitor.prototype.visitFunctionCallExpression = function (ctx) {
  return utils.wrapJS(ctx.Identifier().getText() + "(" + this.visit(ctx.expression(0)).js + ")");
};

// indexing
MQL4ToJsVisitor.prototype.visitIndexingExpression = function (ctx) {
  return utils.wrapJS(this.visit(ctx.expression(0)).js + "[" + this.visit(ctx.expression(1)).js + "]");
};
// Others
MQL4ToJsVisitor.prototype.visitExpressionExpression = function (ctx) {
  return utils.wrapJS("(" + this.visit(ctx.expression(0)).js + ")");
};
MQL4ToJsVisitor.prototype.visitMultipleExpressions = utils.biOp(",");


MQL4ToJsVisitor.prototype.visitIndexes = function (ctx) {
  return this.visit(ctx.expression(0));
};

MQL4ToJsVisitor.prototype.visitIdentifierExpression = function (ctx) {
  return utils.wrapJS(ctx.Identifier().getText());
};

MQL4ToJsVisitor.prototype.visitDeclaration = function (ctx) {
  var name = ctx.name.text;
  var type = ctx.type().getText();
  var expression = (ctx.expression() && this.visit(ctx.expression()).js);


  var js = "var " + utils.convertType(type) + name;
  if (ctx.expression()) {
    js += "=" + this.visit(ctx.expression()).js;
  }

  return utils.wrapJS(js);
};


MQL4ToJsVisitor.prototype.visitRootDeclaration = function (ctx) {
  var external = (ctx.memoryClass && (ctx.memoryClass.text == "extern" || ctx.memoryClass.text == "input"));
  var name = ctx.name.text;
  var type = ctx.type().getText();
  var expression = (ctx.expression() && this.visit(ctx.expression()).js);

  if (external) {
    var externalParameter = {name: name, 'type': type};
    if (expression) {
      externalParameter["defaultValue"] = expression;
    }
    externalParameters.push(externalParameter)
  }


  var js = "var " + utils.convertType(type) + name;
  if (expression) {
    js += "=";
    if (external) {
      js += "$parameters." + name
    } else {
      js += expression;
    }
  }

  return utils.wrapJS(js + ";\n");
};


MQL4ToJsVisitor.prototype.visitProperty = function (ctx) {
  return utils.wrapJS("// mql4-to-js[PROPERTIES_NOT_SUPPORTED] : " + utils.originalText(ctx) + "\n");
};


MQL4ToJsVisitor.prototype.visitRoot = function (ctx) {
  var toReturn = utils.passThrough(this)(ctx);
  toReturn["externalParameters"] = externalParameters;
  return toReturn;
};


// -----------------------//
// TODO simple fix should be updated in a future version of antlr js (>= 4.5.2).
MQL4ToJsVisitor.prototype.visit = function (ctx) {
  var contextClassName = ctx.constructor.name;
  var funcName = "visit" + contextClassName.substring(0, contextClassName.length - 7 /* "context".length" */);
  return this[funcName](ctx);
};


exports.MQL4ToJsVisitor = MQL4ToJsVisitor;