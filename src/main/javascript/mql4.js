var mql4 = {
  _buffer: 0


};
mql4.setCharacter = notYetImplemented;
mql4.normalizeDouble = function (value, digits) {
  var exp = Math.pow(10, digits);
  return Math.round(value * exp) / exp;
};
mql4.toNumber = function (str) {
  return 1 * str;
};

//Conversion
mql4.charArrayToString = notYetImplemented;
mql4.doubleToString = notYetImplemented;
mql4.integerToString = notYetImplemented;
mql4.shortToString = notYetImplemented;
mql4.shortArrayToString = notYetImplemented;
mql4.stringToCharArray = notYetImplemented;
mql4.stringToShortArray = notYetImplemented;
mql4.stringToTime = notYetImplemented;
mql4.stringFormat = notYetImplemented;
mql4.timeToString = notYetImplemented;

// array
mql4.arrayBsearch = notYetImplemented;
mql4.arrayCompare = notYetImplemented;
mql4.arrayGetAsSeries = notYetImplemented;
mql4.arrayFill = notYetImplemented;
mql4.arrayIsSeries = notYetImplemented;
mql4.arrayMaximum = notYetImplemented;
mql4.arrayMinimum = notYetImplemented;
mql4.arrayRange = notYetImplemented;
mql4.arrayResize = notYetImplemented;
mql4.arraySetAsSeries = notYetImplemented;
mql4.arraySort = notYetImplemented;
mql4.arrayCopyRates = notYetImplemented;
mql4.arrayCopySeries = notYetImplemented;
mql4.arrayDimension = notYetImplemented;

// account
mql4.accountInfo = notYetImplemented;
mql4.accountBalance = notYetImplemented;
mql4.accountCompany = notYetImplemented;
mql4.accountCredit = notYetImplemented;
mql4.accountCurrency = notYetImplemented;
mql4.accountEquity = notYetImplemented;
mql4.accountFreeMargin = notYetImplemented;
mql4.accountFreeMarginCheck = notYetImplemented;
mql4.accountFreeMarginMode = notYetImplemented;
mql4.accountLeverage = notYetImplemented;
mql4.accountMargin = notYetImplemented;
mql4.accountName = notYetImplemented;
mql4.accountNumber = notYetImplemented;
mql4.accountProfit = notYetImplemented;
mql4.accountServer = notYetImplemented;
mql4.accountStopoutLevel = notYetImplemented;
mql4.accountStopoutMode = notYetImplemented;

// common
mql4.sendMail = notYetImplemented;
mql4.periodSeconds = notYetImplemented;

// Time
mql4.dayOfYear = notYetImplemented;
mql4.TimeDayOfYear = notYetImplemented;
mql4.timeCurrent = notYetImplemented;
mql4.timeGMT = notYetImplemented;
mql4.timeDaylightSavings = notYetImplemented;
mql4.timeGMTOffset = notYetImplemented;
mql4.timeToStruct = notYetImplemented;
mql4.structToTime = notYetImplemented;
mql4.timeDayOfYear = notYetImplemented;
mql4.dayOfYear = notYetImplemented;

// TimeSeries
mql4.seriesInfo = notYetImplemented;
mql4.refreshRates = notYetImplemented;
mql4.getRates = notYetImplemented;
mql4.getTimes = notYetImplemented;
mql4.getOpens = notYetImplemented;
mql4.getHighs = notYetImplemented;
mql4.getLows = notYetImplemented;
mql4.getCloses = notYetImplemented;
mql4.getTickVolumes = notYetImplemented;
mql4.bars = notYetImplemented;
mql4.iBars = notYetImplemented;
mql4.iBarShift = notYetImplemented;
mql4.iTime = notYetImplemented;
mql4.iOpen = notYetImplemented;
mql4.iHigh = notYetImplemented;
mql4.iLow = notYetImplemented;
mql4.iClose = notYetImplemented;
mql4.iVolume = notYetImplemented;

// Trades
mql4.orderClose = notYetImplemented;
mql4.orderCloseBy = notYetImplemented;
mql4.orderClosePrice = notYetImplemented;
mql4.orderCloseTime = notYetImplemented;
mql4.orderComment = notYetImplemented;
mql4.orderCommission = notYetImplemented;
mql4.orderDelete = notYetImplemented;
mql4.orderExpiration = notYetImplemented;
mql4.orderLots = notYetImplemented;
mql4.orderMagicNumber = notYetImplemented;
mql4.orderModify = notYetImplemented;
mql4.orderSelect = notYetImplemented;
mql4.orderSend = notYetImplemented;
mql4.ordersHistoryTotal = notYetImplemented;
mql4.orderStopLoss = notYetImplemented;
mql4.ordersTotal = notYetImplemented;
mql4.orderSwap = notYetImplemented;
mql4.orderSymbol = notYetImplemented;
mql4.orderTakeProfit = notYetImplemented;
mql4.orderTicket = notYetImplemented;
mql4.orderType = notYetImplemented;

mql4.iAC = notYetImplemented;
mql4.iAD = notYetImplemented;
mql4.iADX = notYetImplemented;
mql4.iAlligator = notYetImplemented;
mql4.iAO = notYetImplemented;
mql4.iATR = notYetImplemented;
mql4.iBearsPower = notYetImplemented;
mql4.iBands = notYetImplemented;
mql4.iBandsOnArray = notYetImplemented;
mql4.iBullsPower = notYetImplemented;
mql4.iCCI = notYetImplemented;
mql4.iCCIOnArray = notYetImplemented;
mql4.iCustom = notYetImplemented;
mql4.iDeMarker = notYetImplemented;
mql4.iEnvelopes = notYetImplemented;
mql4.iEnvelopesOnArray = notYetImplemented;
mql4.iForce = notYetImplemented;
mql4.iFractals = notYetImplemented;
mql4.iGator = notYetImplemented;
mql4.iIchimoku = notYetImplemented;
mql4.iBWMFI = notYetImplemented;
mql4.iMomentum = notYetImplemented;
mql4.iMomentumOnArray = notYetImplemented;
mql4.iMFI = notYetImplemented;
mql4.iMA = notYetImplemented;
mql4.iMAOnArray = notYetImplemented;
mql4.iOsMA = notYetImplemented;
mql4.iMACD = notYetImplemented;
mql4.iOBV = notYetImplemented;
mql4.iSAR = notYetImplemented;
mql4.iRSI = notYetImplemented;
mql4.iRSIOnArray = notYetImplemented;
mql4.iRVI = notYetImplemented;
mql4.iStdDev = notYetImplemented;
mql4.iStdDevOnArray = notYetImplemented;
mql4.iStochastic = notYetImplemented;
mql4.iWPR = notYetImplemented;

// language artifacts
mql4.defineStruct = notYetImplemented;
mql4.date = notYetImplemented;
mql4.newArray = notYetImplemented;
mql4.newStruct = notYetImplemented;


var notYetImplemented = function () {
  throw new Error("not yet implemented")
};


