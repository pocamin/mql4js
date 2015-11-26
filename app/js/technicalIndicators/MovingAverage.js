var MOVING_AVERAGE = {};

MOVING_AVERAGE.compute = function (data, periods, method) {
  switch (method) {
    case MOVING_AVERAGE_METHOD.SMA :
      return MOVING_AVERAGE.computeSMA(data, periods);
    case MOVING_AVERAGE_METHOD.EMA :
      return MOVING_AVERAGE.computeEMA(data, periods);
    case MOVING_AVERAGE_METHOD.SMMA :
      return MOVING_AVERAGE.computeSMMA(data, periods);
    case MOVING_AVERAGE_METHOD.LWMA :
      return MOVING_AVERAGE.computeLMMA(data, periods);
  }
};

MOVING_AVERAGE.computeLMMA = function (data, periods) {
  var toReturn = [];
  var subArray = [];
  for (var i = 0; i < data.length; i++) {
    subArray.push(data[i]);
    if (subArray.length > periods) {
      subArray.splice(0, 1);
    }
    if (subArray.length == periods) {
      var sum = subArray.map(function (value, idx) {
        return (idx + 1) * value
      }).reduce(function (acc, value) {
        return acc + value
      });
      toReturn.push(2 * sum / (periods * (periods + 1)));
    }
  }
  return toReturn;
};


MOVING_AVERAGE.computeEMA = function (data, periods) {
  var toReturn = [];
  var multiplier = (2 / (periods + 1));
  var ema = 0;
  for (var i = 0; i < data.length; i++) {
    if (i < periods - 1) {
      ema += data[i];
    } else {
      if (i == periods - 1) {
        ema = (ema + data[i]) / periods;
      } else {
        ema += (data[i] - ema) * multiplier;
      }
      toReturn.push(ema);
    }
  }
  return toReturn;
};

MOVING_AVERAGE.computeSMA = function (data, periods) {
  var toReturn = [];
  var sum = 0;
  for (var i = 0; i < data.length; i++) {
    sum += data[i];
    if (i >= periods) {
      sum -= data[i - periods];
    }

    if (i >= periods - 1) {
      toReturn.push(sum / periods)
    }
  }
  return toReturn;
};


MOVING_AVERAGE.computeSMMA = function (data, periods) {
  var toReturn = [];
  var sum = 0;
  for (var i = 0; i < data.length; i++) {
    if (i < periods - 1) {
      sum += data[i];
    } else {
      if (i == periods - 1) {
        sum = sum + data[i];
      } else {
        sum = data[i] + sum - sum / periods;
      }
      toReturn.push(sum / periods);
    }
  }
  return toReturn;
};