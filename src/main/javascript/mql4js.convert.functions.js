mql4Functions = (function () {

  var functionRenameTo = function (newName) {
    return function (args) {
      return newName + "(" + args.join(", ") + ")";
    };
  };

  var functionChain = function (newName) {
    return function (args) {
      return args[0] + "." + newName + "(" + args.slice(1).join(", ") + ")";
    };
  };


  var functionIsConvertedTo = function (newName) {
    return function () {
      return newName;
    };
  };

  var accountInfo = function (args) {
    return "mql4.accountInfo(" + args[0] + ")";
  };


  var mql4Functions = {
    ArrayFree: function (args) {
      return args[0] + " = []";
    },

    ArraySize: function (args) {
      return args[0] + ".length";
    },
    ArrayCopy: function (args) {
      return args[0] + " =  mql4.arrayCopy(" + args.slice(1).join(", ") + ")";
    },
    ArrayCopyRates: function (args) {
      return args[0] + " =  mql4.arrayCopyRates(" + args.slice(1).join(", ") + ")";
    },
    ArrayCopySeries: function (args) {
      return args[0] + " =  mql4.arrayCopySeries(" + args.slice(1).join(", ") + ")";
    },

    TimeToStruct: function (args) {
      return args[1] + " =  mql4.timeToStruct(" + args[0] + ")";
    },
    printFormat: function (args) {
      return "console.log(mql4.stringFormat(" + args.join(", ") + "))";
    },
    printf: function (args) {
      return this.printFormat(args);
    },
    Print: function (args) {
      return "console.log(" + args.join(" + ") + ")";
    },
    Alert: function (args) {
      return "console.log('Mt4 Alert :' + " + args.join(" + ") + ")"
    },
    StringAdd: function (args) {
      return "((" + args[0] + "+=" + args[1] + ")&& true)";
    },
    stringbufferlen: function (args) {
      return args[0] + ".length";
    },
    StringConcatenate: function (args) {
      return args.join("+");
    },
    StringFill: function (args) {
      return "((" + args[0] + " = " + args[0] + ".replace(/./g," + args[1] + "))&& true)";
    },
    StringFind: function (args) {
      return args[0] + ".indexof(" + args.slice(1).join(", ") + ")";
    },
    StringGetCharacter: function (args) {
      return args[0] + ".charCodeAt(" + args[1] + ")";
    },
    StringLen: function (args) {
      return args[0] + ".length";
    },

    StringSplit: function (args) {
      return "((" + args[2] + " = " + args[0] + ".split(" + args[1] + ")) && " + args[2] + ".length)";
    },

    StringSubstr: function (args) {
      if (args.length == 2) {
        return args[0] + ".substring(" + args[1] + ", " + args[2] + ")";
      } else if (args.length == 3) {
        return args[0] + ".substring(" + args[1] + ", " + args[2] + "+" + args[1] + ")";
      }
    },

    StringToLower: function (args) {
      return args[0] + ".toLowerCase()";
    },
    StringToUpper: function (args) {
      return args[0] + ".toUpperCase()";
    },
    StringTrimLeft: function (args) {
      return args[0] + ".replace(/^\\s*/,'')";
    },
    StringTrimRight: function (args) {
      return args[0] + ".replace(/\\s*$/,'')";
    },
    StringGetChar: function (args) {
      return this.StringGetCharacter(args);
    },
    StringSetChar: function (args) {
      return this.StringSetCharacter(args);
    },
    StringReplace: function (args) {
      return "(function(){var strSplit = " + args[0] + ".split(" + args[1] + ");" + args[0] + " = strSplit.join(" + args[2] + "); return strSplit.length-1;})()";
    },
    StringSetCharacter: function (args) {
      return args[0] + "= " + functionRenameTo("mql4.setCharacter")(args);
    },


    ExpertRemove: functionRenameTo("this.getRuntime().kill"),
    GetTickCount: functionRenameTo("this.getRuntime().getUpTime"),
    GetMicrosecondCount: functionRenameTo("this.getRuntime().getUpTime"),
    ArrayInitialize: function (args) {
      return "mql4.arrayFill(" + args[0] + ",0," + args[0].length + "," + args[1] + ")";
    },
    AccountInfoDouble: accountInfo,
    AccountInfoInteger: accountInfo,
    AccountInfoString: accountInfo,

    CharToStr: functionRenameTo("String.fromCharCode"),
    CharToString: functionRenameTo("String.fromCharCode"),
    StringToCharArray: function (args) {
      return args[1] + " = mql4.stringToCharArray(" + args[0] + args.slice(2).map(function (e) {
          return ", " + e
        }).join("") + ")"
    },
    StringToShortArray: function (args) {
      return args[1] + " = mql4.stringToShortArray(" + args[0] + args.slice(2).map(function (e) {
          return ", " + e
        }).join("") + ")"
    },
    StringToDouble: functionRenameTo("mql4.toNumber"),
    StringToInteger: functionRenameTo("mql4.toNumber"),
    DoubleToStr: functionRenameTo("mql4.doubleToString"),
    StrToDouble: functionRenameTo("mql4.toNumber"),
    StrToInteger: functionRenameTo("mql4.toNumber"),
    StrToTime: functionRenameTo("mql4.stringToTime"),
    TimeToStr: functionRenameTo("mql4.timeToString"),
    MathAbs: functionRenameTo("math.abs"),
    MathArccos: functionRenameTo("Math.acos"),
    MathArcsin: functionRenameTo("Math.asin"),
    MathArctan: functionRenameTo("Math.atan"),
    MathCeil: functionRenameTo("Math.ceil"),
    MathCos: functionRenameTo("Math.cos"),
    MathExp: functionRenameTo("Math.exp"),
    MathFloor: functionRenameTo("Math.floor"),
    MathLog: functionRenameTo("Math.log"),
    MathLog10: function (args) {
      return "(Math.log(" + args[0] + ")/ Math.LN10)";
    },
    MathMax: functionRenameTo("Math.max"),
    MathMin: functionRenameTo("Math.min"),
    MathMod: function (args) {
      return "(" + args[0] + " % " + args[1] + ")";
    },
    MathPow: functionRenameTo("Math.pow"),
    MathRand: function (args) {
      return "Math.round(Math.random()*32768)"
    },
    MathRound: functionRenameTo("Math.round"),
    MathSin: functionRenameTo("Math.sin"),
    MathSqrt: functionRenameTo("Math.sqrt"),
    MathTan: functionRenameTo("Math.Tan"),
    MathIsValidNumber: functionRenameTo("isNaN"),
    // Time
    TimeLocal: function (args) {
      if (args.length == 0) {
        return "new Date()";
      } else return args[0] + " = new Date()";
    },
    TimeCurrent: function (args) {
      if (args.length == 0) {
        return "mql4.timeCurrent()";
      } else return args[0] + " = new mql4.timeCurrent()";
    },
    TimeGMT: function (args) {
      if (args.length == 0) {
        return "mql4.timeGMT()";
      } else return args[0] + " = new mql4.timeGMT()";
    },
    Day: functionIsConvertedTo("(new Date()).getDate()"),
    DayOfWeek: functionIsConvertedTo("(new Date()).getDay()"),
    Hour: functionIsConvertedTo("(new Date()).getHours()"),
    Minute: functionIsConvertedTo("(new Date()).getMinutes()"),
    Month: functionIsConvertedTo("(new Date().getMonth() + 1)"),
    Seconds: functionIsConvertedTo("(new Date()).getSeconds()"),
    Year: functionIsConvertedTo("(new Date()).getFullYear()"),

    TimeDay: functionChain("getDate"),
    TimeDayOfWeek: functionChain("getDay"),
    TimeHour: functionChain("getHours"),
    TimeMinute: functionChain("getMinutes"),
    TimeMonth: functionChain("getMonth"),
    TimeSeconds: functionChain("getSeconds"),
    TimeYear: functionChain("getFullYear"),
    SeriesInfoInteger: function (args) {
      var toReturn = "";
      if (args.length == 4) {
        return args[3] + "= mql4.seriesInfo(" + args.slice(0, -1).join(", ") + ")";
      }
      return "mql4.seriesInfo(" + args.join(", ") + ")";
    },
    // TODO symbol (should add an external input)
    CopyRates: function (args) {
      return args[4] + "= mql4.getRates(" + args.slice(0, -1).join(", ") + ")";
    },
    CopyTime: function (args) {
      return args[4] + "= mql4.getTimes(" + args.slice(0, -1).join(", ") + ")";
    },
    CopyOpen: function (args) {
      return args[4] + "= mql4.getOpens(" + args.slice(0, -1).join(", ") + ")";
    },
    CopyHigh: function (args) {
      return args[4] + "= mql4.getHighs(" + args.slice(0, -1).join(", ") + ")";
    },
    CopyLow: function (args) {
      return args[4] + "= mql4.getLows(" + args.slice(0, -1).join(", ") + ")";
    },
    CopyClose: function (args) {
      return args[4] + "= mql4.getCloses(" + args.slice(0, -1).join(", ") + ")";
    },
    CopyTickVolume: function (args) {
      return args[4] + "= mql4.getTickVolumes(" + args.slice(0, -1).join(", ") + ")";
    },
    OrderClose: function (args) {
      if (args.length == 5) {
        args = args.slice(0, -1);
      }
      return "mql4.orderClose(" + args.join(", ") + ")";
    },
    OrderCloseBy: function (args) {
      if (args.length == 3) {
        args = args.slice(0, -1);
      }
      return "mql4.orderCloseBy(" + args.join(", ") + ")";
    },
    OrderDelete: function (args) {
      return "mql4.orderDelete(" + args[0] + ")";
    },
    OrderModify: function (args) {
      if (args.length == 6) {
        args = args.slice(0, -1);
      }
      return "mql4.orderModify(" + args.join(", ") + ")";
    },
    OrderSend: function (args) {
      if (args.length == 11) {
        args = args.slice(0, -1);
      }
      return "mql4.orderSend(" + args.join(", ") + ")";
    },


  };


  // Not supported mql4 function
  [
    // TODO check if not used
    "GetLastError", "IsStopped", "UninitializeReason", "MQLInfoInteger", "MQLInfoString", "MQLSetInteger", "TerminalInfoInteger",
    "TerminalInfoDouble", "TerminalInfoString", "Symbol", "Period", "Digits", "Point", "IsConnected", "IsDemo",
    "IsDllsAllowed", "IsExpertEnabled", "IsLibrariesAllowed", "IsOptimization", "IsTesting", "IsTradeAllowed",
    "IsTradeContextBusy", "IsVisualMode", "TerminalCompany", "TerminalName", "TerminalPath",

    // TODO signals?
    "SignalBaseGetDouble", "SignalBaseGetInteger", "SignalBaseGetString", "SignalBaseSelect", "SignalBaseTotal", "SignalInfoGetDouble",
    "SignalInfoGetInteger", "SignalInfoGetString", "SignalInfoSetDouble", "SignalInfoSetInteger", "SignalSubscribe", "SignalUnsubscribe",

    // Global Variables
    "GlobalVariableCheck", "GlobalVariableTime", "GlobalVariableDel", "GlobalVariableGet", "GlobalVariableName", "GlobalVariableSet",
    "GlobalVariablesFlush", "GlobalVariableTemp", "GlobalVariableSetOnCondition", "GlobalVariablesDeleteAll", "GlobalVariablesTotal",

    // Files
    "FileFindFirst", "FileFindNext", "FileFindClose", "FileIsExist", "FileOpen", "FileClose", "FileCopy", "FileDelete", "FileMove", "FileFlush",
    "FileGetInteger", "FileIsEnding", "FileIsLineEnding", "FileReadArray", "FileReadBool", "FileReadDatetime", "FileReadDouble", "FileReadFloat",
    "FileReadInteger", "FileReadLong", "FileReadNumber", "FileReadString", "FileReadStruct", "FileSeek", "FileSize", "FileTell",
    "FileWrite", "FileWriteArray", "FileWriteDouble", "FileWriteFloat", "FileWriteInteger", "FileWriteLong", "FileWriteString",
    "FileWriteStruct", "FolderCreate", "FolderDelete", "FolderClean", "FileOpenHistory",

    //  Custom Indicators
    "HideTestIndicators", "IndicatorSetDouble", "IndicatorSetInteger", "IndicatorSetString", "SetIndexBuffer", "IndicatorBuffers",
    "IndicatorCounted", "IndicatorDigits", "IndicatorShortName", "SetIndexArrow", "SetIndexDrawBegin", "SetIndexEmptyValue",
    "SetIndexLabel", "SetIndexShift", "SetIndexStyle", "SetLevelStyle", "SetLevelValue",

    // Object Functions
    "ObjectCreate", "ObjectName", "ObjectDelete", "ObjectsDeleteAll", "ObjectFind", "ObjectGetTimeByValue", "ObjectGetValueByTime",
    "ObjectMove", "ObjectsTotal", "ObjectGetDouble", "ObjectGetInteger", "ObjectGetString", "ObjectSetDouble", "ObjectSetInteger",
    "ObjectSetString", "TextSetFont", "TextOut", "TextGetSize", "ObjectDescription", "ObjectGet", "ObjectGetFiboDescription",
    "ObjectGetShiftByValue", "ObjectGetValueByShift", "ObjectSet", "ObjectSetFiboDescription", "ObjectSetText", "ObjectType",

    // Events
    "EventSetMillisecondTimer", "EventSetTimer", "EventKillTimer", "EventChartCustom",


    "ChartApplyTemplate", "ChartSaveTemplate", "ChartWindowFind", "ChartTimePriceToXY", "ChartXYToTimePrice", "ChartOpen",
    "ChartFirst", "ChartNext", "ChartClose", "ChartSymbol", "ChartPeriod", "ChartRedraw", "ChartSetDouble", "ChartSetInteger",
    "ChartSetString", "ChartGetDouble", "ChartGetInteger", "ChartGetString", "ChartNavigate", "ChartID", "ChartIndicatorDelete",
    "ChartIndicatorName", "ChartIndicatorsTotal", "ChartWindowOnDropped", "ChartPriceOnDropped", "ChartTimeOnDropped",
    "ChartXOnDropped", "ChartYOnDropped", "ChartSetSymbolPeriod", "ChartScreenShot", "Period", "Symbol", "WindowBarsPerChart",
    "WindowExpertName", "WindowFind", "WindowFirstVisibleBar", "WindowHandle", "WindowIsVisible", "WindowOnDropped",
    "WindowPriceMax", "WindowPriceMin", "WindowPriceOnDropped", "WindowRedraw", "WindowScreenShot", "WindowTimeOnDropped",
    "WindowsTotal", "WindowXOnDropped", "WindowYOnDropped",

    // colors are not supported in this version
    "ColorToARGB", "ColorToString", "StringToColor",
    "MathSrand", // No seed in js random function
    "EnumToString", // need typing
    "ArrayIsDynamic", "SetUserError", "SendFTP", "SendNotification", "PlaySound", "Sleep", "TerminalClose", "TesterStatistics", "WebRequest", "ZeroMemory",
    "ResourceSave", "ResourceReadImage", "ResourceFree", "ResourceCreate", "ResetLastError", "CheckPointer", "Comment", "CryptEncode", "CryptDecode",
    "DebugBreak", "GetPointer", "MessageBox"
  ].forEach(function (mql4functionName) {
      mql4Functions[mql4functionName] = function () {
        return "mql4.throwNotSupportedFunction('" + mql4functionName + "')";
      }
    });


  // Direct conversion mql4 function
  [
    "TimeDaylightSavings", "TimeGMTOffset", "StructToTime", "DayOfYear", "TimeDayOfYear", "RefreshRates", "Bars", "iBars", "iBarShift",
    "iTime", "iOpen", "iHigh", "iLow", "iClose", "iVolume",
    "OrderClosePrice", "OrderCloseTime", "OrderComment", "OrderCommission", "OrderExpiration", "OrderLots", "OrderPrint", "OrderSelect",
    "OrderMagicNumber", "OrdersHistoryTotal", "OrderStopLoss", "OrdersTotal", "OrderSwap", "OrderSymbol", "OrderTakeProfit", "OrderTicket",
    "OrderType", "OrderOpenPrice", "OrderOpenTime", "OrderProfit", "", "", "", "", "", "", "", "", "",

    // Indicators
    "iAC", "iAD", "iADX", "iAlligator", "iAO", "iATR", "iBearsPower", "iBands", "iBandsOnArray", "iBullsPower", "iCCI", "iCCIOnArray",
    "iCustom", "iDeMarker", "iEnvelopes", "iEnvelopesOnArray", "iForce", "iFractals", "iGator", "iIchimoku", "iBWMFI", "iMomentum",
    "iMomentumOnArray", "iMFI", "iMA", "iMAOnArray", "iOsMA", "iMACD", "iOBV", "iSAR", "iRSI", "iRSIOnArray", "iRVI", "iStdDev",
    "iStdDevOnArray", "iStochastic", "iWPR",


    "CharArrayToString", "DoubleToString", "IntegerToString", "ShortToString", "ShortArrayToString", "TimeToString", "NormalizeDouble",
    "StringToTime", "StringFormat", "ArrayCompare", "StringCompare", "StringInit",

    "ArrayBsearch", "ArrayGetAsSeries", "ArrayFill", "ArrayIsSeries", "ArrayMaximum", "ArrayMinimum", "ArrayRange", "ArrayDimension",
    "ArrayResize", "ArraySetAsSeries", "ArraySort", "PeriodSeconds", "SendMail", "AccountBalance", "AccountCompany", "AccountCredit",
    "AccountCurrency", "AccountEquity", "AccountFreeMargin", "AccountFreeMarginCheck", "AccountFreeMarginMode", "AccountLeverage",
    "AccountMargin", "AccountName", "AccountNumber", "AccountProfit", "AccountServer", "AccountStopoutLevel", "AccountStopoutMode"
  ].forEach(function (mql4functionName) {
      mql4Functions[mql4functionName] = function (args) {

        return "mql4." + mql4functionName.charAt(0).toLowerCase() + mql4functionName.substring(1) + "(" + args.join(", ") + ")";
      }
    });


  return mql4Functions;

})();
