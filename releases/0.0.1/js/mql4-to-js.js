var MQL4_IDENTIFIER = {
  converted: {
    M_1_PI: "1/Math.PI",
    M_2_PI: "2/Math.PI",
    M_2_SQRTPI: "2/Math.sqrt(Math.PI)",
    M_E: "Math.E",
    M_LN10: "Math.LN10",
    M_LN2: "Math.LN2",
    M_LOG10E: "Math.log(Math.E) / Math.LN10",
    M_LOG2E: "Math.log(Math.E) / Math.LN2",
    M_PI: "Math.PI",
    M_PI_2: "Math.PI/2",
    M_PI_4: "Math.PI/4",
    M_SQRT1_2: "1/Math.sqrt(2)",
    M_SQRT2: "Math.sqrt(2)"
  },
  SUPPORTED: [
    "ACCOUNT_BALANCE", "ACCOUNT_COMPANY", "ACCOUNT_CREDIT", "ACCOUNT_CURRENCY", "ACCOUNT_EQUITY", "ACCOUNT_FREEMARGIN", "ACCOUNT_LEVERAGE",
    "ACCOUNT_LIMIT_ORDERS", "ACCOUNT_LOGIN", "ACCOUNT_MARGIN", "ACCOUNT_MARGIN_LEVEL", "ACCOUNT_MARGIN_SO_CALL", "ACCOUNT_MARGIN_SO_MODE",
    "ACCOUNT_MARGIN_SO_SO", "ACCOUNT_NAME", "ACCOUNT_PROFIT", "ACCOUNT_SERVER", "ACCOUNT_STOPOUT_MODE_MONEY", "ACCOUNT_STOPOUT_MODE_PERCENT",
    "ACCOUNT_TRADE_ALLOWED", "ACCOUNT_TRADE_EXPERT", "ACCOUNT_TRADE_MODE", "ACCOUNT_TRADE_MODE_CONTEST", "ACCOUNT_TRADE_MODE_DEMO",
    "ACCOUNT_TRADE_MODE_REAL",
    // TIME FORMAT (Not documented)
    "TIME_DATE", "TIME_MINUTES", "TIME_SECONDS",


    // PERIOD
    "PERIOD_CURRENT", "PERIOD_D1", "PERIOD_H1", "PERIOD_H12", "PERIOD_H2", "PERIOD_H3", "PERIOD_H4", "PERIOD_H6", "PERIOD_H8", "PERIOD_M1",
    "PERIOD_M10", "PERIOD_M12", "PERIOD_M15", "PERIOD_M2", "PERIOD_M20", "PERIOD_M3", "PERIOD_M30", "PERIOD_M4", "PERIOD_M5", "PERIOD_M6",
    "PERIOD_MN1", "PERIOD_W1",

    // Custom Indicator ?
    "INDICATOR_DIGITS", "INDICATOR_HEIGHT", "INDICATOR_LEVELCOLOR", "INDICATOR_LEVELS", "INDICATOR_LEVELSTYLE", "INDICATOR_LEVELTEXT",
    "INDICATOR_LEVELVALUE", "INDICATOR_LEVELWIDTH", "INDICATOR_MAXIMUM", "INDICATOR_MINIMUM", "INDICATOR_SHORTNAME",
    "WHOLE_ARRAY", "GANN_DOWN_TREND", "GANN_UP_TREND", "MODE_CHIKOUSPAN", "MODE_GATORJAW", "MODE_GATORLIPS", "MODE_GATORTEETH", "MODE_KIJUNSEN",
    "MODE_LOWER", "MODE_MAIN", "MODE_MINUSDI", "MODE_PLUSDI", "MODE_SENKOUSPANA", "MODE_SENKOUSPANB", "MODE_SIGNAL", "MODE_TENKANSEN",
    "MODE_UPPER", "STO_CLOSECLOSE", "STO_LOWHIGH", "MODE_ASK", "MODE_BID", "MODE_DIGITS", "MODE_EXPIRATION", "MODE_FREEZELEVEL", "MODE_LOTSIZE",
    "MODE_LOTSTEP", "MODE_MARGINCALCMODE", "MODE_MARGINHEDGED", "MODE_MARGININIT", "MODE_MARGINMAINTENANCE", "MODE_MARGINREQUIRED",
    "MODE_MAXLOT", "MODE_MINLOT", "MODE_POINT", "MODE_PROFITCALCMODE", "MODE_SPREAD", "MODE_STARTING", "MODE_STOPLEVEL", "MODE_SWAPLONG",
    "MODE_SWAPSHORT", "MODE_SWAPTYPE", "MODE_TICKSIZE", "MODE_TICKVALUE", "MODE_TRADEALLOWED", "MODE_HISTORY", "MODE_TRADES", "SELECT_BY_POS",
    "SELECT_BY_TICKET", "OP_BUY", "OP_BUYLIMIT", "OP_BUYSTOP", "OP_SELL", "OP_SELLLIMIT", "OP_SELLSTOP", "PRICE_CLOSE", "PRICE_HIGH",
    "PRICE_LOW", "PRICE_MEDIAN", "PRICE_OPEN", "PRICE_TYPICAL", "PRICE_WEIGHTED", "VOLUME_TICK", "MODE_CLOSE", "MODE_HIGH", "MODE_LOW",
    "MODE_OPEN", "MODE_TIME", "MODE_VOLUME", "SERIES_BARS_COUNT", "SERIES_FIRSTDATE", "SERIES_LASTBAR_DATE", "SERIES_SERVER_FIRSTDATE",
    "SIGNAL_BASE_BALANCE", "SIGNAL_BASE_EQUITY", "SIGNAL_BASE_GAIN", "SIGNAL_BASE_MAX_DRAWDOWN", "SIGNAL_BASE_PRICE", "SIGNAL_BASE_ROI",
    "SIGNAL_BASE_DATE_PUBLISHED", "SIGNAL_BASE_DATE_STARTED", "SIGNAL_BASE_ID", "SIGNAL_BASE_LEVERAGE", "SIGNAL_BASE_PIPS",
    "SIGNAL_BASE_RATING", "SIGNAL_BASE_SUBSCRIBERS", "SIGNAL_BASE_TRADE_MODE", "SIGNAL_BASE_TRADES", "SIGNAL_BASE_AUTHOR_LOGIN",
    "SIGNAL_BASE_BROKER", "SIGNAL_BASE_BROKER_SERVER", "SIGNAL_BASE_CURRENCY", "SIGNAL_BASE_NAME", "SIGNAL_INFO_EQUITY_LIMIT",
    "SIGNAL_INFO_SLIPPAGE", "SIGNAL_INFO_VOLUME_PERCENT", "SIGNAL_INFO_CONFIRMATIONS_DISABLED", "SIGNAL_INFO_COPY_SLTP",
    "SIGNAL_INFO_DEPOSIT_PERCENT", "SIGNAL_INFO_ID", "SIGNAL_INFO_SUBSCRIPTION_ENABLED", "SIGNAL_INFO_TERMS_AGREE", "SIGNAL_INFO_NAME",
    "MODE_EMA", "MODE_LWMA", "MODE_SMA", "MODE_SMMA", "SYMBOL_ASK", "SYMBOL_ASKHIGH", "SYMBOL_ASKLOW", "SYMBOL_BID", "SYMBOL_BIDHIGH",
    "SYMBOL_BIDLOW", "SYMBOL_LAST", "SYMBOL_LASTHIGH", "SYMBOL_LASTLOW", "SYMBOL_MARGIN_INITIAL", "SYMBOL_MARGIN_LIMIT", "SYMBOL_MARGIN_LONG",
    "SYMBOL_MARGIN_MAINTENANCE", "SYMBOL_MARGIN_SHORT", "SYMBOL_MARGIN_STOP", "SYMBOL_MARGIN_STOPLIMIT", "SYMBOL_POINT", "SYMBOL_SESSION_AW",
    "SYMBOL_SESSION_BUY_ORDERS_VOLUME", "SYMBOL_SESSION_CLOSE", "SYMBOL_SESSION_INTEREST", "SYMBOL_SESSION_OPEN",
    "SYMBOL_SESSION_PRICE_LIMIT_MAX", "SYMBOL_SESSION_PRICE_LIMIT_MIN", "SYMBOL_SESSION_PRICE_SETTLEMENT", "SYMBOL_SESSION_SELL_ORDERS_VOLUME",
    "SYMBOL_SESSION_TURNOVER", "SYMBOL_SESSION_VOLUME", "SYMBOL_SWAP_LONG", "SYMBOL_SWAP_SHORT", "SYMBOL_TRADE_CONTRACT_SIZE",
    "SYMBOL_TRADE_TICK_SIZE", "SYMBOL_TRADE_TICK_VALUE", "SYMBOL_TRADE_TICK_VALUE_LOSS", "SYMBOL_TRADE_TICK_VALUE_PROFIT",
    "SYMBOL_VOLUME_LIMIT", "SYMBOL_VOLUME_MAX", "SYMBOL_VOLUME_MIN", "SYMBOL_VOLUME_STEP", "SYMBOL_DIGITS", "SYMBOL_EXPIRATION_MODE",
    "SYMBOL_EXPIRATION_TIME", "SYMBOL_FILLING_MODE", "SYMBOL_ORDER_MODE", "SYMBOL_SELECT", "SYMBOL_SESSION_BUY_ORDERS", "SYMBOL_SESSION_DEALS",
    "SYMBOL_SESSION_SELL_ORDERS", "SYMBOL_SPREAD", "SYMBOL_SPREAD_FLOAT", "SYMBOL_START_TIME", "SYMBOL_SWAP_MODE", "SYMBOL_SWAP_ROLLOVER3DAYS",
    "SYMBOL_TIME", "SYMBOL_TRADE_CALC_MODE", "SYMBOL_TRADE_EXECUTION_EXCHANGE", "SYMBOL_TRADE_EXECUTION_INSTANT",
    "SYMBOL_TRADE_EXECUTION_MARKET", "SYMBOL_TRADE_EXECUTION_REQUEST", "SYMBOL_TRADE_EXEMODE", "SYMBOL_TRADE_FREEZE_LEVEL", "SYMBOL_TRADE_MODE",
    "SYMBOL_TRADE_MODE_CLOSEONLY", "SYMBOL_TRADE_MODE_DISABLED", "SYMBOL_TRADE_MODE_FULL", "SYMBOL_TRADE_MODE_LONGONLY",
    "SYMBOL_TRADE_MODE_SHORTONLY", "SYMBOL_TRADE_STOPS_LEVEL", "SYMBOL_VOLUME", "SYMBOL_VOLUMEHIGH", "SYMBOL_VOLUMELOW", "FRIDAY", "MONDAY",
    "SATURDAY", "SUNDAY", "THURSDAY", "TUESDAY", "WEDNESDAY", "SYMBOL_CURRENCY_BASE", "SYMBOL_CURRENCY_MARGIN", "SYMBOL_CURRENCY_PROFIT",
    "SYMBOL_DESCRIPTION", "SYMBOL_PATH"


  ],
  NOT_SUPPORTED: [
    "STAT_BALANCE_DD", "STAT_BALANCE_DD_RELATIVE", "STAT_BALANCE_DDREL_PERCENT", "STAT_BALANCEDD_PERCENT", "STAT_BALANCEMIN", "STAT_CONLOSSMAX",
    "STAT_CONLOSSMAX_TRADES", "STAT_CONPROFITMAX", "STAT_CONPROFITMAX_TRADES", "STAT_CUSTOM_ONTESTER", "STAT_DEALS", "STAT_EQUITY_DD",
    "STAT_EQUITY_DD_RELATIVE", "STAT_EQUITY_DDREL_PERCENT", "STAT_EQUITYDD_PERCENT", "STAT_EQUITYMIN", "STAT_EXPECTED_PAYOFF", "STAT_GROSS_LOSS",
    "STAT_GROSS_PROFIT", "STAT_INITIAL_DEPOSIT", "STAT_LONG_TRADES", "STAT_LOSS_TRADES", "STAT_LOSSTRADES_AVGCON", "STAT_MAX_CONLOSS_TRADES",
    "STAT_MAX_CONLOSSES", "STAT_MAX_CONPROFIT_TRADES", "STAT_MAX_CONWINS", "STAT_MAX_LOSSTRADE", "STAT_MAX_PROFITTRADE", "STAT_MIN_MARGINLEVEL",
    "STAT_PROFIT", "STAT_PROFIT_FACTOR", "STAT_PROFIT_LONGTRADES", "STAT_PROFIT_SHORTTRADES", "STAT_PROFIT_TRADES", "STAT_PROFITTRADES_AVGCON",
    "STAT_RECOVERY_FACTOR", "STAT_SHARPE_RATIO", "STAT_SHORT_TRADES", "STAT_TRADES", "STAT_WITHDRAWAL", "REASON_ACCOUNT", "REASON_CHARTCHANGE",
    "REASON_CHARTCLOSE", "REASON_CLOSE", "REASON_INITFAILED", "REASON_PARAMETERS", "REASON_PROGRAM", "REASON_RECOMPILE", "REASON_REMOVE",
    "REASON_TEMPLATE", "Constant", "OBJ_ALL_PERIODS", "OBJ_NO_PERIODS,", "EMPTY", "OBJ_PERIOD_D1", "OBJ_PERIOD_H1", "OBJ_PERIOD_H4",
    "OBJ_PERIOD_M1", "OBJ_PERIOD_M15", "OBJ_PERIOD_M30", "OBJ_PERIOD_M5", "OBJ_PERIOD_MN1", "OBJ_PERIOD_W1", "clrAliceBlue", "clrAntiqueWhite",
    "clrAqua", "clrAquamarine", "clrBeige", "clrBisque", "clrBlack", "clrBlanchedAlmond", "clrBlue", "clrBlueViolet", "clrBrown", "clrBurlyWood",
    "clrCadetBlue", "clrChartreuse", "clrChocolate", "clrCoral", "clrCornflowerBlue", "clrCornsilk", "clrCrimson", "clrDarkBlue", "clrDarkGoldenrod",
    "clrDarkGray", "clrDarkGreen", "clrDarkKhaki", "clrDarkOliveGreen", "clrDarkOrange", "clrDarkOrchid", "clrDarkSalmon", "clrDarkSeaGreen",
    "clrDarkSlateBlue", "clrDarkSlateGray", "clrDarkTurquoise", "clrDarkViolet", "clrDeepPink", "clrDeepSkyBlue", "clrDimGray", "clrDodgerBlue",
    "clrFireBrick", "clrForestGreen", "clrGainsboro", "clrGold", "clrGoldenrod", "clrGray", "clrGreen", "clrGreenYellow", "clrHoneydew",
    "clrHotPink", "clrIndianRed", "clrIndigo", "clrIvory", "clrKhaki", "clrLavender", "clrLavenderBlush", "clrLawnGreen", "clrLemonChiffon",
    "clrLightBlue", "clrLightCoral", "clrLightCyan", "clrLightGoldenrod", "clrLightGray", "clrLightGreen", "clrLightPink", "clrLightSalmon",
    "clrLightSeaGreen", "clrLightSkyBlue", "clrLightSlateGray", "clrLightSteelBlue", "clrLightYellow", "clrLime", "clrLimeGreen", "clrLinen",
    "clrMagenta", "clrMaroon", "clrMediumAquamarine", "clrMediumBlue", "clrMediumOrchid", "clrMediumPurple", "clrMediumSeaGreen", "clrPlum",
    "clrMediumSlateBlue", "clrMediumSpringGreen", "clrMediumTurquoise", "clrMediumVioletRed", "clrMidnightBlue", "clrMintCream", "clrMistyRose",
    "clrMoccasin", "clrNavajoWhite", "clrNavy", "clrOldLace", "clrOlive", "clrOliveDrab", "clrOrange", "clrOrangeRed", "clrOrchid",
    "clrPaleGoldenrod", "clrPaleGreen", "clrPaleTurquoise", "clrPaleVioletRed", "clrPapayaWhip", "clrPeachPuff", "clrPeru", "clrPink",
    "clrPowderBlue", "clrPurple", "clrRed", "clrRosyBrown", "clrRoyalBlue", "clrSaddleBrown", "clrSalmon", "clrSandyBrown", "clrSeaGreen",
    "clrSeashell", "clrSienna", "clrSilver", "clrSkyBlue", "clrSlateBlue", "clrSlateGray", "clrSnow", "clrSpringGreen", "clrSteelBlue", "clrTan",
    "clrTeal", "clrThistle", "clrTomato", "clrTurquoise", "clrViolet", "clrWheat", "clrWhite", "clrWhiteSmoke", "clrYellow", "clrYellowGreen",
    "TERMINAL_COMMUNITY_BALANCE", "TERMINAL_BUILD", "TERMINAL_CODEPAGE", "TERMINAL_COMMUNITY_ACCOUNT", "TERMINAL_COMMUNITY_CONNECTION",
    "TERMINAL_CONNECTED", "TERMINAL_CPU_CORES", "TERMINAL_DISK_SPACE", "TERMINAL_DLLS_ALLOWED", "TERMINAL_EMAIL_ENABLED",
    "TERMINAL_FTP_ENABLED", "TERMINAL_MAXBARS", "TERMINAL_MEMORY_AVAILABLE", "TERMINAL_MEMORY_PHYSICAL", "TERMINAL_MEMORY_TOTAL",
    "TERMINAL_MEMORY_USED", "TERMINAL_MQID", "TERMINAL_NOTIFICATIONS_ENABLED", "TERMINAL_TRADE_ALLOWED", "TERMINAL_COMMONDATA_PATH",
    "TERMINAL_COMPANY", "TERMINAL_DATA_PATH", "TERMINAL_LANGUAGE", "TERMINAL_NAME", "TERMINAL_PATH", "MQL_CODEPAGE", "SYMBOL_ARROWDOWN",
    "SYMBOL_ARROWUP", "SYMBOL_CHECKSIGN", "SYMBOL_LEFTPRICE", "SYMBOL_RIGHTPRICE", "SYMBOL_STOPSIGN", "SYMBOL_THUMBSDOWN", "SYMBOL_THUMBSUP",
    "CP_ACP", "CP_MACCP", "CP_OEMCP", "CP_SYMBOL", "CP_THREAD_ACP", "CP_UTF7", "CP_UTF8", "CHART_BEGIN", "CHART_CURRENT_POS", "CHART_END",
    "CHART_FIXED_MAX", "CHART_FIXED_MIN", "CHART_FIXED_POSITION", "CHART_POINTS_PER_BAR", "CHART_PRICE_MAX", "CHART_PRICE_MIN",
    "CHART_SHIFT_SIZE", "CHART_BARS", "CHART_CANDLES", "CHART_LINE", "CHART_VOLUME_HIDE", "CHART_VOLUME_TICK", "CHART_AUTOSCROLL",
    "CHART_BRING_TO_TOP", "CHART_COLOR_ASK", "CHART_COLOR_BACKGROUND", "CHART_COLOR_BID", "CHART_COLOR_CANDLE_BEAR", "CHART_COLOR_CANDLE_BULL",
    "CHART_COLOR_CHART_DOWN", "CHART_COLOR_CHART_LINE", "CHART_COLOR_CHART_UP", "CHART_COLOR_FOREGROUND", "CHART_COLOR_GRID", "CHART_COLOR_LAST",
    "CHART_COLOR_STOP_LEVEL", "CHART_COLOR_VOLUME", "CHART_DRAG_TRADE_LEVELS", "CHART_EVENT_MOUSE_MOVE", "CHART_EVENT_OBJECT_CREATE",
    "CHART_EVENT_OBJECT_DELETE", "CHART_FIRST_VISIBLE_BAR", "CHART_FOREGROUND", "CHART_HEIGHT_IN_PIXELS", "CHART_IS_OFFLINE", "CHART_MODE",
    "CHART_MOUSE_SCROLL", "CHART_SCALE", "CHART_SCALE_PT_PER_BAR", "CHART_SCALEFIX", "CHART_SCALEFIX_11", "CHART_SHIFT", "CHART_SHOW_ASK_LINE",
    "CHART_SHOW_BID_LINE", "CHART_SHOW_DATE_SCALE", "CHART_SHOW_GRID", "CHART_SHOW_LAST_LINE", "CHART_SHOW_OBJECT_DESCR", "CHART_SHOW_OHLC",
    "CHART_SHOW_PERIOD_SEP", "CHART_SHOW_PRICE_SCALE", "CHART_SHOW_TRADE_LEVELS", "CHART_SHOW_VOLUMES", "CHART_VISIBLE_BARS",
    "CHART_WIDTH_IN_BARS", "CHART_WIDTH_IN_PIXELS", "CHART_WINDOW_HANDLE", "CHART_WINDOW_IS_VISIBLE", "CHART_WINDOW_YDISTANCE",
    "CHART_WINDOWS_TOTAL", "CHART_COMMENT", "POINTER_AUTOMATIC", "POINTER_DYNAMIC", "POINTER_INVALID", "CRYPT_AES128", "CRYPT_AES256",
    "CRYPT_ARCH_ZIP", "CRYPT_BASE64", "CRYPT_DES", "CRYPT_HASH_MD5", "CRYPT_HASH_SHA1", "CRYPT_HASH_SHA256", "DRAW_ARROW", "DRAW_HISTOGRAM",
    "DRAW_LINE", "DRAW_NONE", "DRAW_SECTION", "DRAW_ZIGZAG", "STYLE_DASH", "STYLE_DASHDOT", "STYLE_DASHDOTDOT", "STYLE_DOT", "STYLE_SOLID",
    "FILE_REWRITE", "FILE_ACCESS_DATE", "FILE_CREATE_DATE", "FILE_END", "FILE_EXISTS", "FILE_IS_ANSI", "FILE_IS_BINARY", "FILE_IS_COMMON",
    "FILE_IS_CSV", "FILE_IS_READABLE", "FILE_IS_TEXT", "FILE_IS_WRITABLE", "FILE_LINE_END", "FILE_MODIFY_DATE", "FILE_POSITION", "FILE_SIZE",
    "FILE_ANSI", "FILE_BIN", "FILE_CSV", "FILE_READ", "FILE_SHARE_READ", "FILE_SHARE_WRITE", "FILE_TXT", "FILE_UNICODE", "FILE_WRITE",
    "FILE_COMMON", "SEEK_CUR", "SEEK_END", "SEEK_SET", "IDABORT", "IDCANCEL", "IDCONTINUE", "IDIGNORE", "IDNO", "IDOK", "IDRETRY", "IDTRYAGAIN",
    "IDYES", "MB_ABORTRETRYIGNORE", "MB_CANCELTRYCONTINUE", "MB_DEFBUTTON1", "MB_DEFBUTTON2", "MB_DEFBUTTON3", "MB_DEFBUTTON4",
    "MB_ICONEXCLAMATION,", "MB_ICONWARNING", "MB_ICONINFORMATION", "MB_ICONASTERISK", "MB_ICONQUESTION", "MB_ICONSTOP,", "MB_ICONERROR,",
    "MB_ICONHAND", "MB_OK", "MB_OKCANCEL", "MB_RETRYCANCEL", "MB_YESNO", "MB_YESNOCANCEL", "MQL_DEBUG", "MQL_DLLS_ALLOWED", "MQL_LICENSE_TYPE",
    "MQL_OPTIMIZATION", "MQL_PROFILER", "MQL_PROGRAM_TYPE", "MQL_SIGNALS_ALLOWED", "MQL_TESTER", "MQL_TRADE_ALLOWED", "MQL_VISUAL_MODE",
    "MQL_PROGRAM_NAME", "MQL_PROGRAM_PATH", "OBJ_ARROW", "OBJ_ARROW_BUY", "OBJ_ARROW_CHECK", "OBJ_ARROW_DOWN", "OBJ_ARROW_LEFT_PRICE",
    "OBJ_ARROW_RIGHT_PRICE", "OBJ_ARROW_SELL", "OBJ_ARROW_STOP", "OBJ_ARROW_THUMB_DOWN", "OBJ_ARROW_THUMB_UP", "OBJ_ARROW_UP", "OBJ_BITMAP",
    "OBJ_BITMAP_LABEL", "OBJ_BUTTON", "OBJ_CHANNEL", "OBJ_CYCLES", "OBJ_EDIT", "OBJ_ELLIPSE", "OBJ_EVENT", "OBJ_EXPANSION", "OBJ_FIBO",
    "OBJ_FIBOARC", "OBJ_FIBOCHANNEL", "OBJ_FIBOFAN", "OBJ_FIBOTIMES", "OBJ_GANNFAN", "OBJ_GANNGRID", "OBJ_GANNLINE", "OBJ_HLINE", "OBJ_LABEL",
    "OBJ_PITCHFORK", "OBJ_RECTANGLE", "OBJ_RECTANGLE_LABEL", "OBJ_REGRESSION", "OBJ_STDDEVCHANNEL", "OBJ_TEXT", "OBJ_TREND", "OBJ_TRENDBYANGLE",
    "OBJ_TRIANGLE", "OBJ_VLINE", "OBJPROP_ANGLE", "OBJPROP_ARROWCODE", "OBJPROP_BACK", "OBJPROP_COLOR", "OBJPROP_CORNER", "OBJPROP_DEVIATION",
    "OBJPROP_ELLIPSE", "OBJPROP_FIBOLEVELS", "OBJPROP_FIRSTLEVEL+n", "OBJPROP_FONTSIZE", "OBJPROP_LEVELCOLOR", "OBJPROP_LEVELSTYLE",
    "OBJPROP_LEVELWIDTH", "OBJPROP_PRICE1", "OBJPROP_PRICE2", "OBJPROP_PRICE3", "OBJPROP_RAY", "OBJPROP_SCALE", "OBJPROP_STYLE", "OBJPROP_TIME1",
    "OBJPROP_TIME2", "OBJPROP_TIME3", "OBJPROP_TIMEFRAMES", "OBJPROP_WIDTH", "OBJPROP_XDISTANCE", "OBJPROP_YDISTANCE", "OBJPROP_LEVELVALUE",
    "OBJPROP_PRICE", "ANCHOR_BOTTOM", "ANCHOR_CENTER", "ANCHOR_LEFT", "ANCHOR_LEFT_LOWER", "ANCHOR_LEFT_UPPER", "ANCHOR_LOWER", "ANCHOR_RIGHT",
    "ANCHOR_RIGHT_LOWER", "ANCHOR_RIGHT_UPPER", "ANCHOR_TOP", "ANCHOR_UPPER", "BORDER_FLAT", "BORDER_RAISED", "BORDER_SUNKEN",
    "CORNER_LEFT_LOWER", "CORNER_LEFT_UPPER", "CORNER_RIGHT_LOWER", "CORNER_RIGHT_UPPER", "OBJPROP_ALIGN", "OBJPROP_ANCHOR", "OBJPROP_BGCOLOR",
    "OBJPROP_BORDER_COLOR", "OBJPROP_BORDER_TYPE", "OBJPROP_CREATETIME", "OBJPROP_DRAWLINES", "OBJPROP_HIDDEN", "OBJPROP_LEVELS",
    "OBJPROP_RAY_RIGHT", "OBJPROP_READONLY", "OBJPROP_SELECTABLE", "OBJPROP_SELECTED", "OBJPROP_STATE", "OBJPROP_TIME", "OBJPROP_TYPE",
    "OBJPROP_XOFFSET", "OBJPROP_XSIZE", "OBJPROP_YOFFSET", "OBJPROP_YSIZE", "OBJPROP_ZORDER", "ALIGN_CENTER", "ALIGN_LEFT", "ALIGN_RIGHT",
    "OBJPROP_BMPFILE", "OBJPROP_FONT", "OBJPROP_LEVELTEXT", "OBJPROP_NAME", "OBJPROP_SYMBOL", "OBJPROP_TEXT", "OBJPROP_TOOLTIP",
    "CHARTEVENT_CHART_CHANGE", "CHARTEVENT_CLICK", "CHARTEVENT_CUSTOM", "CHARTEVENT_CUSTOM_LAST", "CHARTEVENT_KEYDOWN", "CHARTEVENT_MOUSE_MOVE",
    "CHARTEVENT_OBJECT_CHANGE", "CHARTEVENT_OBJECT_CLICK", "CHARTEVENT_OBJECT_CREATE", "CHARTEVENT_OBJECT_DELETE", "CHARTEVENT_OBJECT_DRAG",
    "CHARTEVENT_OBJECT_ENDEDIT", "CHARTS_MAX", "CLR_NONE,", "clrNONE", "EMPTY", "EMPTY_VALUE", "INVALID_HANDLE", "IS_DEBUG_MODE",
    "IS_PROFILE_MODE", "NULL", "WRONG_VALUE", "__DATE__", "__DATETIME__", "__FILE__", "__FUNCSIG__", "__FUNCTION__",
    "__LINE__", "__MQLBUILD__,", "__MQL4BUILD__", "__PATH__",
    // TODO ?
    "ERR_ACCOUNT_DISABLED", "ERR_ARRAY_AS_PARAMETER_EXPECTED", "ERR_ARRAY_INDEX_OUT_OF_RANGE", "ERR_ARRAY_INVALID", "ERR_BROKER_BUSY",
    "ERR_CANNOT_CALL_FUNCTION", "ERR_CANNOT_LOAD_LIBRARY", "ERR_CANNOT_OPEN_FILE", "ERR_CHART_NOREPLY", "ERR_CHART_NOT_FOUND", "ERR_FILE_NOT_BIN",
    "ERR_CHART_PROP_INVALID", "ERR_CHARTINDICATOR_NOT_FOUND", "ERR_CHARTWINDOW_NOT_FOUND", "ERR_COMMON_ERROR", "ERR_CUSTOM_INDICATOR_ERROR",
    "ERR_DLL_CALLS_NOT_ALLOWED", "ERR_DLLFUNC_CRITICALERROR", "ERR_DOUBLE_PARAMETER_EXPECTED", "ERR_END_OF_FILE", "ERR_FILE_CANNOT_REWRITE",
    "ERR_EXTERNAL_CALLS_NOT_ALLOWED", "ERR_FILE_ARRAYRESIZE_ERROR", "ERR_FILE_BIN_STRINGSIZE", "ERR_FILE_BUFFER_ALLOCATION_ERROR",
    "ERR_FILE_CANNOT_CLEAN_DIRECTORY", "ERR_FILE_CANNOT_DELETE", "ERR_FILE_CANNOT_DELETE_DIRECTORY", "ERR_FILE_CANNOT_OPEN",
    "ERR_FILE_DIRECTORY_NOT_EXIST", "ERR_FILE_INCOMPATIBLE", "ERR_FILE_INVALID_HANDLE", "ERR_FILE_IS_DIRECTORY", "ERR_FILE_NOT_CSV",
    "ERR_FILE_NOT_DIRECTORY", "ERR_FILE_NOT_EXIST", "ERR_FILE_NOT_TOREAD", "ERR_FILE_NOT_TOWRITE", "ERR_FILE_NOT_TXT", "ERR_FILE_NOT_TXTORCSV",
    "ERR_FILE_READ_ERROR", "ERR_FILE_STRINGRESIZE_ERROR", "ERR_FILE_STRUCT_WITH_OBJECTS", "ERR_FILE_TOO_LONG_FILENAME", "ERR_FILE_WRONG_HANDLE",
    "ERR_FILE_TOO_MANY_OPENED", "ERR_FILE_WRITE_ERROR", "ERR_FILE_WRONG_DIRECTORYNAME", "ERR_FILE_WRONG_FILENAME", "ERR_INVALID_TICKET",
    "ERR_FORMAT_TOO_MANY_FORMATTERS", "ERR_FORMAT_TOO_MANY_PARAMETERS", "ERR_FUNC_NOT_ALLOWED_IN_TESTING", "ERR_FUNCTION_NOT_CONFIRMED",
    "ERR_GLOBAL_VARIABLE_NOT_FOUND", "ERR_GLOBAL_VARIABLES_PROCESSING", "ERR_HISTORY_WILL_UPDATED", "ERR_INCOMPATIBLE_ARRAYS",
    "ERR_INCOMPATIBLE_FILEACCESS", "ERR_INCORRECT_SERIESARRAY_USING", "ERR_INDICATOR_CANNOT_INIT", "ERR_INDICATOR_CANNOT_LOAD",
    "ERR_INTEGER_PARAMETER_EXPECTED", "ERR_INTERNAL_ERROR", "ERR_INVALID_ACCOUNT", "ERR_INVALID_FUNCTION_PARAMSCNT", "ERR_MALFUNCTIONAL_TRADE",
    "ERR_INVALID_FUNCTION_PARAMVALUE", "ERR_INVALID_POINTER", "ERR_INVALID_PRICE", "ERR_INVALID_PRICE_PARAM", "ERR_INVALID_STOPS",
    "ERR_INVALID_TRADE_PARAMETERS", "ERR_INVALID_TRADE_VOLUME", "ERR_LONG_POSITIONS_ONLY_ALLOWED", "ERR_LONGS_NOT_ALLOWED", "ERR_MARKET_CLOSED",
    "ERR_NO_CONNECTION", "ERR_NO_ERROR", "ERR_NO_HISTORY_DATA", "ERR_NO_MEMORY_FOR_ARRAYSTRING", "ERR_NO_MEMORY_FOR_CALL_STACK",
    "ERR_NO_MEMORY_FOR_HISTORY", "ERR_NO_MEMORY_FOR_PARAM_STRING", "ERR_NO_MEMORY_FOR_RETURNED_STR", "ERR_NO_MEMORY_FOR_TEMP_STRING",
    "ERR_NO_MQLERROR", "ERR_NO_OBJECT_NAME", "ERR_NO_ORDER_SELECTED", "ERR_NO_RESULT", "ERR_NO_SPECIFIED_SUBWINDOW", "ERR_NOT_ENOUGH_MONEY",
    "ERR_NOT_ENOUGH_RIGHTS", "ERR_NOT_ENOUGH_STACK_FOR_PARAM", "ERR_NOT_INITIALIZED_ARRAY", "ERR_NOT_INITIALIZED_ARRAYSTRING",
    "ERR_NOT_INITIALIZED_STRING", "ERR_NOTIFICATION_ERROR", "ERR_NOTIFICATION_PARAMETER", "ERR_NOTIFICATION_SETTINGS",
    "ERR_NOTIFICATION_TOO_FREQUENT", "ERR_OBJECT_ALREADY_EXISTS", "ERR_OBJECT_COORDINATES_ERROR", "ERR_OBJECT_DOES_NOT_EXIST", "ERR_OFF_QUOTES",
    "ERR_OLD_VERSION", "ERR_ORDER_LOCKED", "ERR_OUT_OF_MEMORY", "ERR_PRICE_CHANGED", "ERR_RECURSIVE_STACK_OVERFLOW",
    "ERR_REMAINDER_FROM_ZERO_DIVIDE", "ERR_REQUOTE", "ERR_RESOURCE_DUPLICATED", "ERR_RESOURCE_NOT_FOUND", "ERR_RESOURCE_NOT_SUPPORTED",
    "ERR_SEND_MAIL_ERROR", "ERR_SERVER_BUSY", "ERR_SHORTS_NOT_ALLOWED", "ERR_SOME_ARRAY_ERROR", "ERR_SOME_FILE_ERROR", "ERR_SOME_OBJECT_ERROR",
    "ERR_STRING_FUNCTION_INTERNAL", "ERR_STRING_PARAMETER_EXPECTED", "ERR_SYMBOL_SELECT", "ERR_SYSTEM_BUSY", "ERR_TOO_FREQUENT_REQUESTS",
    "ERR_TOO_LONG_STRING", "ERR_TOO_MANY_OPENED_FILES", "ERR_TOO_MANY_REQUESTS", "ERR_TRADE_CONTEXT_BUSY", "ERR_TRADE_DISABLED", "ERR_TRADE_ERROR",
    "ERR_TRADE_EXPERT_DISABLED_BY_SERVER", "ERR_TRADE_EXPIRATION_DENIED", "ERR_TRADE_HEDGE_PROHIBITED", "ERR_TRADE_MODIFY_DENIED",
    "ERR_TRADE_NOT_ALLOWED", "ERR_TRADE_PROHIBITED_BY_FIFO", "ERR_TRADE_TIMEOUT", "ERR_TRADE_TOO_MANY_ORDERS", "ERR_UNKNOWN_COMMAND",
    "ERR_UNKNOWN_OBJECT_PROPERTY", "ERR_UNKNOWN_OBJECT_TYPE", "ERR_UNKNOWN_SYMBOL", "ERR_USER_ERROR_FIRST", "ERR_WEBREQUEST_CONNECT_FAILED",
    "ERR_WEBREQUEST_INVALID_ADDRESS", "ERR_WEBREQUEST_REQUEST_FAILED", "ERR_WEBREQUEST_TIMEOUT", "ERR_WRONG_FILE_NAME",
    "ERR_WRONG_FUNCTION_POINTER", "ERR_WRONG_JUMP", "ERR_ZERO_DIVIDE",

    // Numerical Type Constants
    "CHAR_MAX", "CHAR_MIN", "DBL_DIG", "DBL_EPSILON", "DBL_MANT_DIG", "DBL_MAX", "DBL_MAX_10_EXP", "DBL_MAX_EXP", "DBL_MIN", "DBL_MIN_10_EXP",
    "DBL_MIN_EXP", "FLT_DIG", "FLT_EPSILON", "FLT_MANT_DIG", "FLT_MAX", "FLT_MAX_10_EXP", "FLT_MAX_EXP", "FLT_MIN", "FLT_MIN_10_EXP",
    "FLT_MIN_EXP", "INT_MAX", "INT_MIN", "LONG_MAX", "LONG_MIN", "SHORT_MAX", "SHORT_MIN", "UCHAR_MAX", "UINT_MAX", "ULONG_MAX", "USHORT_MAX"


  ],
  toJs: function (identifierName) {
    if (this.converted[identifierName]) {
      return this.converted[identifierName]
    } else if (this.SUPPORTED.indexOf(identifierName) != -1) {
      return "MQL4." + identifierName;
    } else if (this.NOT_SUPPORTED.indexOf(identifierName) != -1) {
      return "MQL4.throwNotSupportedConstant('" + identifierName + "')";
    } else {
      return identifierName;
    }
  }
};

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

    Sleep: functionRenameTo("/* Deprecated */getRuntime().sleep"),
    ExpertRemove: functionRenameTo("getRuntime().kill"),
    GetTickCount: functionRenameTo("getRuntime().getUpTime"),
    GetMicrosecondCount: functionRenameTo("getRuntime().getUpTime"),
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
    MathRand: function () {
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
    }
  };


  // Not supported MQL4 function
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
    "ArrayIsDynamic", "SetUserError", "SendFTP", "SendNotification", "PlaySound", "TerminalClose", "TesterStatistics", "WebRequest", "ZeroMemory",
    "ResourceSave", "ResourceReadImage", "ResourceFree", "ResourceCreate", "ResetLastError", "CheckPointer", "Comment", "CryptEncode", "CryptDecode",
    "DebugBreak", "GetPointer", "MessageBox"
  ].forEach(function (mql4functionName) {
      mql4Functions[mql4functionName] = function () {
        return "mql4.throwNotSupportedFunction('" + mql4functionName + "')";
      }
    });


  // Direct conversion MQL4 function
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

var MQL4ToJsVisitor = function (keepType, keepOriginal, tokens, keepComments) {
  this.keepComments = keepComments;
  this.tokens = tokens;
  this.typeKept = keepType;
  this.isOriginalKept = keepOriginal;
  this.externalParameters = [];
  this.callableFunctions = [];
  return this;
};

MQL4ToJsVisitor.prototype.getMql4DefaultValue = function (type, arrayIndexes, dynamicArray) {
  var defaultValue = "{}";
  switch (type) {
    case "bool" :
      defaultValue = "false";
      break;
    case "char":
    case "float":
    case "uchar":
    case "int":
    case "uint":
    case "long":
    case "ulong":
    case "ushort":
    case "double":
      defaultValue = "0";
      break;
    case "datetime":
      defaultValue = "new Date()";
      break;
    case "string" :
      defaultValue = '""';
  }

  if (arrayIndexes) {
    return "mql4.newArray({dimensions:[" + arrayIndexes.join(",") + "], dynamic : " + dynamicArray + ", defaultValue:" + defaultValue + "})";
  } else {
    return defaultValue;
  }
};

MQL4ToJsVisitor.prototype.pad = function (str, nbTab) {
  return str.replace(/\s*$/, '').split("\n").map(function (line) {
    return _.repeat("  ", nbTab || 1) + line + "\n";
  }).join("");
};

MQL4ToJsVisitor.prototype.isBlock = function (ctx) {
  return ctx.constructor.name == "BlockOperationContext";
};


MQL4ToJsVisitor.prototype.textAsJs = function (ctx) {
  return this.wrapJS(ctx.getText());
};

MQL4ToJsVisitor.prototype.wrapJS = function (js) {
  return {js: js};
};

MQL4ToJsVisitor.prototype.originalText = function (ctx) {
  return ctx.start.getInputStream().strdata.substring(ctx.start.start, ctx.stop.stop + 1);
};

MQL4ToJsVisitor.prototype.printOriginal = function (ctx) {
  return this.isOriginalKept ? "//" + this.originalText(ctx).replace(/\n/g, '\n//') + "\n" : "";
};

MQL4ToJsVisitor.prototype.convertType = function (type, arrayIndexes) {
  return this.typeKept ? "/*<" + type + ((arrayIndexes) ? "[]" : "") + ">*/ " : "";
};

MQL4ToJsVisitor.prototype.biOp = function (opConvertTo) {
  return function (ctx) {
    //noinspection JSPotentiallyInvalidUsageOfThis partial function
    return this.wrapJS(this.js(ctx.expression(0)) + opConvertTo + this.js(ctx.expression(1)));
  }
};

MQL4ToJsVisitor.prototype.leftUniOp = function (opConvertTo) {
  return function (ctx) {
    //noinspection JSPotentiallyInvalidUsageOfThis partial function
    return this.wrapJS(opConvertTo + this.js(ctx.expression(0)));
  }
};

MQL4ToJsVisitor.prototype.rightUniOp = function (opConvertTo) {
  return function (ctx) {
    //noinspection JSPotentiallyInvalidUsageOfThis partial function
    return this.wrapJS(this.js(ctx.expression(0)) + opConvertTo);
  }
};


MQL4ToJsVisitor.prototype.visitStruct = function (ctx) {
  var that = this;
  var js = "mql4.defineStruct('" + ctx.name.text + "'";
  js += ctx.structElement().map(function (e) {
    return ", " + that.convertType(e.elementType.getText()) + "'" + e.name.text + "'"
  }).join("");
  js += ");\n";
  return this.wrapJS(this.showComment(ctx) + js);
};


MQL4ToJsVisitor.prototype.visitExpressionOperation = function (ctx) {
  return this.wrapJS(this.showComment(ctx) + this.js(ctx.expression(0)) + ";");

};

MQL4ToJsVisitor.prototype.visitDateExpression = function (ctx) {
  return this.wrapJS("mql4.date(" + ctx.getText().substring(1) + ")");
};


MQL4ToJsVisitor.prototype.visitDefine = function (ctx) {
  return this.wrapJS("var " + ctx.name.text + " = " + this.js(ctx.expression()) + ";")
};

MQL4ToJsVisitor.prototype.visitInclude = function (ctx) {
  var filename = ctx.filename ? ctx.filename.text.substring(1, ctx.filename.text.length - 1) : this.js(ctx.expression());
  return this.wrapJS('mql4.include("' + filename + '.js");');
};

MQL4ToJsVisitor.prototype.visitEnumDef = function (ctx) {
  var that = this;
  var js = "var " + ctx.name.text + " = {\n";

  var maxValue = 0;
  ctx.enumInstance().forEach(
    function (enumInstance) {
      if (enumInstance.value && enumInstance.value.text > maxValue) {
        maxValue = 1 * enumInstance.value.text;
      }
    }
  );

  js += that.pad(ctx.enumInstance().map(
    function (enumInstance) {
      var toReturn = that.showComment(enumInstance) + enumInstance.name.text + ":";
      if (enumInstance.value)
        return toReturn + enumInstance.value.text;
      else return toReturn + "/*auto-gen*/ " + ++maxValue;
    }
  ).join(",\n"));
  js += "}";
  return this.wrapJS(this.showComment(ctx) + js)
};


MQL4ToJsVisitor.prototype.visitFunctionDecl = function (ctx) {
  var that = this;
  var js = "var " + that.convertType(ctx.type().getText()) + ctx.name.text + "= function(";


  var nbArguments = ctx.functionArgument().length;

  if (nbArguments == 0) {
    this.callableFunctions.push(ctx.name.text);
  }

  var optionalArguments = [];

  js += ctx.functionArgument().map(function (functionArgument) {
    var functionArgumentResult = that.visit(functionArgument);
    if (functionArgumentResult.hasDefaultValue) {
      optionalArguments.push({name: functionArgumentResult.name, defaultValue: functionArgumentResult.defaultValue});
    }
    return that.js(functionArgument)
  }).join(", ");
  js += "){";
  js += "\n";

  if (optionalArguments.length > 0) {
    js += that.pad("switch(arguments.length) {");
    optionalArguments.forEach(function (optionalArgument, idx) {
      js += that.pad("case " + (nbArguments - optionalArguments.length + idx) + ": " + optionalArgument.name + "=" + optionalArgument.defaultValue + ";", 2);
    });
    js += that.pad("}");
  }
  js += that.pad(that.js(ctx.functionContent));

  js += "}\n";
  return this.wrapJS(this.showComment(ctx) + js)
};


MQL4ToJsVisitor.prototype.visitFunctionArgument = function (ctx) {
  var toReturn = this.wrapJS(this.convertType(ctx.type().getText()) + ctx.name.text);
  toReturn.hasDefaultValue = false;
  if (ctx.expression()) {
    toReturn.hasDefaultValue = true;
    toReturn.defaultValue = this.js(ctx.expression());
  }
  toReturn.name = ctx.name.text;
  return toReturn;
};

// expression
// unary expression
MQL4ToJsVisitor.prototype.visitUnaryMinusExpression = MQL4ToJsVisitor.prototype.leftUniOp("-");
MQL4ToJsVisitor.prototype.visitNotExpression = MQL4ToJsVisitor.prototype.leftUniOp("!");
MQL4ToJsVisitor.prototype.visitComplementExpression = MQL4ToJsVisitor.prototype.leftUniOp("~");

// assignement expression
MQL4ToJsVisitor.prototype.visitAssignExpression = MQL4ToJsVisitor.prototype.biOp("=");
MQL4ToJsVisitor.prototype.visitAssignAddExpression = MQL4ToJsVisitor.prototype.biOp("+=");
MQL4ToJsVisitor.prototype.visitAssignMinusExpression = MQL4ToJsVisitor.prototype.biOp("-=");
MQL4ToJsVisitor.prototype.visitAssignMultiplyExpression = MQL4ToJsVisitor.prototype.biOp("*=");
MQL4ToJsVisitor.prototype.visitAssignDivideExpression = MQL4ToJsVisitor.prototype.biOp("/=");
MQL4ToJsVisitor.prototype.visitAssignModulusExpression = MQL4ToJsVisitor.prototype.biOp("%=");
MQL4ToJsVisitor.prototype.visitAssignShiftBitRightExpression = MQL4ToJsVisitor.prototype.biOp(">>=");
MQL4ToJsVisitor.prototype.visitAssignShiftBitLeftExpression = MQL4ToJsVisitor.prototype.biOp("<<=");
MQL4ToJsVisitor.prototype.visitAssignBitAndExpression = MQL4ToJsVisitor.prototype.biOp("&=");
MQL4ToJsVisitor.prototype.visitAssignBitOrExpression = MQL4ToJsVisitor.prototype.biOp("|=");
MQL4ToJsVisitor.prototype.visitAssignBitXorExpression = MQL4ToJsVisitor.prototype.biOp("^=");

// inc dec expression
MQL4ToJsVisitor.prototype.visitPreDecExpression = MQL4ToJsVisitor.prototype.leftUniOp("--");
MQL4ToJsVisitor.prototype.visitPreIncExpression = MQL4ToJsVisitor.prototype.leftUniOp("++");
MQL4ToJsVisitor.prototype.visitPostDecExpression = MQL4ToJsVisitor.prototype.rightUniOp("--");
MQL4ToJsVisitor.prototype.visitPostIncExpression = MQL4ToJsVisitor.prototype.rightUniOp("++");

// bit manipulation expression
MQL4ToJsVisitor.prototype.visitShiftBitRightExpression = MQL4ToJsVisitor.prototype.biOp(">>");
MQL4ToJsVisitor.prototype.visitShiftBitLeftExpression = MQL4ToJsVisitor.prototype.biOp("<<");
MQL4ToJsVisitor.prototype.visitBitAndExpression = MQL4ToJsVisitor.prototype.biOp("&");
MQL4ToJsVisitor.prototype.visitBitOrExpression = MQL4ToJsVisitor.prototype.biOp("|");
MQL4ToJsVisitor.prototype.visitBitXorExpression = MQL4ToJsVisitor.prototype.biOp("^");

// math expression
MQL4ToJsVisitor.prototype.visitAddExpression = MQL4ToJsVisitor.prototype.biOp("+");
MQL4ToJsVisitor.prototype.visitSubtractExpression = MQL4ToJsVisitor.prototype.biOp("-");
MQL4ToJsVisitor.prototype.visitMultiplyExpression = MQL4ToJsVisitor.prototype.biOp("*");
MQL4ToJsVisitor.prototype.visitDivideExpression = MQL4ToJsVisitor.prototype.biOp("/");
MQL4ToJsVisitor.prototype.visitModulusExpression = MQL4ToJsVisitor.prototype.biOp("%");

// Boolean operation
MQL4ToJsVisitor.prototype.visitGtEqExpression = MQL4ToJsVisitor.prototype.biOp(">=");
MQL4ToJsVisitor.prototype.visitLtEqExpression = MQL4ToJsVisitor.prototype.biOp("<=");
MQL4ToJsVisitor.prototype.visitGtExpression = MQL4ToJsVisitor.prototype.biOp(">");
MQL4ToJsVisitor.prototype.visitLtExpression = MQL4ToJsVisitor.prototype.biOp("<");
MQL4ToJsVisitor.prototype.visitEqExpression = MQL4ToJsVisitor.prototype.biOp("===");
MQL4ToJsVisitor.prototype.visitNotEqExpression = MQL4ToJsVisitor.prototype.biOp("!==");
MQL4ToJsVisitor.prototype.visitAndExpression = MQL4ToJsVisitor.prototype.biOp(" && ");
MQL4ToJsVisitor.prototype.visitOrExpression = MQL4ToJsVisitor.prototype.biOp(" || ");

// Ternary operation
MQL4ToJsVisitor.prototype.visitTernaryExpression = function (ctx) {
  return this.wrapJS(this.js(ctx.expression(0)) + "?" + this.js(ctx.expression(1)) + ":" + this.js(ctx.expression(2)))
};

// direct value operation
MQL4ToJsVisitor.prototype.visitStringExpression = MQL4ToJsVisitor.prototype.textAsJs;
MQL4ToJsVisitor.prototype.visitBoolExpression = MQL4ToJsVisitor.prototype.textAsJs;
MQL4ToJsVisitor.prototype.visitNumberExpression = MQL4ToJsVisitor.prototype.textAsJs;
MQL4ToJsVisitor.prototype.visitCharExpression = function (ctx) {
  return this.wrapJS(ctx.getText() + ".charCodeAt(0)");
};


MQL4ToJsVisitor.prototype.visitIdentifierExpression = function (ctx) {
  return this.wrapJS(MQL4_IDENTIFIER.toJs(ctx.getText()))
};

MQL4ToJsVisitor.prototype.visitSpecializationExpression = function (ctx) {
  return this.wrapJS(ctx.name.text + "." + this.js(ctx.right));
};


MQL4ToJsVisitor.prototype.visitNullExpression = function () {
  return this.wrapJS("null");
};


// function call
MQL4ToJsVisitor.prototype.visitFunctionCallExpression = function (ctx) {
  var that = this;
  var name = ctx.Identifier().getText();
  var argsAsJs = ctx.expression().map(function (expression) {
    return that.js(expression);
  });
  if (mql4Functions.hasOwnProperty(name)) {
    return this.wrapJS(mql4Functions[name](argsAsJs));
  } else {
    var js = name + "(";
    js += argsAsJs.join(", ");
    js += ")";
    return this.wrapJS(js);
  }
};

// indexing
MQL4ToJsVisitor.prototype.visitIndexingExpression = function (ctx) {
  var that = this;
  var js = this.js(ctx.expression(0));
  js += ctx.expression().slice(1).map(function (expression) {
    return '[' + that.js(expression) + ']'
  }).join("");
  return this.wrapJS(js);
};
// Others
MQL4ToJsVisitor.prototype.visitBlockOperation = function (ctx) {
  var that = this;
  var js = ctx.statement().map(function (statement) {
    return that.printOriginal(statement) + that.js(statement.getChild(0));
  }).join("\n");
  return this.wrapJS(this.showComment(ctx) + js);
};


MQL4ToJsVisitor.prototype.visitExpressionExpression = function (ctx) {
  return this.wrapJS("(" + this.js(ctx.expression(0)) + ")");
};

MQL4ToJsVisitor.prototype.visitReturnExpression = function (ctx) {
  if (ctx.expression(0)) {
    return this.wrapJS("return " + this.js(ctx.expression(0)).replace(/^\((.*)\)$/, "$1"));
  }
  return this.wrapJS("return");
};


MQL4ToJsVisitor.prototype.visitDeclaration = function (ctx) {
  var that = this;
  var external = (ctx.memoryClass && (ctx.memoryClass.text == "extern" || ctx.memoryClass.text == "input"));
  var type = ctx.type().getText();


  var js = ctx.declarationElement().map(function (variable) {
    var arrayIndexes = variable.indexes() && variable.indexes().expression().map(function (e) {
        return that.js(e);
      });
    var dynamicArray = (variable.indexes() && variable.indexes().dynamic) ? true : false;
    var initValue = variable.declarationInitialValue();
    var name = variable.name.text;
    var value = null;
    if (!initValue) {
      value = that.getMql4DefaultValue(type, arrayIndexes, dynamicArray);
    } else if (initValue.expression()) {
      value = that.js(initValue.expression());
    } else if (initValue.structInit()) {
      if (arrayIndexes) {
        value = "mql4.newArray({dimensions:[" + arrayIndexes.join(",") + "],  dynamic : " + dynamicArray + ", data:[";
        value += initValue.structInit().expression().map(function (expr) {
          return that.js(expr)
        }).join(", ");
        value += "]})"
      } else {
        value = "mql4.newStruct('" + type + "', ";
        value += initValue.structInit().expression().map(function (expr) {
          return that.js(expr)
        }).join(", ");
        value += ")"
      }
    }
    if (external) {
      that.externalParameters.push({name: name, type: type, defaultValue: value});
      value = "$parameters." + name;
    }

    return "var " + that.convertType(type, arrayIndexes) + name + "=" + value + ";";
  }).join("");

  return this.wrapJS(this.printOriginal(ctx) + this.showComment(ctx) + js);
};


MQL4ToJsVisitor.prototype.visitIfElseOperation = function (ctx) {
  var opTrueIsBlock = this.isBlock(ctx.opTrue);
  var opFalseIsBlock = ctx.opFalse && this.isBlock(ctx.opFalse);
  var js = "if (" + this.js(ctx.condition) + ")" + (opTrueIsBlock ? "{" : "") + "\n";
  js += this.pad(this.js(ctx.opTrue));
  if (opTrueIsBlock) {
    js += "} ";
  }
  if (ctx.opFalse) {
    if (opFalseIsBlock) {
      js += "else {\n" + this.pad(this.js(ctx.opFalse)) + "}";
    } else js += "else " + this.js(ctx.opFalse);
  }

  return this.wrapJS(this.showComment(ctx) + js);
};

MQL4ToJsVisitor.prototype.visitSwitchOperation = function (ctx) {
  var that = this;
  var js = "switch(" + this.js(ctx.leftCondition) + "){\n";
  ctx.switchCase().forEach(function (sc) {
      if (sc.rightCondition) {
        js += that.pad("case " + that.js(sc.rightCondition) + ":");
      } else {
        js += that.pad("default:");
      }
      sc.statement().forEach(function (statement) {
        js += that.pad(that.js(statement.getChild(0)), 2);
      });
    }
  );
  js += "}";
  return this.wrapJS(this.showComment(ctx) + js);
};


MQL4ToJsVisitor.prototype.visitForMultiExpressions = function (ctx) {
  var that = this;
  return this.wrapJS(ctx.forExpression().map(function (forExpression) {
    return that.js(forExpression.getChild(0))
      .replace(/;$/, ''); // TODO for declaration not very clean
  }).join(", "));
};

MQL4ToJsVisitor.prototype.visitWhileOperation = function (ctx) {
  js = "while (" + this.js(ctx.expression(0)) + "){\n";
  js += this.pad(this.js(ctx.operation(0)));
  js += "}";
  return this.wrapJS(this.showComment(ctx) + js);
};


MQL4ToJsVisitor.prototype.visitDoWhileOperation = function (ctx) {
  js = "do {\n";
  js += this.pad(this.js(ctx.operator));
  js += "} while (" + this.js(ctx.condition) + ")\n";
  return this.wrapJS(this.showComment(ctx) + js);
};

MQL4ToJsVisitor.prototype.visitForOperation = function (ctx) {
  js = "for(" + this.js(ctx.init) + ";" + this.js(ctx.term) + ";" + this.js(ctx.inc) + "){\n";
  js += this.pad(this.js(ctx.operator));
  js += "}";
  return this.wrapJS(this.showComment(ctx) + js);
};

MQL4ToJsVisitor.prototype.visitTerminal = function () {
  return this.wrapJS("");
};


MQL4ToJsVisitor.prototype.visitNotSupportedPreprocessor = function (ctx) {
  return this.wrapJS(this.showComment(ctx) + "// NOT SUPPORTED\n" + this.originalText(ctx).split("\n").map(function (line) {
      return "//" + line + "\n"
    }).join(""));
};


MQL4ToJsVisitor.prototype.visitRoot = function (ctx) {
  var that = this;
  var toReturn = this.wrapJS(
    ctx.children
      .map(function (ctx) {
        return that.visit(ctx)
      })
      .filter(function (result) {
        return result && result.js
      })
      .map(function (result) {
        return result.js
      })
      .join("\n")
  );
  toReturn.externalParameters = this.externalParameters;
  toReturn.callableFunctions = this.callableFunctions;
  toReturn.js = this.notice() + this.init() + this.externalParametersAsJs() + toReturn.js;
  return toReturn;
};

MQL4ToJsVisitor.prototype.init = function () {
  return "var mql4 = new MQL4();\n"
};

// -----------------------//
// TODO simple fix should be updated in a future version of antlr js (>= 4.5.2).
MQL4ToJsVisitor.prototype.visit = function (ctx) {
  var contextClassName = ctx.constructor.name;
  if (contextClassName.match(/.*Context$/)) {
    contextClassName = contextClassName.substring(0, contextClassName.length - 7);
  }
  if (contextClassName == "TerminalNodeImpl") {
    contextClassName = "Terminal";
  }


  var funcName = "visit" + contextClassName;
  return this[funcName](ctx);
};

MQL4ToJsVisitor.prototype.notice = function () {
  return "// Js file generated using Mql4ToJs on " + new Date() + "\n";
};

MQL4ToJsVisitor.prototype.externalParametersAsJs = function () {
  var js = "//BEGIN Script Parameters \n";

  js += "var $externalParameters = [";

  js += this.externalParameters.map(function (param) {
    return "\n\t{" + param.name + ": {'type': '" + param.type + "', defaultValue:" + param.defaultValue + "}}"
  }).join(", ");
  js += "];\n";


  js += "var $parameters = {" +
    this.externalParameters.map(function (param) {
      return "\n\t" + param.name + ":" + param.defaultValue
    }).join(", ") + "};\n";
  js += "// END Script Parameters \n\n";
  return js;
};


MQL4ToJsVisitor.prototype.js = function (ctx) {
  return (ctx) ? this.visit(ctx).js : "";
};

MQL4ToJsVisitor.prototype.showComment = function (ctx) {
  var comments = this.tokens.getHiddenTokensToLeft(ctx.start.tokenIndex, 2);
  if (comments && this.keepComments) {
    return comments.map(function (comment) {
      return comment.text.split("\n").map(function (str) {
        return str.trim() + "\n"
      }).join("")
    }).join("");
  }
  return "";
};
