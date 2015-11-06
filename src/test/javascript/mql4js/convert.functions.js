describe('mql4js can convert', function () {
  describe('functions', function () {

    it('with no arguments', function () {
      assertParseEquals("functionDecl",
        "void f(){ return; }",
        "var f = function() {return; }"
      );
    });

    it('with no default arguments', function () {
      assertParseEquals("functionDecl",
        "int f(int a){ return a; }",
        "var f = function(a) {return a;}"
      );
    });

    it('with default arguments', function () {
      assertParseEquals("functionDecl",
        "int f(int a = 5){ return (a); }",
        "var f = function(a) {" +
        "switch (arguments.length) {  case 0: a = 5; }" +
        "return a;" +
        "}"
      );
    });

  });
});
