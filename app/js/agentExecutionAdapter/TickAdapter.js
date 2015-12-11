var TickAdapter = function (symbol, currentTime) {
  this._symbol = symbol;
  this._currentTime = currentTime || new Date().getTime();
  this._listeners = [];
};

TickAdapter.prototype.addListener = function (listener) {
  this._listeners.push(listener);
};

TickAdapter.prototype.newTick = function (ask, bid, volume, time) {
  var that = this;
  this._listeners.forEach(function (listener) {
    listener.onTick({ask: ask, bid: bid, volume: volume, date: new Date(time), symbol: that._symbol});
  });
};

var RandomTickAdapter = function (symbol, currentTime, options) {
  TickAdapter.call(this, symbol, currentTime);
  options = options || {};
  this._seed = options.seed || 1;
  this._ticknumber = 0;
  this._initialValue = options.initialValue || 1;
  this._tickPeriodInMs = options.tickPeriodInMs || 100;
  this._deltaByTick = options.deltaByTick || 0.001;
  this._bidAskDelta = options.bidAskDelta || 0.001;
  this._speed = options.speed || 0;
  this._batchSize = options.batchSize || 1;
  this._roundTo = Math.round(Math.pow(10, -Math.log(options.roundTo || 0.0001) / Math.log(10)));
  this._maxVolumeByTick = options.maxVolumeByTick || 10000;
  this._arithmeticWalk = !!options.arithmeticWalk
};

RandomTickAdapter.prototype = Object.create(TickAdapter.prototype);
RandomTickAdapter.prototype.constructor = TickAdapter;

RandomTickAdapter.prototype.start = function () {
  var that = this;
  this.intervalId = setInterval(function () {
    if (that._speed == 0) {
      for (var i = 0; i < that._batchSize && !that._isStopped; i++) {
        that._createTick();
      }
    } else {
      that._createTick();
    }

  }, this._speed);
};

RandomTickAdapter.prototype.stop = function () {
  this._isStopped = true;
  clearInterval(this.intervalId);
};

RandomTickAdapter.prototype._createTick = function () {

  this._currentTime += this._tickPeriodInMs;
  this._last = (this._last || this._initialValue);


  if (this._arithmeticWalk) {
    this._last += (random(this._seed, this._ticknumber++) > 0.5) ? this._deltaByTick : -this._deltaByTick;
  } else {
    this._last *= 1 + ((random(this._seed, this._ticknumber++) > 0.5) ? this._deltaByTick : -this._deltaByTick);
  }


  var bid = Math.round((this._last - this._bidAskDelta * random(this._seed, this._ticknumber) / 2) * this._roundTo) / this._roundTo;
  var ask = Math.round((this._last + this._bidAskDelta * random(this._seed, this._ticknumber + 0.5) / 2) * this._roundTo) / this._roundTo;
  this.newTick(ask, bid, Math.round(this._maxVolumeByTick * random(this._seed, this._ticknumber)), this._currentTime);
};