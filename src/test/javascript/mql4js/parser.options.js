describe('mql4js accept options', function () {
  fit('keep comments', function () {
    assertParseEquals(
      "declaration",
      '/*test*/int a;',
      //js
      '/*test*/\n' +
      'var a = 0;'
      , {keepComments: true});
  });

  fit('keep code as comment', function () {
    assertParseEquals(
      "declaration",
      '/*test*/int a;',
      //js
      '/*test*/\n' +
      'var a = 0;'
      , {keepComments: true});
  });
});
