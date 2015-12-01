// TODO only support same term currency for instrument than the account!!!
var BacktestAccountAdapter = function () {
  this._aggregatedClientPositions = {};
  this._pricesBySymbol = {};
  this._clientMarginDelta = 0;
};

BacktestAccountAdapter.prototype.addPosition = function (symbol, amount, tick) {
  this._pricesBySymbol[symbol] = tick;
  var price = (amount > 0) ? tick.ask : tick.bid;
  this._clientMarginDelta -= amount * price;
  this._aggregatedClientPositions[symbol] = (this._aggregatedClientPositions[symbol] || 0) + amount;
};




BacktestAccountAdapter.prototype.getTotalPL = function () {
  var that = this;
  var balance = that._clientMarginDelta;

  Object.keys(that._aggregatedClientPositions).forEach(function (symbol) {
    var amount = that._aggregatedClientPositions[symbol];
    var tick = that._pricesBySymbol[symbol];
    var price = (amount > 0) ? tick.bid : tick.ask;
    balance += amount * price;
  });
  return balance;
};

BacktestAccountAdapter.prototype.onTick = function (tick) {
  this._pricesBySymbol[tick.symbol] = tick;
};