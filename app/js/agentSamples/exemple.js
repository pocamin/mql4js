var nbTickSup = 0;
var orderId = -1;
var percent = 3;
var nbPeriod = 5;
var amount = 1000;
var init = function () {
  console.log("-------------------------------------------------");
  console.log("buy " + amount + " if bid > sma10 for " + nbPeriod + " and sell if +-" + percent + "%");
  console.log("-------------------------------------------------");
  indicators["sma10"] = new MovingAverageIndicator(env.mainBarAdapter, MOVING_AVERAGE_METHOD.SMA, 10, "close");
};

var onTick = function (tick) {
  if (tick.bid > indicators["sma10"].getFromLast(0)) {
    nbTickSup++;
  } else {
    nbTickSup = 0;
  }


  switch (env.marketAdapter.orderStatus(orderId)) {
    case ORDER_STATUS.UNKNOWN :
    case ORDER_STATUS.CLOSED :
      if (nbTickSup >= nbPeriod) {
        orderId = env.marketAdapter.sendOrder({
            symbol: env.symbol,
            amount: 1000,
            type: "limit",
            limit: tick.bid,
            side: ORDER_SIDE.BUY
          },
          tick);
      }
      break;

    case ORDER_STATUS.OPENED :
      var openPrice = env.marketAdapter.getOrder(orderId).openPrice;
      var currentPercent = 100 * Math.abs(openPrice - tick.bid) / openPrice;

      if (currentPercent > percent) {
        env.marketAdapter.closeOrder(orderId, tick.bid, 1000, tick);
      }
  }
};

