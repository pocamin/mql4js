"use strict";
var MovingAverageIndicator = function (barAdapter, method, periods, basedOn) {
  this._basedOn = basedOn || "close";
  this._maxSize = 500;
  this._periods = periods;
  this._method = method;
  this.values = this._computeAll(barAdapter.bars);
  barAdapter.addListener(this);
};


MovingAverageIndicator.prototype.onBar = function (bar) {
  var newValue = this._computeOne(bar);
  if (newValue) {
    this.values.push(newValue);
    if (this.values.length > this._maxSize) {
      this.values.splice(0, this.values.length - this._maxSize);
    }
  }
};


MovingAverageIndicator.prototype._computeAll = function (bars) {
  var that = this;

  return bars
    .map(function (bar) {
      return that._computeOne(bar)
    })
    .filter(function (bar) {
      return !!bar
    });
};

MovingAverageIndicator.prototype._computeOne = function (bar) {
  var that = this;
  switch (that._method) {
    case MOVING_AVERAGE_METHOD.SMA :
      return that._computeSMA(bar);
    case MOVING_AVERAGE_METHOD.EMA :
      return that._computeEMA(bar);
    case MOVING_AVERAGE_METHOD.SMMA :
      return that._computeSMMA(bar);
    case MOVING_AVERAGE_METHOD.LWMA :
      return that._computeLWMA(bar);
  }
};

MovingAverageIndicator.prototype._addToPeriodData = function (bar) {
  this._periodData = this._periodData || [];
  this._periodData.push({date: bar.date, value: bar[this._basedOn]});
  if (this._periodData.length > this._periods) {
    this._periodData.splice(0, this._periodData.length - this._periods)
  }
  return this._periodData.length == this._periods;
};


MovingAverageIndicator.prototype._computeSMA = function (bar) {
  if (!this._addToPeriodData(bar)) {
    return null;
  }

  return {
    value: this._periodData.reduce(function (acc, v) {
      return acc + v.value
    }, 0) / this._periods,
    date: bar.date
  };
};


MovingAverageIndicator.prototype._computeEMA = function (bar) {
  var value = bar[this._basedOn];
  this._nbBarsSeen = (this._nbBarsSeen || 0) + 1;
  if (this._nbBarsSeen < this._periods) {
    this._ema = (this._ema || 0) + value;
    return null;
  } else if (this._nbBarsSeen == this._periods) {
    this._ema = (this._ema + value) / this._periods;
  } else {
    this._ema += (value - this._ema) * 2 / (this._periods + 1);
  }

  return {
    value: this._ema,
    date: bar.date
  };
};


MovingAverageIndicator.prototype._computeLWMA = function (bar) {
  if (!this._addToPeriodData(bar)) {
    return null;
  }

  return {
    value: this._periodData.map(function (v, idx) {
      return (idx + 1) * v.value
    }).reduce(function (acc, value) {
      return acc + value
    }) * 2 / (this._periods * (this._periods + 1)),
    date: bar.date
  };
};


MovingAverageIndicator.prototype._computeSMMA = function (bar) {
  var value = bar[this._basedOn];
  this._nbBarsSeen = (this._nbBarsSeen || 0) + 1;

  if (this._nbBarsSeen < this._periods) {
    this._sum = (this._sum || 0) + value;
    return null;
  } else if (this._nbBarsSeen == this._periods) {
    this._sum += value;
  } else {
    this._sum += value - this._sum / this._periods;
  }

  return {
    value: this._sum / this._periods,
    date: bar.date
  };

};

