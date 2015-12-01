var BackTestWithRandomEnv = function (tickPeriodInMs, tickBySecond) {
  var env = {};

  // Random part
  env.getTickAdapter = function (currency, startDate) {
    var tickAdapter = new RandomTickAdapter(currency, startDate, {tickPeriodInMs: tickPeriodInMs, speed: tickPeriodInMs * tickBySecond / 1000});
    tickAdapter.addListener(env.marketAdapter);
    return tickAdapter;
  };
  env.getBarAdapter = function (currency, interval, tickAdapter, startDate) {
    var rba = new RandomBarAdapter(currency, interval, startDate);
    rba.init();
    tickAdapter.addListener(rba);
    return rba;
  };


  // Backtest part
  env.accountAdapter = new BacktestAccountAdapter();
  env.marketAdapter = new BacktestMarketAdapter(env.accountAdapter);


  return env;
};



