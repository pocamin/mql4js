var antlr4 = require('antlr4/index');
var mql4Lexer = require('./js/MQL4Lexer');
var mql4Parser = require('./js/MQL4Parser');

// parse
var mqlParser = function () {
  var parse = function (input, rootType, keepType, keepOriginal, keepComment) {
    var chars = new antlr4.InputStream(input);
    var lexer = new mql4Lexer.MQL4Lexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new mql4Parser.MQL4Parser(tokens);
    parser.buildParseTrees = true;
    var tree = parser[rootType]();
    var visitor = new MQL4ToJsVisitor(keepType, keepOriginal, tokens, keepComment);
    var results = visitor.visit(tree);
    results.visitor = visitor;
    return results;
  };

  return {parse: parse}
}();


var assertParseEquals = function (rootType, mql4, js, options) {
  options = options || {};
  var results = mqlParser.parse(mql4, rootType, options.keepType, options.keepOriginal, options.keepComments);
  if (options && options.converter) {
    results.js = options.converter(results.js);
  }
  expect(js_beautify(results.js)).toBe(js_beautify(js));
  return results;
};