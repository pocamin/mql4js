var RandomWalkAdapter = function (symbol, intervalAsString, option) {
  option = option || {};
  this.seed = option.seed || 1;
  this.symbol = symbol;
  this.intervalAsString = intervalAsString;
  this.interval = getInterval(this.intervalAsString);
  this.minHistoSize = option.minHistoSize || 100;
  this.creationTime = this.interval.floor(option.creationTime || new Date());
  this.nbBars = option.nbBars || 500;
  this.startOfTime = moment(this.creationTime).subtract(this.nbBars * this.interval.periodicity, this.interval.periodicityUnit);
  this.nbInitialTicksByPeriod = option.nbInitialTicksByPeriod || 10;
  this.initialValue = option.initialValue || 1;
  this.returnsByTick = option.returnsByTick || 0.001;
  this.roundTo = Math.round(Math.pow(10, -Math.log(option.roundTo || 0.0001) / Math.log(10)));



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

  var toFloor = this.interval.floor(to);
  var secondByTicks =
    (moment(toFloor).add(this.interval.periodicity, this.interval.periodicityUnit).unix() - toFloor.unix()) / this.nbInitialTicksByPeriod;


  var deltaIndexBars = this.getIndex(toFloor) - this.ticks.length;
  var deltaIndexPartialBars = Math.round((to.unix() - toFloor.unix()) / secondByTicks);


  var value = (this.ticks.length == 0) ? this.initialValue : this.ticks[this.ticks.length - 1];
  for (var i = 0; i < deltaIndexBars + deltaIndexPartialBars; i++) {
    value *= this.random(this.ticks.length) > 0.5 ? 1 - this.returnsByTick : 1 + this.returnsByTick;
    value = Math.round(value * this.roundTo) / this.roundTo;
    this.ticks.push(value);
  }

  this.maxTime = moment(toFloor).add(deltaIndexPartialBars * secondByTicks, "seconds");
  if (deltaIndexBars > 0){
    this.notifyBarsListeners();
    this.notifyTickListeners();
  }
};
RandomWalkAdapter.prototype.notifyBarsListeners = function(){
  this.barsListeners.forEach(function(barsListener){
    barsListener.onNewBars();
  });
};

RandomWalkAdapter.prototype.notifyTickListeners = function(){

};

RandomWalkAdapter.prototype.addTickListeners = function(){
  this.tickListeners.push(barsListener);
};

RandomWalkAdapter.prototype.addBarsListeners = function(barsListener){
  this.barsListeners.push(barsListener);
};


RandomWalkAdapter.prototype.getIndex = function (dt) {
  var idx = 0;
  var currentMoment = moment(this.startOfTime);
  while (!currentMoment.isSame(dt)) {
    currentMoment.add(this.interval.periodicity, this.interval.periodicityUnit);
    idx++;
  }
  return idx * this.nbInitialTicksByPeriod;
};


RandomWalkAdapter.prototype.getBars = function (from, to) {
  from = this.interval.floor(from);
  from = from.isBefore(this.startOfTime) ? this.startOfTime : from;


  to = moment(to || new Date());
  to = to.isAfter(this.maxTime) ? this.maxTime : to;
  to = this.interval.floor(to).subtract(this.interval.periodicity, this.interval.periodicityUnit);


  var histoData = [];
  var fromPeriod = from;
  var toPeriod = moment(fromPeriod).add(this.interval.periodicity, this.interval.periodicityUnit);
  while (!fromPeriod.isAfter(to)) {

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
};


