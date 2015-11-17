var notYetImplemented = function (functionName) {
  return function () {
    console.error(functionName + " : not yet implemented");
    throw new Error(functionName);
  }
};


var MQL4 = function () {
  this._knownStructures = {};
  this._lastTickDate = new Date(); // TODO need real updates

  this.defineStruct = function () {
    this._knownStructures[arguments[0]] = Array.prototype.slice.call(arguments, 1);
  };

  this.defineStruct('MqlDateTime', 'year', 'mon', 'day', 'hour', 'min', 'sec', 'day_of_week', 'day_of_year');
  this.defineStruct('MqlRates', 'time', 'open', 'high', 'low', 'close', 'tick_volume', 'spread', 'real_volume');
  this.defineStruct('MqlTick', 'time', 'bid', 'ask', 'last', 'volume');
  return this;
};

MQL4.prototype._updateLastTickDate = function (date) {
  return this._lastTickDate = date;
};

MQL4.prototype.setCharacter = notYetImplemented('setCharacter');
MQL4.prototype.normalizeDouble = function (value, digits) {
  var exp = Math.pow(10, digits);
  return Math.round(value * exp) / exp;
};
MQL4.prototype.toNumber = function (str) {
  return 1 * str;
};

//Conversion
MQL4.prototype.charArrayToString = function (array, start, count) {
  switch (arguments.length) {
    case 1:
      start = 0;
    case 2:
      count = -1;
  }

  var toReturn = "";
  var end = (count == -1) ? array.length : (start + count);
  for (var i = start; i < end; i++) {
    toReturn += String.fromCharCode(array[i]);
  }

  return toReturn;
};


MQL4.prototype.doubleToString = function (value, digits) {

  if (arguments.length == 1) {
    digits = 8;
  }

  return digits > 0 ? value.toFixed(digits) : value.toExponential(-digits);

};


MQL4.prototype.integerToString = function (number, str_len, fill_symbol) {
  switch (arguments.length) {
    case 1:
      str_len = 0;
    case 2:
      fill_symbol = " ";
  }
  fill_symbol = (typeof fill_symbol === "string") ? fill_symbol : String.fromCharCode(fill_symbol);


  var value = '' + number;
  while (value.length < str_len) {
    value = fill_symbol + value;
  }
  return value;
};

MQL4.prototype.shortToString = function (unicode) {
  return String.fromCharCode(unicode);
};

MQL4.prototype.shortArrayToString = MQL4.prototype.charArrayToString;

MQL4.prototype.stringToCharArray = function (text_string, start, count) {
  switch (arguments.length) {
    case 1:
      start = 0;
    case 2:
      count = -1;
  }

  var toConvert = text_string.substring(start, count == -1 ? text_string.length : (start + count));

  return toConvert.split('').map(function (c) {
    return c.charCodeAt(0)
  })

};


MQL4.prototype.stringToShortArray = MQL4.prototype.stringToCharArray;

MQL4.prototype.stringToTime = function (value) {
  var split = value.split(/[\. :]/);
  return new Date(split[0], 1 * split[1] + 1, split[2], split[3], split[4]);
};


MQL4.prototype.timeToString = function (date, mode) {
  if (arguments.length == 1) {
    mode = MQL4.TIME_DATE | MQL4.TIME_MINUTES;
  }
  var toReturn = [];

  //noinspection JSBitwiseOperatorUsage
  if ((mode & MQL4.TIME_DATE) > 0) {
    toReturn.push(date.getFullYear() + "." +
      (this.integerToString(date.getMonth() + 1, 2, "0")) + "." +
      this.integerToString(date.getDate(), 2, "0"));
  }

  //noinspection JSBitwiseOperatorUsage
  if ((mode & MQL4.TIME_MINUTES) > 0) {
    toReturn.push((this.integerToString(date.getHours(), 2, "0") ) +
      ":" + this.integerToString(date.getMinutes(), 2, "0"));
  }

  //noinspection JSBitwiseOperatorUsage
  if ((mode & MQL4.TIME_SECONDS) > 0) {
    toReturn.push((this.integerToString(date.getHours(), 2, "0") ) +
      ":" + this.integerToString(date.getMinutes(), 2, "0") +
      ":" + this.integerToString(date.getSeconds(), 2, "0"));
  }

  return toReturn.join(" ");
};

MQL4.prototype.stringFormat =  function(){
  return sprintf.apply(null, arguments);
}

// array
MQL4.prototype.arrayBsearch = notYetImplemented('arrayBsearch');
MQL4.prototype.arrayCompare = notYetImplemented('arrayCompare');
MQL4.prototype.arrayGetAsSeries = notYetImplemented('arrayGetAsSeries');
MQL4.prototype.arrayFill = notYetImplemented('arrayFill');
MQL4.prototype.arrayIsSeries = notYetImplemented('arrayIsSeries');
MQL4.prototype.arrayMaximum = notYetImplemented('arrayMaximum');
MQL4.prototype.arrayMinimum = notYetImplemented('arrayMinimum');
MQL4.prototype.arrayRange = notYetImplemented('arrayRange');

MQL4.prototype.arrayPrepend = function (array, value) {
  var toReturn = [value];
  Array.prototype.push.apply(toReturn, array);
  return toReturn;
};

MQL4.prototype.arrayResize = function (array, newSize) {
  if (array.length > newSize) {
    while (array.length > newSize) {
      array.pop();
    }
  } else if (array.length < newSize) {

    var increment = this.newArray({
      dimensions: this.arrayPrepend(array.sizes, newSize - array.length),
      dynamic: false,
      defaultValue: array.defaultValue
    });
    Array.prototype.push.apply(array, increment);
  }
};


MQL4.prototype.arraySetAsSeries = notYetImplemented('arraySetAsSeries');
MQL4.prototype.arraySort = notYetImplemented('arraySort');
MQL4.prototype.arrayCopyRates = notYetImplemented('arrayCopyRates');
MQL4.prototype.arrayCopySeries = notYetImplemented('arrayCopySeries');
MQL4.prototype.arrayDimension = notYetImplemented('arrayDimension');

// account
MQL4.prototype.accountInfo = notYetImplemented('accountInfo');
MQL4.prototype.accountBalance = notYetImplemented('accountBalance');
MQL4.prototype.accountCompany = notYetImplemented('accountCompany');
MQL4.prototype.accountCredit = notYetImplemented('accountCredit');
MQL4.prototype.accountCurrency = notYetImplemented('accountCurrency');
MQL4.prototype.accountEquity = notYetImplemented('accountEquity');
MQL4.prototype.accountFreeMargin = notYetImplemented('accountFreeMargin');
MQL4.prototype.accountFreeMarginCheck = notYetImplemented('accountFreeMarginCheck');
MQL4.prototype.accountFreeMarginMode = notYetImplemented('accountFreeMarginMode');
MQL4.prototype.accountLeverage = notYetImplemented('accountLeverage');
MQL4.prototype.accountMargin = notYetImplemented('accountMargin');
MQL4.prototype.accountName = notYetImplemented('accountName');
MQL4.prototype.accountNumber = notYetImplemented('accountNumber');
MQL4.prototype.accountProfit = notYetImplemented('accountProfit');
MQL4.prototype.accountServer = notYetImplemented('accountServer');
MQL4.prototype.accountStopoutLevel = notYetImplemented('accountStopoutLevel');
MQL4.prototype.accountStopoutMode = notYetImplemented('accountStopoutMode');

// common
MQL4.prototype.sendMail = notYetImplemented('sendMail');
MQL4.prototype.periodSeconds = notYetImplemented('periodSeconds');

// Time
MQL4.prototype.timeCurrent = function (dtStruct) {
  if (dtStruct) {
    this.timeToStruct(this._lastTickDate, dtStruct);
  }
  return this._lastTickDate;
};


MQL4.prototype.timeGMT = function (dtStruct) {

  var date = new Date();
  var timeGMT = new Date(date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds());

  timeGMT.offset = (date - timeGMT) / 1000;
  timeGMT.dateLocale = date;

  if (dtStruct) {
    this.timeToStruct(timeGMT, dtStruct);
  }
  return timeGMT;
};

MQL4.prototype.timeDaylightSavings = function () {
  var dateGMT = this.timeGMT();
  return (dateGMT.dateLocale - dateGMT) / 1000 + this.timeGMTOffset();
};


MQL4.prototype.timeGMTOffset = function () {
  return new Date().getTimezoneOffset() * 60;
};


MQL4.prototype.timeDayOfYear = function (date) {
  return 1 + (new Date(date.getFullYear(), date.getMonth(), date.getDate()) - new Date(date.getFullYear(), 0, 1)) / 86400000;
};

MQL4.prototype.timeToStruct = function (date, dtStruct) {
  if (!dtStruct) {
    dtStruct = {};
  }

  dtStruct.year = date.getFullYear();
  dtStruct.mon = date.getMonth() + 1;
  dtStruct.day = date.getDate();
  dtStruct.hour = date.getHours();
  dtStruct.min = date.getMinutes();
  dtStruct.sec = date.getSeconds();
  dtStruct.day_of_week = date.getDay();
  dtStruct.day_of_year = this.timeDayOfYear(date);

  return dtStruct;
};

MQL4.prototype.structToTime = function (dateStruct) {
  return new Date(dateStruct.year, dateStruct.mon - 1, dateStruct.day, dateStruct.hour, dateStruct.min, dateStruct.sec);
};


MQL4.prototype.dayOfYear = function () {
  return this.timeDayOfYear(new Date());
};

// TimeSeries
MQL4.prototype.seriesInfo = notYetImplemented('seriesInfo');
MQL4.prototype.refreshRates = notYetImplemented('refreshRates');
MQL4.prototype.getRates = notYetImplemented('getRates');
MQL4.prototype.getTimes = notYetImplemented('getTimes');
MQL4.prototype.getOpens = notYetImplemented('getOpens');
MQL4.prototype.getHighs = notYetImplemented('getHighs');
MQL4.prototype.getLows = notYetImplemented('getLows');
MQL4.prototype.getCloses = notYetImplemented('getCloses');
MQL4.prototype.getTickVolumes = notYetImplemented('getTickVolumes');
MQL4.prototype.bars = notYetImplemented('bars');
MQL4.prototype.iBars = notYetImplemented('iBars');
MQL4.prototype.iBarShift = notYetImplemented('iBarShift');
MQL4.prototype.iTime = notYetImplemented('iTime');
MQL4.prototype.iOpen = notYetImplemented('iOpen');
MQL4.prototype.iHigh = notYetImplemented('iHigh');
MQL4.prototype.iLow = notYetImplemented('iLow');
MQL4.prototype.iClose = notYetImplemented('iClose');
MQL4.prototype.iVolume = notYetImplemented('iVolume');

// Trades
MQL4.prototype.orderClose = notYetImplemented('orderClose');
MQL4.prototype.orderCloseBy = notYetImplemented('orderCloseBy');
MQL4.prototype.orderClosePrice = notYetImplemented('orderClosePrice');
MQL4.prototype.orderCloseTime = notYetImplemented('orderCloseTime');
MQL4.prototype.orderComment = notYetImplemented('orderComment');
MQL4.prototype.orderCommission = notYetImplemented('orderCommission');
MQL4.prototype.orderDelete = notYetImplemented('orderDelete');
MQL4.prototype.orderExpiration = notYetImplemented('orderExpiration');
MQL4.prototype.orderLots = notYetImplemented('orderLots');
MQL4.prototype.orderMagicNumber = notYetImplemented('orderMagicNumber');
MQL4.prototype.orderModify = notYetImplemented('orderModify');
MQL4.prototype.orderSelect = notYetImplemented('orderSelect');
MQL4.prototype.orderSend = notYetImplemented('orderSend');
MQL4.prototype.ordersHistoryTotal = notYetImplemented('ordersHistoryTotal');
MQL4.prototype.orderStopLoss = notYetImplemented('orderStopLoss');
MQL4.prototype.ordersTotal = notYetImplemented('ordersTotal');
MQL4.prototype.orderSwap = notYetImplemented('orderSwap');
MQL4.prototype.orderSymbol = notYetImplemented('orderSymbol');
MQL4.prototype.orderTakeProfit = notYetImplemented('orderTakeProfit');
MQL4.prototype.orderTicket = notYetImplemented('orderTicket');
MQL4.prototype.orderType = notYetImplemented('orderType');

MQL4.prototype.iAC = notYetImplemented('iAC');
MQL4.prototype.iAD = notYetImplemented('iAD');
MQL4.prototype.iADX = notYetImplemented('iADX');
MQL4.prototype.iAlligator = notYetImplemented('iAlligator');
MQL4.prototype.iAO = notYetImplemented('iAO');
MQL4.prototype.iATR = notYetImplemented('iATR');
MQL4.prototype.iBearsPower = notYetImplemented('iBearsPower');
MQL4.prototype.iBands = notYetImplemented('iBands');
MQL4.prototype.iBandsOnArray = notYetImplemented('iBandsOnArray');
MQL4.prototype.iBullsPower = notYetImplemented('iBullsPower');
MQL4.prototype.iCCI = notYetImplemented('iCCI');
MQL4.prototype.iCCIOnArray = notYetImplemented('iCCIOnArray');
MQL4.prototype.iCustom = notYetImplemented('iCustom');
MQL4.prototype.iDeMarker = notYetImplemented('iDeMarker');
MQL4.prototype.iEnvelopes = notYetImplemented('iEnvelopes');
MQL4.prototype.iEnvelopesOnArray = notYetImplemented('iEnvelopesOnArray');
MQL4.prototype.iForce = notYetImplemented('iForce');
MQL4.prototype.iFractals = notYetImplemented('iFractals');
MQL4.prototype.iGator = notYetImplemented('iGator');
MQL4.prototype.iIchimoku = notYetImplemented('iIchimoku');
MQL4.prototype.iBWMFI = notYetImplemented('iBWMFI');
MQL4.prototype.iMomentum = notYetImplemented('iMomentum');
MQL4.prototype.iMomentumOnArray = notYetImplemented('iMomentumOnArray');
MQL4.prototype.iMFI = notYetImplemented('iMFI');
MQL4.prototype.iMA = notYetImplemented('iMA');
MQL4.prototype.iMAOnArray = notYetImplemented('iMAOnArray');
MQL4.prototype.iOsMA = notYetImplemented('iOsMA');
MQL4.prototype.iMACD = notYetImplemented('iMACD');
MQL4.prototype.iOBV = notYetImplemented('iOBV');
MQL4.prototype.iSAR = notYetImplemented('iSAR');
MQL4.prototype.iRSI = notYetImplemented('iRSI');
MQL4.prototype.iRSIOnArray = notYetImplemented('iRSIOnArray');
MQL4.prototype.iRVI = notYetImplemented('iRVI');
MQL4.prototype.iStdDev = notYetImplemented('iStdDev');
MQL4.prototype.iStdDevOnArray = notYetImplemented('iStdDevOnArray');
MQL4.prototype.iStochastic = notYetImplemented('iStochastic');
MQL4.prototype.iWPR = notYetImplemented('iWPR');

// language artifacts
MQL4.prototype.newStruct = function () {
  var toReturn = {}
  var names = this._knownStructures[arguments[0]];
  for (var i = 0; i < names.length; i++) {
    toReturn[names[i]] = arguments[i + 1];
  }
  return toReturn;
};


MQL4.prototype.date = function (dateStr) {
  if (dateStr) {
    var dateAndTime = dateStr.split(" ");
    var dateComponents = dateAndTime[0].split('.');
    var year = 1 * (dateComponents[0].length == 4 ? dateComponents[0] : dateComponents[2]);
    var month = 1 * dateComponents[1] - 1;
    var day = 1 * (dateComponents[0].length == 4 ? dateComponents[2] : dateComponents[0]);

    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var milliseconds = 0;

    if (dateAndTime.length > 1) {
      var timeComponents = dateAndTime[1].split(':');
      //noinspection FallThroughInSwitchStatementJS
      switch (timeComponents.length) {
        case 4:
          milliseconds = 1 * (timeComponents[3]);
        case 3:
          seconds = 1 * (timeComponents[2]);
        case 2:
          minutes = 1 * (timeComponents[1]);
        case 1:
          hours = 1 * (timeComponents[0]);
      }
    }

    return new Date(year, month, day, hours, minutes, seconds, milliseconds);
  }
  return new Date();
};


MQL4.prototype.include = notYetImplemented('include');

MQL4.prototype.newArray = function (arrayArguments) {
  var createSubArray = function (sizes, currentIndex) {
    if (!currentIndex) {
      currentIndex = 0;
    }
    var toReturn = [];
    var isSubArray = sizes.length > 1;
    for (var i = 0; i < sizes[0]; i++) {
      if (isSubArray) {
        toReturn[i] = createSubArray(sizes.slice(1), currentIndex);
        currentIndex += sizes.slice(2).reduce(function (acc, i) {
          return acc * i
        }, sizes[1]);
      } else {
        toReturn[i] = arrayArguments.data ? arrayArguments.data[currentIndex + i] : arrayArguments.defaultValue;
      }
    }
    return toReturn;
  };

  var toReturn = [];
  toReturn.sizes = arrayArguments.dimensions;
  toReturn.dynamic = arrayArguments.dynamic;
  toReturn.dim = toReturn.sizes.length + (toReturn.dynamic ? 1 : 0);
  toReturn.defaultValue = arrayArguments.defaultValue;


  if (!arrayArguments.dynamic) {
    toReturn = createSubArray(toReturn.sizes, 0);
  } else if (arrayArguments.data) {
    toReturn = createSubArray(
      this.arrayPrepend(toReturn.sizes,
        arrayArguments.data.length / toReturn.sizes.reduce(function (val, acc) {
          return acc * val
        }, 1)
      )
    );

  }
  return toReturn;
};


MQL4.prototype.throwNotSupportedFunction = function (msg) {
  console.error(msg + " : Not supported");
  throw new Error(msg + " : Not supported");
};

// Constants
MQL4.TIME_DATE = 1;
MQL4.TIME_MINUTES = 2;
MQL4.TIME_SECONDS = 4;

