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


  it("doesn't change if not concerned", function () {
    expect(accountAdapter.getTotalPL()).toEqual(0);
    marketAdapter.addOrder({amount: 1000, symbol: "EUR_USD", type: "market"});
    expect(accountAdapter.getTotalPL()).toEqual(0);
    tick(0.5, 0.6, "EUR_JPY"); // Other currency
    expect(accountAdapter.getTotalPL()).toEqual(0);
  });


  it("can cancel an order ", function () {
    var orderId = marketAdapter.addOrder({amount: 1000, symbol: "EUR_USD", type: "limit", limit: 10});
    expect(marketAdapter.isPending(orderId)).toBeTruthy();
    marketAdapter.cancelOrder(orderId);
    expect(marketAdapter.isPending(orderId)).toBeFalsy();
  });


  it('accepts market order', function () {
    marketAdapter.addOrder({amount: 1000, symbol: "EUR_USD", type: "market"});
    tick(0.5, 0.6, "EUR_USD");
    expect(accountAdapter.getTotalPL()).toEqual(-100);
    tick(0.5, 0.6, "EUR_USD");
    expect(accountAdapter.getTotalPL()).toEqual(-100);
    tick(0.6, 0.7, "EUR_USD");
    expect(accountAdapter.getTotalPL()).toEqual(0);
    tick(0.7, 0.8, "EUR_USD");
    expect(accountAdapter.getTotalPL()).toEqual(100);
  });

  describe('accepts limit order', function () {

    it("with long position", function () {
      marketAdapter.addOrder({amount: 1000, symbol: "EUR_USD", type: "limit", limit: 0.4});
      tick(0.5, 0.6, "EUR_USD");
      expect(accountAdapter.getTotalPL()).toEqual(0);
      tick(0.4, 0.5, "EUR_USD");
      expect(accountAdapter.getTotalPL()).toEqual(0);
      tick(0.3, 0.4, "EUR_USD");
      expect(accountAdapter.getTotalPL()).toEqual(-100);
    });

    it("with short position", function () {
      marketAdapter.addOrder({amount: -1000, symbol: "EUR_USD", type: "limit", limit: 0.7});
      tick(0.5, 0.6, "EUR_USD");
      expect(accountAdapter.getTotalPL()).toEqual(0);
      tick(0.6, 0.7, "EUR_USD");
      expect(accountAdapter.getTotalPL()).toEqual(0);
      tick(0.7, 0.8, "EUR_USD");
      expect(accountAdapter.getTotalPL()).toEqual(-100);
    });

  });


});