var AgentExecutionEngine = function (agentExecutionEngineAdapter) {
  this.maxHistoByRequest = 500;
  this.histoCache = [];
  if (agentExecutionEngineAdapter) {
    this.agentExecutionEngineAdapter = agentExecutionEngineAdapter;
  } else {
    this.agentExecutionEngineAdapter = {
      getBars: function () {
        throw new Error("There is no adapter defined");
      }
    };
  }
  return this;
};



AgentExecutionEngine.prototype.getIntervalAsTime = function (intervalAsString, dateTo) {
  var interval = getInterval(intervalAsString);
  if (!dateTo) {
    dateTo = new Date();
  }

  var endMoment = moment(dateTo)
    .startOf(interval.periodicityUnit);
  do {
    endMoment = endMoment.subtract(1, interval.periodicityUnit)
  } while (endMoment.get(interval.periodicityUnit) % interval.periodicity !== 0);

  var startMoment = moment(endMoment).subtract(interval.periodicity * (this.maxHistoByRequest - 1), interval.periodicityUnit);


  return {
    start: startMoment.toDate(),
    end: endMoment.toDate(),
    periodicity: interval.periodicity,
    periodicityUnit: interval.periodicityUnit,
    forEach: function (callback) {
      for (var start = moment(startMoment);
           start.unix() <= endMoment.unix();
           start = start.add(interval.periodicity, interval.periodicityUnit)) {
        callback(moment(start).toDate());
      }
    }
  };
};

AgentExecutionEngine.prototype.getCachedData = function (symbol, intervalAsString) {
  if (!this.histoCache[symbol]) {
    this.histoCache[symbol] = [];
  }
  return (this.histoCache[symbol][intervalAsString] || (this.histoCache[symbol][intervalAsString] = {}));
};


AgentExecutionEngine.prototype.getHistoricalData = function (symbol, intervalAsString, dateTo, callBack) {
  var interval = this.getIntervalAsTime(intervalAsString, dateTo);
  var currentData = this.getCachedData(symbol, intervalAsString);

  var getDataForInterval = function (currentData, interval) {
    var filtered = [];
    interval.forEach(function (date) {
      if (currentData[date]) {
        filtered.push(currentData[date]);
      }
    });
    return filtered;
  };

  var missingData = [];
  interval.forEach(function (date) {
    if (!currentData[date]) {
      missingData.push(date);
    }
  });


  if (missingData.length > 0) {
    var minDate = (interval.start > missingData[0]) ? interval.start : missingData[0];
    var maxDate = (interval.end < missingData[missingData.length - 1]) ? interval.end : missingData[missingData.length - 1];
    this.agentExecutionEngineAdapter.getBars(symbol, intervalAsString, minDate, maxDate, function (data) {
      data.forEach(function (value) {
        currentData[value.date] = value;
      });

      callBack(getDataForInterval(currentData, interval));
    });

  }

  callBack(getDataForInterval(currentData, interval));
};


