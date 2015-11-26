describe('MQL4.js supports', function () {
  describe('date\'s', function () {
    var mql4 = new MQL4();
    it('date function', function () {
      expect(mql4.date('2010.01.01')).toEqual(new Date(2010, 0, 1));
      expect(mql4.date('01.01.2010')).toEqual(new Date(2010, 0, 1));
      expect(mql4.date('2010.01.01 11')).toEqual(new Date(2010, 0, 1, 11));
      expect(mql4.date('2010.01.01 11:10')).toEqual(new Date(2010, 0, 1, 11, 10));
      expect(mql4.date('2010.01.01 11:10:13')).toEqual(new Date(2010, 0, 1, 11, 10, 13));
      expect(mql4.date('2010.01.01 11:10:13:14')).toEqual(new Date(2010, 0, 1, 11, 10, 13, 14));
    });

    it('timeDayOfYear function', function () {
      expect(mql4.timeDayOfYear(new Date(2010, 11, 31))).toBe(365);
      expect(mql4.timeDayOfYear(new Date(2010, 0, 2))).toBe(2);
    });

    it('timeToStruct function', function () {
      expect(mql4.timeToStruct(new Date(2010, 11, 31, 20, 10, 1))).toEqual(
        {year: 2010, mon: 12, day: 31, hour: 20, min: 10, sec: 1, day_of_week: 5, day_of_year: 365}
      );
    });

    it('structToTime function', function () {
      expect(mql4.structToTime({year: 2010, mon: 12, day: 31, hour: 20, min: 10, sec: 1, day_of_week: 5, day_of_year: 365})).toEqual(
        new Date(2010, 11, 31, 20, 10, 1))
      ;
    });

    it('timeCurrent function without arguments', function () {
      mql4._updateLastTickDate(new Date(2010, 11, 31, 20, 10, 1));
      expect(mql4.timeCurrent()).toEqual(new Date(2010, 11, 31, 20, 10, 1));
    });

    it('timeCurrent function with argument', function () {

      mql4._updateLastTickDate(new Date(2010, 11, 31, 20, 10, 1));
      var dt = {};
      expect(mql4.timeCurrent(dt)).toEqual(new Date(2010, 11, 31, 20, 10, 1));
      expect(dt).toEqual({year: 2010, mon: 12, day: 31, hour: 20, min: 10, sec: 1, day_of_week: 5, day_of_year: 365});
    });

    it('timeGMT function', function () {
      expect(new Date() - mql4.timeGMT()).toBeLessThan(24 * 3600 * 1000);
    });


    it('timeGMTOffset function', function () {
      expect(mql4.timeGMTOffset()).toBeLessThan(24 * 3600);
    });

    it('timeDaylightSavings function', function () {
      expect(mql4.timeGMTOffset()).toBeLessThan(3600);
    });


  });
});
