/**
 * This test relies on Backtest Account adapter for simplicity
 */
describe('Backtest Market Adapter', function () {
  var marketAdapter;
  var accountAdapter;
  beforeEach(function () {
    accountAdapter = new BacktestAccountAdapter();
    marketAdapter = new BacktestMarketAdapter(accountAdapter);
  });

  var tick = function (bid, ask, symbol) {
    var tick = {bid: bid, ask: ask, symbol: symbol};
    marketAdapter.onTick(tick);
    accountAdapter.onTick(tick);
  };

  function simplify(order) {
    var simplifiedOrder = {
      amount: order.amount,
      symbol: order.symbol,
      type: order.type,
      side: order.side,
      id: order.id,
      status: order.status,
      initialAmount: order.initialAmount
    };
    if (order.openPrice) {
      simplifiedOrder.openPrice = order.openPrice;
    }
    if (order.limit) {
      simplifiedOrder.limit = order.limit;
    }
    if (order.closingPrice) {
      simplifiedOrder.closingPrice = order.closingPrice;
    }
    if (order.closingAmount) {
      simplifiedOrder.closingAmount = order.closingAmount;
    }
    if (order.closePrice) {
      simplifiedOrder.closePrice = order.closePrice;
    }

    return simplifiedOrder;
  }

  it("Market buy order are instantly executed at bid price", function () {
    var orderId = marketAdapter.sendOrder({amount: 1000, symbol: "EUR_USD", type: "market", side: 'buy'},
      {bid: 0.5, ask: 0.6, symbol: "EUR_JPY"});
    expect(simplify(marketAdapter.getOrder(orderId))).toEqual(
      {amount: 1000, symbol: 'EUR_USD', type: 'market', side: 'buy', id: 1, status: 'OPENED', initialAmount: 1000, openPrice: 0.6}
    )
  });


  it("Market sell order are instantly executed at ask price", function () {
    var orderId = marketAdapter.sendOrder({amount: 1000, symbol: "EUR_USD", type: "market", side: 'sell'},
      {bid: 0.5, ask: 0.6, symbol: "EUR_JPY"});
    expect(simplify(marketAdapter.getOrder(orderId))).toEqual(
      {amount: 1000, symbol: 'EUR_USD', type: 'market', side: 'sell', id: 1, status: 'OPENED', initialAmount: 1000, openPrice: 0.5}
    )
  });

  it("populate orders with pnl function", function () {
    var orderId = marketAdapter.sendOrder({amount: 1000, symbol: "EUR_USD", type: "market", side: 'sell'},
      {bid: 1, ask: 1.1, symbol: "EUR_JPY"});
    var order = marketAdapter.getOrder(orderId);
    expect(order.isBuy).toBeFalsy();
    expect(Math.round(order.lossInAmount({bid: 1, ask: 1.1, symbol: "EUR_JPY"}))).toEqual(100);
    expect(Math.round(order.lossInPercent({bid: 1, ask: 1.1, symbol: "EUR_JPY"}))).toEqual(10);
    expect(Math.round(order.profitInAmount({bid: 1, ask: 1.1, symbol: "EUR_JPY"}))).toEqual(0);
    expect(Math.round(order.profitInPercent({bid: 1, ask: 1.1, symbol: "EUR_JPY"}))).toEqual(0);
    expect(Math.round(order.lossInAmount({bid: 0.4, ask: 0.5, symbol: "EUR_JPY"}))).toEqual(0);
    expect(Math.round(order.lossInPercent({bid: 0.4, ask: 0.5, symbol: "EUR_JPY"}))).toEqual(0);
    expect(Math.round(order.profitInAmount({bid: 0.4, ask: 0.5, symbol: "EUR_JPY"}))).toEqual(500);
    expect(Math.round(order.profitInPercent({bid: 0.4, ask: 0.5, symbol: "EUR_JPY"}))).toEqual(50);


    orderId = marketAdapter.sendOrder({amount: 1000, symbol: "EUR_USD", type: "market", side: 'buy'},
      {bid: 0.9, ask: 1, symbol: "EUR_JPY"});
    order = marketAdapter.getOrder(orderId);
    expect(order.isBuy).toBeTruthy();
    expect(Math.round(order.lossInAmount({bid: 0.9, ask: 1, symbol: "EUR_JPY"}))).toEqual(100);
    expect(Math.round(order.lossInPercent({bid: 0.9, ask: 1, symbol: "EUR_JPY"}))).toEqual(10);
    expect(Math.round(order.profitInAmount({bid: 0.9, ask: 1, symbol: "EUR_JPY"}))).toEqual(0);
    expect(Math.round(order.profitInPercent({bid: 0.9, ask: 1, symbol: "EUR_JPY"}))).toEqual(0);
    expect(Math.round(order.lossInAmount({bid: 2, ask: 2.1, symbol: "EUR_JPY"}))).toEqual(0);
    expect(Math.round(order.lossInPercent({bid: 2, ask: 2.1, symbol: "EUR_JPY"}))).toEqual(0);
    expect(Math.round(order.profitInAmount({bid: 2, ask: 2.1, symbol: "EUR_JPY"}))).toEqual(1000);
    expect(Math.round(order.profitInPercent({bid: 2, ask: 2.1, symbol: "EUR_JPY"}))).toEqual(100);
  });


  it("Limit buy order are instantly executed at bid price if limit reached", function () {
    var orderId = marketAdapter.sendOrder({amount: 1000, symbol: "EUR_USD", type: "limit", side: 'buy', limit: 0.6},
      {bid: 0.5, ask: 0.6, symbol: "EUR_JPY"});
    expect(simplify(marketAdapter.getOrder(orderId))).toEqual(
      {amount: 1000, symbol: 'EUR_USD', type: 'limit', side: 'buy', limit: 0.6, id: 1, status: 'OPENED', initialAmount: 1000, openPrice: 0.6}
    )
  });


  it("Limit sell order are instantly executed at ask price if limit reached", function () {
    var orderId = marketAdapter.sendOrder({amount: 1000, symbol: "EUR_USD", type: "limit", side: 'sell', limit: 0.5},
      {bid: 0.5, ask: 0.6, symbol: "EUR_JPY"});
    expect(simplify(marketAdapter.getOrder(orderId))).toEqual(
      {amount: 1000, symbol: 'EUR_USD', type: 'limit', side: 'sell', limit: 0.5, id: 1, status: 'OPENED', initialAmount: 1000, openPrice: 0.5}
    )
  });


  it("Limit buy order are not executed if limit not reached", function () {
    var orderId = marketAdapter.sendOrder({amount: 1000, symbol: "EUR_USD", type: "limit", side: 'buy', limit: 0.5},
      {bid: 0.5, ask: 0.6, symbol: "EUR_JPY"});
    expect(simplify(marketAdapter.getOrder(orderId))).toEqual(
      {amount: 1000, symbol: 'EUR_USD', type: 'limit', side: 'buy', limit: 0.5, id: 1, status: 'PENDING', initialAmount: 1000}
    )
  });


  it("Limit sell order are not executed if limit not reached", function () {
    var orderId = marketAdapter.sendOrder({amount: 1000, symbol: "EUR_USD", type: "limit", side: 'sell', limit: 0.6},
      {bid: 0.5, ask: 0.6, symbol: "EUR_JPY"});
    expect(simplify(marketAdapter.getOrder(orderId))).toEqual(
      {amount: 1000, symbol: 'EUR_USD', type: 'limit', side: 'sell', limit: 0.6, id: 1, status: 'PENDING', initialAmount: 1000}
    )
  });


  it("Limit buy order are executed afterward if limit is reached", function () {
    var orderId = marketAdapter.sendOrder({amount: 1000, symbol: "EUR_USD", type: "limit", side: 'buy', limit: 0.5}, {
      bid: 0.5, ask: 0.6, symbol: "EUR_JPY"
    });
    tick(0.4, 0.5, "EUR_JPY");
    expect(simplify(marketAdapter.getOrder(orderId))).toEqual(
      {amount: 1000, symbol: 'EUR_USD', type: 'limit', side: 'buy', limit: 0.5, id: 1, status: 'OPENED', initialAmount: 1000, openPrice: 0.5}
    )
  });


  it("Limit sell order are executed afterward if limit is reached", function () {
    var orderId = marketAdapter.sendOrder({amount: 1000, symbol: "EUR_USD", type: "limit", side: 'sell', limit: 0.6}, {
      bid: 0.5, ask: 0.6, symbol: "EUR_JPY"
    });
    tick(0.6, 0.7, "EUR_JPY");
    expect(simplify(marketAdapter.getOrder(orderId))).toEqual(
      {amount: 1000, symbol: 'EUR_USD', type: 'limit', side: 'sell', limit: 0.6, id: 1, status: 'OPENED', initialAmount: 1000, openPrice: 0.6}
    )
  });


  it("can cancel an order", function () {
    var orderId = marketAdapter.sendOrder({amount: 1000, symbol: "EUR_USD", type: "limit", side: 'sell', limit: 0.6},
      {bid: 0.5, ask: 0.6, symbol: "EUR_JPY"});
    expect(marketAdapter.isPending(orderId)).toBeTruthy();
    marketAdapter.cancelOrder(orderId);
    expect(marketAdapter.isPending(orderId)).toBeFalsy();
  });


  it("completely closes a buy order if price reached limit", function () {
    var orderId = marketAdapter.sendOrder({amount: 1000, symbol: "EUR_USD", type: "market", side: 'buy'},
      {bid: 0.5, ask: 0.6, symbol: "EUR_JPY"});

    marketAdapter.closeOrder(orderId, 0.5, 1000, {bid: 0.5, ask: 0.6, symbol: "EUR_JPY"});

    expect(simplify(marketAdapter.getOrder(orderId))).toEqual({
        amount: 0, symbol: 'EUR_USD', type: 'market', side: 'buy', id: 1, status: 'CLOSED',
        initialAmount: 1000, openPrice: 0.6, closingPrice: 0.5, closingAmount: 1000, closePrice: 0.5
      }
    )
  });

  it("completely closes a sell order if price reached limit", function () {
    var orderId = marketAdapter.sendOrder({amount: 1000, symbol: "EUR_USD", type: "market", side: 'sell'},
      {bid: 0.5, ask: 0.6, symbol: "EUR_JPY"});

    marketAdapter.closeOrder(orderId, 0.6, 1000, {bid: 0.5, ask: 0.6, symbol: "EUR_JPY"});

    expect(simplify(marketAdapter.getOrder(orderId))).toEqual(
      {
        amount: 0, symbol: 'EUR_USD', type: 'market', side: 'sell', id: 1, status: 'CLOSED',
        initialAmount: 1000, openPrice: 0.5, closingPrice: 0.6, closingAmount: 1000, closePrice: 0.6
      }
    )
  });


  it("doesn't close a buy order if price didn't reach limit", function () {
    var orderId = marketAdapter.sendOrder({amount: 1000, symbol: "EUR_USD", type: "market", side: 'buy'},
      {bid: 0.5, ask: 0.6, symbol: "EUR_JPY"});

    marketAdapter.closeOrder(orderId, 0.6, 1000, {bid: 0.5, ask: 0.6, symbol: "EUR_JPY"});

    expect(simplify(marketAdapter.getOrder(orderId))).toEqual({
        amount: 1000, symbol: 'EUR_USD', type: 'market', side: 'buy', id: 1,
        status: 'CLOSING', initialAmount: 1000, openPrice: 0.6, closingPrice: 0.6, closingAmount: 1000
      }
    )
  });

  it("doesn't close a sell order if price didn't reach limit", function () {
    var orderId = marketAdapter.sendOrder({amount: 1000, symbol: "EUR_USD", type: "market", side: 'sell'},
      {bid: 0.5, ask: 0.6, symbol: "EUR_JPY"});

    marketAdapter.closeOrder(orderId, 0.5, 1000, {bid: 0.5, ask: 0.6, symbol: "EUR_JPY"});

    expect(simplify(marketAdapter.getOrder(orderId))).toEqual(
      {
        amount: 1000, symbol: 'EUR_USD', type: 'market', side: 'sell', id: 1, status: 'CLOSING',
        initialAmount: 1000, openPrice: 0.5, closingPrice: 0.5, closingAmount: 1000
      }
    )
  });


  it("supports partial close", function () {
    var orderId = marketAdapter.sendOrder({amount: 1000, symbol: "EUR_USD", type: "market", side: 'buy'},
      {bid: 0.5, ask: 0.6, symbol: "EUR_JPY"});

    marketAdapter.closeOrder(orderId, 0.5, 200, {bid: 0.5, ask: 0.6, symbol: "EUR_JPY"});

    expect(simplify(marketAdapter.getOrder(orderId))).toEqual({
        amount: 800, symbol: 'EUR_USD', type: 'market', side: 'buy', id: 1, status: 'OPENED',
        initialAmount: 1000, openPrice: 0.6, closingPrice: 0.5, closingAmount: 200, closePrice: 0.5
      }
    )
  });

});