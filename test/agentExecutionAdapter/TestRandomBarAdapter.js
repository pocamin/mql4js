describe('RandomBarAdapter', function () {
  it("can create histo data for testing", function () {
    var rba = new RandomBarAdapter("EUR_CHF", "D1", new Date(2010, 0, 1));
    rba._maxSize = 2;
    rba.init();
    expect(rba.bars).toEqual([
      {open: 0.996, low: 0.994, high: 0.996, close: 0.995, volume: 43351, date: new Date(2009, 11, 30)},
      {open: 0.994, low: 0.994, high: 0.999, close: 0.999, volume: 68838, date: new Date(2009, 11, 31)}
    ]);
  });

  it("can update on tick", function () {
    var rba = new RandomBarAdapter("EUR_CHF", "D1", new Date(2010, 0, 1));
    rba._maxSize = 2;
    rba.init();
    expect(rba.bars.length).toBe(2); // @see can create histo data for testing
    rba.onTick({bid: 0.992, ask: 0.994, volume: 1000, date: new Date(2010, 0, 1, 15, 0)});
    rba.onTick({bid: 0.99, ask: 0.992, volume: 500, date: new Date(2010, 0, 1, 16, 0)});
    rba.onTick({bid: 1, ask: 1.002, volume: 500, date: new Date(2010, 0, 1, 17, 0)});
    rba.onTick({bid: 0.994, ask: 0.996, volume: 500, date: new Date(2010, 0, 1, 18, 0)});
    expect(rba.bars.length).toBe(2);
    rba.onTick({bid: 0.994, ask: 0.996, volume: 500, date: new Date(2010, 0, 2, 8, 0)});
    expect(rba.bars.length).toBe(2);
    expect(rba.bars).toEqual([
        {open: 0.994, low: 0.994, high: 0.999, close: 0.999, volume: 68838, date: new Date(2009, 11, 31)},
        {open: 0.993, low: 0.991, high: 1.001, close: 0.995, volume: 2500, date: new Date(2010, 0, 1)}
      ]
    );
    rba.onTick({bid: 0.994, ask: 0.996, volume: 500, date: new Date(2010, 0, 3, 8, 0)});
    expect(rba.bars.length).toBe(2);
    expect(rba.bars).toEqual([
        {open: 0.993, low: 0.991, high: 1.001, close: 0.995, volume: 2500, date: new Date(2010, 0, 1)},
        {open: 0.995, low: 0.995, high: 0.995, close: 0.995, volume: 500, date: new Date(2010, 0, 2)}
      ]
    );


  });


});