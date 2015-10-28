var mql4Listener = require('./antlr4-gen/MQL4Listener');
var externalParameters;
var generatedJs;
var partialResults;

var MQL4ToJsListener = function () {
  externalParameters = [];
  partialResults = [];
  generatedJs = "";
  mql4Listener.MQL4Listener.call(this);
  return this;
};


MQL4ToJsListener.prototype = Object.create(mql4Listener.MQL4Listener.prototype);


function createPartialResult() {
  var partialResult = {generatedJs: ""};
  partialResults.push(partialResult);
  return partialResult;
}
MQL4ToJsListener.prototype.exitFunctionArguments = function (ctx) {
  var partialResult = createPartialResult();

  partialResult.generatedJs = _(ctx.functionArgument()).map(function (arg) {
    return "/*" + arg.type().getText() + "*/ " + arg.name.text
  }).reduce(function (acc, s) {
    return acc + ", " + s
  })


};


MQL4ToJsListener.prototype.exitFunctionDecl = function (ctx) {
  var name = ctx.name.text;
  var args = ctx.functionArguments() && partialResults.pop();


  generatedJs += "var /*" + ctx.type().getText() + "*/ " + ctx.name.text + " = function(";

  if (args) {
    generatedJs += args.generatedJs;
  }

  //generatedJs += partialResults.pop()

  generatedJs += "){"

  generatedJs += "}\n"
};


MQL4ToJsListener.prototype.enterDeclaration = function (ctx) {
  var external = (ctx.memoryClass && (ctx.memoryClass.text == "extern" || ctx.memoryClass.text == "input"));
  var name = ctx.name.text;
  var type = ctx.type().getText();
  var expression = (ctx.expression() && ctx.expression().getText());

  if (external) {
    var externalParameter = {name: name, 'type': type};
    if (expression) {
      externalParameter["defaultValue"] = expression;
    }
    externalParameters.push(externalParameter)
  }

  generatedJs += "var /*" + type + "*/ " + name;
  if (expression) {
    generatedJs += "=";
    if (external) {
      generatedJs += "$parameters." + name
    } else {
      generatedJs += expression;
    }

  }

  generatedJs += ";\n";
};


MQL4ToJsListener.prototype.getResults = function () {
  return {externalParameters: externalParameters, js: generatedJs};
};

exports.MQL4ToJsListener = MQL4ToJsListener;