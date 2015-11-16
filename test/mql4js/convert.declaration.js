describe('mql4js can convert', function () {
  describe('declaration', function () {

    describe('with no initialization', function () {
      it("and string value", function () {
        assertParseEquals("declaration", "string str", 'var str="";');
      });
      it("and boolean value", function () {
        assertParseEquals("declaration", "bool b", 'var b=false;');
      });
      it("and double value", function () {
        assertParseEquals("declaration", "double d", 'var d=0;');
      });
      it("and datetime value", function () {
        assertParseEquals("declaration", "datetime d", 'var d=new Date();');
      });


    });

    it('with initialization', function () {
      assertParseEquals("declaration", 'string str = "test"', 'var str="test";');
    });

    it('with extern', function () {
      var results = assertParseEquals("declaration", 'extern string str = "test"', 'var str=$parameters.str;');

      expect(results.visitor.externalParameters).toEqual([
        {
          "name": "str",
          "type": "string",
          "defaultValue": '"test"'
        }
      ]);
    });


    //...

  });
});
