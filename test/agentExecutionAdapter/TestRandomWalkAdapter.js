describe('RandomWalkAdapter.js', function () {
  it("can create histo data for testing", function () {


    var randomWalkAdapter = new RandomWalkAdapter(function () {
      return new Date(2015, 10, 18, 15, 15, 15);
    }, 50);

    randomWalkAdapter.requestHistoricalData("EUR/USD", "M1",
      new Date(2015, 10, 18, 15, 12),
      new Date(2015, 10, 18, 15, 14),
      function (data) {
        expect(simplifyTimeSeries(data)).toEqual([['20151118', 0.97], ['20151118', 0.969], ['20151118', 0.972]]);
        expect(data.length).toEqual(3);
      });
  });

});