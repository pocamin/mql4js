// a mock for testing
var mockAdapter = {requests: []};

describe('agentExecutionEngine.js', function () {
  /*const*/
  var DATE_TO = new Date(2015, 10, 17, 9, 29, 30);

  var dateFromInterval = function (interval) {
    return [interval.start, interval.end];
  };

  function expectInterval(interval) {
    return expect(interval.periodicity + " " + interval.periodicityUnit);
  }

  it('getInterval supports minute\'s intervals', function () {
    expectInterval(getInterval("M1")).toEqual('1 minute');
    expectInterval(getInterval("M30")).toEqual('30 minute');
  });
  it('getInterval supports hour\'s intervals', function () {
    expectInterval(getInterval("H1")).toEqual('1 hour');
  });
  it('getInterval supports day\'s intervals', function () {
    expectInterval(getInterval("D1")).toEqual('1 day');
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


});
