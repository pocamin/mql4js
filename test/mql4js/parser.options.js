describe('mql4js accept options', function () {
  it('keep comments', function () {
    assertParseEquals(
      "declaration",
      '/*test*/int a',
      //js
      '/*test*/\n' +
      'var a = 0;'
      , {keepComments: true});
  });

  it('keep code as comment', function () {
    assertParseEquals(
      "declaration",
      'int a',
      //js
      '//int a\nvar a = 0;'
      , {keepOriginal: true});
  });

  it('keep type', function () {
    assertParseEquals(
      "declaration",
      'int a',
      //js
      'var /*<int>*/ a = 0;'
      , {keepType: true});
  });


});
