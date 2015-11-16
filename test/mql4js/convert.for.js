describe('mql4js can convert', function () {
  describe('for statements', function () {

    it('with no declaration', function () {
      assertParseEquals(
        "operation",
        "for(x=1;x<=10; x++) Print(x);",
        "for (x = 1; x <= 10; x++) {console.log(x);}"
      );
    });

    it('with declaration', function () {
      assertParseEquals(
        "operation",
        "for(int x=1;x<=10; x++) Print(x);",
        "for (var x = 1; x <= 10; x++) {console.log(x);}"
      );
    });
    it('with no all specified', function () {
      assertParseEquals(
        "operation",
        "for(;true;) Print(x);",
        "for (;true;) {console.log(x);}"
      );
    });

  });
});
