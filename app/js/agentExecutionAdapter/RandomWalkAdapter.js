var RandomWalkAdapter = function (currentTimeProvider, histoMaxSize, seed) {
  this.seed = seed || 1;
  if (currentTimeProvider) {
    this.currentTimeProvider = currentTimeProvider;
  } else {
    this.currentTimeProvider = function () {
      return new Date()
    };
  }

  this.HISTO_MAX_SIZE = histoMaxSize ? histoMaxSize : 1000;
  this.histoData = {};
  this.fillMissingHistoData("M1");
  this.fillMissingHistoData("M15");
  this.fillMissingHistoData("M30");
  this.fillMissingHistoData("H1");
  this.fillMissingHistoData("H4");
  this.fillMissingHistoData("H8");
  this.fillMissingHistoData("D1");
};






RandomWalkAdapter.prototype.random = function () {
  var x = Math.sin(this.seed++) * 10000;
  return x - Math.floor(x);
};


RandomWalkAdapter.prototype.fillMissingHistoData = function (intervalAsString) {
  var that = this;
  var increment = 0.001;
  var interval = getInterval(intervalAsString);

  var now = moment(this.currentTimeProvider()).startOf(interval.periodicityUnit);
  while (now.get(interval.periodicityUnit) % interval.periodicity !== 0) {
    now.subtract(1, interval.periodicityUnit)
  }

  var start = moment(now).subtract(this.HISTO_MAX_SIZE * interval.periodicity, interval.periodicityUnit),
    current = 1;

  var histoData = this.histoData[intervalAsString];
  if (histoData) {
    var last = histoData[histoData.length - 1];
    start = moment(last.date).add(interval.periodicity, interval.periodicityUnit);
    current = last.close;
  } else {
    histoData = [];
    this.histoData[intervalAsString] = histoData;
  }

  function walk() {
    current += ( that.random() > 0.5 ? increment : -increment);
    if (current <= 0) {
      current = increment;
    }
    current = Math.round(current * 1000) / 1000;
  }

  while (start.isBefore(now)) {
    walk();
    var open = current, low = current, high = current;

    for (var i = 0; i < 10; i++) {
      walk();
      if (current < low) {
        low = current;
      }
      if (current > high) {
        high = current;
      }
    }

    histoData.push({
      open: open,
      low: low,
      high: high,
      close: current,
      date: moment(start).toDate()
    });

    start.add(interval.periodicity, interval.periodicityUnit);
  }
};


RandomWalkAdapter.prototype.requestHistoricalData = function (symbol, intervalAsString, from, to, callBack) {
  this.fillMissingHistoData(intervalAsString);
  callBack(this.histoData[intervalAsString].filter(function (value) {
    return value.date >= from && (!to || value.date <= to)
  }));
};