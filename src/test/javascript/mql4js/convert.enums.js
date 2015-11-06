describe('mql4js can convert', function () {
  describe('enums', function () {

    it('with index set', function () {
      assertParseEquals(
        "enumDef",
        "enum e{val1=1, val2=2}",
        "var e={val1:1,val2:2}"
      );
    });

    it('with no index set', function () {
      assertParseEquals(
        "enumDef",
        "enum e{val1, val2}",
        "var e = {val1: /*auto-gen*/ 1,val2: /*auto-gen*/ 2}"
      );
    });

    it('partialIndexSet', function () {
      assertParseEquals(
        "enumDef",
        "enum e{val1=1, val2}",
        "var e = {val1: 1,val2: /*auto-gen*/ 2}"
      );
    });
  });
});
