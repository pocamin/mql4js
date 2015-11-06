describe('mql4js can convert', function () {
  describe('struct', function () {

    it('type declaration', function () {
      assertParseEquals("struct",
        "struct S{double d1; double d2; }",
        "mql4.defineStruct('S', 'd1', 'd2');"
      );
    });

    it('static initialization', function () {
      assertParseEquals("declaration",
        "S my_set={0.0,5}",
        "var my_set = mql4.newStruct('S', 0.0, 5);"
      );
    });


  });
});
