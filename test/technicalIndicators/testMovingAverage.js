describe('movingAverage.js', function () {
  var round2 = function (array) {
    return array.map(function (value) {
      return Math.round(value * 100) / 100
    })
  }
  it('can compute standard moving average', function () {
    expect(MOVING_AVERAGE.compute([2, 3, 4, 5, 3, 4, 2, 3, 4, 5], 3, MOVING_AVERAGE_METHOD.SMA))
      .toEqual([3, 4, 4, 4, 3, 3, 3, 4]);
  });

  it('can compute exponential moving average', function () {
    expect(MOVING_AVERAGE.compute([2, 3, 4, 5, 3, 4, 2, 3, 4, 5], 3, MOVING_AVERAGE_METHOD.EMA))
      .toEqual([3, 4, 3.5, 3.75, 2.875, 2.9375, 3.46875, 4.234375]);
  });

  it('can compute Smoothed Moving Average', function () {
    expect(round2(MOVING_AVERAGE.compute([2, 3, 4, 5, 3, 4, 2, 3, 4, 5], 3, MOVING_AVERAGE_METHOD.SMMA)))
      .toEqual([3, 3.67, 3.44, 3.63, 3.09, 3.06, 3.37, 3.91]);
  });

  it('can compute Linear weighted  Moving Average', function () {
    expect(MOVING_AVERAGE.compute([3, 3, 6, 6, 3, 3, 6, 3, 9, 5], 3, MOVING_AVERAGE_METHOD.LWMA))
      .toEqual([4.5, 5.5, 4.5, 3.5, 4.5, 4, 6.5, 6]);
  });

});