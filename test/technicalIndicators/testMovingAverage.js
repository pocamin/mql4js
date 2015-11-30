describe('MovingAverage.js', function () {
  var round2 = function (array) {
    return array.map(function (value) {
      return Math.round(value * 100) / 100
    })
  };


  describe('standard moving average', function () {
    var mockBarAdapter = {
      bars: [
        {date: new Date(2015, 1, 1), close: 2},
        {date: new Date(2015, 1, 2), close: 3},
        {date: new Date(2015, 1, 3), close: 4},
        {date: new Date(2015, 1, 4), close: 5}
      ],
      addListener: function () {
      }
    };


    var mai = new MovingAverageIndicator(mockBarAdapter, MOVING_AVERAGE_METHOD.SMA, 3);


    it("can compute", function () {
      expect(mai.values)
        .toEqual(
        [
          {date: new Date(2015, 1, 3), value: 3},
          {date: new Date(2015, 1, 4), value: 4}
        ]
      );
    });

    it("can update", function () {
      mai.onBar({date: new Date(2015, 1, 5), close: 6});

      expect(mai.values)
        .toEqual([
          {date: new Date(2015, 1, 3), value: 3},
          {date: new Date(2015, 1, 4), value: 4},
          {date: new Date(2015, 1, 5), value: 5}]
      );
    });

  });

  describe('exponential moving average', function () {
    var mockBarAdapter = {
      bars: [
        {date: new Date(2015, 1, 1), close: 2},
        {date: new Date(2015, 1, 2), close: 3},
        {date: new Date(2015, 1, 3), close: 4},
        {date: new Date(2015, 1, 4), close: 5},
        {date: new Date(2015, 1, 5), close: 3}
      ],
      addListener: function () {
      }
    };
    var mai = new MovingAverageIndicator(mockBarAdapter, MOVING_AVERAGE_METHOD.EMA, 3);
    it("can compute", function () {
      expect(mai.values)
        .toEqual(
        [
          {date: new Date(2015, 1, 3), value: 3},
          {date: new Date(2015, 1, 4), value: 4},
          {date: new Date(2015, 1, 5), value: 3.5}
        ]
      );
    });


    it("can update", function () {
      mai.onBar({date: new Date(2015, 1, 6), close: 4});
      expect(mai.values)
        .toEqual(
        [
          {date: new Date(2015, 1, 3), value: 3},
          {date: new Date(2015, 1, 4), value: 4},
          {date: new Date(2015, 1, 5), value: 3.5},
          {date: new Date(2015, 1, 6), value: 3.75}
        ]
      );
    });
  });


  describe('Smoothed Moving Average', function () {
    var mockBarAdapter = {
      bars: [
        {date: new Date(2015, 1, 1), close: 2},
        {date: new Date(2015, 1, 2), close: 3},
        {date: new Date(2015, 1, 3), close: 4},
        {date: new Date(2015, 1, 4), close: 5},
        {date: new Date(2015, 1, 5), close: 3}
      ],
      addListener: function () {
      }
    };
    var mai = new MovingAverageIndicator(mockBarAdapter, MOVING_AVERAGE_METHOD.SMMA, 3);
    it("can compute", function () {
      expect(mai.values)
        .toEqual(
        [
          {date: new Date(2015, 1, 3), value: (2 + 3 + 4) / 3},
          {date: new Date(2015, 1, 4), value: 22 / 6},
          {date: new Date(2015, 1, 5), value: 31 / 9}
        ]
      );
    });


    it("can update", function () {
      mai.onBar({date: new Date(2015, 1, 6), close: 4});
      expect(mai.values)
        .toEqual(
        [
          {date: new Date(2015, 1, 3), value: 9 / 3},
          {date: new Date(2015, 1, 4), value: 22 / 6},
          {date: new Date(2015, 1, 5), value: 31 / 9},
          {date: new Date(2015, 1, 6), value: 98 / 27}
        ]
      );
    });
  });


  describe('Linear weighted Moving Average', function () {
    var mockBarAdapter = {
      bars: [
        {date: new Date(2015, 1, 1), close: 3},
        {date: new Date(2015, 1, 2), close: 3},
        {date: new Date(2015, 1, 3), close: 6},
        {date: new Date(2015, 1, 4), close: 6},
        {date: new Date(2015, 1, 5), close: 3}
      ],
      addListener: function () {
      }
    };
    var mai = new MovingAverageIndicator(mockBarAdapter, MOVING_AVERAGE_METHOD.LWMA, 3);
    it("can compute", function () {
      expect(mai.values)
        .toEqual(
        [
          {date: new Date(2015, 1, 3), value: 4.5},
          {date: new Date(2015, 1, 4), value: 5.5},
          {date: new Date(2015, 1, 5), value: 4.5}
        ]
      );
    });


    it("can update", function () {
      mai.onBar({date: new Date(2015, 1, 6), close: 3});
      expect(mai.values)
        .toEqual(
        [
          {date: new Date(2015, 1, 3), value: 4.5},
          {date: new Date(2015, 1, 4), value: 5.5},
          {date: new Date(2015, 1, 5), value: 4.5},
          {date: new Date(2015, 1, 6), value: 3.5}
        ]
      );
    });
  });


});