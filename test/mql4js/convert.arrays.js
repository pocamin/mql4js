describe('mql4js can convert', function(){
  describe('arrays', function () {
    describe('declaration', function () {
      it('for static arrays with initialisation data', function(){
        assertParseEquals(
          "declaration",
          "int test[3] = { 0, 1, 2 }",
          "var test=mql4.newArray({dimensions:[3],  dynamic : false, data:[0, 1, 2]});"
        );
      });
      it('for static arrays with no initialisation data', function(){
        assertParseEquals(
          "declaration",
          "int test[3][4]",
          "var test=mql4.newArray({dimensions:[3,4], dynamic : false, defaultValue:0});"
        );
      });
      it('for dynamic arrays with initialisation data', function(){
        assertParseEquals(
          "declaration",
          "int test[][3] = { 0, 1, 2 }",
          "var test=mql4.newArray({dimensions:[3],  dynamic : true, data:[0, 1, 2]});"
        );
      });
      it('for dynamic arrays with no initialisation data', function(){
        assertParseEquals(
          "declaration",
          "int test[][3][4]",
          "var test=mql4.newArray({dimensions:[3,4], dynamic : true, defaultValue:0});"
        );
      });
    });

    describe('expression', function(){
      it('with comma format', function(){
        assertParseEquals(
          "expression",
          "array[1,2]",
          "array[1][2]"
        );
      });

      it('with [] format', function(){
        assertParseEquals(
          "expression",
          "array[1][2]",
          "array[1][2]"
        );
      });

      it('with inner expression', function(){
        assertParseEquals(
          "expression",
          "array[array2[4,2]]",
          "array[array2[4][2]]"
        );
      });
    });
  });
});
