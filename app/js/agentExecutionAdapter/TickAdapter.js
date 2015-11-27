var TickAdapter = function (symbol) {
  option = option || {};
  this._symbol = symbol;
  this._listeners = [];
};

TickAdapter.prototype.addListener = function (listener) {
  this._listeners.add(listener);
};

TickAdapter.prototype.newTick = function (ask, bid, volume, time) {
  this.listeners.forEach(function (listener) {
    listener.onTick({ask: ask, bid: bid, volume: volume, time: time});
  });
};

