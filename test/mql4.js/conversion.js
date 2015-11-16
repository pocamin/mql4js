describe('MQL4.js supports', function () {
  describe('conversion\'s', function () {
    var mql4 = new MQL4();
    it('charArrayToString function', function () {
      expect(mql4.charArrayToString([84, 101, 115, 116])).toBe("Test");
      expect(mql4.charArrayToString([84, 101, 115, 116], 1)).toBe("est");
      expect(mql4.charArrayToString([84, 101, 115, 116], 1, 2)).toBe("es");
      expect(mql4.charArrayToString([84, 101, 115, 116], 0, 2)).toBe("Te");
    });

    it('doubleToString function', function () {
      expect(mql4.doubleToString(1234.5678)).toBe("1234.56780000");
      expect(mql4.doubleToString(1234.5678, 1)).toBe("1234.6");
      expect(mql4.doubleToString(1234.5678, -1)).toBe("1.2e+3");
      expect(mql4.doubleToString(0.005, -1)).toBe("5.0e-3");
    });

    it('integerToString', function () {
      expect(mql4.integerToString(1000)).toBe("1000");
      expect(mql4.integerToString(1000), 1).toBe("1000");
      expect(mql4.integerToString(1000, 5)).toBe(" 1000");
      expect(mql4.integerToString(1000, 6, ">")).toBe(">>1000");
      expect(mql4.integerToString(1000, 6, 84)).toBe("TT1000");
    });

    it('shortToString', function () {
      expect(mql4.shortToString(12371)).toBe("こ");
    });

    it('shortToString', function () {
      expect(mql4.shortArrayToString([12371, 12435, 12395, 12385, 12399])).toBe("こんにちは");
      expect(mql4.shortArrayToString([12371, 12435, 12395, 12385, 12399], 1)).toBe("んにちは");
      expect(mql4.shortArrayToString([12371, 12435, 12395, 12385, 12399], 1, 2)).toBe("んに");
      expect(mql4.shortArrayToString([12371, 12435, 12395, 12385, 12399], 0, 2)).toBe("こん");
    });

    it("stringToCharArray", function () {
      expect(mql4.stringToCharArray('Test')).toEqual([84, 101, 115, 116]);
      expect(mql4.stringToCharArray('Test', 1)).toEqual([101, 115, 116]);
      expect(mql4.stringToCharArray('Test', 1, 2)).toEqual([101, 115]);
      expect(mql4.stringToCharArray('Test', 0, 2)).toEqual([84, 101]);
    });


    it("stringToShortArray", function () {
      expect(mql4.stringToShortArray("こんにちは")).toEqual([12371, 12435, 12395, 12385, 12399]);
      expect(mql4.stringToShortArray("こんにちは", 1)).toEqual([12435, 12395, 12385, 12399]);
      expect(mql4.stringToShortArray("こんにちは", 1, 2)).toEqual([12435, 12395]);
      expect(mql4.stringToShortArray("こんにちは", 0, 2)).toEqual([12371, 12435]);
    });

  });
});
