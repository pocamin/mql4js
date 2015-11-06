describe("mql4js can convert", function () {
  it('#define preprocessor', function () {
    assertParseEquals(
      "define",
      '#define test 1',
      'var test = 1;'
    );
  });

  it('#include "file" preprocessor', function () {
    assertParseEquals(
      "include",
      '#include "file.txt"',
      'mql4.include("file.txt.js");'
    );
  });

  it('#include <file> preprocessor', function () {
    assertParseEquals(
      "include",
      '#include <file.txt>',
      'mql4.include("file.txt.js");'
    );
  });

});
