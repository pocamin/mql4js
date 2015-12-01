var BacktestMarketAdapter = function (backTestAccountAdapter) {
  this._accountAdapter = backTestAccountAdapter;
  this._pendingOrders = [];
  this._listeners = [];
  this.orderId = 0;
};

BacktestMarketAdapter.prototype.addListener = function (listener) {
  this._listeners.push(listener);
};

BacktestMarketAdapter.prototype._notifyNewOrder = function (order) {
  this._listeners.forEach(function (listener) {
    listener.newOrderSent && listener.newOrderSent(order)
  });
};

BacktestMarketAdapter.prototype._notifyOrderExecuted = function (order, tick) {
  this._listeners.forEach(function (listener) {
    listener.orderExecuted && listener.orderExecuted(order, tick)
  });
};

BacktestMarketAdapter.prototype._notifyOrderNotExecuted = function (order, tick) {
  this._listeners.forEach(function (listener) {
    listener.orderNotExecuted && listener.orderNotExecuted(order, tick)
  });
};

BacktestMarketAdapter.prototype._notifyOrderCancel = function (orderId) {
  this._listeners.forEach(function (listener) {
    listener.orderCancelled && listener.orderCancelled(orderId)
  });
};

BacktestMarketAdapter.prototype.addOrder = function (order) {
  order.id = ++this.orderId;
  this._pendingOrders.push(order);
  this._notifyNewOrder(order);
  return order.id;
};


BacktestMarketAdapter.prototype.isPending = function (orderId) {
  return this._pendingOrders.filter(function (order) {
      return order.id === orderId
    }).length > 0;
};

BacktestMarketAdapter.prototype.cancelOrder = function (orderId) {
  this._pendingOrders = this._pendingOrders.filter(function (order) {
    return order.id !== orderId
  });
  this._notifyOrderCancel(orderId);
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
  var newPendingOrders = [];
  this._pendingOrders.forEach(function (order) {


    var executed = false;
    if (tick.symbol === order.symbol) {
      if (that._canExecute(order, tick)) {
        that._notifyOrderExecuted(order, tick);
        that._accountAdapter.addPosition(order.symbol, order.amount, tick);
        executed = true;
      } else {
        that._notifyOrderNotExecuted(order, tick);
      }
    }


    if (!executed) {
      newPendingOrders.push(order);
    }
  });


  this._pendingOrders = newPendingOrders;

};

