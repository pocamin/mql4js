var BacktestMarketAdapter = function (backTestAccountAdapter) {
  this._accountAdapter = backTestAccountAdapter;
  this._orders = {};
  this._listeners = [];
  this.orderIdSequence = 0;
};

BacktestMarketAdapter.prototype.getOrders = function () {
  var that = this;
  return Object.keys(this._orders).map(function (orderId) {
    return that._orders[orderId];
  })
};


BacktestMarketAdapter.prototype.getOrder = function (orderId) {
  return this._orders[orderId];
};

BacktestMarketAdapter.prototype.addListener = function (listener) {
  this._listeners.push(listener);
};

BacktestMarketAdapter.prototype._emitOrderEvent = function (eventName, order) {
  this._listeners.forEach(function (listener) {
    listener.onOrderEvent(eventName, order);
  });
};

BacktestMarketAdapter.prototype.sendOrder = function (order, tick) {
  order.id = ++this.orderIdSequence;
  order.status = ORDER_STATUS.PENDING;
  order.initialAmount = order.amount;
  this._orders[order.id] = order;
  this._emitOrderEvent(ORDER_EVENT.SENT, order);
  this._emitOrderEvent(ORDER_EVENT.RECEIVED, order);
  this._process(order, tick);
  return order.id;
};

BacktestMarketAdapter.prototype.closeOrder = function (orderId, price, amount, tick) {
  var order = this._orders[orderId];
  order.status = ORDER_STATUS.CLOSING;
  order.closingPrice = price;
  order.closingAmount = (order.closingAmount || 0) + amount;
  this._emitOrderEvent(ORDER_EVENT.CLOSE_SENT, order);
  this._emitOrderEvent(ORDER_EVENT.CLOSE_RECEIVED, order);
  this._process(order, tick);
};


BacktestMarketAdapter.prototype._process = function (order, tick) {
  if (order.status == ORDER_STATUS.PENDING && this._canOpen(order, tick)) {
    this._accountAdapter.addPosition(order.symbol, (order.side == ORDER_SIDE.BUY) ? order.amount : -order.amount, tick);

    order.status = ORDER_STATUS.OPENED;
    order.openPrice = this._openPrice(order, tick);
    this._emitOrderEvent(ORDER_EVENT.OPENED, order);
  } else if (order.status == ORDER_STATUS.CLOSING && this._canClose(order, tick)) {
    order.amount -= order.closingAmount;
    this._accountAdapter.addPosition(order.symbol, (order.side == ORDER_SIDE.BUY) ? -order.closingAmount : order.closingAmount, tick);


    // TODO can be wrong on partial close
    order.closePrice = this._closePrice(order, tick);

    if (order.amount == 0) {
      order.status = ORDER_STATUS.CLOSED;
      this._emitOrderEvent(ORDER_EVENT.CLOSED, order);
    } else {
      order.status = ORDER_STATUS.OPENED;
      this._emitOrderEvent(ORDER_EVENT.PARTIALLY_CLOSED, order);

    }
  }
};

BacktestMarketAdapter.prototype.isPending = function (orderId) {
  return this.orderStatus(orderId) == ORDER_STATUS.PENDING;
};

BacktestMarketAdapter.prototype.orderStatus = function (orderId) {
  return this._orders[orderId] ? this._orders[orderId].status : ORDER_STATUS.UNKNOWN;
};

BacktestMarketAdapter.prototype.cancelOrder = function (orderId) {
  var order = this._orders[orderId];
  this._emitOrderEvent(ORDER_EVENT.CANCEL_SENT, order);
  if (order.status == ORDER_STATUS.CLOSING) {
    order.status = ORDER_STATUS.OPENED;
  } else if (order.status == ORDER_STATUS.PENDING) {
    order.status = ORDER_STATUS.CANCELLED;
  } else {
    throw new Error("invalid status");
  }
  this._emitOrderEvent(ORDER_EVENT.CANCELLED, order);

};

BacktestMarketAdapter.prototype._openPrice = function (order, tick) {
  return order.side == ORDER_SIDE.BUY ? tick.ask : tick.bid;
};

BacktestMarketAdapter.prototype._closePrice = function (order, tick) {
  return order.side == ORDER_SIDE.BUY ? tick.bid : tick.ask;
};


BacktestMarketAdapter.prototype._canOpen = function (order, tick) {
  var canOpen = false;
  if (order.type == "market") {
    canOpen = true;
  } else if (order.type == "limit") {
    canOpen = (order.side == ORDER_SIDE.BUY) ? tick.ask <= order.limit : tick.bid >= order.limit;
  }
  if (!canOpen) {
    this._emitOrderEvent(ORDER_EVENT.NOT_OPENED_ON_TICK, order);
  }

  return canOpen;
};


BacktestMarketAdapter.prototype._canClose = function (order, tick) {
  var canClose = (order.side == ORDER_SIDE.SELL) ? tick.ask <= order.closingPrice : tick.bid >= order.closingPrice;
  if (!canClose) {
    this._emitOrderEvent(ORDER_EVENT.NOT_CLOSED_ON_TICK, order);
  }
  return canClose;
};


BacktestMarketAdapter.prototype.onTick = function (tick) {
  var that = this;
  Object.keys(this._orders).forEach(function (orderId) {
    that._process(that._orders[orderId], tick);
  });
};

