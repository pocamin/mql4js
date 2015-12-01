describe('Backtest Account Adapter', function () {
  describe("if price don't change you loose money", function () {
    it("on a long position", function () {
      var accountAdapter = new BacktestAccountAdapter();
      var tick = {bid: 0.5, ask: 0.6};
      accountAdapter.addPosition("EUR_USD", 1000, tick);
      expect(accountAdapter.getTotalPL()).toBe(-100)
    });
    it("on a short position", function () {
      var accountAdapter = new BacktestAccountAdapter();
      var tick = {bid: 0.5, ask: 0.6};
      accountAdapter.addPosition("EUR_USD", -1000, tick);
      expect(accountAdapter.getTotalPL()).toBe(-100)
    });
  });

  describe("if price change you might get some money", function () {
    it("on a long position", function () {
      var accountAdapter = new BacktestAccountAdapter();
      var tick = {bid: 0.5, ask: 0.6};
      accountAdapter.addPosition("EUR_USD", 1000, tick);
      accountAdapter.onTick({bid: 0.7, ask: 0.8, symbol: "EUR_USD"});
      expect(accountAdapter.getTotalPL()).toBe(100)
    });
    it("on a short position", function () {
      var accountAdapter = new BacktestAccountAdapter();
      var tick = {bid: 0.5, ask: 0.6};
      accountAdapter.addPosition("EUR_USD", -1000, tick);
      accountAdapter.onTick({bid: 0.1, ask: 0.2, symbol: "EUR_USD"});
      expect(accountAdapter.getTotalPL()).toBe(300)
    });
  });

});