// a mock for testing
var mockAdapter = {};

describe('agentExecutionEngine.js', function () {
  /*const*/
  var DATE_TO = new Date(2015, 10, 17, 9, 29, 30);

  var dateFromInterval = function(interval){
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
      .toEqual([new Date(2015, 10, 17, 9, 27),new Date(2015, 10, 17, 9, 28)]);
    expect(dateFromInterval(aee.getIntervalAsTime("M30", DATE_TO)))
      .toEqual([new Date(2015, 10, 17, 8, 30),new Date(2015, 10, 17, 9, 0)]);
    expect(dateFromInterval(aee.getIntervalAsTime("M15", DATE_TO)))
      .toEqual([new Date(2015, 10, 17, 9, 0),new Date(2015, 10, 17, 9, 15)]);
  });
  it('getIntervalAsTime supports date hour\'s intervals', function () {
    var aee = new AgentExecutionEngine();
    aee.maxHistoByRequest = 2; // reduce histoCache to have verifiable tests
    expect(dateFromInterval(aee.getIntervalAsTime("H1", DATE_TO)))
      .toEqual([new Date(2015, 10, 17, 7),new Date(2015, 10, 17, 8)]);
    expect(dateFromInterval(aee.getIntervalAsTime("H4", DATE_TO)))
      .toEqual([new Date(2015, 10, 17, 4),new Date(2015, 10, 17, 8)]);

  });

  it('getIntervalAsTime supports date day\'s intervals', function () {
    var aee = new AgentExecutionEngine();
    aee.maxHistoByRequest = 2; // reduce histoCache to have verifiable tests
    expect(dateFromInterval(aee.getIntervalAsTime("D1", DATE_TO)))
      .toEqual([new Date(2015, 10, 15),new Date(2015, 10, 16)]);
  });

  it('getHistoricalData with no adapter', function () {
    var aee = new AgentExecutionEngine();
    expect(function () {
      aee.getHistoricalData("EUR/CHF", "D1", new Date(2015, 10, 16))
    }).toThrow(new Error("There is no adapter defined"));
  });


  it('getHistoricalData with mock adapter', function () {
    var aee = new AgentExecutionEngine(mockAdapter);
    aee.maxHistoByRequest = 2; // reduce histoCache to have verifiable tests
    aee.getHistoricalData("EUR/CHF", "D1", new Date(2015, 10, 16), function (data) {
      expect(data).toEqual([
        {date: new Date(2015, 10, 14), close: 8, high: 8, open: 8, low: 8},
        {date: new Date(2015, 10, 15), close: 9, high: 9, open: 9, low: 9}
      ]);
    });
    // overlap
    aee.getHistoricalData("EUR/CHF", "D1", new Date(2015, 10, 17), function (data) {
      expect(data).toEqual([
        {date: new Date(2015, 10, 15), close: 9, high: 9, open: 9, low: 9},
        {date: new Date(2015, 10, 16), close: 10, high: 10, open: 10, low: 10}
      ]);
    });
    // same value
    aee.getHistoricalData("EUR/CHF", "D1", new Date(2015, 10, 17), function (data) {
      expect(data).toEqual([
        {date: new Date(2015, 10, 15), close: 9, high: 9, open: 9, low: 9},
        {date: new Date(2015, 10, 16), close: 10, high: 10, open: 10, low: 10}
      ]);
    });
    // gap
    aee.getHistoricalData("EUR/CHF", "D1", new Date(2015, 10, 22), function (data) {
      expect(data).toEqual([
        {date: new Date(2015, 10, 20), close: 14, high: 14, open: 14, low: 14},
        {date: new Date(2015, 10, 21), close: 15, high: 15, open: 15, low: 15}
      ]);
    });
    // return in the past
    aee.getHistoricalData("EUR/CHF", "D1", new Date(2015, 10, 22), function (data) {
      expect(data).toEqual([
        {date: new Date(2015, 10, 20), close: 14, high: 14, open: 14, low: 14},
        {date: new Date(2015, 10, 21), close: 15, high: 15, open: 15, low: 15}
      ]);
    });

  });


});


mockAdapter.requestHistoricalData = function (symbol, intervalAsString, from, to, callBack) {
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
