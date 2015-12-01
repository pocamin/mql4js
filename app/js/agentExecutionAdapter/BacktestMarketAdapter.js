var BacktestMarketAdapter = function (backTestAccountAdapter) {
  this._accountAdapter = backTestAccountAdapter;
  this._pendingOrdersBySymbol = {};
  this._listeners = []
};

BacktestMarketAdapter.prototype.addListener = function (listener) {
  this._listeners.push(listener);
};

BacktestMarketAdapter.prototype._notifyNewOrder = function (order) {
  this._listeners.forEach(function (listener) {
    listener.newOrderSent(order)
  });
};

BacktestMarketAdapter.prototype.addOrder = function (order) {
  this._pendingOrdersBySymbol[order.symbol] = (this._pendingOrdersBySymbol[order.symbol] || []);
  this._pendingOrdersBySymbol[order.symbol].push(order);
  this._notifyNewOrder(order);
};

BacktestMarketAdapter.prototype._canExecute = function (order, tick) {
  if (order.type == "market") {
    return true;
  }
  if (order.type == "limit") {
    return (order.amount > 0) ? tick.ask <= order.limit : tick.bid >= order.limit;
  }
};

BacktestMarketAdapter.prototype.onTick = function (tick) {
  var that = this;
  var pendingOrders = this._pendingOrdersBySymbol[tick.symbol];
  if (pendingOrders) {
    var newPendingOrders = [];
    pendingOrders.forEach(function (order) {
      if (that._canExecute(order, tick)) {
        that._accountAdapter.addPosition(order.symbol, order.amount, tick);
      } else {
        newPendingOrders.push(order);
      }
    });

    this._pendingOrdersBySymbol[tick.symbol] = newPendingOrders;
  }
};

