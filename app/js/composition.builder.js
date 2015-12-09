// TODO Not clean Code
function toJavaScript(scriptStructure) {


  var script = "var orderId = -1;\n";

  function createJSFunction(functionName, content) {
    var fct = "var " + functionName + " = function(" + Array.prototype.slice.call(arguments, 2).join(", ") + "){\n";
    fct += (_.isFunction(content)) ? content() : content;
    fct += "};\n";
    return fct;
  }

  function orderIfBlock(block, content) {
    return "  if (" + block.expressions.map(function (expression) {
        return "(" + expression + ")"
      }).join(" || ") + "){\n" +
      "    " + ((_.isFunction(content)) ? content() : content) + "\n" +
      "  }\n";
  }

  function openOrderFunctionContent() {
    return scriptStructure.openBlocks.map(function (block) {
      return orderIfBlock(block, function () {



        return "//todo";
      });
    }).join("")
  }

  function closeOrderFunctionContent() {
    return scriptStructure.closeBlocks.map(function (block) {
      return orderIfBlock(block, function () {
        return "//todo";
      });
    }).join("")
  }


  script += createJSFunction("init", function () {
    return _.values(scriptStructure.allIndicators).map(function (constructor) {
      return "\t" + constructor + "\n"
    }).join("");
  });

  script += createJSFunction("onTick", "\
  switch (env.marketAdapter.orderStatus(orderId)) {\n\
     case ORDER_STATUS.UNKNOWN :\n\
     case ORDER_STATUS.CLOSED :\n\
        openOrder(tick);\n\
        break;\n\
     Case ORDER_STATUS.OPENED :\n\
        closeOrder(tick);\n\
        break;\n\
  }\n", "tick");


  script += createJSFunction("onOpenOrder", openOrderFunctionContent(), "tick");
  script += createJSFunction("onOpenOrder", closeOrderFunctionContent(), "tick");

  return script;
}