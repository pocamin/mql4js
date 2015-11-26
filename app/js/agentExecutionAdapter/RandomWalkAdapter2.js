var RandomWalkAdapter = function (option) {
  option = option || {};
  this.seed = option.seed || 1;
  this.intervalAsString = option.interval || "D1";
  this.interval = getInterval(this.intervalAsString);
  this.minHistoSize = option.minHistoSize || 100;
  this.creationTime = this.interval.floor(option.creationTime || new Date());
  this.nbBars = option.nbBars || 500;
  this.startOfTime = moment(this.creationTime).subtract(this.nbBars * this.interval.periodicity, this.interval.periodicityUnit);
  this.nbTicksByPeriod = option.nbTicksByPeriod || 10;
  this.initialValue = option.initialValue || 1;
  this.returnsByTick = option.returnsByTick || 0.001;


  this.random = function (increment) {
    var x = Math.sin(this.seed + increment) * 10000;
    return x - Math.floor(x);
  };

  this.ticks = [];
  this.maxTime = moment(this.startOfTime);
  this.generateTicks(this.creationTime);
};

RandomWalkAdapter.prototype.generateTicks = function (to) {
  to = to || moment();
  var value = this.initialValue;
  while (!this.maxTime.isAfter(to)) {
    for (var i = 0; i < this.nbTicksByPeriod; i++) {
      value *= this.random(this.ticks.length) > 0.5 ? 1 - this.returnsByTick : 1 + this.returnsByTick;
      this.ticks.push(value);
    }


    this.maxTime.add(this.interval.periodicity, this.interval.periodicityUnit);
  }
};

RandomWalkAdapter.prototype.getIndex = function (dt) {
  var idx = 0;
  var currentMoment = moment(this.startOfTime);
  while (!currentMoment.isSame(dt)) {
    currentMoment.add(this.interval.periodicity, this.interval.periodicityUnit);
    idx++;
  }
  return idx * this.nbTicksByPeriod;
};

RandomWalkAdapter.prototype.requestHistoricalData = function (symbol, intervalAsString, from, to, callBack) {
  if (this.intervalAsString !== intervalAsString) {
    throw Error("RandomWalkAdapter doesn't support multiple intervals");
  }

  from = this.interval.floor(from);
  from = from.isBefore(this.startOfTime) ? this.startOfTime : from;

  to = this.interval.ceil(to || new Date()).subtract(this.interval.periodicity, this.interval.periodicityUnit);
  to = to.isAfter(this.maxTime) ? this.maxTime : to;


  var histoData = [];
  var fromPeriod = this.interval.ceil(from);
  var toPeriod = moment(fromPeriod).add(this.interval.periodicity, this.interval.periodicityUnit);
  while (!toPeriod.isAfter(to)) {

    var fromIdx = this.getIndex(fromPeriod);
    var toIdx = this.getIndex(toPeriod);

    var open = this.ticks[fromIdx], low = this.ticks[fromIdx], high = this.ticks[fromIdx], close = this.ticks[fromIdx];
    for (var idx = fromIdx; idx < toIdx; idx++) {
      close = this.ticks[idx];

      if (close < low) {
        low = close;
      }
      if (close > high) {
        high = close;
      }
    }


    histoData.push({
      open: open,
      low: low,
      high: high,
      close: close,
      date: moment(fromPeriod).toDate()
    });


    fromPeriod = toPeriod;
    toPeriod = moment(fromPeriod).add(this.interval.periodicity, this.interval.periodicityUnit);
  }

  callBack(histoData);
};


