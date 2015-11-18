describe("commonAgent.js", function () {
  it("getPriceFromHistoData works with close prices", function () {
    expect(getPriceFromHistoData([{close: 1}, {close: 2}], APPLIED_PRICE.PRICE_CLOSE)).toEqual([1, 2]);
  });
  it("getPriceFromHistoData works with open prices", function () {
    expect(getPriceFromHistoData([{open: 1}, {open: 2}], APPLIED_PRICE.PRICE_OPEN)).toEqual([1, 2]);
  });
  it("getPriceFromHistoData works with high prices", function () {
    expect(getPriceFromHistoData([{high: 1}, {high: 2}], APPLIED_PRICE.PRICE_HIGH)).toEqual([1, 2]);
  });
  it("getPriceFromHistoData works with low prices", function () {
    expect(getPriceFromHistoData([{low: 1}, {low: 2}], APPLIED_PRICE.PRICE_LOW)).toEqual([1, 2]);
  });

  it("getPriceFromHistoData works with median prices", function () {
    expect(getPriceFromHistoData([{low: 1, high: 3}, {low: 2, high: 7}], APPLIED_PRICE.PRICE_MEDIAN))
      .toEqual([2, 4.5]);
  });

  it("getPriceFromHistoData works with median prices", function () {
    expect(getPriceFromHistoData([{low: 2, high: 5, close: 2}], APPLIED_PRICE.PRICE_TYPICAL))
      .toEqual([3]);
  });
  it("getPriceFromHistoData works with median prices", function () {
    expect(getPriceFromHistoData([{low: 5, high: 3, close: 2}], APPLIED_PRICE.PRICE_WEIGHTED))
      .toEqual([3]);
  });

});