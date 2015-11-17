var AgentExecutionEngine = function (agentExecutionEngineAdapter) {
  this.maxValuesInCache = 500;
  this.cache = [];
  if (agentExecutionEngineAdapter) {
    this.agentExecutionEngineAdapter = agentExecutionEngineAdapter;
  } else {
    this.agentExecutionEngineAdapter = {
      requestHistoricalData: function () {
        throw new Error("There is no adapter defined");
      }
    };
  }
  return this;
};

AgentExecutionEngine.prototype.getInterval = function (intervalAsString) {
  return {
    periodicity: parseInt(intervalAsString.substring(1)),
    periodicityUnit: {M: 'minute', H: 'hour', D: 'day'}[intervalAsString.charAt(0)]
  };
};

AgentExecutionEngine.prototype.getIntervalAsTime = function (intervalAsString, dateTo) {
  var interval = this.getInterval(intervalAsString);
  if (!dateTo) {
    dateTo = new Date();
  }

  var endMoment = moment(dateTo)
    .startOf(interval.periodicityUnit);


  do {
    endMoment = endMoment.subtract(1, interval.periodicityUnit)
  } while (endMoment.get(interval.periodicityUnit) % interval.periodicity !== 0);

  return {
    start: moment(endMoment).subtract(interval.periodicity * (this.maxValuesInCache - 1), interval.periodicityUnit).toDate(),
    end: endMoment.toDate(),
    periodicity: interval.periodicity,
    periodicityUnit: interval.periodicityUnit
  };
};

AgentExecutionEngine.prototype.getCachedData = function (symbol, intervalAsString) {
  if (!this.cache[symbol]) {
    this.cache[symbol] = [];
  }
  return (this.cache[symbol][intervalAsString] || (this.cache[symbol][intervalAsString] = []));
};


AgentExecutionEngine.prototype.getHistoricalData = function (symbol, intervalAsString, dateTo, callBack) {
  var that = this;
  var interval = this.getIntervalAsTime(intervalAsString, dateTo);
  var currentData = this.getCachedData(symbol, intervalAsString);

  // Trim interval to search
  if (currentData.length > 0) {
    var minDate = currentData[0].date;
    var maxDate = currentData[currentData.length - 1].date;
    if (minDate > interval.start || maxDate < interval.start) {
      currentData = []; // Do support left filling
    } else {
      interval.start = moment(maxDate).add(interval.periodicity, interval.periodicityUnit).toDate();
    }
  }

  if (interval.start <= interval.end) {
    this.agentExecutionEngineAdapter.requestHistoricalData(symbol, intervalAsString, interval.start, interval.end, function (data) {
      currentData.push.apply(currentData, data);
      if (currentData.length > that.maxValuesInCache) {
        currentData.splice(0, currentData.length - that.maxValuesInCache);
      }
      callBack(currentData);
    });
  } else callBack(currentData);
};


