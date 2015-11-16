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

    it("stringToTime", function () {
      expect(mql4.stringToTime("2010.01.02 15:30")).toEqual(new Date(2010, 2, 2, 15, 30));
    });

    it("timeToString", function () {
      expect(mql4.timeToString(new Date(2010, 2, 2, 1, 3,4))).toEqual("2010.03.02 01:03");
      expect(mql4.timeToString(new Date(2010, 2, 2, 1, 3,4), MQL4.TIME_DATE)).toEqual("2010.03.02");
      expect(mql4.timeToString(new Date(2010, 2, 2, 1, 3,4), MQL4.TIME_MINUTES)).toEqual("01:03");
      expect(mql4.timeToString(new Date(2010, 2, 2, 1, 3,4), MQL4.TIME_SECONDS)).toEqual("01:03:04");
      expect(mql4.timeToString(new Date(2010, 2, 2, 1, 3,4), MQL4.TIME_DATE | MQL4.TIME_SECONDS)).toEqual("2010.03.02 01:03:04");
    });

    it("stringFormat", function () {
      expect(mql4.stringFormat("%d %.2e %+.2f%%", 10.5, 11.5, 789.4) ).toEqual("Polly wants a cracker");

    });


  });
});
