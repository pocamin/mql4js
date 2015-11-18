// a mock for testing
var mockAdapter = {requests: []};

describe('agentExecutionEngine.js', function () {
  /*const*/
  var DATE_TO = new Date(2015, 10, 17, 9, 29, 30);

  var dateFromInterval = function (interval) {
    return [interval.start, interval.end];
  };
  it('getInterval supports minute\'s intervals', function () {
    expect(new AgentExecutionEngine().getInterval("M1")).toEqual({periodicity: 1, periodicityUnit: 'minute'});
    expect(new AgentExecutionEngine().getInterval("M30")).toEqual({periodicity: 30, periodicityUnit: 'minute'});
  });
  it('getInterval supports hour\'s intervals', function () {
    expect(new AgentExecutionEngine().getInterval("H1")).toEqual({periodicity: 1, periodicityUnit: 'hour'});
  });
  it('getInterval supports day\'s intervals', function () {
    expect(new AgentExecutionEngine().getInterval("D1")).toEqual({periodicity: 1, periodicityUnit: 'day'});
  });
  it('getIntervalAsTime supports date minute\'s intervals', function () {
    var aee = new AgentExecutionEngine();
    aee.maxHistoByRequest = 2; // reduce histoCache to have verifiable tests
    expect(dateFromInterval(aee.getIntervalAsTime("M1", DATE_TO)))
      .toEqual([new Date(2015, 10, 17, 9, 27), new Date(2015, 10, 17, 9, 28)]);
    expect(dateFromInterval(aee.getIntervalAsTime("M30", DATE_TO)))
      .toEqual([new Date(2015, 10, 17, 8, 30), new Date(2015, 10, 17, 9, 0)]);
    expect(dateFromInterval(aee.getIntervalAsTime("M15", DATE_TO)))
      .toEqual([new Date(2015, 10, 17, 9, 0), new Date(2015, 10, 17, 9, 15)]);
  });
  it('getIntervalAsTime supports date hour\'s intervals', function () {
    var aee = new AgentExecutionEngine();
    aee.maxHistoByRequest = 2; // reduce histoCache to have verifiable tests
    expect(dateFromInterval(aee.getIntervalAsTime("H1", DATE_TO)))
      .toEqual([new Date(2015, 10, 17, 7), new Date(2015, 10, 17, 8)]);
    expect(dateFromInterval(aee.getIntervalAsTime("H4", DATE_TO)))
      .toEqual([new Date(2015, 10, 17, 4), new Date(2015, 10, 17, 8)]);

  });

  it('getIntervalAsTime supports date day\'s intervals', function () {
    var aee = new AgentExecutionEngine();
    aee.maxHistoByRequest = 2; // reduce histoCache to have verifiable tests
    expect(dateFromInterval(aee.getIntervalAsTime("D1", DATE_TO)))
      .toEqual([new Date(2015, 10, 15), new Date(2015, 10, 16)]);
  });

  it('getHistoricalData with no adapter', function () {
    var aee = new AgentExecutionEngine();
    expect(function () {
      aee.getHistoricalData("EUR/CHF", "D1", new Date(2015, 10, 16))
    }).toThrow(new Error("There is no adapter defined"));
  });


  fdescribe('getHistoricalData with mock adapter', function () {
    var aee;
    var nop = function () {
    };
    var simplify = function (data) {
      return data.map(function (value) {
        return [moment(value.date).format("YYYYMMDD"), value.close]
      })
    };
    beforeEach(function () {
      aee = new AgentExecutionEngine(mockAdapter);
      aee.maxHistoByRequest = 2; // reduce histoCache to have verifiable tests
    });


    it('call without initial data for instrument', function () {
      aee.getHistoricalData("EUR/CHF", "D1", new Date(2015, 10, 16), function (data) {
        expect(simplify(data)).toEqual([["20151114", 8], ["20151115", 9]]);
      });
    });

    it('call with initial data for instrument but for different Period', function () {
      aee.getHistoricalData("EUR/CHF", "M1", new Date(2015, 10, 16), nop);
      aee.getHistoricalData("EUR/CHF", "D1", new Date(2015, 10, 16), function (data) {
        expect(simplify(data)).toEqual([["20151114", 8], ["20151115", 9]]);
      });
    });


    it('call with already cached data', function () {
      aee.getHistoricalData("EUR/CHF", "D1", new Date(2015, 10, 16), nop);
      mockAdapter.requests = [];
      aee.getHistoricalData("EUR/CHF", "D1", new Date(2015, 10, 16), function (data) {
        expect(simplify(data)).toEqual([["20151114", 8], ["20151115", 9]]);
      });
      expect(mockAdapter.requests).toEqual([]);
    });

    it('call with partially cached data (left)', function () {
      aee.getHistoricalData("EUR/CHF", "D1", new Date(2015, 10, 15), nop);
      mockAdapter.requests = [];
      aee.getHistoricalData("EUR/CHF", "D1", new Date(2015, 10, 16), function (data) {
        expect(simplify(data)).toEqual([["20151114", 8], ["20151115", 9]]);
      });
      expect(mockAdapter.requests).toEqual([{symbol: 'EUR/CHF', interval: 'D1', from: new Date(2015, 10, 15), to: new Date(2015, 10, 15)}]);
    });

    it('call with partially cached data (right)', function () {
      aee.getHistoricalData("EUR/CHF", "D1", new Date(2015, 10, 17), nop);
      mockAdapter.requests = [];
      aee.getHistoricalData("EUR/CHF", "D1", new Date(2015, 10, 16), function (data) {
        expect(simplify(data)).toEqual([["20151114", 8], ["20151115", 9]]);
      });
      expect(mockAdapter.requests).toEqual([{symbol: 'EUR/CHF', interval: 'D1', from: new Date(2015, 10, 14), to: new Date(2015, 10, 14)}]);
    });

    it('call with partially cached data (gaps)', function () {

      aee.getHistoricalData("EUR/CHF", "D1", new Date(2015, 10, 10), nop);
      aee.getHistoricalData("EUR/CHF", "D1", new Date(2015, 10, 14), nop);
      aee.getHistoricalData("EUR/CHF", "D1", new Date(2015, 10, 17), nop);
      aee.maxHistoByRequest = 7;
      mockAdapter.requests = [];
      aee.getHistoricalData("EUR/CHF", "D1", new Date(2015, 10, 16), function (data) {
        expect(simplify(data)).toEqual([
          ['20151109', 3],
          ['20151110', 4],
          ['20151111', 5],
          ['20151112', 6],
          ['20151113', 7],
          ['20151114', 8],
          ['20151115', 9]
        ]);
      });
      expect(mockAdapter.requests).toEqual([{
        symbol: 'EUR/CHF',
        interval: 'D1',
        from: new Date(2015, 10, 10),
        to: new Date(2015, 10, 14)
      }]);
    });
  });


});


mockAdapter.requestHistoricalData = function (symbol, intervalAsString, from, to, callBack) {
  this.requests.push({symbol: symbol, interval: intervalAsString, from: from, to: to});

  var interval = AgentExecutionEngine.prototype.getInterval(intervalAsString);
  var currentMoment = moment(from)
    .startOf(interval.periodicityUnit);
  var toEpoch = moment(to).unix();
  var data = [];

  while (currentMoment.unix() <= toEpoch) {
    var i = 0;
    if (interval.periodicityUnit == 'minute') {
      i = currentMoment.year() * 366 * 24 * 60 + currentMoment.dayOfYear() * 24 * 60 + currentMoment.hour() * 60 + currentMoment.minute();
      i = i / interval.periodicity % 100;
    } else if (interval.periodicityUnit == 'hour') {
      i = currentMoment.year() * 366 * 24 + currentMoment.dayOfYear() * 24 + currentMoment.hour();
      i = i / interval.periodicity % 100;
    } else if (interval.periodicityUnit == 'day') {
      i = currentMoment.year() * 366 + currentMoment.dayOfYear();
      i = i / interval.periodicity % 100;
    }

    data.push({
      date: moment(currentMoment).toDate(),
      close: i,
      high: i,
      low: i,
      open: i
    });
    currentMoment.add(interval.periodicity, interval.periodicityUnit);
  }
  callBack(data);
};
