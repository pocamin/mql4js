describe('MQL4.js supports', function () {
  var mql4 = new MQL4();
  it('defineStruct and newStruct function', function () {
    mql4.defineStruct("MyStruct", "bid", "ask");
    expect(mql4.newStruct("MyStruct", 5, 6).bid).toBe(5);
  });
});
