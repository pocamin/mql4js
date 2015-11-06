describe('mql4js can convert', function () {
  it('full code', function () {
    assertParseEquals(
      "root",
      'extern string str="test"; int main(){Print(str);}',
      "var $externalParameters = [{" +
      "  str: {" +
      "    'type': 'string'," +
      "    defaultValue: \"test\"" +
      "  }" +
      "}];" +
      "var $parameters = {" +
      "  str: \"test\"" +
      "};\n\n" +
      "var str = $parameters.str;" +
      "var main = function() {" +
      "  console.log(str);" +
      "}"
      , {
        converter: function (js) {
          return js.replace(/\/\/[^\n]*\n/g, '')
        }

      }
    );
  });
});

