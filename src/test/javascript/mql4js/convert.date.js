describe('mql4js can convert', function () {
  it('date\'s declarations', function () {
    assertParseEquals(
      "declaration",
      "datetime d=D'2008.03.01'",
      "var d = mql4.date('2008.03.01');"
    );
  });
});
