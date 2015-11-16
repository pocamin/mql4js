describe('mql4js can convert', function () {
  describe('if statements', function () {

    it('with statement', function () {
      assertParseEquals(
        "operation",
        "if(t) return 3;",
        "if (t) \n return 3;" // js beautifier doesn't support this syntax
      );
    });

    it('with block', function () {
      assertParseEquals(
        "operation",
        "if(t){return 3;}",
        "if(t){return 3;}"
      );
    });

    it('with else statement', function () {
      assertParseEquals(
        "operation",
        "if(t){return 3;}else if(u){return 2;}",
        "if(t){return 3;}else if(u){return 2;}"
      );
    });

    it('with else block', function () {
      assertParseEquals(
        "operation",
        "if(t){return 3;}else{return 2;}",
        "if(t){return 3;}else{return 2;}"
      );
    });
  });
});
