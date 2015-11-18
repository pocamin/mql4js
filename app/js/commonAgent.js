// moving average method
var MOVING_AVERAGE_METHOD = {
  SMA: 0,
  EMA: 1,
  SMMA: 2,
  LWMA: 3
};


getPriceFromHistoData = function (histoData, appliedPrice) {
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

