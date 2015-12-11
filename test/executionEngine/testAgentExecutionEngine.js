// a mock for testing
var mockAdapter = {requests: []};

describe('agentExecutionEngine.js', function () {
  /*const*/
  var DATE_TO = new Date(2015, 10, 17, 9, 29, 30);

  var dateFromInterval = function (interval) {
    return [interval.start, interval.end];
  };



  it('getInterval supports minute\'s intervals', function () {
    expect(getInterval("M1").inMillis()).toEqual(60000);
    expect(getInterval("M30").inMillis()).toEqual(1800000);
  });
  it('getInterval supports hour\'s intervals', function () {
    expect(getInterval("H1").inMillis()).toEqual(3600000);
  });
  it('getInterval supports day\'s intervals', function () {
    expect(getInterval("D1").inMillis()).toEqual(86400000);
  });


});
