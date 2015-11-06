describe("mql4js doesn't support", function () {
  it('#property preprocessor', function () {
    assertParseEquals(
      "notSupportedPreprocessor",
      '#property identifier value',
      '// NOT SUPPORTED\n//#property identifier value'
    );
  });

  it('#ifdef preprocessor', function () {
    assertParseEquals(
      "notSupportedPreprocessor",
      '#ifdef identifier',
      '// NOT SUPPORTED\n//#ifdef identifier'
    );
  });

  it('#ifdef preprocessor', function () {
    assertParseEquals(
      "notSupportedPreprocessor",
      '#ifdef identifier',
      '// NOT SUPPORTED\n//#ifdef identifier'
    );
  });

  it('#ifndef preprocessor', function () {
    assertParseEquals(
      "notSupportedPreprocessor",
      '#ifndef identifier',
      '// NOT SUPPORTED\n//#ifndef identifier'
    );
  });

  it('#endif preprocessor', function () {
    assertParseEquals(
      "notSupportedPreprocessor",
      '#endif',
      '// NOT SUPPORTED\n//#endif'
    );
  });

  it('#else preprocessor', function () {
    assertParseEquals(
      "notSupportedPreprocessor",
      '#else',
      '// NOT SUPPORTED\n//#else'
    );
  });

  it('#import preprocessor', function () {
    assertParseEquals(
      // Mql4
      "notSupportedPreprocessor",
      '#import "file_name"\n' +
      'func1 define;\n' +
      'func2 define;\n' +
      '#import',
      // js
      '// NOT SUPPORTED\n' +
      '//#import "file_name"\n' +
      '//func1 define;\n' +
      '//func2 define;\n' +
      '//#import'
    );
  });


});
