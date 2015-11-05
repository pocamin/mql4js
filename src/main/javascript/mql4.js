var mql4 = {
  _buffer: 0


};

var notYetImplemented = function (functionName) {
  return function () {
    console.error(functionName + " : not yet implemented");
    throw new Error(msg);
  }
};

mql4.setCharacter = notYetImplemented('setCharacter');
mql4.normalizeDouble = function (value, digits) {
  var exp = Math.pow(10, digits);
  return Math.round(value * exp) / exp;
};
mql4.toNumber = function (str) {
  return 1 * str;
};

//Conversion
mql4.charArrayToString = notYetImplemented('charArrayToString');
mql4.doubleToString = notYetImplemented('doubleToString');
mql4.integerToString = notYetImplemented('integerToString');
mql4.shortToString = notYetImplemented('shortToString');
mql4.shortArrayToString = notYetImplemented('shortArrayToString');
mql4.stringToCharArray = notYetImplemented('stringToCharArray');
mql4.stringToShortArray = notYetImplemented('stringToShortArray');
mql4.stringToTime = notYetImplemented('stringToTime');
mql4.stringFormat = notYetImplemented('stringFormat');
mql4.timeToString = notYetImplemented('timeToString');

// array
mql4.arrayBsearch = notYetImplemented('arrayBsearch');
mql4.arrayCompare = notYetImplemented('arrayCompare');
mql4.arrayGetAsSeries = notYetImplemented('arrayGetAsSeries');
mql4.arrayFill = notYetImplemented('arrayFill');
mql4.arrayIsSeries = notYetImplemented('arrayIsSeries');
mql4.arrayMaximum = notYetImplemented('arrayMaximum');
mql4.arrayMinimum = notYetImplemented('arrayMinimum');
mql4.arrayRange = notYetImplemented('arrayRange');

mql4.arrayPrepend = function (array, value) {
  var toReturn = [value];
  Array.prototype.push.apply(toReturn, array);
  return toReturn;
};

mql4.arrayResize = function (array, newSize) {
  if (array.length > newSize) {
    while (array.length > newSize) {
      array.pop();
    }
  } else if (array.length < newSize) {

    var increment = mql4.newArray({
      dimensions: mql4.arrayPrepend(array.sizes, newSize - array.length),
      dynamic: false,
      defaultValue: array.defaultValue
    });
    Array.prototype.push.apply(array, increment);
  }
};


mql4.arraySetAsSeries = notYetImplemented('arraySetAsSeries');
mql4.arraySort = notYetImplemented('arraySort');
mql4.arrayCopyRates = notYetImplemented('arrayCopyRates');
mql4.arrayCopySeries = notYetImplemented('arrayCopySeries');
mql4.arrayDimension = notYetImplemented('arrayDimension');

// account
mql4.accountInfo = notYetImplemented('accountInfo');
mql4.accountBalance = notYetImplemented('accountBalance');
mql4.accountCompany = notYetImplemented('accountCompany');
mql4.accountCredit = notYetImplemented('accountCredit');
mql4.accountCurrency = notYetImplemented('accountCurrency');
mql4.accountEquity = notYetImplemented('accountEquity');
mql4.accountFreeMargin = notYetImplemented('accountFreeMargin');
mql4.accountFreeMarginCheck = notYetImplemented('accountFreeMarginCheck');
mql4.accountFreeMarginMode = notYetImplemented('accountFreeMarginMode');
mql4.accountLeverage = notYetImplemented('accountLeverage');
mql4.accountMargin = notYetImplemented('accountMargin');
mql4.accountName = notYetImplemented('accountName');
mql4.accountNumber = notYetImplemented('accountNumber');
mql4.accountProfit = notYetImplemented('accountProfit');
mql4.accountServer = notYetImplemented('accountServer');
mql4.accountStopoutLevel = notYetImplemented('accountStopoutLevel');
mql4.accountStopoutMode = notYetImplemented('accountStopoutMode');

// common
mql4.sendMail = notYetImplemented('sendMail');
mql4.periodSeconds = notYetImplemented('periodSeconds');

// Time
mql4.dayOfYear = notYetImplemented('dayOfYear');
mql4.TimeDayOfYear = notYetImplemented('TimeDayOfYear');
mql4.timeCurrent = notYetImplemented('timeCurrent');
mql4.timeGMT = notYetImplemented('timeGMT');
mql4.timeDaylightSavings = notYetImplemented('timeDaylightSavings');
mql4.timeGMTOffset = notYetImplemented('timeGMTOffset');
mql4.timeToStruct = notYetImplemented('timeToStruct');
mql4.structToTime = notYetImplemented('structToTime');
mql4.timeDayOfYear = notYetImplemented('timeDayOfYear');
mql4.dayOfYear = notYetImplemented('dayOfYear');

// TimeSeries
mql4.seriesInfo = notYetImplemented('seriesInfo');
mql4.refreshRates = notYetImplemented('refreshRates');
mql4.getRates = notYetImplemented('getRates');
mql4.getTimes = notYetImplemented('getTimes');
mql4.getOpens = notYetImplemented('getOpens');
mql4.getHighs = notYetImplemented('getHighs');
mql4.getLows = notYetImplemented('getLows');
mql4.getCloses = notYetImplemented('getCloses');
mql4.getTickVolumes = notYetImplemented('getTickVolumes');
mql4.bars = notYetImplemented('bars');
mql4.iBars = notYetImplemented('iBars');
mql4.iBarShift = notYetImplemented('iBarShift');
mql4.iTime = notYetImplemented('iTime');
mql4.iOpen = notYetImplemented('iOpen');
mql4.iHigh = notYetImplemented('iHigh');
mql4.iLow = notYetImplemented('iLow');
mql4.iClose = notYetImplemented('iClose');
mql4.iVolume = notYetImplemented('iVolume');

// Trades
mql4.orderClose = notYetImplemented('orderClose');
mql4.orderCloseBy = notYetImplemented('orderCloseBy');
mql4.orderClosePrice = notYetImplemented('orderClosePrice');
mql4.orderCloseTime = notYetImplemented('orderCloseTime');
mql4.orderComment = notYetImplemented('orderComment');
mql4.orderCommission = notYetImplemented('orderCommission');
mql4.orderDelete = notYetImplemented('orderDelete');
mql4.orderExpiration = notYetImplemented('orderExpiration');
mql4.orderLots = notYetImplemented('orderLots');
mql4.orderMagicNumber = notYetImplemented('orderMagicNumber');
mql4.orderModify = notYetImplemented('orderModify');
mql4.orderSelect = notYetImplemented('orderSelect');
mql4.orderSend = notYetImplemented('orderSend');
mql4.ordersHistoryTotal = notYetImplemented('ordersHistoryTotal');
mql4.orderStopLoss = notYetImplemented('orderStopLoss');
mql4.ordersTotal = notYetImplemented('ordersTotal');
mql4.orderSwap = notYetImplemented('orderSwap');
mql4.orderSymbol = notYetImplemented('orderSymbol');
mql4.orderTakeProfit = notYetImplemented('orderTakeProfit');
mql4.orderTicket = notYetImplemented('orderTicket');
mql4.orderType = notYetImplemented('orderType');

mql4.iAC = notYetImplemented('iAC');
mql4.iAD = notYetImplemented('iAD');
mql4.iADX = notYetImplemented('iADX');
mql4.iAlligator = notYetImplemented('iAlligator');
mql4.iAO = notYetImplemented('iAO');
mql4.iATR = notYetImplemented('iATR');
mql4.iBearsPower = notYetImplemented('iBearsPower');
mql4.iBands = notYetImplemented('iBands');
mql4.iBandsOnArray = notYetImplemented('iBandsOnArray');
mql4.iBullsPower = notYetImplemented('iBullsPower');
mql4.iCCI = notYetImplemented('iCCI');
mql4.iCCIOnArray = notYetImplemented('iCCIOnArray');
mql4.iCustom = notYetImplemented('iCustom');
mql4.iDeMarker = notYetImplemented('iDeMarker');
mql4.iEnvelopes = notYetImplemented('iEnvelopes');
mql4.iEnvelopesOnArray = notYetImplemented('iEnvelopesOnArray');
mql4.iForce = notYetImplemented('iForce');
mql4.iFractals = notYetImplemented('iFractals');
mql4.iGator = notYetImplemented('iGator');
mql4.iIchimoku = notYetImplemented('iIchimoku');
mql4.iBWMFI = notYetImplemented('iBWMFI');
mql4.iMomentum = notYetImplemented('iMomentum');
mql4.iMomentumOnArray = notYetImplemented('iMomentumOnArray');
mql4.iMFI = notYetImplemented('iMFI');
mql4.iMA = notYetImplemented('iMA');
mql4.iMAOnArray = notYetImplemented('iMAOnArray');
mql4.iOsMA = notYetImplemented('iOsMA');
mql4.iMACD = notYetImplemented('iMACD');
mql4.iOBV = notYetImplemented('iOBV');
mql4.iSAR = notYetImplemented('iSAR');
mql4.iRSI = notYetImplemented('iRSI');
mql4.iRSIOnArray = notYetImplemented('iRSIOnArray');
mql4.iRVI = notYetImplemented('iRVI');
mql4.iStdDev = notYetImplemented('iStdDev');
mql4.iStdDevOnArray = notYetImplemented('iStdDevOnArray');
mql4.iStochastic = notYetImplemented('iStochastic');
mql4.iWPR = notYetImplemented('iWPR');

// language artifacts
mql4.defineStruct = notYetImplemented('defineStruct');
mql4.date = notYetImplemented('date');
mql4.newStruct = notYetImplemented('newStruct');


mql4.newArray = function (arrayArguments) {
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
      mql4.arrayPrepend(toReturn.sizes,
        arrayArguments.data.length / toReturn.sizes.reduce(function (val, acc) {
          return acc * val
        }, 1)
      )
    );

  }
  return toReturn;
};


mql4.throwNotSupportedFunction = function (msg) {
  console.error(msg + " : Not supported");
  throw new Error(msg + " : Not supported");
};




