describe('RandomWalkAdapter.js', function () {
  it("can create histo data for testing", function () {


    var randomWalkAdapter = new RandomWalkAdapter({
      creationTime: new Date(2015, 10, 20),
      nbBars: 3,
      nbTicksByPeriod: 4,
      seed: 3,
      returnsByTick: 0.5
    });

    expect(randomWalkAdapter.maxTime.format("YYYYMMDD")).toEqual("20151120");
    expect(randomWalkAdapter.startOfTime.format("YYYYMMDD")).toEqual("20151117");
    expect(randomWalkAdapter.ticks).toEqual([
      1.5, 0.75, 0.375, 0.1875, //  20151117
      0.0938, 0.0469, 0.0704, 0.0352, //  20151118
      0.0528, 0.0792, 0.0396, 0.0594 //  20151119
    ]);

    randomWalkAdapter.getBars("EUR/USD", "D1",
      new Date(2015, 10, 19),
      new Date(2015, 10, 20),
      function (data) {
        expect(data).toEqual(
          [{
            open: 0.0528,
            low: 0.0396,
            high: 0.0792,
            close: 0.0594,
            date: new Date(2015, 10, 19)
          }
          ]
        );
      });


    randomWalkAdapter.getBars("EUR/USD", "D1",
      new Date(2015, 10, 17),
      new Date(2015, 10, 19),
      function (data) {
        expect(simplifyTimeSeries(data)).toEqual([['20151117', 0.188], ['20151118', 0.035]]);
      });
  });




  it("can evolve in the time", function () {
    var randomWalkAdapter = new RandomWalkAdapter({
      creationTime: moment("2015-11-20"),
      nbBars: 1,
      nbTicksByPeriod: 2,
      returnsByTick: 0.5
    });
    expect(randomWalkAdapter.ticks).toEqual([
      0.5, 0.25 //  20151119
    ]);
    expect(randomWalkAdapter.maxTime.format("YYYYMMDD HH:mm")).toEqual("20151120 00:00");

    randomWalkAdapter.generateTicks(moment("2015-11-20"));

    expect(randomWalkAdapter.ticks).toEqual([
      0.5, 0.25//  20151119
    ]);
    expect(randomWalkAdapter.maxTime.format("YYYYMMDD HH:mm")).toEqual("20151120 00:00");


    randomWalkAdapter.generateTicks(moment("2015-11-21"));
    expect(randomWalkAdapter.ticks).toEqual([
      0.5, 0.25, //  20151119
      0.375, 0.1875 //  20151120
    ]);
    expect(randomWalkAdapter.maxTime.format("YYYYMMDD HH:mm")).toEqual("20151121 00:00");

    randomWalkAdapter.generateTicks(moment("2015-11-21 16:00"));
    expect(randomWalkAdapter.ticks).toEqual([
      0.5, 0.25, //  20151119
      0.375, 0.1875, //  20151120
      0.0938 // 20151121
    ]);
    expect(randomWalkAdapter.maxTime.format("YYYYMMDD HH:mm")).toEqual("20151121 12:00");

    randomWalkAdapter.getBars("EUR/USD", "D1",
      new Date(2015, 10, 19),
      new Date(2015, 10, 22),
      function (data) {
        expect(simplifyTimeSeries(data)).toEqual([['20151119', 0.25], ['20151120', 0.188]]);
      });
  });


});