var AgentExecutionEngine = function (agentExecutionEngineAdapter) {
  this.maxHistoByRequest = 500;
  this.histoCache = [];
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

  var startMoment = moment(endMoment).subtract(interval.periodicity * (this.maxHistoByRequest - 1), interval.periodicityUnit);


  return {
    start: startMoment.toDate(),
    end: endMoment.toDate(),
    periodicity: interval.periodicity,
    periodicityUnit: interval.periodicityUnit,
    each: function (callback) {
      for (var start = moment(startMoment);
           start.unix() <= endMoment.unix();
           start = start.add(interval.periodicity, interval.periodicityUnit)) {
        callback(start.toDate);
      }
    }
  };
};

AgentExecutionEngine.prototype.getCachedData = function (symbol, intervalAsString) {
  if (!this.histoCache[symbol]) {
    this.histoCache[symbol] = [];
  }
  return (this.histoCache[symbol][intervalAsString] || (this.histoCache[symbol][intervalAsString] = []));
};


AgentExecutionEngine.prototype.getHistoricalData = function (symbol, intervalAsString, dateTo, callBack) {
  var that = this;
  var interval = this.getIntervalAsTime(intervalAsString, dateTo);
  var currentData = this.getCachedData(symbol, intervalAsString);


  var missingData = [];
  interval.each(function (date) {
    if (!currentData(date)) {
      missingData.push(date);
    }
  });

  if (missingData.length > 0) {
    var minDate = _.max(interval.start, missingData[0]);
    var maxDate = _.min(interval.end, missingData[missingData.length]);
    this.agentExecutionEngineAdapter.requestHistoricalData(symbol, intervalAsString, interval.start, interval.end, function (data) {
      data.each(function (value) {
        currentData[value.date] = value;
      });

      callBack(currentData);
    });

  }

  callBack(currentData);
};


