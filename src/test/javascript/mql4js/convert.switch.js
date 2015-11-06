describe('mql4js can convert', function () {
  it('switch statements', function () {
    assertParseEquals(
      "operation",
      'switch(i){case 1:res=i;break;default:res="default";}',
      'switch(i){case 1:res=i;break;default:res="default";}'
    );
  });
});
