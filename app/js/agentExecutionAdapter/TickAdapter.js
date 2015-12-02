var TickAdapter = function (symbol, currentDate) {
  this._symbol = symbol;
  this._currentDate = moment(currentDate || new Date());
  this._listeners = [];
};

TickAdapter.prototype.addListener = function (listener) {
  this._listeners.push(listener);
};

TickAdapter.prototype.newTick = function (ask, bid, volume, date) {
  var that = this;
  this._listeners.forEach(function (listener) {
    listener.onTick({ask: ask, bid: bid, volume: volume, date: date, symbol: that._symbol});
  });
};

var RandomTickAdapter = function (symbol, currentDate, options) {
  TickAdapter.call(this, symbol, currentDate);
  options = options || {};
  this._seed = options.seed || 1;
  this._ticknumber = 0;
  this._initialValue = options.initialValue || 1;
  this._tickPeriodInMs = options.tickPeriodInMs || 100;
  this._deltaByTick = options.deltaByTick || 0.001;
  this._bidAskDelta = options.bidAskDelta || 0.001;
  this._speed = options.speed || 1;
  this._roundTo = Math.round(Math.pow(10, -Math.log(options.roundTo || 0.0001) / Math.log(10)));
  this._maxVolumeByTick = options.maxVolumeByTick || 10000;
  this._arithmeticWalk = !!options.arithmeticWalk
};

RandomTickAdapter.prototype = Object.create(TickAdapter.prototype);
RandomTickAdapter.prototype.constructor = TickAdapter;

RandomTickAdapter.prototype.start = function () {
  var that = this;
  this.intervalId = setInterval(function () {
    that._createTick()
  }, this._speed);
};

RandomTickAdapter.prototype.stop = function () {
  clearInterval(this.intervalId);
};

RandomTickAdapter.prototype._createTick = function () {
  this._currentDate.add(this._tickPeriodInMs, "ms");
  this._last = (this._last || this._initialValue);


  if (this._arithmeticWalk) {
    this._last += (random(this._seed, this._ticknumber++) > 0.5) ? this._deltaByTick : -this._deltaByTick;
  } else {
    this._last *= 1 + ((random(this._seed, this._ticknumber++) > 0.5) ? this._deltaByTick : -this._deltaByTick);
  }


  var bid = Math.round((this._last - this._bidAskDelta * random(this._seed, this._ticknumber) / 2) * this._roundTo) / this._roundTo;
  var ask = Math.round((this._last + this._bidAskDelta * random(this._seed, this._ticknumber + 0.5) / 2) * this._roundTo) / this._roundTo;
  this.newTick(ask, bid, Math.round(this._maxVolumeByTick * random(this._seed, this._ticknumber)), moment(this._currentDate).toDate());
};