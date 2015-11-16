describe('mql4js can convert', function () {
  it('while statements', function () {
    assertParseEquals(
      "operation",
      'while(k<n){k++;}',
      'while(k<n){k++;}'
    );
  });
});
