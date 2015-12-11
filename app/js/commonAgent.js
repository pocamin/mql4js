var CACHE_MAX_SIZE = 5000;

var ORDER_STATUS = {
  SENT: "SENT", // not used in MT4 or backtest mode
  PENDING: "PENDING",
  OPENED: "OPENED",
  CLOSE_SENT: "CLOSE_SENT", // not used in MT4 or backtest mode
  CLOSING: "CLOSING", // not used in MT4 mode
  CLOSED: "CLOSED",
  CANCEL_SENT: "CANCEL_SENT", // not used in MT4 or backtest mode
  CANCELLED: "CANCELLED",
  UNKNOWN: "UNKNOWN"
};

var ORDER_EVENT = {
  SENT: "SENT",
  RECEIVED: "RECEIVED",
  OPENED: "OPENED",
  CLOSE_SENT: "CLOSE_SENT",
  CLOSE_RECEIVED: "CLOSE_RECEIVED",
  PARTIALLY_CLOSED: "PARTIALLY_CLOSED",
  CLOSED: "CLOSED",
  CANCEL_SENT: "CANCEL_SENT",
  CANCELLED: "CANCELLED"
};

var ORDER_SIDE = {
  BUY: 'buy',
  SELL: 'sell'
};


// moving average method
var MOVING_AVERAGE_METHOD = {
  SMA: 0,
  EMA: 1,
  SMMA: 2,
  LWMA: 3
};


var getPriceFromHistoData = function (histoData, appliedPrice) {
  return histoData.map(APPLIED_PRICE[appliedPrice]);
};


// Applied price
var APPLIED_PRICE = {
  PRICE_CLOSE: 0,
  PRICE_OPEN: 1,
  PRICE_HIGH: 2,
  PRICE_LOW: 3,
  PRICE_MEDIAN: 4,
  PRICE_TYPICAL: 5,
  PRICE_WEIGHTED: 6
};

APPLIED_PRICE[APPLIED_PRICE.PRICE_CLOSE] = function (data) {
  return data.close
};
APPLIED_PRICE[APPLIED_PRICE.PRICE_OPEN] = function (data) {
  return data.open
};
APPLIED_PRICE[APPLIED_PRICE.PRICE_HIGH] = function (data) {
  return data.high
};
APPLIED_PRICE[APPLIED_PRICE.PRICE_LOW] = function (data) {
  return data.low
};
APPLIED_PRICE[APPLIED_PRICE.PRICE_MEDIAN] = function (data) {
  return (data.high + data.low) / 2
};
APPLIED_PRICE[APPLIED_PRICE.PRICE_TYPICAL] = function (data) {
  return (data.high + data.low + data.close) / 3
};
APPLIED_PRICE[APPLIED_PRICE.PRICE_WEIGHTED] = function (data) {
  return (data.high + data.low + 2 * data.close) / 4
};


var getInterval = function (intervalName) {
  return {
    periodicity: parseInt(intervalName.substring(1)),
    periodicityUnit: {S: 1000, M: 60000, H: 3600000, D: 86400000}[intervalName.charAt(0)],
    inMillis: function () {
      return this.periodicity * this.periodicityUnit
    }
  };
};


var random = function (seed, iteration) {
  var x = Math.sin(seed * iteration) * 10000;
  return x - Math.floor(x);
};