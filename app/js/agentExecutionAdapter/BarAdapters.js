"use strict";

var BarAdapter = function (symbol, intervalName, currentDate) {
  this.symbol = symbol;
  this.intervalName = intervalName;
  this.interval = getInterval(intervalName);
  this._listeners = [];
  this.bars = [];
  this._maxSixe = 500;
  this.maxDate = this.interval.floor(currentDate);
};


BarAdapter.prototype.addListener = function (listener) {
  this._listeners.add(listener);
};

BarAdapter.prototype.newBar = function (bar) {
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
  this.seed = option.seed || 1;
  this.nbInitialTicksByPeriod = option.nbInitialTicksByPeriod || 10;
  this.initialValue = option.initialValue || 1;
  this.maxVolumeByTick = option.maxVolumeByTick || 10000;
  this.deltaByTick = option.deltaByTick || 0.001;
  this.roundTo = Math.round(Math.pow(10, -Math.log(option.roundTo || 0.0001) / Math.log(10)));
  this.pendingTicks = [];
};

RandomBarAdapter.prototype = Object.create(BarAdapter.prototype);
RandomBarAdapter.prototype.constructor = BarAdapter;


RandomBarAdapter.prototype.onTick = function (tick) {
  if (this.maxDate.isBefore(tick.date)) {
    var values = this.pendingTicks.map(function (t) {
      return (t.bid + t.ask) / 2
    });
    var volumes = this.pendingTicks.map(function (t) {
      return t.volume
    });

    this.pendingTicks = [];
  } else {

  }
};

RandomBarAdapter.prototype.addBar = function (barDate, values, volumes) {
  var close = values[0],
    open = values[this.nbInitialTicksByPeriod - 1],
    low = values[0],
    high = values[0],
    volume = 0;

  for (var k = 1; k < this.nbInitialTicksByPeriod; k++) {
    volume += volumes[k];
    if (values[k] < low) {
      low = values[k];
    }
    if (values[k] > high) {
      high = values[k];
    }
  }


  this.bars.push({open: open, low: low, high: high, close: close, volume: volume, date: moment(barDate).toDate()});
  if (this.bars.length > this._maxSixe) {
    this.bars.splice(0, this._maxSixe - this.bars.length);
  }
};


RandomBarAdapter.prototype.init = function () {
  var barDate = moment(this.maxDate);
  var value = this.initialValue;

  for (var i = 0; i < this._maxSixe; i++) {
    barDate.subtract(this.interval.periodicity, this.interval.periodicityUnit);

    var values = [];
    var volumes = [];

    for (var j = 0; j < this.nbInitialTicksByPeriod; j++) {
      var tickIndex = i * this.nbInitialTicksByPeriod + j;
      value += random(this.seed + tickIndex) > 0.5 ? -this.deltaByTick : this.deltaByTick;
      value = Math.round(value * this.roundTo) / this.roundTo;
      values.push(value);
      volumes.push(random(this.seed + tickIndex) * this.maxVolumeByTick)
    }


    this.addBar(barDate, values, volumes);
  }

  var that = this;
  return new Promise(function (resolve) {
    return resolve(that.bars)
  });
};


