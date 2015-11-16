describe('MQL4.js supports', function () {
  describe('conversion\'s', function () {
    var mql4 = new MQL4();
    it('charArrayToString function', function () {
      expect(mql4.charArrayToString([84, 101, 115, 116])).toBe("Test");
      expect(mql4.charArrayToString([84, 101, 115, 116], 1)).toBe("est");
      expect(mql4.charArrayToString([84, 101, 115, 116], 1, 2)).toBe("es");
      expect(mql4.charArrayToString([84, 101, 115, 116], 0, 2)).toBe("Te");
    });


  });
});
