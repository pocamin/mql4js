var BarAdapter = function (symbol, intervalName, currentDate) {
  this._symbol = symbol;
  this._intervalName = intervalName;
  this._interval = getInterval(intervalName);
  this._listeners = [];
  this.bars = [];
  this._maxSize = 500;
  this._maxDate = this._interval.floor(currentDate);
};


BarAdapter.prototype.addListener = function (listener) {
  this._listeners.push(listener);
};

BarAdapter.prototype._newBar = function (bar) {
  this._listeners.forEach(function (listener) {
    return listener.onBar(bar)
  });
};

BarAdapter.prototype.init = function () {
  var that = this;
  return new Promise(new function (resolve) {
    return resolve(that.bars);
  });
};


var RandomBarAdapter = function (symbol, period, currentDate, option) {
  BarAdapter.call(this, symbol, period, currentDate);
  option = option || {};
  this._seed = option.seed || 1;
  this._nbInitialTicksByPeriod = option.nbInitialTicksByPeriod || 10;
  this._initialValue = option.initialValue || 1;
  this._maxVolumeByTick = option.maxVolumeByTick || 10000;
  this._deltaByTick = option.deltaByTick || 0.001;
  this._roundTo = Math.round(Math.pow(10, -Math.log(option.roundTo || 0.0001) / Math.log(10)));
  this._pendingTicks = [];
};

RandomBarAdapter.prototype = Object.create(BarAdapter.prototype);
RandomBarAdapter.prototype.constructor = BarAdapter;


RandomBarAdapter.prototype.onTick = function (tick) {
  var nextPeriodMaxDate = moment(this._maxDate).add(this._interval.periodicity, this._interval.periodicityUnit);


  if (nextPeriodMaxDate.isBefore(tick.date)) {
    var prices = this._pendingTicks.map(function (t) {
      return (t.bid + t.ask) / 2
    });
    var volumes = this._pendingTicks.map(function (t) {
      return t.volume
    });

    var bar = this._addBar(this._maxDate, prices, volumes);
    this._pendingTicks = [tick];
    this._maxDate = nextPeriodMaxDate;
    this._newBar(bar);
  } else {
    this._pendingTicks.push(tick);
  }
};

RandomBarAdapter.prototype._addBar = function (barDate, prices, volumes, inverted) {
  var close = prices[prices.length - 1],
    open = prices[0],
    low = prices[0],
    high = prices[0],
    volume = volumes[0];

  for (var k = 1; k < prices.length; k++) {
    volume += volumes[k];
    if (prices[k] < low) {
      low = prices[k];
    }
    if (prices[k] > high) {
      high = prices[k];
    }
  }


  var bar = {open: open, low: low, high: high, close: close, volume: volume, date: moment(barDate).toDate(), symbol: this._symbol};
  if (inverted) {
    this.bars.splice(0, 0, bar);
  } else {
    this.bars.push(bar);
  }

  if (this.bars.length > this._maxSize) {
    this.bars.splice(0, this.bars.length - this._maxSize);
  }
  return bar;
};


RandomBarAdapter.prototype.init = function () {
  var barDate = moment(this._maxDate);
  var value = this._initialValue;

  for (var i = 0; i < this._maxSize; i++) {
    barDate.subtract(this._interval.periodicity, this._interval.periodicityUnit);

    var values = [];
    var volumes = [];

    for (var j = 0; j < this._nbInitialTicksByPeriod; j++) {
      var tickIndex = i * this._nbInitialTicksByPeriod + j;
      value += random(this._seed, tickIndex) > 0.5 ? -this._deltaByTick : this._deltaByTick;
      value = Math.round(value * this._roundTo) / this._roundTo;
      values.splice(0, 0, value);
      volumes.splice(0, 0, Math.round(random(this._seed, tickIndex) * this._maxVolumeByTick))
    }


    this._addBar(barDate, values, volumes, true);
  }

  var that = this;
  return new Promise(function (resolve) {
    return resolve(that.bars)
  });
};


