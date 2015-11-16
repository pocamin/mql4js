describe('mql4js can convert', function () {
  it('do... while statements', function () {
    assertParseEquals(
      "operation",
      'do{k++;}while(k<n)',
      'do{k++;}while(k<n)'
    );
  });
});
