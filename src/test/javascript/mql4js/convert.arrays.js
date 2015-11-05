var antlr4 = require('antlr4/index');
var mql4Lexer = require('./antlr4-gen/MQL4Lexer');
var mql4Parser = require('./antlr4-gen/MQL4Parser');
var mql4ToJsVisitor = require('./MQL4ToJsVisitor.js');

// parse
var mqlParser = function () {
  var parse = function (input, keepType, keepOriginal, keepComment) {
    var chars = new antlr4.InputStream(input);
    var lexer = new mql4Lexer.MQL4Lexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new mql4Parser.MQL4Parser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.root();
    var result = new mql4ToJsVisitor.MQL4ToJsVisitor(keepType, keepOriginal, tokens, keepComment).visit(tree);
    return {parser: parser, tree: tree, mql4ToJs: result};
  };

  return {parse: parse}
}();


var wrapInMql4function = function (mql4String) {
  return "int test(){" + mql4String + "}"
};

describe('mql4js', function () {
  describe('static arrays', function () {
    it('are correctly compiled', function () {
      var result = mqlParser.parse(wrapInMql4function("int Mas_i[3][4] = { 0, 1, 2, 3,   10, 11, 12, 13,   20, 21, 22, 23 };"));
      expect(result.mql4ToJs.js).toBe("test");
    });
  });
});
