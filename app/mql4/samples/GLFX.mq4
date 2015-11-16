//GLFX basic information:
//Optimalized for Metatrader 4, build 216
//+------------------------------------------------------------------+
#property copyright "Copyright © 2008 Globus"

// Constants used in the Signals section

#define Buy                +1
#define Sell               -1
#define None                0

// Constant used in T2_SendTrade for ordersend.

#define Failed             -1

//************* User Variables ******************//

extern string     COM_TMT              = "#-# Trade Settings";
extern int        TMT_MaxCntTrades                = 1; //allow this amount of open trade at the same time
extern int        TMT_MaxInDirection              = 1; //allow this amount of open trade at the same direction
int CntBuyDirection; //system holds a count of long trades
int CntSellDirection;//system holds a count of short trades
int               TMT_LastOpenTime;                   //holds a open time of a last trade
extern int        TMT_TimeShiftOrder             =21600; //amount of seconds must pass to allow opening a new trade after a last open trade, active when TMT_MaxCntTrades>1
extern int        TMT_SignalsRepeat            = 3; //to open new trade, wait for confirmation repeated TMT_SignalsRepeat *times
extern bool       TMT_SignalsReset       = true; //if true, open only in case of a explicit consequence signals without interrupt
extern string     TMT_Currency           = "EURUSD"; //Currency pair to be traded
extern string     TMT_Period                = "M15";  //TimeFrame, use the labels from the MT4 buttons
extern int        TMT_Slippage        =  1; // acceptable slippage
extern int        TMT_TP                 = 90;  //Take Profit, it can move higher if EMT_ExitWithTS =true;
extern int        TMT_SL                 = 75;  //Stop Loss
extern bool       TMT_TPfromSL_1On        =true; //count TP from SL as TP=SL+TMT_ADDtoSLforTP
extern int        TMT_ADDtoSLforTP       =2; // when f.e.=2 then TP=SL+2
double TMT_LastOpenDirection[3]; //holds type of the last still open trade(Buy or Sell) and its open price[1] and order ticket[2]
double TMT_LastLostDirection[3];//holds type of the last trade (Buy or Sell) closed with lost and its open price[1] and order ticket[2]
extern bool       TMT_AlternateBuySell   =false; //if it is true than can not be opened a trade in the same direction like the last open trade

extern string     COM_MMT               = "#-# Money Management";
extern double     MMT_Lots                     = 1;        //Money management will override setting
extern double     MMT_MinLot                   = 0.01;	 //Set to be micro safe by default
extern double     MMT_MaxLot                   = 90.0;	 //Set to previous max value by default
extern bool       MMT_UseMManagement            = true; //Money management for lot sizing
extern double     MMT_MaxRisk                  = 0.005;     //Percentage of FreeMargin for trade
extern bool       MMT_DecreaseLots_1On       =false; //use decrease factor , when false then is automaticly set on 100% value
extern string     MMT_DecrLotsPerc           = "080050010";    //9 digit number, 3 digits per subsequent loss 080050010= 080% 050% 010%
int MMT_DecrFactor[3]={80,50,10}; //9 digit number, 3 digits per subsequent loss 080050010= 080% 050% 010%
extern bool       MMT_LimitLosses           = false; //if a certain amount of last closed trades ended in consequent losses and if there is a counter trend , move SL accordind to MMT_TS_SLFactor (leave open trade sooner)
extern int        MMT_ConseqLosses                         =1; //amount of consequent losses to use function limit losses , 0= use always
int MMT_TS_SLFactor[4]                       ={07,14,20,35}; //move SL to +7/14/20(with profit), as soon as it gets 20/30/35+pips profit. 
extern string     MMT_MoveSLwhenProfit = "07142035";// as MMT_TS_SLFactor, but available in extern variables
int MMT_TS_ProfitFactor[4]                   ={20,30,35,55}; // after 55 it will use 35 trailing stop
extern string     MMT_WhenProfitMoveSL = "20303555";// as MMT_TS_ProfitFactor, but available in extern variables
extern bool       MMT_Martingale_1On = true; //After each loss the bet should be increased so, that the win would recover all previous losses plus a small profit
extern bool       MMT_ContIfMGfail = false; //if martingale can not cover all lost continue with the maximal possible lot size
double MMT_MaxAccBalance; //reached max account balance


extern string     COM_CLS               = "#-# Confirmation Signals ";
bool       CLS_NearSR_2Lot_1On         = false;  //Will double lotsize if S&R lines near.
extern bool       CLS_CheckPA_2On               =true; //check profitability a new comming set and then change lot size, it works also if SMT_LookForNextSet=false
extern double     CLS_PA_Increasing           =30; //if a set is profitable, a lot size will increase max about ... %               
extern double     CLS_PA_Decreasing           =30; //if a set is not profitable, a lot size will decrease max about ... %
extern int        CLS_PA_History              =10; //check this amount last closed trades in history
extern bool       CLS_CheckLastTrade_4On       =false; //check if the last trade in the same direction was closed with profit or not 
extern double     CLS_DecrLotsIfLastTrade      =50; //if CLS_CheckLastTrade_4On is on and the last trade was closed with lost decrease a new open trade in the same direction about this amount %


extern string     COM_AOP               = "#-# Only for Auto Optimalization";
extern bool       AOP_Optimalization_1On = false; //Allow to find the best set from a prepared file saved in tester directory of the second terminal
extern int        AOP_OptEveryHours   = 7; //run auto optimalization every certain amount of hours
datetime          AOP_LastAutoOptim; //holds last time of auto optimalization
bool              AOP_OptimRunning=false; // is changing by system
extern int        AOP_ProveCyc_Start=1; //start to optimilizate with the first value
extern int        AOP_ProveCyc_Step=10; //step value when looking for the best set
extern int        AOP_ProveCyc_End=0; //finish, when the third value is reached, if 3-rd=0, then the value is founded in an end of "Optim-xxxxxx-xxx.csv" file
int AOP_SetCount=0;               //how many sets are within Optim file, PC finds alone
extern string     AOP_sorting_GP_PF_EP = "123";// set the priority for filtering-Sorting by Maximal profit,Maximal profit factor  or Maximal expected payoff
int AOP_GP_PF_EP[3] ={1,2,3}; // set the priority for filtering:first sorting by Maximal profit,then Maximal profit factor and finaly by Maximal expected payoff
int AOP_Gross_Profit   = 1; // set the priority for filtering-Sorting by Maximal profit
int AOP_Profit_Factor  = 2; //                               -Sorting by Maximal profit factor        
int AOP_Expected_Payoff= 3; //                               -Sorting by Maximal expected payoff
extern int        AOP_TestDays=3;//set the amount of days for optimization,but if SMT_ProveCurrentSet=true, depends on SMT_ProveHoursBack
extern int        AOP_MinTrCnt           = 2;    //Limitation for the minimum amount of trades within a testing area
extern int        AOP_MaxTrCnt           = 10;   //Limitation for maximal amount of trades within a testing area
bool              AOP_AllowNewTrades     =true; //if there is not a suitable set within auto-optimalization, no new trade will open - it is a system variable
extern double     AOP_MinPercSuitableSets=5; //in percents minimal number of suitables sets from all examined sets within results of optimilization 
extern bool       AOP_ModifyTPSL_2On=false; //with new a set modify TP and SL of all open trades
extern bool       AOP_TPSLpromptly=false;//when a new set is loaded then immediately run function AOP_ModifyTPSL_2On despite of trade enter conditions
extern bool       AOP_TPSLperi=true;//check periodically if there is a condition to run function AOP_ModifyTPSL_2On, trade conditions must be fulfilled
extern int        AOP_TPSLwait=420;//300=every 5 minutes check AOP_TPSLperi
datetime          AOP_TPSLnextRun; //holds time of next running of AOP_ModifyTPSL_2On
extern int        AOP_TPSLmaxChanges=1;//how many times it is allowed to change setting of TP and SL for buy or sell orders
int AOP_TPSLbuyCnt,AOP_TPSLsellCnt; //system holds number of changes, change within AOP_TPSLpromptly not counted

                                                      
extern string     COM_SMT               = "#-# Set Management";
extern bool       SMT_LookForNextSet         = false; //you will use this function when you are looking for the second set from results of the first optimalization
extern bool       SMT_CheckSetBeforeLoading  =false; //if system requieres to load a new set, prove first if it has a profitable history
extern bool       SMT_ProveCurrentSet        =false; //try selected set in history, valid only if testing, don't forget to fill variable FTS_NotTradeFrom2 
extern int        SMT_ProveHoursBack         =72; //76 = prove selected set 76 hours back in history
int               SMT_NextSet                  =0; //number of set readed from a file Set-symbol.csv
int               SMT_CurrentSet                  =0; //a nummber of a set taken from a optim file and currently active
extern int        SMT_CurrentPass               =0; //used within auto-optimalization, here is setted nummber of cycles
int               SMT_CntTrades              =0; //count of history orders
extern int        SMT_CntLosses               =2; //count of consequence losses to activate function  
int               SMT_LastLossTicket          =-1;  //system variable, hold last lossy ticket   
extern bool       SMT_AwayFromLosses        =false; //// if a trade is going agains trend set trailing stop
extern int        SMT_AFL_Range             =5;//change set only if within 5 last trades(=SMT_AFL_Range) is less then 2 (=SMT_AFL_Losses)
extern int        SMT_AFL_Losses            =2; //unprofit closed trades opened within Nr. of SMT_NextSet
extern bool       SMT_ResetTimeShiftOrder=false; //reset TimeShiftOrder and allow to open new trade immediately


extern string     COM_EMT              = "#-# Exit Management";
extern bool       EMT_DecreaseTPOn             =false; // allow to decrease Take Profit value if a counter trend is recognized
extern int        EMT_DecTPShiftBar               =19; //count this function within this amount last bars
extern int        EMT_DecTPShiftPeriod            =0; //0=current period, 2=period about 2 degree higher (f.e. from M15 to H1)
extern bool       EMT_ExitWithTS           = false; //Enable static trailing stops
extern int        EMT_TS                   = 5; //If EMT_TS is enabled, use this pip value for TS
extern int        EMT_MoveTPonTS                =1; //increase Trailing stop by this value in pips each time TS is adjusted. Allows good trades to rise higher
extern bool       EMT_ModifyTSOn               = true; //modify EMT_MoveTPonTS according to distance between TP and SL
extern int        EMT_DelayTS                  = 49; //pips to wait before activating trailing stop
extern int        EMT_BE_SL                    = 0;  //Pips in profit to enable a Break Even SL
extern int        EMT_BE_Profit                = 10; //If 0, this sets trade to BE. If a number, this sets the number of pips in profit to lock in
extern int        EMT_RecrossMax           =0;      //0 disables setting. Close a profit ticket in case of crossing open price x times
extern double     EMT_RecrossCoefGood           =0.9; //close order only if it reached again  max reached price decreased about EMT_RecrossCoefGood %
extern double     EMT_RecrossCoefBad           =0.9; //close order only if it reached again  max reached price decreased about EMT_RecrossCoefBad %
double EMT_bcRecross[1][7]; //holds a couple of last trade with parameters ticket Nr.,recross count,last recrossed bar,max reached price
int EMT_minStop;                                          //Pulled from broker in init(), minimal TS value


extern string     COM_EGF               = "#-# Time Conditional Exit";
extern int        EGF_OnlyProfit_Hours   = 0;       //Setting of 0 disables, 24 = 24 hours -guarantee to exit with a profit
extern int        EGF_ForceHours         = 0;       //Setting of 0 disables, 48 = 48 hours -force to exit
extern bool       EGF_ForceCloseAgainSwap=true; //force to close a trade only if swap is negative
extern int        EGF_OnlyProfit_TS        = 5;	//Trailing stop in pips to use during Grace Exit: should be small
extern bool       EGF_CloseBeforeRollOver=true; //close all opened trade before roll-over, start to close according to times EGF_TimeDayEnd and EGF_TimeBeforeEnd
extern bool       EGF_CloseOnlyOnFriday=true; //close all opened trade before weekend, start to close according to times EGF_TimeDayEnd and EGF_TimeBeforeEnd
extern bool       EGF_KeepWhenSwapOK=true; //if swap is good in a open trade directions and the trade is lossy, keep it unclosed during weekend
extern double     EGF_TimeBeforeEnd = 5.30; //try to close trades this amount hour and minutes before EGF_TimeDayEnd and wait when a trade is in a profit
extern double     EGF_TimeDayEnd = 21.50; //close trades definitely at EGF_TimeDayEnd, excepting is when EGF_KeepWhenSwapOK=true and EGF_CloseOnlyOnFriday=true
extern double     EGF_TimeFridayEnd=22.50; //close trades definitely on Friday at EGF_TimeFridayEnd, excepting is when EGF_KeepWhenSwapOK=true
extern int        EGF_WaitOnProfitInPips=3; //0=disable; when net profit in pips is reached then close this order

double SwapLong,SwapShort; //keep global swaps to save CPU cycles

extern string     COM_EXT                  = "#-# Exceptional trades"; 
//this settins are superior to undermentioned signals, so there is no influence of Entry Signals or Filters
//it is allowed to open more trades then TMT_MaxCntTrades
//this settins should care about trades in unusual situations
extern bool       EXT_ExceptionalTradeOnly=false; //open only exceptional trades
extern bool       EXT_CheckTempTrend = true; //check temporary trend, if it appears, close contra trade orders if SL is close
extern int        EXT_TC_SetSize   = 14; //remember last amount of ticks, amount = EXT_TC_SetSize
extern int        EXT_TC_Relevant  = 11; //if this number from amount of last ticks is in one direction than temporary trend is located
extern int        EXT_TC_PipsToClose  = 3; //if between current price and SL is diference <=EXT_TC_PipsToClose then sooner closing is allowed 
double EXT_TC_LastTick; //remember a last tick
int EXT_TC_Direction; //shows a direction of a discovered temporary trend
double EXT_TC_Store[]; //holds last ticks
extern bool       EXT_OpenDeniedTimeIfSwapOK=true; //open a trade within denied time (according to filter FTE_Time_2On) if swap in a requested direction is positive
bool EXT_IsOpenedTradeIfSwapOK=false; //a sign if a trade is open from the function OpenIfSwapOK


extern string     COM_SGE                  = "#-# Signals and Filters Enabled";
int SGE_signalsRequired;     // calculated on init (a count of signals)
            //These settings turn on/off different signals.Editing these settings is not necessary or recommended
            //  when GLFX is being optimized. New strategies require changes to the signals that are executed.
extern bool       SGE_Envelope_1On           = true; // Envelope signal
extern bool       SGE_SMAD_2On           = true; // Simple Moving Average Difference 
extern bool       SGE_OSMA_3On           = true; // OSMA Cross
extern bool       SGE_MA_Diverg_4On           = true; // Divergence Trading Signal
extern bool       SGE_RSI_low_5On           = false; //RSI is rising, then Buy ; RSI is decreasing, then Sell 
extern bool       SGE_RSI_high_6On           = false; // if RSI<SGS_RSI_High then buy ; if RSI>SGS_RSI_Low then sell, but it needs confirmation of 3 consequence bars
extern bool       SGE_Envelope_HF_7On           = false; // Envelope Filter on a higher timeframe about 2 degree
extern bool       SGE_SMA_HF_8On           = false; // SMA Difference on a higher timeframe about 2 degree 
                           //FILTERS : Enabling these settings reduces the number of trades.
extern bool       FTE_ATR_1On           = true;  //Envelope Filter 
extern bool       FTE_Time_2On           = true;  //only trade during permitted hours
extern bool       FTE_MA_BuyTrend_3On           = false;  //if BUY Signal, check buy trend 
extern bool       FTE_MA_SellTrend_4On           = false; //if SELL Signal, check sell trend
extern bool       FTE_FolMainTrend_5On           = false; //follow main trend 
extern bool       FTE_LocMainTrend_6On           = true; //locate main trend and allow to trade only in its  direction
extern bool       FTE_TemporaryTrend_7On         = true; //find a temporary trend and block to trade agains it
extern bool       FTE_WaitForPeaks_8On           =true;//wait for a next peak and do not enter trades immediately

extern string     COM_SGS1                  = "#-# SGE_Envelope_1On - settings";
extern double     SGS_EnvPerc                  = 0.013;   //Percent deviation from the main line 
extern int        SGS_EnvPer                   = 2;       //ma_period-Averaging period for calculation of the main line 

extern string     COM_SGS2                  = "#-# SGE_SMAD_2On - settings";
extern int        SGS_SMAPer                   = 9; //Averaging period for calculation simple moving average
extern int        SGS_SMA2Bars                 = 7; //Index of the value taken from the indicator buffer (shift relative to the current bar the given amount of periods ago)

extern string     COM_SGS3                  = "#-# SGE_OSMA_3On - settings";
extern int        SGS_OSMAFast                 = 8; //Number of periods for fast moving average calculation
extern int        SGS_OSMASlow                 = 21;//Number of periods for slow moving average calculation
extern double     SGS_OSMASignal               = 7; //Number of periods for signal moving average calculation

extern string     COM_SGS4                  = "#-# SGE_MA_Diverg_4On - settings";
extern int        SGS_Fast_Per              = 4; 
int        SGS_Fast_Price               = PRICE_OPEN;
extern int        SGS_Slow_Per              = 12;
int        SGS_Slow_Price               = PRICE_OPEN;
extern double     SGS_DVmin                = 1; //only needs 1 decimal at most
extern double     SGS_DVmax                = 7; //only needs 1 decimal at most

extern string     COM_SGS5_6                  = "SGE_RSI_low_5On & SGE_RSI_high_6On - settings";
extern int        SGS_RSI_High                 = 70; //max value to confirm buy signal,but in case of condition RSI1>RSI2>RSI3
extern int        SGS_RSI_Low                  = 30; //min value to confirm sell signal,but in case of condition RSI1<RSI2<RSI3
extern int        SGS_RSI_Per                  = 2; //Number of periods for calculation
double SGS_RSI1, SGS_RSI2, SGS_RSI3;   //3 globals saves 6 indicator calls.
int    SGS_RSIBar, SGS_ES4_SRBar;
double SGS_ES4_SR[4]; 

extern string     COM_SGS7                  = "#-# SGE_Envelope_HF_7On - settings";
extern double     SGS_PHEnvPerc                  = 0.016;   //Percent deviation from the main line
extern int        SGS_PHPerEnv                   = 4;       //ma_period-Averaging period for calculation of the main line

extern string     COM_SGS8                  = "#-# SGE_SMA_HF_8On - settings";
extern int        SGS_PHSMAPer                   = 4; //Averaging period for calculation simple moving average
extern int        SGS_PHSMA2Bars                 = 3; //Index of the value taken from the indicator buffer (shift relative to the current bar the given amount of periods ago)


extern string     C0M_FTS1                  = "#-# FTE_ATR_1On - settings";
extern int        FTS_ATR                    = 1;    //Short term period for consolidation
extern double     FTS_minATR                         = 0.0008; //Minimum value to allow trades (f.e. from 0 to 0.5)

extern string        C0M_FTS2               = "#-# FTE_Time_2On - settings";
extern double        FTS_WeekAt1                   = 0;    //Defaults will trader 24 hours Mon-Thu
extern double        FTS_WeekTo1                   = 24;   
extern double        FTS_WeekAt2                   = 24;
extern double        FTS_WeekTo2                   = 24;
extern double        FTS_SunAt                     = 0;    //Sunday trading is disabled
extern double        FTS_SunTo                     = 0;
extern double        FTS_FriAt                     = 0;    //Friday trading ends early
extern double        FTS_FriTo                     = 13.50; // at Friday trade to 13:50 hour/minutes
extern double        FTS_MonAt                     = 4;    //Monday without Japanese Open
extern double        FTS_MonTo                     = 24;
extern datetime      FTS_NotTradeFrom1             =D'2008.02.10 00:00'; //do not open new order within selected time zone ; does not depend on setting FTE_Time_2On
extern datetime      FTS_NotTradeTo1               =D'2008.02.10 00:00'; //it is very useful during the second optimalization; does not depend on setting FTE_Time_2On
extern datetime      FTS_NotTradeFrom2             =D'2034.02.11 00:00'; //the second time filter, also useful within optimalization; does not depend on setting FTE_Time_2On
extern datetime      FTS_NotTradeTo2               =D'2034.02.11 00:00'; // does not depend on setting FTE_Time_2On

extern string     C0M_FTS3_4                = "#-# FTE_MA_BuyTrend_3On & FTE_MA_SellTrend_4On - settings";
extern int        FTS_TrendPer              = 25;
extern int        FTS_TrendShift            = 4;
extern double     FTS_TrendStr              = 17;  //Difference in pips between price and MA.

extern string     C0M_FTS5                = "#-# FTE_FolMainTrend_5On - settings";
extern int        FTS_HorizDist              = 270; // amount bars checked in history to locate a trend 
double            FTS_SR_MaxPoint0,FTS_SR_MinPoint0,FTS_SR_MaxPoint1,FTS_SR_MinPoint1,FTS_SR_MaxPoint2,FTS_SR_MinPoint2;
int               FTS_SR_MaxPos0,FTS_SR_MinPos0,FTS_SR_MaxPos1,FTS_SR_MinPos1,FTS_SR_MaxPos2,FTS_SR_MinPos2,FTS_SR_barsCount;

extern string     C0M_FTS6                = "#-# FTE_LocMainTrend_6On - settings";
extern int        FTS_Distance = 8; // specify how many bars in history this filter calculates
extern int        FTS_TimePerShift = 2; // counts within period times higher (if current period is M15 and FTS_TimePerShift=2, then H1)
extern double     FTS_MaxDiff = 140; // difference in pips in total sum of bars
extern double     FTS_MinSlope=0.3; // slope between the first and the last calculated bar
double FTS_Slope,FTS_Difference,FTS_Bar1,FTS_Bar3;
int FTS_LastBarCnt;

extern string     C0M_FTS8                = "#-# FTE_WaitForPeaks_8On - settings";
extern int        FTS_BarsBack=3; //count of bars where to find max and min price
extern int        FTS_BarsForward=2; //count of bars where the peak is valid
datetime FTS_TimeLimitLong; //system variable, controls a time limitation of the peak
datetime FTS_TimeLimitShort;//system variable, controls a time limitation of the peak
extern double FTS_PeakPerc=0.4; //wait for a peak in a certain distance from actual price given with difference between max and min price 
double FTS_PeakLong; //system variable,holds price of the peak for long trades
double FTS_PeakShort; //system variable,holds price of the peak for short trades
int FTS_PeaksBars; //holds count of bars in the current chart to save CPU


extern string     COM_RCS             = "#-# Record Settings";
extern bool       RCS_WriteLog                 = true; //display and write log event
extern bool       RCS_WriteDebug               = false; //display and write system informations
extern bool       RCS_SaveInFile               =false; //archive all logs into a file
int RCS_LogFilter[9]={0,0,1,1,1,1,1,1,1}; //filter messages what all should be written on printscreen or into a log file,1=true,0=false
//0.signals,1.filters,2.money management,3.open trade,4.all about sets,5.closeing ticket,6.changing strategy,7.all about auto-optimalization,8.common settings 
extern string     RCS_FilterLog = "001111111"; //as RCS_LogFilter, but available in extern variables
int RCS_DebugFilter[9]={0,0,1,1,1,1,1,1,1}; //filter messages what all should be written on printscreen or into a log file,1=true,0=false
extern string     RCS_FilterDebug = "001111111"; // //as RCS_DebugFilter, but available in extern variables
extern string     RCS_EAComment                = "080726"; //attached as trade comment 
extern string     RCS_NameEA     = "GLFX";        // EA's name, under this name a tester looks for this EA
double RCS_LogFileSize=1000000; //The Log file will be devided into files with a given size


extern string     COM_GBV            = "#-# Global Variables";
#define    GBV_MagicNumSet1     080726 //must be unique
int    GBV_maxMagic         =  0; //Set size of magic numbers used
bool   GBV_GreenLight     =  true; //allow or forbid trading, controled by system
int    GBV_LogHandle        = -1; //number of log file
int    GBV_BuySignalCount; //system counts how many buy signals were fulfilled
int    GBV_SellSignalCount;//system counts how many sell signals were fulfilled
double GBV_currentTime; //One global variable saves thousands of CPU cycles.
extern bool       GBV_HideTestIndicators=true; //sets a flag hiding indicators called by the EA


#import  "shell32.dll"           //Connect a dll (provided with Windows)             
  int ShellExecuteA(int hwnd,string Operation,string File,string Parameters,string Directory,int ShowCmd); 
#import
//#include <stderror.mqh>
//#include <stdlib.mqh> 

//----------------------  INIT  --------------------

void init()
  { //Startup Functions, only called once.
    string filename, FileLine,message;
    int cnt,handle,fsize,number;
    double CurrTime;
    double DecrTime;
     
//****************** start -settings for auto-optimalization **************************
    if(SMT_ProveCurrentSet)AOP_TestDays = MathCeil(SMT_ProveHoursBack/24); //set the amount of days for optimization according SMT_ProveHoursBack
    filename="\\optimalization\\tester\\files\\LastOptim.csv";
    handle=FileOpen(filename,FILE_CSV|FILE_READ,';');
    if(handle!=-1) 
      {
        FileClose(handle);
        FileDelete(filename); 
      }  
    if(AOP_Optimalization_1On) //prepare a variable AOP_ProveCyc for autooptimalization
      {     
        filename=StringConcatenate("Optim-",TMT_Currency,"-",TMT_Period,".csv");
        handle=FileOpen(filename,FILE_READ,';'); 
        if(handle==-1)
         {
            message=StringConcatenate("AOP_Optimalization_1On: File ",filename,"does not exist! Tester can not be run!");
            Alert(message);  
            if(RCS_WriteLog) L2_WriteLog(8,message);
            GBV_GreenLight=false;
         }   
        else   
         {
            if(FileSize(handle)>3000) FileSeek(handle,FileSize(handle)-3000,SEEK_SET);
            while(FileIsLineEnding(handle)==false) FileLine=FileReadString(handle);
            while(FileIsEnding(handle)==false)
               {
                  number=StrToInteger(FileReadString(handle)); 
                  while(FileIsLineEnding(handle)==false) FileLine=FileReadString(handle);
                  if(number!=0) AOP_SetCount=number;
               }  
            if(AOP_ProveCyc_End==0) AOP_ProveCyc_End=AOP_SetCount;//if a value is not scritly given, set it according to lengh of a file
            FileClose(handle);  
         }                                                 
      }
    if(AOP_ModifyTPSL_2On && !AOP_TPSLpromptly && !AOP_TPSLperi) Alert("AOP_ModifyTPSL_2On: Can not modify TP or SL, check AOP_TPSLpromptly or AOP_TPSLperi on !"); 
    if(AOP_Optimalization_1On && !IsOptimization() ) AOP_AllowNewTrades=false; //first find a new set and then allow to trade
    
//****************** end -settings for auto-optimalization **************************

    if(SMT_ProveCurrentSet && !AOP_Optimalization_1On && (IsTesting() || IsOptimization()) ) //try selected set in history, valid only if testing
      { //Fill time until you want to prove the set into a variable FTS_NotTradeFrom2 !!
          FTS_NotTradeTo2=D'2035.02.10 00:00'; //selected time must be higher then current time
          FTS_NotTradeTo1=SetTimeFrom(SMT_ProveHoursBack,FTS_NotTradeFrom2);
          FTS_NotTradeFrom1=0;     
      } 


    if(AOP_Optimalization_1On && SMT_LookForNextSet && !IsOptimization())
      {
         message="AOP_Optimalization_1On : Optimalization can not run with a function LookForNextSet when optimalization is not running! System is switching off LookForNextSet !";
         Alert(message);  
         if(RCS_WriteLog) L2_WriteLog(8,message);
         SMT_LookForNextSet=false;
      }
         
    if (SMT_LookForNextSet)
      { 
        filename=StringConcatenate("Sets-",TMT_Currency,"-",TMT_Period,".csv");
        handle=FileOpen(filename,FILE_READ,';'); 
        if(handle==-1)
         {
            message=StringConcatenate("SMT_LookForNextSet: File ",filename,"does not exist! Looking for a set can not start!");
            Alert(message);  
            if(RCS_WriteLog) L2_WriteLog(8,message);
            GBV_GreenLight=false;
         }   
        else   
         {
            FileClose(handle);  
            MM_VarFromFile();            
         }                                                 
       }
      
    if((Symbol() != TMT_Currency) && (Symbol() != TMT_Currency+"m"))
      {
        message=StringConcatenate("TMT_Currency: These settings are designed for ",TMT_Currency," only! Change chart or update TMT_Currency");
        Alert(message);  
        if(RCS_WriteLog) L2_WriteLog(8,message);
        GBV_GreenLight=false;
      }

    if(MMT_MaxLot >MarketInfo(Symbol(),MODE_MAXLOT)) MMT_MaxLot=MarketInfo(Symbol(),MODE_MAXLOT);
    if(MMT_MinLot <MarketInfo(Symbol(),MODE_MINLOT)) MMT_MinLot=MarketInfo(Symbol(),MODE_MINLOT);

    int PerArrayNr[]={1,5,15,30,60,240,1440,10080,43200};
    string PerArrayStr[]={"M1","M5","M15","M30","H1","H4","D1","W1","MN"};
    int PosPer=ArrayBsearch(PerArrayNr,Period(),WHOLE_ARRAY,0,MODE_ASCEND);
    if(PerArrayStr[PosPer]!=TMT_Period) 
      {
        message=StringConcatenate("TMT_Period: These settings are designed for ",TMT_Period," only! Change chart or update TMT_Period");
        Alert(message);  
        if(RCS_WriteLog) L2_WriteLog(8,message);
        GBV_GreenLight=false;
      }   


    //Initial Settings:


    //TODO starting balance for complex money management.
    SGE_signalsRequired=SGE_Envelope_1On+SGE_SMAD_2On+SGE_OSMA_3On+SGE_MA_Diverg_4On+SGE_RSI_low_5On+SGE_RSI_high_6On+SGE_Envelope_HF_7On+SGE_SMA_HF_8On;

    EMT_minStop=MarketInfo(Symbol(),MODE_STOPLEVEL);
    if(EMT_BE_SL<EMT_BE_Profit+EMT_minStop) 
      EMT_BE_Profit=EMT_BE_SL-EMT_minStop;
      
    if(FTS_WeekAt1>FTS_WeekTo1) { Alert("FTS_WeekAt1>FTS_WeekTo1"); GBV_GreenLight = false; }
    if(FTS_WeekAt2>FTS_WeekTo2) { Alert("FTS_WeekAt2>FTS_WeekTo2"); GBV_GreenLight = false; }
    if(FTS_WeekTo1>FTS_WeekAt2) { Alert("FTS_WeekTo1>=FTS_WeekAt2"); GBV_GreenLight = false; }
    if(FTS_SunAt>FTS_SunTo) { Alert("FTS_SunAt>FTS_SunTo"); GBV_GreenLight = false; }
    if(FTS_FriAt>FTS_FriTo) { Alert("FTS_FriAt>FTS_FriTo"); GBV_GreenLight = false; }
    if(FTS_MonAt>FTS_MonTo) { Alert("FTS_MonAt>FTS_MonTo"); GBV_GreenLight = false; }
    
    if(GBV_HideTestIndicators) HideTestIndicators(true);
    else HideTestIndicators(false);
    
    ArrayResize(EXT_TC_Store,EXT_TC_SetSize);
    
    // gain arrays from strings obtained from extern variables  
    TextIntoArray (RCS_FilterLog,"RCS_FilterLog",RCS_LogFilter,1);
    TextIntoArray (RCS_FilterDebug,"RCS_FilterDebug",RCS_DebugFilter,1);   
    TextIntoArray (MMT_MoveSLwhenProfit,"MMT_MoveSLwhenProfit",MMT_TS_SLFactor,2);
    TextIntoArray (MMT_WhenProfitMoveSL,"MMT_WhenProfitMoveSL",MMT_TS_ProfitFactor,2);    
    TextIntoArray (MMT_DecrLotsPerc,"MMT_DecrLotsPerc",MMT_DecrFactor,3);
    TextIntoArray (AOP_sorting_GP_PF_EP,"AOP_sorting_GP_PF_EP",AOP_GP_PF_EP,1);
     
   AOP_Gross_Profit   = AOP_GP_PF_EP[0]; // set the priority for filtering-Sorting by Maximal profit
   AOP_Profit_Factor  = AOP_GP_PF_EP[1]; //                               -Sorting by Maximal profit factor        
   AOP_Expected_Payoff= AOP_GP_PF_EP[2]; //                               -Sorting by Maximal expected payoff
         
    
    if(AOP_Gross_Profit+AOP_Profit_Factor+AOP_Expected_Payoff !=6) 
      {
         message="AOP_sorting_GP_PF_EP: Bad input values! Type 1, 2 and 3 in a sequence which you want to start filtering and together sum = 6";
         Alert(message);  
         if(RCS_WriteLog) L2_WriteLog(8,message);
         Alert("AOP_Optimalization_1On is not allowed !");
         AOP_Optimalization_1On=false;
      }   


    if(MMT_DecreaseLots_1On)
      {
         if(MMT_DecrFactor[0]<MMT_DecrFactor[1] || MMT_DecrFactor[1]<MMT_DecrFactor[2])
            {
               message="MMT_DecrLotsPerc : Usually values should be sorted from max to min !";
               Alert(message);  
               if(RCS_WriteLog) L2_WriteLog(2,message);
            }
      }
    
    //if(!MMT_DecreaseLots_1On) for(cnt=0;cnt<3;cnt++) MMT_DecrFactor[cnt]=100; //same chance for all trade, use it specially with auto-optimalization
   
    if(TMT_TPfromSL_1On) TMT_TP=TMT_SL+TMT_ADDtoSLforTP; //count with different TP then in startup

    SwapLong=MarketInfo(TMT_Currency,MODE_SWAPLONG);
    SwapShort=MarketInfo(TMT_Currency,MODE_SWAPSHORT);
  
    if(EGF_CloseBeforeRollOver && EGF_WaitOnProfitInPips<0)
      {
         message="CloseBeforeRollOver :EGF_WaitOnProfitInPips must be equal or higher then 0! EGF_WaitOnProfitInPips is set to 0!";
         Alert(message);  
         if(RCS_WriteLog) L2_WriteLog(8,message);
         EGF_WaitOnProfitInPips=0;
      }               
         
    if(EGF_CloseBeforeRollOver && FTE_Time_2On) //close all opened trade before roll-over, start to close according to times EGF_TimeDayEnd and EGF_TimeBeforeEnd
      {
         if(EGF_CloseOnlyOnFriday) //check if all variables make sense together
            {
               if(EGF_TimeFridayEnd<FTS_FriTo)
                  {
                     message="EGF_CloseBeforeRollOver: Because EGF_CloseBeforeRollOver and EGF_TimeFridayEnd<FTS_FriTo, trades will be opened and closed immediately !";
                     if(EGF_KeepWhenSwapOK) message=message+" A condition is that swap is negative.";
                     Alert(message);  
                     if(RCS_WriteLog) L2_WriteLog(8,message);
                  }
               if(EGF_TimeFridayEnd+EGF_TimeBeforeEnd<FTS_FriTo)     
                  {
                     message="EGF_CloseBeforeRollOver: Because EGF_CloseBeforeRollOver and EGF_TimeFridayEnd+EGF_TimeBeforeEnd<FTS_FriTo, trades will be opened and closed when a little profit is reached!";
                     if(EGF_KeepWhenSwapOK) message=message+" A condition is that swap is negative.";
                     Alert(message);  
                     if(RCS_WriteLog) L2_WriteLog(8,message);
                  }
            }
         else
            {
               if(EGF_TimeDayEnd<FTS_WeekTo2)
                  {
                     message="EGF_CloseBeforeRollOver: Because EGF_CloseBeforeRollOver and EGF_TimeDayEnd<FTS_WeekTo2, trades will be opened and closed immediately !";
                     if(EGF_KeepWhenSwapOK) message=message+" A condition is that swap is negative.";
                     Alert(message);  
                     if(RCS_WriteLog) L2_WriteLog(8,message);
                  }
               if(EGF_TimeDayEnd+EGF_TimeBeforeEnd<FTS_WeekTo2)     
                  {
                     message="EGF_CloseBeforeRollOver: Because EGF_CloseBeforeRollOver and EGF_TimeDayEnd+EGF_TimeBeforeEnd<FTS_WeekTo2, trades will be opened and closed when a little profit is reached!";
                     if(EGF_KeepWhenSwapOK) message=message+" A condition is that swap is negative.";
                     Alert(message);  
                     if(RCS_WriteLog) L2_WriteLog(8,message);
                  }
            }
      }      // end of close all opened trade before roll-over ...

    if(CLS_CheckLastTrade_4On && !MMT_UseMManagement)
      {
         message="CLS_CheckLastTrade_4On can not be used because MMT_UseMManagement is off!";
         Alert(message);  
         if(RCS_WriteLog) L2_WriteLog(8,message);
      }
      
      
            
   
                          
   if(MMT_Martingale_1On && MMT_DecreaseLots_1On)
      {
         message="MMT_Martingale_1On: MMT_Martingale_1On & MMT_DecreaseLots_1On are on. Be carefull to keep working these two functions together.";
         Alert(message); 
         if(RCS_WriteLog) L2_WriteLog(8,message);
      } 
   MMT_MaxAccBalance=AccountBalance();        
    
}

//---- DEINITIACION
int deinit()
  {
   HideTestIndicators(false);
   if(AOP_Optimalization_1On && IsOptimization()) 
     {
        int handle=FileOpen("LastOptim.csv",FILE_CSV|FILE_WRITE,';');
        FileWrite(handle,SMT_CurrentPass,TimeToStr(FTS_NotTradeFrom2,TIME_DATE|TIME_MINUTES|TIME_SECONDS),TimeToStr(TimeCurrent(),TIME_DATE|TIME_MINUTES|TIME_SECONDS));
        FileClose(handle);
     }   


   return(0);
  }  

//----------------------  START  --------------------

void start()
  {
    if(GBV_GreenLight == false) return(0);
    GBV_currentTime=TimeHour(TimeCurrent())+TimeMinute(TimeCurrent())*0.01;    //one global variable saves thousands of CPU cycles
    
    L1_OpenLogFile(RCS_NameEA);
    int ordercount;
    CntBuyDirection=0;
    CntSellDirection=0;
 
//********* beginning of a area for auto optimalization *******    
    if(AOP_Optimalization_1On && !IsOptimization() && AOP_OptimRunning) //provide careing a results of a optimalization to the terminal
      {
         while(IsTesting() && A_CheckStatus()==false) Sleep(10000); // wait 1 sec and be near to reality and allow to use auto-optimalization in tester mode  
         if(A_CheckStatus()==true) 
            {
               if(AutoOptResult(AOP_TestDays,RCS_NameEA,AOP_Gross_Profit,AOP_Profit_Factor,AOP_Expected_Payoff))
                  {
                     MM_VarFromFile(); // set new variables according to voted SMT_CurrentPass 
                     AOP_AllowNewTrades=true;
                  } 
               else 
                  {
                     if(RCS_WriteLog) L2_WriteLog(7,"AOP_Optimalization_1On: Something was bad within a sorting of results from optimalization !");                     
                     AOP_AllowNewTrades=false;
                  }    
               AOP_OptimRunning=false;
               string filename="\\optimalization\\tester\\files\\LastOptim.csv";
               int handle=FileOpen(filename,FILE_CSV|FILE_READ,';');
               if(handle!=-1) 
                {
                  FileClose(handle);
                  FileDelete(filename);  
                }   
               AOP_LastAutoOptim=TimeCurrent();                                
             }     
       }           

    if(AOP_Optimalization_1On && !IsOptimization() && !AOP_OptimRunning) //check if time is ready for looking for a new suitable set
         if(TimeCurrent()>AOP_OptEveryHours*3600+AOP_LastAutoOptim) //run optimalization
            {
               int CheckIfExist=FileOpen("\\optimalization\\tester\\files\\LastOptim.csv",FILE_CSV|FILE_READ,';');
               if(CheckIfExist==-1)//check if optimilization doesn't run under an other EA
                  {
                    if(RCS_WriteLog) L2_WriteLog(7,"AOP_Optimalization_1On: Ready to run optimalization");
                    if(AutoOptStart(AOP_TestDays,RCS_NameEA))AOP_OptimRunning=true; //run optimalization from a tester with a script               
                    else if(RCS_WriteLog) L2_WriteLog(7,"Attempt to optimalize system currupted");
                  } 
               else FileClose(CheckIfExist); //system is ready for optimilization but there is an other EA, for which tester is makeing optimilization  
            }
            
    if(AOP_TPSLnextRun<TimeCurrent() && AOP_ModifyTPSL_2On && AOP_TPSLperi) AOP_ModifyTPSL_2OnFunction(); // modify TP and SL at a given time      
        
//********* end of a area for auto optimalization *******                  
  
    
    if(EXT_CheckTempTrend || FTE_TemporaryTrend_7On) TickContainer(); //check a temporary trend
    
    if (SMT_LookForNextSet && !IsOptimization())
      if (MM_CheckLosses()) MM_VarFromFile(); //use new set if there are more consequence losses then varible "SMT_CntLosses"

    if( ArrayRange(EMT_bcRecross,0) < TMT_MaxCntTrades) ArrayResize(EMT_bcRecross,TMT_MaxCntTrades); //must be checked because TMT_MaxCntTrades should change by a new set

    //*************** Detect open trades *********************//
    for (int cticket = 0; cticket < OrdersTotal(); cticket++) 
      {
       if (OrderSelect(cticket, SELECT_BY_POS) == false)
         continue;

       if (OrderSymbol() != Symbol())
         continue;

       if (OrderMagicNumber() >= GBV_MagicNumSet1 && OrderMagicNumber() <= GBV_MagicNumSet1 + GBV_maxMagic)
         {
           if(OrderOpenTime()>TMT_LastOpenDirection[1]) //holds type of the last open trade 
            {
               TMT_LastOpenDirection[1]=OrderOpenTime();
               TMT_LastOpenDirection[2]=OrderTicket();
               if(OrderType()==OP_BUY) TMT_LastOpenDirection[0]=Buy;
               if(OrderType()==OP_SELL) TMT_LastOpenDirection[0]=Sell; 
            }                 
               
           X1_ManageExit(OrderTicket());
           ordercount++;
           if(OrderType()==OP_BUY) CntBuyDirection++; //count how many long trades are opened
           if(OrderType()==OP_SELL) CntSellDirection++;  //count how many short trades are opened     
         }
      }


    if (TimeCurrent()>FTS_NotTradeFrom1 && TimeCurrent()<FTS_NotTradeTo1) return(0); //do not open new order within selected time zone
    if (TimeCurrent()>FTS_NotTradeFrom2 && TimeCurrent()<FTS_NotTradeTo2) return(0); //the second time filter


    if ( ordercount < TMT_MaxCntTrades && AOP_AllowNewTrades) //check if it is allowed to open new trades
      {
         if(ordercount==0) A1_OpenTrade_If_Signal();
         else if(TMT_LastOpenTime+TMT_TimeShiftOrder<TimeCurrent() && ordercount>0 && !EXT_ExceptionalTradeOnly) A1_OpenTrade_If_Signal();
      } 
      
    if(ordercount==0) EXT_IsOpenedTradeIfSwapOK=false;   
    if(EXT_OpenDeniedTimeIfSwapOK && EGF_CloseBeforeRollOver && ordercount < TMT_MaxCntTrades ) OpenIfSwapOK();

    if(RCS_SaveInFile) FileFlush(GBV_LogHandle);
    
  } //End Start() 



//********************* Check for New Trade *******************//

void A1_OpenTrade_If_Signal()
  { 
    bool enableBuy= true;
    bool enableSell=true;    
    int TradeDirect=A2_Check_If_Signal(TMT_SignalsRepeat,GBV_BuySignalCount,GBV_SellSignalCount);   
     // If the GBV_BuySignalCount or GBV_SellSignalCount exceeds the TMT_SignalsRepeat required
     // then the Buy order or Sell order will be submitted.
     
    if(TradeDirect==0) return; //no signals to open a trade
    if (FTE_WaitForPeaks_8On) 
      {
         FTS_ControlPeaks(TradeDirect);
         Z_F8_BlockTradingFilter8(enableBuy,enableSell);
      }    
    
    if(TradeDirect==1 && CntBuyDirection<TMT_MaxInDirection)
      {
        if(!enableBuy) return;
        if(TMT_AlternateBuySell && TMT_LastOpenDirection[0]==Buy)
         {
            if(RCS_WriteDebug) L3_WriteDebug(3,"TMT_AlternateBuySell: Can not open long trade because the last order was Buy !");         
            return; 
         }   
        if( A1_1_OrderNewBuy(MM_OptimizeLotSize(Buy)*A1_3_EntryConfirmation(OP_BUY)) != Failed)
         {
          GBV_BuySignalCount=0;
         } 
      }
    else if(TradeDirect==-1 && CntSellDirection<TMT_MaxInDirection)
      {
        if(!enableSell) return;
        if(TMT_AlternateBuySell && TMT_LastOpenDirection[0]==Sell)
         {
            if(RCS_WriteDebug) L3_WriteDebug(3,"TMT_AlternateBuySell: Can not open short trade because the last order was Sell !");         
            return; 
         }   
        if( A1_2_OrderNewSell(MM_OptimizeLotSize(Sell)*A1_3_EntryConfirmation(OP_SELL)) != Failed)
         {
          GBV_SellSignalCount=0;
         } 
      }
  }





int A2_Check_If_Signal(int ConsSignal,int& BuySigCnt,int& SellSigCnt)
  { //Check singals and conditions to enter new trade
    int  signalCount;
    bool enableBuy= true;
    bool enableSell=true;

//EntryFilters enable or disable trading, while EntrySignals generate "buy" or "sell"
//EntryFilter should return "false" if trading is still enabled.    
    if (FTE_ATR_1On) //Changed filters to quit ASAP.
      if (Z_F1_BlockTradingFilter1()) return(0);

    if (FTE_Time_2On)
      if (Z_F2_BlockTradingFilter2()) return(0);

    if (FTE_MA_BuyTrend_3On)
      if (Z_F3_BlockTradingFilter3()) { enableBuy=false; BuySigCnt=0; }

    if (FTE_MA_SellTrend_4On)
      if (Z_F4_BlockTradingFilter4()) { enableSell=false; SellSigCnt=0; }

    if (FTE_FolMainTrend_5On)
      if (Z_F5_BlockTradingFilter5(enableBuy,enableSell)) return(0);
 
    if (FTE_LocMainTrend_6On)
      if (Z_F6_BlockTradingFilter6(enableBuy,enableSell)) return(0);      

    if (FTE_TemporaryTrend_7On)
      if (Z_F7_BlockTradingFilter7(enableBuy,enableSell)) return(0);

    if (FTE_WaitForPeaks_8On) Z_F8_BlockTradingFilter8(enableBuy,enableSell);      

    //Check all the EntrySignals for Buy=1 or Sell=-1 values. See constants at top of file.

    if (SGE_Envelope_1On)
      {
        signalCount += Z_S1_EntrySignal1();    
        if(RCS_WriteDebug) L3_WriteDebug(0,"SGE_Envelope_1On: Signal sum: "+signalCount);
      }
    if (SGE_SMAD_2On)
      {
        signalCount += Z_S2_EntrySignal2();    
        if(RCS_WriteDebug) L3_WriteDebug(0,"SGE_SMAD_2On: Signal sum: "+signalCount);
      }
    if (SGE_OSMA_3On)
      {
        signalCount += Z_S3_EntrySignal3();    
        if(RCS_WriteDebug) L3_WriteDebug(0,"SGE_OSMA_3On: Signal sum: "+signalCount);
      }
    if (SGE_MA_Diverg_4On)
      {
        signalCount += Z_S4_EntrySignal4();    
        if(RCS_WriteDebug) L3_WriteDebug(0,"SGE_MA_Diverg_4On: Signal sum: "+signalCount);
      }
    if (SGE_RSI_low_5On)
      {
        signalCount += Z_S5_EntrySignal5();    
        if(RCS_WriteDebug) L3_WriteDebug(0,"SGE_RSI_low_5On: Signal sum: "+signalCount);
      }
    if (SGE_RSI_high_6On)
      {
        signalCount += Z_S6_EntrySignal6();    
        if(RCS_WriteDebug) L3_WriteDebug(0,"SGE_RSI_high_6On: Signal sum: "+signalCount);
      }
    if (SGE_Envelope_HF_7On)
      {
        signalCount += Z_S7_EntrySignal7();    
        if(RCS_WriteDebug) L3_WriteDebug(0,"SGE_Envelope_HF_7On: Signal sum: "+signalCount);
      }
    if (SGE_SMA_HF_8On)
      {
        signalCount += Z_S8_EntrySignal8();    
        if(RCS_WriteDebug) L3_WriteDebug(0,"SGE_SMA_HF_8On: Signal sum: "+signalCount);
      }      
    // Counting up the number of buy or sell signals that happen consecutively.  
    if(enableBuy)
      if(signalCount >= SGE_signalsRequired) 
        { //Check for Buy
          BuySigCnt++;
          SellSigCnt=0; 
        }   
    if(enableSell)
      if(signalCount <= (-1)*SGE_signalsRequired)
        {
          BuySigCnt=0;
          SellSigCnt++;
        }
    if(TMT_SignalsReset)
       if(  (signalCount <= (-1)*SGE_signalsRequired) && (signalCount >= SGE_signalsRequired))
         {//If neither buy nor sell signal is received
           BuySigCnt =0;
           SellSigCnt=0;
         }
    if(RCS_WriteLog) L2_WriteLog(0,"TMT_SignalsReset: signal#:"+signalCount+" ConsSignal:" +ConsSignal+" BuySigCnt:" +BuySigCnt+" SellSigCnt:"+ SellSigCnt);
     
     // If the BuySigCnt or SellSigCnt exceeds the ConsSignal required
     // then the Buy order or Sell order shoul be entered
    if(ConsSignal <= BuySigCnt)return(1); // possibility to open buy order
    else if(ConsSignal <= SellSigCnt)return(-1);// possibility to open sell order
    return(0); //no possibility
  }

 
int A1_1_OrderNewBuy(double lots)  //Trade TP+SL Signals
  { 
    int ticket=T2_SendTrade(TMT_TP, TMT_SL, lots, OP_BUY);
    return(ticket);
  }

int A1_2_OrderNewSell(double lots)   //Trade TP+SL Signals
  { 
    int ticket=T2_SendTrade(TMT_TP, TMT_SL, lots, OP_SELL);
    return(ticket);    
  }

double A1_3_EntryConfirmation(int direction)
{ //Gann Style Support and Resist Lines.
   if(!CLS_NearSR_2Lot_1On) return (1.0);
   double value=1;
   if(SGS_ES4_SRBar>iBars(Symbol(),PERIOD_H4))
   {
      SGS_ES4_SRBar=iBars(Symbol(),PERIOD_H4);
      SGS_ES4_SR[4]=iHigh(Symbol(),PERIOD_H4,1);
      SGS_ES4_SR[0]=iLow(Symbol(),PERIOD_H4,1);
      if(SGS_ES4_SR[4]-SGS_ES4_SR[0]<(TMT_TP+TMT_SL)*Point)
      {
         SGS_ES4_SR[4]=iHigh(Symbol(),PERIOD_D1,1);
         SGS_ES4_SR[0]=iLow(Symbol(),PERIOD_D1,1);
      }
      SGS_ES4_SR[3]=(SGS_ES4_SR[0]+SGS_ES4_SR[4])*0.75;
      SGS_ES4_SR[2]=(SGS_ES4_SR[0]+SGS_ES4_SR[4])*0.5;
      SGS_ES4_SR[1]=(SGS_ES4_SR[0]+SGS_ES4_SR[4])*0.25;
   }
   int next=ArrayBsearch(SGS_ES4_SR,Bid);
   if(direction==OP_SELL) 
   {
      if(Bid+TMT_SL*Point>SGS_ES4_SR[next]) value=2;
   }
   if(direction==OP_BUY) 
   {
      if(next !=0)//safe array
      { 
         if(Bid-TMT_SL*Point<SGS_ES4_SR[next-1]) value=2; 
      }
      else value=1;
   }
   return (value);  
}

bool A1_4_IsTradePossible()
  {
    if(IsTradeAllowed() || !IsTradeContextBusy()) return(true);
    else return(false);
  }  

/*double EntryConfirmation2()
{ //TODO Speed Angle Check
return(1.0);
}
*/

/*double EntryConfirmation3()
{ //TODO 4-7 Rule
return(1.0);
}
*/

//********************* Money Management *****************//

double MM_OptimizeLotSize(int direction)
  {
    double lots         =MMT_Lots;
    int    orders       =OrdersHistoryTotal();
    int    i            =orders-1;
    int    trades       =0;
    double    wins         =0;
    double    losses       =0;
    double lotStep=MarketInfo(Symbol(),MODE_LOTSTEP);    
    double changeLot;
    int    ticket;
    bool FirstLost=false;
    
    if(MMT_UseMManagement) lots=(AccountFreeMargin()*MMT_MaxRisk)/(MarketInfo(Symbol(),MODE_TICKVALUE)*TMT_SL);
    else lots=MMT_Lots;
    
    if(CLS_CheckPA_2On)
      {
       MM_CheckSet(SMT_CurrentSet,CLS_PA_History,ticket,wins,losses);
       if(wins+losses!=0) //no history for this set
         { 
           if(wins>losses) changeLot=(wins/(wins+losses))*(CLS_PA_Increasing/100);
           else            changeLot=((-1)*losses/(wins+losses))*(CLS_PA_Decreasing/100);
           if(RCS_WriteDebug) L3_WriteDebug(2,StringConcatenate("CLS_CheckPA_2On: wins : ",wins," losses : ",losses," changeLot : ",changeLot," CLS_PA_Increasing : ",CLS_PA_Increasing," CLS_PA_Decreasing : ",CLS_PA_Decreasing));
           wins=0;
           losses=0;
           if(RCS_WriteLog) L2_WriteLog(2,"CLS_CheckPA_2On: Changing basic lots size about "+changeLot);
           lots=lots+changeLot*lots;
         }  
     
      }
    
    while (i > 0 || (!FirstLost && trades<3))
      {
            if(OrderSelect(i,SELECT_BY_POS,MODE_HISTORY)==false)
              {
                if(RCS_WriteLog) L2_WriteLog(2,"MMT_DecrLotsPerc: Decrease factor noticed error in history!");
                break;
              }
            if(OrderSymbol()==Symbol() && OrderType()<=OP_SELL)
              {
                if(OrderProfit()<0 && trades<3) losses++;
                if(OrderProfit()>0 && trades<3) wins++;
                trades++;   
                if(OrderProfit()<0 && TMT_LastLostDirection[1]<=OrderCloseTime())
                  {
                     TMT_LastLostDirection[1]=OrderCloseTime(); //holds the last lossy trade
                     TMT_LastLostDirection[2]=OrderTicket();
                     if(OrderType()==OP_BUY) TMT_LastLostDirection[0]=Buy;
                     else TMT_LastLostDirection[0]=Sell;
                     FirstLost=true;
                     if(RCS_WriteDebug) L3_WriteDebug(2,"TMT_LastLostDirection: Last lossy trade : ticket Nr."+OrderTicket()) ;                     
                  }   
              }
            i--;
      }

    if(CLS_CheckLastTrade_4On)
      {
         if(TMT_LastLostDirection[0]==direction)
           {
             lots=lots*( (100-CLS_DecrLotsIfLastTrade)/100); //if CLS_CheckLastTrade_4On is on and the last trade was closed with lost decrease a new open trade in the same direction about this amount %
             if(RCS_WriteLog) L2_WriteLog(2,"CLS_CheckLastTrade_4On: Basic lots were decreased about "+CLS_DecrLotsIfLastTrade+"%");
           }  
         else if(RCS_WriteDebug) L3_WriteDebug(2,"CLS_CheckLastTrade_4On: No need to decrease basic lot!");
      }   
   
    if(MMT_Martingale_1On)
      {
         if(MMT_MaxAccBalance>AccountBalance())
            {
               changeLot=(MMT_MaxAccBalance-AccountBalance())/((TMT_TP-MarketInfo(Symbol(),MODE_SPREAD)) *MarketInfo(Symbol(),MODE_TICKVALUE));
               if(changeLot>lots)
                  {
                     if(RCS_WriteDebug) L3_WriteDebug(2,"MMT_Martingale_1On: Because AccountBalance was recently higher, lots will be increase from "+lots+" to "+changeLot);
                     lots=changeLot;                  
                  }
            }      
      }

    changeLot=AccountFreeMargin()/MarketInfo(Symbol(),MODE_MARGINREQUIRED);
    if(lots>changeLot && MMT_ContIfMGfail) 
      {
         if(RCS_WriteDebug) L3_WriteDebug(2,"MMT_Martingale_1On: Not possible to cover all lost. Neccesary lot value is "+lots+", but the account allows to use only "+changeLot);
         lots=changeLot;
      }

    if(MMT_DecreaseLots_1On) 
      {
         if(RCS_WriteDebug) L3_WriteDebug(2,"MMT_DecrLotsPerc: Decrease Factors "+MMT_DecrFactor[0]+" "+MMT_DecrFactor[1]+" "+MMT_DecrFactor[2]) ;
         if (losses==1)lots=lots*MMT_DecrFactor[0]*0.01;   
         if (losses==2)lots=lots*MMT_DecrFactor[1]*0.01;   
         if (losses>=3)lots=lots*MMT_DecrFactor[2]*0.01;   
         if(RCS_WriteDebug) L3_WriteDebug(2,"MMT_DecrLotsPerc: wins: "+wins+" losses: "+losses+"  lots: "+lots);
      }
      
    
    if(MMT_MaxAccBalance<AccountBalance()) MMT_MaxAccBalance=AccountBalance();  
    if(lots<MMT_MinLot) { lots=MMT_MinLot; if(RCS_WriteLog) L2_WriteLog(2,"MMT_DecrLotsPerc: lots switched to min "+lots); }
    if(lots>MMT_MaxLot) { lots=MMT_MaxLot; if(RCS_WriteLog) L2_WriteLog(2,"MMT_DecrLotsPerc: lots switched to max "+lots); }

    lots /=lotStep;
    lots  = MathFloor(lots);
    lots *= lotStep;

    return(lots);
  }

int T2_SendTrade(int TP, int SL, double lot, int order, int incMagic = 0)  //Execute Trades
  { 
    double price;
    color  arrow;
    int    ticket;

    string tradecomment= StringConcatenate(RCS_EAComment," GX ",incMagic,"#",SMT_CurrentSet);
    RefreshRates();

    if (order %2==OP_BUY)
      { //if number is even
        price =  Ask;
        arrow =  Navy;
      }

    if (order %2==OP_SELL)
      { //if number is odd
        price =  Bid;
        SL    = -SL;
        TP    = -TP;
        arrow =  Magenta;
      }
      
    if(!A1_4_IsTradePossible()) return(Failed);
    if(AccountFreeMarginCheck(Symbol(),order,lot)<0)
      {
        if(RCS_WriteLog) L2_WriteLog(3,"AccountFreeMarginCheck - not enough money to open a new trade");
        GBV_GreenLight=false;
      }    
    else ticket = OrderSend( Symbol(),
                        order,
                        lot,
                        price,
                        TMT_Slippage,
                        price-SL*Point,
                        price+TP*Point,
                        tradecomment,
                        GBV_MagicNumSet1 + incMagic,
                        0, 
                        arrow );

    if (ticket != Failed)
      {
        if(RCS_WriteLog) L2_WriteLog(3,"New trade-Ticket Nr."+ticket+" "+Symbol()+" order:"+order+" lot:"+lot+" price:"+price+" SL:"+(price-SL*Point)+" TP:"+(price+TP*Point));
        TMT_LastOpenTime=TimeCurrent();
        return (ticket); //TODO use ticket number somehow
      } 
    else
      {
        int error=GetLastError();
        if(RCS_WriteLog) L2_WriteLog(3,"New trade-Error:"+error+" "+Symbol()+" order:"+order+" lot:"+lot+" price:"+price+" SL:"+(price-SL*Point)+" TP:"+(price+TP*Point));
        return (Failed); 
      }
  }


bool MM_VarFromFile()  
{
   int ticket  =0;
   double wins    =0;
   double losses  =0;
   int range=SMT_AFL_Range;
   int pass,newpass=-1;
   string variable,file,message;
   int futureset,fsize;
   double pointer;

   if(SMT_CheckSetBeforeLoading && !IsOptimization() && SMT_CurrentSet!=0)
      {
        if(!MM_CheckSet(SMT_NextSet,range,ticket,wins,losses))
         {
          if(RCS_WriteLog) L2_WriteLog(4,"SMT_CheckSetBeforeLoading: Set "+SMT_NextSet+" denied!. Stay with a old set!");
          //MMT_ConseqLosses=2;
        //  SMT_CntLosses=2;          
          return(false);
         } 
      }
   if (IsOptimization() || AOP_Optimalization_1On) file=StringConcatenate("Optim-",TMT_Currency,"-",TMT_Period,".csv");
   else file=StringConcatenate("Sets-",TMT_Currency,"-",TMT_Period,".csv");
   int handle=FileOpen(file,FILE_CSV|FILE_READ,';');

   if (handle<1) 
      {
        int error=GetLastError();
        if(RCS_WriteLog) L2_WriteLog(4,"AOP_Optimalization_1On: Error:"+error+" File "+file+" does not exist !");
        return(false);
      } 
   
   if (IsOptimization() || AOP_Optimalization_1On)
      {
         futureset=SMT_CurrentPass;
         fsize=FileSize(handle);
         pointer=((fsize*SMT_CurrentPass)/AOP_SetCount)-5000; //for quicker running set a starting point near to SMT_CurrentPass
         if(pointer>0) 
          {
             FileSeek(handle,pointer,SEEK_SET);
             while(FileIsLineEnding(handle)==false) variable=FileReadString(handle);
          }
          
      }  
   else futureset=SMT_NextSet;
         
   while(FileIsEnding(handle)==false && pass<=futureset && newpass==-1)
      {
        pass=StrToInteger(FileReadString(handle));
        if (futureset==0) futureset=pass;
        
        while(FileIsLineEnding(handle)==false && FileIsEnding(handle)==false) 
         {
           variable=FileReadString(handle);
           if (pass==futureset) 
            {
              MM_FindVar(variable);
              SMT_CurrentSet=pass;
            }  
         }
        if (pass==futureset) 
         {
           variable=FileReadString(handle);
           if (FileIsEnding(handle)==false) newpass=StrToInteger(variable);
           else 
            {
                   FileSeek(handle,0,SEEK_SET);
                   newpass=StrToInteger(FileReadString(handle));
            }  
         }
      }
   SMT_NextSet=newpass;
   message=StringConcatenate("AOP_Optimalization_1On: Set was changed. A current set is ",SMT_CurrentSet,".");
   if(!AOP_Optimalization_1On) message=StringConcatenate(message," A next set will be ",SMT_NextSet);
   if(RCS_WriteLog) L2_WriteLog(4,message);
   FileClose(handle);
   if(AOP_ModifyTPSL_2On && AOP_TPSLpromptly) 
      {
         AOP_TPSLbuyCnt=0;
         AOP_TPSLsellCnt=0;
         AOP_ModifyTPSL_2OnFunction();
      }   
   AOP_TPSLbuyCnt=0;
   AOP_TPSLsellCnt=0;
   if(SMT_ResetTimeShiftOrder) TMT_LastOpenTime=0; //allow to open new trade immediately if max count of trades is less than limit
   if(TMT_TPfromSL_1On) TMT_TP=TMT_SL+TMT_ADDtoSLforTP; //count with different TP then in startup
 
   return(true);
}

bool MM_FindVar(string variable)
{
  int pos=StringFind(variable,"=",0);
  if (pos==-1) return(false);
  string var=StringSubstr(variable,0,pos);
  string value=StringSubstr(variable,pos+1,StringLen(variable)-1);
  double val=StrToDouble(value);
  //Print (variable," var : ",var," val : ",val);
/*  if(SMT_CurrentSet==10) 
   {
      int handle=FileOpen("zk.csv",FILE_CSV|FILE_READ|FILE_WRITE,';');
      FileSeek(handle,0,SEEK_END);
      FileWrite(handle,variable," var : ",var," val : ",val);
      FileClose(handle);
   }   */

  //if(var=="TMT_MaxCntTrades")        TMT_MaxCntTrades=val;
  //if(var=="TMT_TimeShiftOrder")      TMT_TimeShiftOrder=val;
  //if(var=="TMT_SignalsRepeat")       TMT_SignalsRepeat=val;
  //if(var=="TMT_SignalsReset")  TMT_SignalsReset=val;
  if(var=="TMT_Currency")            TMT_Currency=val;
  if(var=="TMT_Period")             TMT_Period=val;
  //if(var=="TMT_Slippage")      TMT_Slippage=val;
  if(var=="TMT_TP")                    TMT_TP=val;
  if(var=="TMT_SL")                    TMT_SL=val;
  if(var=="TMT_TPfromSL_1On")          TMT_TPfromSL_1On=val;
  if(var=="TMT_ADDtoSLforTP")          TMT_ADDtoSLforTP=val;  
  //if(var=="MMT_Lots")                MMT_Lots=val;
  //if(var=="MMT_MinLot")              MMT_MinLot=val;
  //if(var=="MMT_MaxLot")              MMT_MaxLot=val;
  //if(var=="MMT_UseMManagement")      MMT_UseMManagement=val;
  //if(var=="MMT_MaxRisk")             MMT_MaxRisk=val;
  //if(var=="MMT_LimitLosses")     MMT_LimitLosses=val;
  //if(var=="MMT_ConseqLosses")        MMT_ConseqLosses=val;
  //if(var=="MMT_MoveSLwhenProfit")    MMT_MoveSLwhenProfit=val;  
  //if(var=="MMT_WhenProfitMoveSL")    MMT_WhenProfitMoveSL=val; 

  //if(var=="CLS_NearSR_2Lot_1On")    CLS_NearSR_2Lot_1On=val;
  //if(var=="CLS_CheckPA_2On")         CLS_CheckPA_2On=val;
  //if(var=="CLS_PA_Increasing")       CLS_PA_Increasing=val;
  //if(var=="CLS_PA_Decreasing")       CLS_PA_Decreasing=val;
  //if(var=="CLS_PA_History")          CLS_PA_History=val;
  //if(var=="MMT_DecreaseLots_1On")   MMT_DecreaseLots_1On=val;
  //if(var=="MMT_DecrLotsPerc")      MMT_DecrLotsPerc=val;
  //if(var=="AOP_Optimalization_1On")  AOP_Optimalization_1On=val;
  //if(var=="AOP_OptEveryHours")       AOP_OptEveryHours=val;
  //if(var=="AOP_Gross_Profit")        AOP_Gross_Profit=val;
  //if(var=="AOP_Profit_Factor")       AOP_Profit_Factor=val;
  //if(var=="AOP_Expected_Payoff")     AOP_Expected_Payoff=val;
  //if(var=="AOP_TestDays")             AOP_TestDays=val;
  //if(var=="AOP_MinTrCnt")            AOP_MinTrCnt=val;
  //if(var=="AOP_MaxTrCnt")            AOP_MaxTrCnt=val;
  //if(var=="AOP_MinPercSuitableSets") AOP_MinPercSuitableSets=val;
  //if(var=="AOP_ModifyTPSL_2On")      AOP_ModifyTPSL_2On=val;
  //if(var=="AOP_TPSLpromptly")        AOP_TPSLpromptly=val;
  //if(var=="AOP_TPSLperi")            AOP_TPSLperi=val;
  //if(var=="AOP_TPSLwait")            AOP_TPSLwait=val;

  //if(var=="AOP_TPSLmaxChanges")      AOP_TPSLmaxChanges=val;
  //if(var=="SMT_LookForNextSet")      SMT_LookForNextSet=val;
  //if(var=="SMT_CheckSetBeforeLoading") SMT_CheckSetBeforeLoading=val;
  //if(var=="SMT_ProveCurrentSet")     SMT_ProveCurrentSet=val;
  //if(var=="SMT_ProveHoursBack")      SMT_ProveHoursBack=val;
  //if(var=="SMT_CntLosses")           SMT_CntLosses=val;

  //if(var=="SMT_AwayFromLosses")      SMT_AwayFromLosses=val;
  //if(var=="SMT_AFL_Range")           SMT_AFL_Range=val;
  //if(var=="SMT_AFL_Losses")          SMT_AFL_Losses=val;

  //if(var=="EMT_DecreaseTPOn")        EMT_DecreaseTPOn=val;
  if(var=="EMT_DecTPShiftBar")         EMT_DecTPShiftBar=val;
  if(var=="EMT_DecTPShiftPeriod")      EMT_DecTPShiftPeriod=val;
  //if(var=="EMT_ExitWithTS")      EMT_ExitWithTS=val;
  if(var=="EMT_TS")              EMT_TS=val;
  if(var=="EMT_MoveTPonTS")            EMT_MoveTPonTS=val;
  //if(var=="EMT_ModifyTSOn")       EMT_ModifyTSOn=val;
  if(var=="EMT_DelayTS")               EMT_DelayTS=val;
  if(var=="EMT_BE_SL")                 EMT_BE_SL=val;
  if(var=="EMT_BE_Profit")             EMT_BE_Profit=val;
  //if(var=="EMT_RecrossMax")          EMT_RecrossMax=val;
  if(var=="EMT_RecrossCoefGood")       EMT_RecrossCoefGood=val;
  if(var=="EMT_RecrossCoefBad")        EMT_RecrossCoefBad=val;

  //if(var=="EGF_OnlyProfit_Hours")          EGF_OnlyProfit_Hours=val;
  //if(var=="EGF_ForceHours")          EGF_ForceHours=val;
  //if(var=="EGF_OnlyProfit_TS")             EGF_OnlyProfit_TS=val;

  //if(var=="EXT_CheckTempTrend")      EXT_CheckTempTrend=val;

  if(var=="EXT_TC_SetSize")            EXT_TC_SetSize=val;
  if(var=="EXT_TC_Relevant")           EXT_TC_Relevant=val;
  if(var=="EXT_TC_PipsToClose")        EXT_TC_PipsToClose=val;
  
  if(var=="SGE_Envelope_1On")          SGE_Envelope_1On=val;
  if(var=="SGE_SMAD_2On")              SGE_SMAD_2On=val;
  if(var=="SGE_OSMA_3On")              SGE_OSMA_3On=val;
  if(var=="SGE_MA_Diverg_4On")         SGE_MA_Diverg_4On=val;
  if(var=="SGE_RSI_low_5On")           SGE_RSI_low_5On=val;
  if(var=="SGE_RSI_high_6On")          SGE_RSI_high_6On=val;
  if(var=="SGE_Envelope_HF_7On")       SGE_Envelope_HF_7On=val;
  if(var=="SGE_SMA_HF_8On")            SGE_SMA_HF_8On=val;

  if(var=="FTE_ATR_1On")               FTE_ATR_1On=val;
  if(var=="FTE_Time_2On")              FTE_Time_2On=val;
  if(var=="FTE_MA_BuyTrend_3On")       FTE_MA_BuyTrend_3On=val;
  if(var=="FTE_MA_SellTrend_4On")      FTE_MA_SellTrend_4On=val;
  if(var=="FTE_FolMainTrend_5On")      FTE_FolMainTrend_5On=val;
  if(var=="FTE_LocMainTrend_6On")      FTE_LocMainTrend_6On=val;
  if(var=="FTE_TemporaryTrend_7On")    FTE_TemporaryTrend_7On=val;

  if(var=="SGS_EnvPerc")               SGS_EnvPerc=val;
  if(var=="SGS_EnvPer")                SGS_EnvPer=val;

  if(var=="SGS_SMAPer")                SGS_SMAPer=val;
  if(var=="SGS_SMA2Bars")              SGS_SMA2Bars=val;

  if(var=="SGS_OSMAFast")              SGS_OSMAFast=val;
  if(var=="SGS_OSMASlow")              SGS_OSMASlow=val;
  if(var=="SGS_OSMASignal")            SGS_OSMASignal=val;

  if(var=="SGS_Fast_Per")              SGS_Fast_Per=val;
  if(var=="SGS_Fast_Price")            SGS_Fast_Price=val;
  if(var=="SGS_Slow_Per")              SGS_Slow_Per=val;
  if(var=="SGS_Slow_Price")            SGS_Slow_Price=val;
  if(var=="SGS_DVmin")             SGS_DVmin=val;
  if(var=="SGS_DVmax")             SGS_DVmax=val;

  if(var=="SGS_RSI_High")              SGS_RSI_High=val;
  if(var=="SGS_RSI_Low")               SGS_RSI_Low=val;
  if(var=="SGS_RSI_Per")               SGS_RSI_Per=val;

  if(var=="SGS_PHEnvPerc")             SGS_PHEnvPerc=val;
  if(var=="SGS_PHPerEnv")              SGS_PHPerEnv=val;

  if(var=="SGS_PHSMAPer")              SGS_PHSMAPer=val;
  if(var=="SGS_PHSMA2Bars")            SGS_PHSMA2Bars=val;

  if(var=="FTS_ATR")              FTS_ATR=val;
  if(var=="FTS_minATR")                FTS_minATR=val;

  if(var=="FTS_WeekAt1")                FTS_WeekAt1=val;
  if(var=="FTS_WeekTo1")                FTS_WeekTo1=val;
  if(var=="FTS_WeekAt2")                FTS_WeekAt2=val;
  if(var=="FTS_WeekTo2")                FTS_WeekTo2=val;
  if(var=="FTS_SunAt")                 FTS_SunAt=val;
  if(var=="FTS_SunTo")                 FTS_SunTo=val;
  if(var=="FTS_FriAt")                 FTS_FriAt=val;
  if(var=="FTS_FriTo")                 FTS_FriTo=val;
  if(var=="FTS_MonAt")                 FTS_MonAt=val;
  if(var=="FTS_MonTo")                 FTS_MonTo=val;
  //if(var=="FTS_NotTradeFrom1")       FTS_NotTradeFrom1=val;
  //if(var=="FTS_NotTradeTo1")         FTS_NotTradeTo1=val;
  //if(var=="FTS_NotTradeFrom2")       FTS_NotTradeFrom2=val;
  //if(var=="FTS_NotTradeTo2")         FTS_NotTradeTo2=val;

  if(var=="FTS_TrendPer")              FTS_TrendPer=val;
  if(var=="FTS_TrendShift")            FTS_TrendShift=val;
  if(var=="FTS_TrendStr")              FTS_TrendStr=val;

  if(var=="FTS_HorizDist")             FTS_HorizDist=val;

  if(var=="FTS_Distance")              FTS_Distance=val;
  if(var=="FTS_TimePerShift")          FTS_TimePerShift=val;
  if(var=="FTS_MaxDiff")               FTS_MaxDiff=val;
  if(var=="FTS_MinSlope")              FTS_MinSlope=val;

  //if(var=="RCS_WriteLog")            RCS_WriteLog=val;
  //if(var=="RCS_WriteDebug")          RCS_WriteDebug=val;
  //if(var=="RCS_SaveInFile")          RCS_SaveInFile=val;
  //if(var=="RCS_FilterLog")           RCS_FilterLog=val;  
  //if(var=="RCS_FilterDebug")         RCS_FilterDebug=val;  
  //if(var=="RCS_EAComment")           RCS_EAComment=val;
  //if(var=="RCS_NameEA")              RCS_NameEA=val;

  return(true);
}

bool MM_CheckLosses()
{
  int ticket=0;
  int count=OrdersHistoryTotal();
  if(RCS_WriteDebug) L3_WriteDebug(6,StringConcatenate("Checking looses- count : ",count," SMT_CntTrades : ",SMT_CntTrades," SMT_CntLosses : ",SMT_CntLosses));
  if (count==SMT_CntTrades) return(false);
  SMT_CntTrades=count;
  if (!M2_MM_LastTrade(SMT_CntLosses,ticket)) return(false);
  return(true);
}  
 
 
 
  
//**********  Exit Strategies & Trailing Stops **********************************//
void X1_ManageExit(int ticket)
{ //Contains all of the exit strategies and trade management routines. Listed in priority.
    RefreshRates();
    if(AOP_Optimalization_1On && TimeCurrent()>FTS_NotTradeFrom2 && IsOptimization()) 
      { // during a testing not to trade on future data that ware not really known before
        if(OrderType()==OP_SELL) OrderClose(ticket,OrderLots(),Ask,TMT_Slippage,Red);
        else                     OrderClose(ticket,OrderLots(),Bid,TMT_Slippage,Red);
        if(RCS_WriteDebug) L3_WriteDebug(5,"AOP_Optimalization_1On: Ticket "+ticket+" was closed because of a reality simulation of the optimalization!");            
        return;
      }  
    bool enableBuy=true,enableSell=true;
    
    if(EXT_CheckTempTrend && EXT_TC_SetSize>=EXT_TC_Relevant && EXT_TC_Direction!=0) //close sooner if a temporary counter trend is recognized
     {  
       if(EXT_TC_Direction==Buy && OrderType()==OP_SELL && OrderStopLoss()-Ask<=EXT_TC_PipsToClose*Point) 
           if(A1_4_IsTradePossible()) 
            {
              if(RCS_WriteLog) L2_WriteLog(5,StringConcatenate("EXT_CheckTempTrend: Ticket Nr.",ticket," will be closed sooner because of a temporary counter trend and close SL."));
              OrderClose(ticket,OrderLots(),Ask,TMT_Slippage,Red);
            }  
       if(EXT_TC_Direction==Sell && OrderType()==OP_BUY && Bid-OrderStopLoss()<=EXT_TC_PipsToClose*Point)
           if(A1_4_IsTradePossible()) 
            {
              if(RCS_WriteLog) L2_WriteLog(5,StringConcatenate("Ticket Nr.",ticket," will be closed sooner because of a temporary counter trend and close SL."));
              OrderClose(ticket,OrderLots(),Bid,TMT_Slippage,Red);
            }  
     }
     
    EMT_minStop=MarketInfo(Symbol(),MODE_STOPLEVEL); //updated every tick in case of news SL movement
    if(EGF_OnlyProfit_Hours !=0 || EGF_ForceHours !=0)
      { 
         if(X1_ForceClose_or_GraceModify(ticket)) return;
      }   
  
    if(EGF_CloseBeforeRollOver) 
      {
         if(CloseBeforeWeekend (ticket)) return;
      }   
   
    if(EMT_RecrossMax>0) //check recross functions
      {
         int poolPos=EX_RecrossCheck(int ticket);
         if(poolPos!=-1) 
            {
                if( EX_RecrossExit(ticket,poolPos) ) 
                    {
                       if(RCS_WriteLog) L2_WriteLog(5,"EMT_RecrossMax: Ticket : "+ticket+" was closed because of a function Recross Exit.") ;
                       return;
                    }  
            }                
      }
    
  
  if(EMT_BE_SL>0)
  {  //    BreakEven SL @target
    if(EMT_BE_SL<EMT_BE_Profit+EMT_minStop) EMT_BE_Profit=EMT_BE_SL-EMT_minStop; //keeps trade safe all of the time
    if (OrderType() == OP_BUY && Bid-OrderOpenPrice()>=Point*EMT_BE_SL && OrderStopLoss()-Point*EMT_BE_Profit<OrderOpenPrice() && Bid-OrderOpenPrice()-EMT_BE_Profit*Point>=EMT_minStop*Point)
        X9_ModifySL(OrderOpenPrice()+EMT_BE_Profit*Point,ticket); 
    if (OrderType() == OP_SELL && OrderOpenPrice()-Ask>=Point*EMT_BE_SL+MarketInfo(Symbol(),MODE_SPREAD)*Point && OrderStopLoss()+Point*EMT_BE_Profit+MarketInfo(Symbol(),MODE_SPREAD)*Point>OrderOpenPrice() && OrderOpenPrice()+EMT_BE_Profit*Point+MarketInfo(Symbol(),MODE_SPREAD)*Point-Ask>=EMT_minStop*Point)
        X9_ModifySL(OrderOpenPrice()-EMT_BE_Profit*Point-MarketInfo(Symbol(),MODE_SPREAD)*Point,ticket); 
  }

  if(MMT_LimitLosses && OrderProfit()>0) EX_LimitLosses(ticket);//if a certain amount of last closed trades ended in consequent losses and if there is a counter trend , move SL accordind to MMT_TS_SLFactor (leave open trade sooner)

  if(SMT_AwayFromLosses) // if a trade is going agains trend set trailing stop
    {
      enableBuy=true;
      enableSell=true;
      Z_F5_BlockTradingFilter5(enableBuy,enableSell);   //locate main trend and trade in its direction only 
      if (OrderType()==OP_BUY && enableBuy==false) X9_ModifyTrailingStop(ticket,EMT_TS,0);
      if (OrderType()==OP_SELL && enableSell==false) X9_ModifyTrailingStop(ticket,EMT_TS,0);   
      if(RCS_WriteLog && (enableBuy==false || enableSell==false)) L2_WriteLog(6,"SMT_AwayFromLosses - Open ticket : "+ticket+" goes again main trend ! Trailing stop was setted. ") ;
    }       

              
  if (EMT_ExitWithTS) 
  {
    X9_ModifyTrailingStop(ticket,EMT_TS,EMT_DelayTS);
  }
}


bool X1_ForceClose_or_GraceModify(int ticket)   //force to exit after a certain amount of time
  {  
    int    PerForce = EGF_ForceHours*3600;
    int    PerGrace = EGF_OnlyProfit_Hours*3600;
    double newSL       =0;
    if (PerForce!=0)
      {
      if((OrderOpenTime() + PerForce) < Time[0])
         {
         if(OrderType() == OP_BUY)  
            {
               if(EGF_ForceCloseAgainSwap && SwapLong>0) return(false);
               else OrderClose(OrderTicket(),OrderLots(),Bid,TMT_Slippage,Red); 
            }  
         if(OrderType() == OP_SELL) 
            {
               if(EGF_ForceCloseAgainSwap && SwapShort>0) return(false);
               OrderClose(OrderTicket(),OrderLots(),Ask,TMT_Slippage,Red);
            }   
         if(RCS_WriteLog) L2_WriteLog(5,"Force to close - ticket:"+ticket+" - too long is opened this trade !");
         return(true);
         }
      }

    if(PerGrace!=0)
      {
        if(OrderOpenTime() + PerGrace < Time[0])
          {
            X9_ModifyTrailingStop(ticket, EGF_OnlyProfit_TS, EGF_OnlyProfit_TS);  // EGF_OnlyProfit_TS=minimal 0 profit on TS with PerGrace
            if(RCS_WriteDebug) L3_WriteDebug(5,"Close when profit - ticket:"+ticket+" guarantees minimal profit !");            
          }
      }
    return(false);  
   }

void X9_ModifyTrailingStop(int ticket, int tsvalue, int delayts)
  {
   
    if(EMT_DecreaseTPOn) EX_DecrTPifCountTrend(ticket);       
    double slvalue;
    if(tsvalue>=EMT_minStop) //check minimal value allowed by broker
      {        
        if(EMT_ModifyTSOn) 
        { 
          if(OrderProfit()>0)tsvalue=MathAbs(MathFloor(((OrderTakeProfit()-OrderStopLoss())/Point)*0.5));
          if(tsvalue<EMT_minStop)tsvalue=EMT_minStop;
        }
      } 
    else 
      { //Set safe value
        tsvalue=EMT_minStop;
      }
      
    if(RCS_WriteDebug) L3_WriteDebug(5,"EXIT function: TS ticket:"+ticket+" tsvalue:"+tsvalue+" delayts:"+delayts);

    if      (OrderType() == OP_BUY)
      {
        slvalue=NormalizeDouble(Bid-(Point*tsvalue),Digits);
        if (OrderStopLoss()<slvalue && OrderOpenPrice()+Point*delayts<Bid)//&& OrderOpenPrice()+Point*delayts<Bid-tsvalue*Point
        {
          if(!X9_ModifySL(slvalue,ticket))
          {
            L4_WriteError();
            L3_WriteDebug(5,"Buy order-ERROR OrderSL:" +OrderStopLoss()+ " slvalue:"+ slvalue);
          }
        }
      } 
    else if (OrderType() == OP_SELL)
      {
        slvalue=NormalizeDouble(Ask+(Point*tsvalue),Digits);
        if (OrderStopLoss()>slvalue && OrderOpenPrice()-Point*delayts>Ask)// && OrderOpenPrice()-Point*delayts>Ask+tsvalue*Point
        {
          if(!X9_ModifySL(slvalue,ticket))
          {
            L4_WriteError();
            L3_WriteDebug(5,"EXIT function: Sell order-ERROR OrderSL:" +OrderStopLoss()+ " slvalue:"+ slvalue);
          }
        }
      }
  }

bool X9_ModifySL(double sl, int ticket)
  {
    double MoveTP;
    if(EMT_MoveTPonTS !=0)
    {
      if (OrderType() == OP_SELL) 
      {
        MoveTP=EMT_MoveTPonTS*(-1)*Point;
        if(NormalizeDouble(sl-Ask,Digits)<EMT_minStop*Point)return(true); 
        if(Ask-OrderTakeProfit()+MoveTP<EMT_minStop*Point) 
          MoveTP=-(EMT_minStop*Point+Ask-OrderTakeProfit()); //Set the new distance to minimum safe point, -OTP() cancels OTP() // repared error 4051
      }
      else 
      {
        MoveTP=EMT_MoveTPonTS*Point;
        if(NormalizeDouble(Bid-sl,Digits)<EMT_minStop*Point) return(true); 
        if(OrderTakeProfit()-Bid+MoveTP<EMT_minStop*Point) 
          MoveTP=EMT_minStop*Point-Bid+OrderTakeProfit();  //Set the new distance to minimum safe point, -OTP() cancels OTP()
      }
    }
    
    if(RCS_WriteDebug) L3_WriteDebug(6,"MODIFY Ticket:"+ticket+" OpenPrice:"+OrderOpenPrice()+" SL:"+sl+" TP:"+(OrderTakeProfit()+MoveTP*Point));

    sl=NormalizeDouble(sl,Digits);
    MoveTP=NormalizeDouble(MoveTP,Digits);
    
    if(MMT_LimitLosses && M2_MM_LastTrade(MMT_ConseqLosses,ticket)) MoveTP=0; 
  
    if(sl==NormalizeDouble(OrderStopLoss(),Digits)) return(true); 

    if(!A1_4_IsTradePossible()) return(false); //check if trade is allowed 
    if(OrderModify ( ticket, OrderOpenPrice(), sl,
                      OrderTakeProfit()+MoveTP,   
                      0, DarkOrchid) ==(-1)) 
        return(false);
    else return(true);
  }

bool M2_MM_LastTrade(int ConsLos,int& ticket)
  {
    int    orders       =OrdersHistoryTotal();
    int    i            =orders-1;
    int    trades       =0;
    int    wins         =0;
    int    losses       =0;
    int    LossyTicket;
        
    if (ConsLos==0) return(true); //to use it always
    if (ConsLos<1) ConsLos=1;
        while (trades<ConsLos && i > 0)
          {
            if(OrderSelect(i,SELECT_BY_POS,MODE_HISTORY)==false)
              {
                if(RCS_WriteLog) L2_WriteLog(2,"Check last trade: Error in history!");
                break;
              }
            if(OrderSymbol()==Symbol() && OrderType()<=OP_SELL)
              {
                if(OrderProfit()<=0) 
                  {
                    losses++;    
                    if (SMT_LookForNextSet && OrderTicket()<=SMT_LastLossTicket&& ticket==0) return(false);
                    LossyTicket=OrderTicket(); 
                  }  
                if(OrderProfit()>0) wins++;
                trades++;
              }
            i--;
          }

     OrderSelect(ticket, SELECT_BY_TICKET, MODE_TRADES); //it needs to be after Lasttrade function
     if (losses>=ConsLos)
       {
         if (SMT_LookForNextSet && ticket==0)
            if(LossyTicket-SMT_LastLossTicket>=ConsLos) SMT_LastLossTicket=LossyTicket;   
            else return(false);               
         return(true);
       }  
     else return(false);

  }


bool MM_CheckSet(int futureset,int range,int& ticket,double& wins,double& losses) //allow to check, if next set was profitable in the past in a range of 5 (=SMT_AFL_Range)closed trades
  {
    int    orders       =OrdersHistoryTotal();
    int    i            =orders-1;
    int    trades       =0;
    int set,pos;
        
    if (range<1) return(true); //to use it always
        while (trades<range && i > 0)
          {
            if(OrderSelect(i,SELECT_BY_POS,MODE_HISTORY)==false)
              {
                if(RCS_WriteLog) L2_WriteLog(4,"SMT_CheckSetBeforeLoading: Error in history!");
                break;
              }
            if(OrderSymbol()==Symbol() && OrderType()<=OP_SELL)
              {
                pos=StringFind(OrderComment(),"#",0);
                set=StrToInteger(StringSubstr(OrderComment(),pos+1,0));
                if(RCS_WriteDebug) L3_WriteDebug(4,StringConcatenate("SMT_CheckSetBeforeLoading: Ticket : ",OrderTicket()," set : ",set," futureset : ",futureset," losses : ",losses));
                if(set==futureset)
                  {
                    if(OrderProfit()<=0) losses++;
                    if(OrderProfit()>0) wins++;                  
                  }  
                trades++;
              }
            i--;
          }
     OrderSelect(ticket, SELECT_BY_TICKET, MODE_TRADES); //it needs to be after MM_CheckSet function
     if(RCS_WriteDebug) L3_WriteDebug(4,StringConcatenate("SMT_CheckSetBeforeLoading: losses : ",losses," SMT_AFL_Losses : ",SMT_AFL_Losses));
     if (losses>=SMT_AFL_Losses)return(false);
     else return(true);
  }

  
//********************** SIGNALS *********************//
int Z_S1_EntrySignal1()
  { //Envelope Filter
    int Signal=None;

    double HighEnvelope1 = iEnvelopes(NULL,0,SGS_EnvPer,MODE_SMA,0,PRICE_CLOSE,SGS_EnvPerc,MODE_UPPER,0);
    double LowEnvelope1  = iEnvelopes(NULL,0,SGS_EnvPer,MODE_SMA,0,PRICE_CLOSE,SGS_EnvPerc,MODE_LOWER,0);
    double CloseBar1     = iClose(NULL,0,0);

    if(CloseBar1 > HighEnvelope1) {Signal=Sell;}
    if(CloseBar1 < LowEnvelope1)  {Signal=Buy; }

    if(RCS_WriteDebug) L3_WriteDebug(0,"SGE_Envelope_1On: Signal "+Signal+" HighEnv:"+HighEnvelope1+" LowEnv:"+LowEnvelope1+" Close:"+CloseBar1);

    return (Signal);
  }

int Z_S2_EntrySignal2()
  { //SMA Difference
    int Signal=None;

    double SMA1=iMA(NULL,0,SGS_SMAPer,0,MODE_SMA,PRICE_CLOSE,0);
    double SMA2=iMA(NULL,0,SGS_SMAPer,0,MODE_SMA,PRICE_CLOSE,SGS_SMA2Bars);

    if (SMA2>SMA1 ) Signal=Buy;
    else            Signal=Sell;

    if(RCS_WriteDebug) L3_WriteDebug(0,"SGE_SMAD_2On: Signal "+Signal+" SMA Diff:"+(SMA2-SMA1)+" SMA2:"+SMA2+" SMA1:"+SMA1);

    return (Signal);
  }


int Z_S3_EntrySignal3()
  { //OSMA Cross
    int Signal=None;

    double OsMABar2=iOsMA(NULL,0,SGS_OSMAFast,SGS_OSMASlow,SGS_OSMASignal,PRICE_CLOSE,1);
    double OsMABar1=iOsMA(NULL,0,SGS_OSMAFast,SGS_OSMASlow,SGS_OSMASignal,PRICE_CLOSE,0);

    if (OsMABar2>OsMABar1) Signal=Buy;
    else                   Signal=Sell;

    if(RCS_WriteDebug) L3_WriteDebug(0,"SGE_OSMA_3On: Signal "+Signal+" OsMA Diff:"+(OsMABar2-OsMABar1)+" OsMABar2:"+OsMABar2+" OsMABar1:"+OsMABar1);

    return (Signal);
  }

int Z_S4_EntrySignal4()
  { //Divergence Trading Signal
    int Signal;  
    double diverge = ZZ_F1_Divergence(SGS_Fast_Per, SGS_Slow_Per, SGS_Fast_Price, SGS_Slow_Price,0);
    if(diverge >= SGS_DVmin && diverge <= SGS_DVmax) Signal=Buy;
    else if(diverge <= (SGS_DVmin*(-1)) && diverge >= (SGS_DVmax*(-1))) Signal=Sell;
    if(RCS_WriteDebug) L3_WriteDebug(0,"SGE_MA_Diverg_4On: Signal "+Signal+" diverge:"+diverge+" SGS_DVmin:"+SGS_DVmin+" SGS_DVmax:"+SGS_DVmax);
    return (Signal);  
  }

int Z_S5_EntrySignal5()
  { 
   int value=0;
   if(SGS_RSIBar<Bars)
   {  //This should be based on bars, reduces check to once every bar.
      SGS_RSIBar=Bars;
      SGS_RSI3=SGS_RSI2; //This reduces computation to 1/3
      SGS_RSI2=SGS_RSI1;
   }
   SGS_RSI1 = iRSI(NULL, Period(), SGS_RSI_Per, PRICE_CLOSE, 0);
   if (SGS_RSI1 < SGS_RSI_High)      //Save CPU cycles with quick filters
    { if(SGS_RSI2 < SGS_RSI1 && SGS_RSI3 < SGS_RSI2) value=Buy; } 
   else if (SGS_RSI1 > SGS_RSI_Low)  //only one set needs to be checked, and not always.  
      if(SGS_RSI2 > SGS_RSI1 && SGS_RSI3 > SGS_RSI2) value=Sell;
   if(RCS_WriteDebug) L3_WriteDebug(0,"SGE_RSI_low_5On: Signal "+value+" SGS_RSI1:"+SGS_RSI1+" SGS_RSI2:"+SGS_RSI2+" SGS_RSI3:"+SGS_RSI3);
   return(value);
  }

int Z_S6_EntrySignal6()
  { 
   int value=0;
   double w_RSI = iRSI(NULL, Period(), SGS_RSI_Per, PRICE_CLOSE, 0);
   if (w_RSI < SGS_RSI_High)      
      value=Buy;
   else if (w_RSI > SGS_RSI_Low)   
      value=Sell;
   if(RCS_WriteDebug) L3_WriteDebug(0,"SGE_RSI_high_6On: Signal "+value+" w_RSI:"+w_RSI);
   return(value);
  }

int Z_S7_EntrySignal7()
  { //Envelope Filter on a higher timeframe about 2 degree
    int Signal=None;

    double HighEnvelope0 = iEnvelopes(NULL,MovePeriodHigher(2),SGS_PHPerEnv,MODE_SMA,0,PRICE_CLOSE,SGS_PHEnvPerc,MODE_UPPER,0);
    double LowEnvelope0  = iEnvelopes(NULL,MovePeriodHigher(2),SGS_PHPerEnv,MODE_SMA,0,PRICE_CLOSE,SGS_PHEnvPerc,MODE_LOWER,0);
    double CloseBar0     = iClose(NULL,0,0);

    if(CloseBar0 > HighEnvelope0) {Signal=Sell;}
    if(CloseBar0 < LowEnvelope0)  {Signal=Buy; }

    if(RCS_WriteDebug) L3_WriteDebug(0,"SGE_Envelope_HF_7On: Signal "+Signal+" HighEnv:"+HighEnvelope0+" LowEnv:"+LowEnvelope0+" Close:"+CloseBar0);

    return (Signal);
  }

int Z_S8_EntrySignal8()
  { //SMA Difference on a higher timeframe about 2 degree
    int Signal=None;

    double SMA1=iMA(NULL,MovePeriodHigher(2),SGS_PHSMAPer,0,MODE_SMA,PRICE_CLOSE,0);
    double SMA2=iMA(NULL,MovePeriodHigher(2),SGS_PHSMAPer,0,MODE_SMA,PRICE_CLOSE,SGS_PHSMA2Bars);

    if (SMA2>SMA1 ) Signal=Buy;
    else            Signal=Sell;

    if(RCS_WriteDebug) L3_WriteDebug(0,"SGE_SMA_HF_8On: Signal "+Signal+" SMA Diff:"+(SMA2-SMA1)+" SMA2:"+SMA2+" SMA1:"+SMA1);

    return (Signal);
  }

  
bool Z_F1_BlockTradingFilter1()
{   
  bool BlockTrade=false;  //trade by default
  double dAtrShort = iATR(NULL, 0, FTS_ATR, 0);
  if(dAtrShort<FTS_minATR)
   {
      BlockTrade=true;
      if(RCS_WriteDebug && BlockTrade) L3_WriteDebug(1,"FTE_ATR_1On: Trading is blocked");
   }
  return (BlockTrade); 
}

bool Z_F2_BlockTradingFilter2()   
  { //Time Expiry
    bool BlockTrade=true;  //only trade during permitted hours
    
      if(TimeDayOfWeek(Time[0])==0)  //Sunday
        {
          if(GBV_currentTime>=FTS_SunAt && GBV_currentTime<FTS_SunTo) 
            {
               BlockTrade=false;
               if(RCS_WriteDebug) L3_WriteDebug(1,"FTE_Time_2On: Trading within Sunday is allowed:"+GBV_currentTime);
            }   
        }
      else if(TimeDayOfWeek(Time[0])==5)  //Friday
        {
          if(GBV_currentTime>=FTS_FriAt && GBV_currentTime<FTS_FriTo) 
            {
               BlockTrade=false;
               if(RCS_WriteDebug) L3_WriteDebug(1,"FTE_Time_2On: Trading within Friday is allowed:"+GBV_currentTime);
            }   
        }
      else if(TimeDayOfWeek(Time[0])==1)  //Monday
        {
          if(GBV_currentTime>=FTS_MonAt && GBV_currentTime<FTS_MonTo) 
            {
               BlockTrade=false;
               if(RCS_WriteDebug) L3_WriteDebug(1,"FTE_Time_2On: Trading within Monday is allowed:"+GBV_currentTime);
            }   
        }
      else if((GBV_currentTime>=FTS_WeekAt1 && GBV_currentTime<FTS_WeekTo1) ||
      (GBV_currentTime>=FTS_WeekAt2 && GBV_currentTime<FTS_WeekTo2)) BlockTrade=false;

    if(RCS_WriteDebug && BlockTrade) L3_WriteDebug(1,"FTE_Time_2On: Trading is blocked:"+GBV_currentTime);
    return (BlockTrade);
  }
  
bool Z_F3_BlockTradingFilter3()   //if BUY Signal, check buy trend. True = quit.
  {
    bool BlockTrade=true; //if true trading is disallowed
  
    double TrendB=iMA(NULL,0,FTS_TrendPer,FTS_TrendShift,MODE_LWMA,PRICE_MEDIAN,0)-High[1];

    if(FTS_TrendStr*Point<TrendB)
      {
        BlockTrade=false;
        if(RCS_WriteDebug) L3_WriteDebug(1,"FTE_MA_BuyTrend_3On: TrendMA:"+TrendB+" Buy="+BlockTrade+" Buy Allowed");
      }
    else
      { 
        if(RCS_WriteDebug) L3_WriteDebug(1,"FTE_MA_BuyTrend_3On: TrendMA:"+TrendB+" Buy="+BlockTrade+" Buy DisAllowed");
      }

    return(BlockTrade);
  }
  
bool Z_F4_BlockTradingFilter4()
  {
    //if SELL Signal, check sell trend
    //Currently assuming that rising and falling trends have similar properties.
    bool BlockTrade=true;
    
    double TrendS=Low[1]-iMA(NULL,0,FTS_TrendPer,FTS_TrendShift,MODE_LWMA,PRICE_MEDIAN,0);
    
    if(FTS_TrendStr*Point<TrendS) 
      {
        BlockTrade=false;
        if(RCS_WriteDebug) L3_WriteDebug(1,"FTE_MA_SellTrend_4On: TrendMA:"+TrendS+" Sell="+BlockTrade+" Sell Allowed");
      }
    else
      {
        if(RCS_WriteDebug) L3_WriteDebug(1,"FTE_MA_SellTrend_4On: TrendMA:"+TrendS+" Sell="+BlockTrade+" Sell DisAllowed");
      }

    return(BlockTrade);
  }

bool Z_F5_BlockTradingFilter5(bool& enableBuy,bool& enableSell)   //locate main trend and trade in its direction only
  { 
    double lengh;
    if (FTS_SR_barsCount<iBars(NULL,0) || FTS_SR_barsCount==0) //count only when a new bar appears
      {
        double FTS_SR_high[];
        double FTS_SR_low[];
        ArrayCopySeries(FTS_SR_high,MODE_HIGH,NULL,0);
        ArrayCopySeries(FTS_SR_low,MODE_LOW,NULL,0);        
        FTS_SR_MaxPos0=ArrayMaximum(FTS_SR_high,FTS_HorizDist,0);
        FTS_SR_MinPos0=ArrayMinimum(FTS_SR_low,FTS_HorizDist,0);
        FTS_SR_MaxPoint0=FTS_SR_high[FTS_SR_MaxPos0];
        FTS_SR_MinPoint0=FTS_SR_low[FTS_SR_MinPos0];
        FTS_SR_MaxPos1=ArrayMaximum(FTS_SR_high,MathRound(FTS_HorizDist/2),0);
        FTS_SR_MinPos1=ArrayMinimum(FTS_SR_low,MathRound(FTS_HorizDist/2),0);        
        FTS_SR_MaxPos2=ArrayMaximum(FTS_SR_high,FTS_HorizDist,MathRound(FTS_HorizDist/2)+1);
        FTS_SR_MinPos2=ArrayMinimum(FTS_SR_low,FTS_HorizDist,MathRound(FTS_HorizDist/2)+1);
        FTS_SR_MaxPoint1=FTS_SR_high[FTS_SR_MaxPos1];
        FTS_SR_MinPoint1=FTS_SR_low[FTS_SR_MinPos1];
        FTS_SR_MaxPoint2=FTS_SR_high[FTS_SR_MaxPos2];
        FTS_SR_MinPoint2=FTS_SR_low[FTS_SR_MinPos2];
        
        FTS_SR_barsCount=iBars(NULL,0);                        
        
      }

    if (FTS_SR_MaxPos0<FTS_SR_MinPos0) // check buy condition
      {
         lengh=Bid-FTS_SR_MinPoint0;
         if (TMT_SL*Point<lengh) 
           {
            if(!(FTS_SR_MaxPoint1>FTS_SR_MaxPoint2 && FTS_SR_MinPoint1>FTS_SR_MinPoint2)) 
               {
                if(RCS_WriteDebug) L3_WriteDebug(1,"FTE_FolMainTrend_5On: main trend : Block buy trade.");
                enableBuy=false;
               }
            else if(RCS_WriteDebug) L3_WriteDebug(1,"FTE_FolMainTrend_5On: main trend : Follow long trend.");              
           } 
               
      } 
    if (FTS_SR_MaxPos0>FTS_SR_MinPos0) // check sell condition
      {
         lengh=FTS_SR_MaxPoint0-Bid;
         if(TMT_SL*Point<lengh) 
           {
            if(!(FTS_SR_MaxPoint1<FTS_SR_MaxPoint2 && FTS_SR_MinPoint1<FTS_SR_MinPoint2))
               {
                if(RCS_WriteDebug) L3_WriteDebug(1,"FTE_FolMainTrend_5On: main trend : Block sell trade.");
                enableSell=false;
               } 
            else if(RCS_WriteDebug) L3_WriteDebug(1,"FTE_FolMainTrend_5On: main trend : Follow short trend."); 
           } 
         
      } 

    return (false);  //do not block trading
  }


bool Z_F6_BlockTradingFilter6(bool& enableBuy,bool& enableSell)//locate main trend and allow to trade only in its  direction  
  { 

 if (FTS_LastBarCnt<iBars(NULL,MovePeriodHigher(FTS_TimePerShift))) //count only when a new bar appears
  {
    FTS_Bar1=iClose(NULL,MovePeriodHigher(FTS_TimePerShift),1);
    FTS_Bar3=iClose(NULL,MovePeriodHigher(FTS_TimePerShift),FTS_Distance);
    double averPrice,bar2;
   
    FTS_Difference=0;
    for(int cnt=FTS_Distance;cnt>0;cnt--)
      {
         averPrice=cnt*MathAbs(FTS_Bar3-FTS_Bar1)/FTS_Distance;
         if(FTS_Bar3-FTS_Bar1>=0) bar2=FTS_Bar1+averPrice;
         else bar2=FTS_Bar1-averPrice;
         FTS_Difference+=MathAbs( iClose(NULL,MovePeriodHigher(FTS_TimePerShift),cnt)-bar2);  
      }
     FTS_Difference/=Point;
     FTS_Slope=MathAbs( (FTS_Bar1-FTS_Bar3)/(Point*FTS_Distance) );
     FTS_LastBarCnt=iBars(NULL,0);
   }     
     if(FTS_Slope<FTS_MinSlope || FTS_MaxDiff<FTS_Difference) return(false);//do not block trading
     if(FTS_Bar3>FTS_Bar1) 
      {
         enableBuy=false;
         if(RCS_WriteDebug) L3_WriteDebug(1,"FTE_LocMainTrend_6On-main trend : Block long trades.");
      }   

     else 
      {
         enableSell=false;
         if(RCS_WriteDebug) L3_WriteDebug(1,"FTE_LocMainTrend_6On-main trend : Block short trades.");
      }   
         
     return (false);//do not block trading
  }

bool Z_F7_BlockTradingFilter7(bool& enableBuy,bool& enableSell)  //find a temporary trend and block to trade agains it  
  { 
    if(EXT_TC_Direction==Buy) 
      {
         enableSell=false;
         if(RCS_WriteDebug) L3_WriteDebug(1,"FTE_TemporaryTrend_7On-temporary trend : Block short trades.");
      }   
         
    if(EXT_TC_Direction==Sell) 
      {
         enableBuy=false;
         if(RCS_WriteDebug) L3_WriteDebug(1,"FTE_TemporaryTrend_7On-temporary trend : Block long trades.");
      }   
         
  }  
  
bool FTS_ControlPeaks(int TradeDirect)  //wait for peaks
  { 
     if(FTS_PeaksBars==Bars) return(false);
     else FTS_PeaksBars=Bars;
     double maxhigh,minlow,scale;
          
     if(FTS_PeakLong==0 || FTS_PeakShort==0) 
      {
         maxhigh=High[iHighest(NULL,0,MODE_HIGH,FTS_BarsBack,0)];
         minlow=Low[iLowest(NULL,0,MODE_LOW,FTS_BarsBack,0)]; 
         scale=NormalizeDouble((maxhigh-minlow)*FTS_PeakPerc,4);
      } 
     else return(false);     

     if(FTS_PeakLong==0 && TradeDirect==1) 
      {
         FTS_PeakLong=Bid-scale;
         FTS_TimeLimitLong=TimeCurrent()+Period()*FTS_BarsForward*60;
      }           
     if(FTS_PeakShort==0 && TradeDirect==-1) 
      {
         FTS_PeakShort=Bid+scale;
         FTS_TimeLimitShort=TimeCurrent()+Period()*FTS_BarsForward*60;
      }           
     //Print("bid ",Bid," maxhigh ",maxhigh," minlow ",minlow," FTS_PeakLong ",FTS_PeakLong," FTS_PeakShort ",FTS_PeakShort," TradeDirect ",TradeDirect);
     return(true);    
             
  }    

bool Z_F8_BlockTradingFilter8(bool& enableBuy,bool& enableSell)  //wait for peaks FTE_WaitForPeaks_8On
  { 
     if(FTS_PeakLong<Bid && FTS_PeakLong!=0) 
      {
         enableBuy=false;
         if(RCS_WriteDebug) L3_WriteDebug(1,StringConcatenate("FTE_WaitForPeaks-still waiting for the peak, shift  ",Bid-FTS_PeakLong," needed : Block long trades."));
      }   
         
     if(FTS_PeakShort>Bid && FTS_PeakShort!=0) 
      {
         enableSell=false;
         if(RCS_WriteDebug) L3_WriteDebug(1,StringConcatenate("FTE_WaitForPeaks-still waiting for the peak, shift  ",FTS_PeakShort-Bid," needed : Block short trades."));
      }  
     if(FTS_TimeLimitLong<TimeCurrent()) FTS_PeakLong=0;
     if(FTS_TimeLimitShort<TimeCurrent()) FTS_PeakShort=0;
      
  }   
  
    
//********************** Signal Functions ******************//
double ZZ_F1_Divergence(int F_Per, int S_Per, int F_Price, int S_Price, int mypos)
  {
    double maF2 = iMA(Symbol(), 0, F_Per, 0, MODE_SMA, F_Price, mypos);
    double maS2 = iMA(Symbol(), 0, S_Per, 0, MODE_SMA, S_Price, mypos);

    return((maF2-maS2)/Point);
  }

//*********************** LOGGING **************************//
void L1_OpenLogFile(string strName)
  {
    if (!RCS_WriteLog && !RCS_WriteDebug || !RCS_SaveInFile)return;
    bool newfile=false;

    if(GBV_LogHandle <= 0) newfile=true;
    if(GBV_LogHandle > 0)
      {
         if(FileSize(GBV_LogHandle)>RCS_LogFileSize)newfile=true; //a file is divided into parts 
      }   
    if(!newfile)return;  //no need to open a new file, than return     
    if(GBV_LogHandle!=-1) FileClose(GBV_LogHandle);          
    string strMonthPad = "" ;
    if (Month() < 10) strMonthPad = "0";
    string strDayPad   = "" ;
    if (Day() < 10) strDayPad   = "0";
    string strFilename = StringConcatenate(strName, "_", Year(),
                                           strMonthPad, Month(),
                                           strDayPad,     Day(), "_log.txt");

    GBV_LogHandle =FileOpen(strFilename, FILE_CSV | FILE_READ | FILE_WRITE); //Pick a new file name and open it. 
  }



void L2_WriteLog(int rank,string msg)
  {
    if (!RCS_WriteLog) return;
    if(RCS_LogFilter[rank]==0) return;    
    Print(msg); 
    if(!RCS_SaveInFile) return;       
    if (GBV_LogHandle <= 0)   return;
    msg = TimeToStr(TimeCurrent(), TIME_DATE | TIME_MINUTES | TIME_SECONDS) + " " + msg;
    FileWrite(GBV_LogHandle, msg);
  }

void L3_WriteDebug(int rank,string msg)  //Signal Debugging, rarely called
  {
    if (!RCS_WriteDebug) return;
    if(RCS_DebugFilter[rank]==0) return;   
    Print(msg);     
    if(!RCS_SaveInFile) return;    
    if (GBV_LogHandle <= 0) return;
    msg = TimeToStr(TimeCurrent(), TIME_DATE | TIME_MINUTES | TIME_SECONDS) + " " + msg;
    FileWrite(GBV_LogHandle, msg);
  }

void L4_WriteError()
  {
    if (!RCS_WriteLog) return;
    string msg="Error:"+ GetLastError()+" OrderType:"+OrderType()+" Ticket:"+OrderTicket();    
    Print(msg);   
    if(!RCS_SaveInFile) return;          
    if (GBV_LogHandle <= 0)   return;
    msg = TimeToStr(TimeCurrent(), TIME_DATE | TIME_MINUTES | TIME_SECONDS) + " " + msg;
    FileWrite(GBV_LogHandle, msg);
  }


int MovePeriodHigher(int shift)
   {
      int CurrPer=Period();
      int PerArray[]={1,5,15,30,60,240,1440,10080,43200}; //array with periods in minutes
      int PosPer=ArrayBsearch(PerArray,CurrPer,WHOLE_ARRAY,0,MODE_ASCEND);
      if(PosPer+shift>7) return(43200);
      else return(PerArray[PosPer+shift]);            
   }   

bool DecreaseTP(int ticket,double orderTP)
   {
      if(!A1_4_IsTradePossible()) return(false); //check if trade is allowed 
      if(orderTP==OrderTakeProfit()) return(false);
      if(OrderType()==OP_SELL)
         {
            if(MathAbs(Ask-orderTP)<EMT_minStop*Point || orderTP<OrderTakeProfit()) return(false);
         }   
      if(OrderType()==OP_BUY)
         {
            if(MathAbs(Bid-orderTP)<EMT_minStop*Point || orderTP>OrderTakeProfit()) return(false);
         }   
      if(RCS_WriteLog) L2_WriteLog(6,StringConcatenate("Decrease TP by Ticket Nr.",ticket," ,Current TP : ",OrderTakeProfit()," ,Next TP : ",orderTP)) ;
      if(OrderModify ( ticket, OrderOpenPrice(), OrderStopLoss(),
                      orderTP, 0, Purple) ==(-1)) return(false);
                     else return(true);

   }

int TickContainer()
   {
      if(EXT_TC_Relevant<=EXT_TC_SetSize/2)return(0); //no result
      int cntRelevant;
      EXT_TC_Direction=0;
      for (int cnt=EXT_TC_SetSize-2;cnt>-1;cnt--)
         {
           EXT_TC_Store[cnt+1]=EXT_TC_Store[cnt];
           if(EXT_TC_Store[cnt+1]==1) cntRelevant++;
         }
      if(Bid>EXT_TC_LastTick)
         {
            cntRelevant++;
            EXT_TC_Store[0]=1;
         }
      else  EXT_TC_Store[0]=0;     
      EXT_TC_LastTick=Bid;    
      if(cntRelevant>=EXT_TC_Relevant) EXT_TC_Direction=1;   //a temporary trend is going up
      else if(cntRelevant<=EXT_TC_SetSize-EXT_TC_Relevant) EXT_TC_Direction=-1;  //a temporary trend is going down 
      return(EXT_TC_Direction); //no results   
   }

 
bool EX_LimitLosses(int ticket) // if there is a counter trend leave a open trade sooner
   {
       bool enableBuy=true,enableSell=true;
       Z_F6_BlockTradingFilter6(enableBuy,enableSell);
       if(  (ticket==OP_BUY && enableBuy==true) || (ticket==OP_SELL && enableSell==true) ) return (false); 
       if (!M2_MM_LastTrade(MMT_ConseqLosses,ticket)) return (false); // active only if there were a certain amount of losses
       for(int cnt=ArraySize(MMT_TS_ProfitFactor)-1;cnt>=0;cnt--)
          {
             if (OrderType()==OP_BUY && Bid-OrderOpenPrice()>=MMT_TS_ProfitFactor[cnt]*Point)
                {
                   if (cnt==ArraySize(MMT_TS_ProfitFactor)-1) // enable trailing stop
                      {
                          X9_ModifyTrailingStop(ticket,EMT_TS,MMT_TS_ProfitFactor[cnt]);
                          break;
                      }      
                   if (OrderStopLoss()-OrderOpenPrice()<MMT_TS_SLFactor[cnt]*Point) //move stoploss
                      {
                          X9_ModifySL(OrderOpenPrice()+MMT_TS_SLFactor[cnt]*Point,ticket);
                          break;
                      }     
                 } 
             if (OrderType()==OP_SELL && OrderOpenPrice()-Ask>=MMT_TS_ProfitFactor[cnt]*Point)
                 {
                   if (cnt==ArraySize(MMT_TS_ProfitFactor)-1) // enable trailing stop
                      {
                          X9_ModifyTrailingStop(ticket,EMT_TS,MMT_TS_ProfitFactor[cnt]);
                          break;
                      }      
                   if (OrderOpenPrice()-OrderStopLoss()<MMT_TS_SLFactor[cnt]*Point) //move stoploss
                      {
                          X9_ModifySL(OrderOpenPrice()-MMT_TS_SLFactor[cnt]*Point,ticket);
                          break;
                      }     
                  } 
                        
            } 
        if(RCS_WriteLog) L2_WriteLog(6,"MMT_LimitLosses-Descrease TS : ProfitFactor "+MMT_TS_ProfitFactor[cnt]+" SLFactor "+MMT_TS_SLFactor[cnt]) ;
   }// ******** end of a function limit losses 


bool EX_DecrTPifCountTrend(int ticket)
   {
          bool enableBuy=true,enableSell=true;
          Z_F6_BlockTradingFilter6(enableBuy,enableSell); 
          
          if(OrderType()==OP_BUY && enableBuy==false)//&& FTS_Difference>FTS_MaxDiff
            {
               double FTS_SR_high[],FTS_SR_Max;
               ArrayCopySeries(FTS_SR_high,MODE_HIGH,NULL,MovePeriodHigher(EMT_DecTPShiftPeriod));
               FTS_SR_Max=FTS_SR_high[ArrayMaximum(FTS_SR_high,EMT_DecTPShiftBar,0)];  
               if(FTS_SR_Max-Bid>TMT_SL*Point && OrderTakeProfit()>FTS_SR_Max)// && OrderOpenPrice()+TMT_TP*Point<FTS_SR_Max 
                  {
                     if(DecreaseTP(ticket,FTS_SR_Max)) 
                        {
                           if(RCS_WriteLog) L2_WriteLog(4,StringConcatenate("EMT_DecreaseTPOn: Ticket Nr. ",ticket," has new TP=",FTS_SR_Max," because of a counter trend danger."));
                           return(true);
                        }  
                  }
             }
             
          if(OrderType()==OP_SELL && enableSell==false)
            {
               double FTS_SR_low[],FTS_SR_Min;
               ArrayCopySeries(FTS_SR_low,MODE_LOW,NULL,MovePeriodHigher(EMT_DecTPShiftPeriod));
               FTS_SR_Min=FTS_SR_low[ArrayMinimum(FTS_SR_low,EMT_DecTPShiftBar,0)];  
               if(Bid-FTS_SR_Min>TMT_SL*Point && OrderTakeProfit()<FTS_SR_Min+MarketInfo(Symbol(),MODE_SPREAD)*Point)// && OrderOpenPrice()-TMT_TP*Point>FTS_SR_Min
                  {
                     if(DecreaseTP(ticket,FTS_SR_Min-MarketInfo(Symbol(),MODE_SPREAD)*Point))
                        {
                           if(RCS_WriteLog) L2_WriteLog(4,StringConcatenate("EMT_DecreaseTPOn: Ticket Nr. ",ticket," has new TP=",FTS_SR_Min-MarketInfo(Symbol(),MODE_SPREAD)*Point," because of a counter trend danger."));
                           return(true);
                        }  

                  }
             } 
   }
   

int EX_RecrossCheck(int ticket)
   {
     int index,cnt,cnt2;
     ArraySort(EMT_bcRecross,WHOLE_ARRAY,0,MODE_DESCEND);
     for(cnt=0;cnt<ArrayRange(EMT_bcRecross,0);cnt++)
      {
         if(EMT_bcRecross[cnt][0] == 0) continue;
         if(ticket!=EMT_bcRecross[cnt][0] && OrderSelect(EMT_bcRecross[cnt][0], SELECT_BY_TICKET,MODE_TRADES)==false) continue;
         if(OrderCloseTime() != 0) 
            {
              if(RCS_WriteDebug) L3_WriteDebug(5,"EX_RecrossCheck: Erase ticket : "+EMT_bcRecross[cnt][0]+" from recrosses pool.");              
              for(cnt2=0;cnt2<ArrayDimension(EMT_bcRecross);cnt2++) EMT_bcRecross[cnt][cnt2]=0;
            }   

         if(EMT_bcRecross[cnt][0] ==ticket)
            {
               OrderSelect(ticket, SELECT_BY_TICKET, MODE_TRADES); //it needs to be after Lasttrade function                  
               if(OrderType()==OP_BUY &&  EMT_bcRecross[cnt][2]<Bid) EMT_bcRecross[cnt][2]=Bid;    
               if(OrderType()==OP_SELL && EMT_bcRecross[cnt][2]>Ask) EMT_bcRecross[cnt][2]=Ask;
               if(OrderType()==OP_BUY &&  EMT_bcRecross[cnt][5]>Bid) 
                  {
                     EMT_bcRecross[cnt][5]=Bid;
                     EMT_bcRecross[cnt][3]=EX_CountRecross(ticket,(EMT_bcRecross[index][5]-OrderOpenPrice())/ 2+OrderOpenPrice());  
                  }     
               if(OrderType()==OP_SELL && EMT_bcRecross[cnt][5]<Ask) 
                  {
                     EMT_bcRecross[cnt][5]=Ask;
                     EMT_bcRecross[cnt][3]=EX_CountRecross(ticket,OrderOpenPrice()-(OrderOpenPrice()-EMT_bcRecross[index][5])/ 2);
                  }
               return(cnt);      
            }   
       }      
      OrderSelect(ticket, SELECT_BY_TICKET, MODE_TRADES); //it needs to be after previous orderselect  
      if(RCS_WriteDebug) L3_WriteDebug(5,"EX_RecrossCheck : Ticket : "+ticket+" was not founded recrosses pool.");
      
      for(index=0;index<ArrayRange(EMT_bcRecross,0);index++) if(EMT_bcRecross[index][0]==0) break;
      if(EMT_bcRecross[index][0] !=0)
         {
            if(RCS_WriteDebug) L3_WriteDebug(5,"EX_RecrossCheck : Error -no place in array");
            return(-1);
         }  
          
      EMT_bcRecross[index][0]=ticket; //holds Nr.of a ticket
      EMT_bcRecross[index][1]=1;       //holds count of recross throught a a upper S/R price
      EMT_bcRecross[index][2]=OrderOpenPrice();    //holds max reached price of the ticket
      EMT_bcRecross[index][3]=Bars;       //holds last sum of bars when upper S/R was recrossed 
      EMT_bcRecross[index][4]=1;       //holds count of recross throught a lower S/R price      
      EMT_bcRecross[index][5]=OrderOpenPrice();    //holds min reached price of the ticket
      EMT_bcRecross[index][6]=Bars;       //holds last sum of bars when lower S/R was recrossed 

      return(index);
    }  


bool EX_RecrossExit(int ticket,int poolPos)
   {
      double price,requiredPrice,comparePrice,replacedOP;
      bool crossingCheck=false;
      int cntRecross;
      if (OrderType() == OP_BUY)   
         {
            price=Bid;
            comparePrice=(EMT_bcRecross[poolPos][2]-EMT_bcRecross[poolPos][5])/2+EMT_bcRecross[poolPos][5];
            if(comparePrice<OrderOpenPrice()) //
               {
                  cntRecross=EMT_bcRecross[poolPos][4];
                  requiredPrice=( EMT_bcRecross[poolPos][2]-comparePrice)*EMT_RecrossCoefBad + comparePrice;
               }   
            else 
               {
                  cntRecross=EMT_bcRecross[poolPos][1];
                  requiredPrice=( EMT_bcRecross[poolPos][2]-comparePrice)*EMT_RecrossCoefGood + comparePrice;
               }   
            if(requiredPrice>=price && EMT_bcRecross[poolPos][4]>EMT_bcRecross[poolPos][1]) crossingCheck=true;
         }   
      if (OrderType() == OP_SELL) 
         {
            price=Ask;
            comparePrice=EMT_bcRecross[poolPos][5]-(EMT_bcRecross[poolPos][2]-EMT_bcRecross[poolPos][5])/2;
            if(comparePrice>OrderOpenPrice()) 
               {
                  cntRecross=EMT_bcRecross[poolPos][4];
                  requiredPrice=comparePrice-( comparePrice-EMT_bcRecross[poolPos][2] )*EMT_RecrossCoefBad;
               }                    
            else 
               {  cntRecross=EMT_bcRecross[poolPos][1];
                  requiredPrice=comparePrice-( comparePrice-EMT_bcRecross[poolPos][2] )*EMT_RecrossCoefGood;
               }   
            if(requiredPrice<=price  && EMT_bcRecross[poolPos][4]>EMT_bcRecross[poolPos][1]) crossingCheck=true;
         }

     if ( cntRecross>=EMT_RecrossMax && crossingCheck)
          {
           if(A1_4_IsTradePossible())
               {
                  for(int cnt2=0;cnt2<7;cnt2++) if(RCS_WriteDebug) L3_WriteDebug(6,StringConcatenate("EMT_RecrossMax-ticket : ",ticket," position : ",cnt2," value : ",EMT_bcRecross[poolPos][cnt2]));
                  if(OrderClose(ticket,OrderLots(),price,TMT_Slippage,Red)) return(true);
                  else L4_WriteError();
               }   
         }   
         
        if(Bars>EMT_bcRecross[poolPos][3]) //Bar hasn't been counted yet
         { 
            
            if(OrderType()==OP_BUY) replacedOP=NormalizeDouble((EMT_bcRecross[poolPos][2]-OrderOpenPrice())/ 2+OrderOpenPrice(),Digits );    
            else                    replacedOP=NormalizeDouble(OrderOpenPrice()-(OrderOpenPrice()-EMT_bcRecross[poolPos][2])/ 2,Digits );
            if( replacedOP == NormalizeDouble(price,Digits) )
                {
                  EMT_bcRecross[poolPos][1]++;
                  EMT_bcRecross[poolPos][3]=Bars;
                }  
          }  
          
        if(Bars>EMT_bcRecross[poolPos][6]) //Bar hasn't been counted yet
          { 
            
            if(OrderType()==OP_BUY) replacedOP=NormalizeDouble((OrderOpenPrice()-EMT_bcRecross[poolPos][5])/2 +EMT_bcRecross[poolPos][5],Digits );    
            else                    replacedOP=NormalizeDouble(EMT_bcRecross[poolPos][5]-(EMT_bcRecross[poolPos][5]-OrderOpenPrice())/ 2,Digits );
            if( replacedOP == NormalizeDouble(price,Digits) )
                {
                  EMT_bcRecross[poolPos][4]++;
                  EMT_bcRecross[poolPos][6]=Bars;
                }  
           }  
        
      return(false);
    }

int EX_CountRecross(int ticket,double price)
   {
       double FTS_SR_high[],FTS_SR_low[];
       double spread=MarketInfo(Symbol(),MODE_SPREAD)*Point;
       int recross;
       ArrayCopySeries(FTS_SR_high,MODE_HIGH,NULL,0);
       ArrayCopySeries(FTS_SR_low,MODE_LOW,NULL,0); 
       int timeBack=Bars-iBarShift(NULL,0,OrderOpenTime(),false);
       
       for(int cnt=0;cnt<=timeBack;cnt++)
         {
           if(OrderType()==OP_BUY && price>=FTS_SR_low[cnt] && price<=FTS_SR_high[cnt]) recross++;
           if(OrderType()==OP_SELL && price>=FTS_SR_low[cnt]+spread && price<=FTS_SR_high[cnt]+spread) recross++;           
         }
       return(recross);    
    }   

// ************** PART FOR A AUTO-OPTIMALIZATION - START ********************************
bool A_CheckStatus() //check if a optimalization on the second tester is done
   {
      string FileReportLocation;
      string FileReport="FileReport_"+Symbol()+".htm";                   //Tester report file name
      int fsize1,fsize2;
      
      if(!AOP_Optimalization_1On) return(false);
      int handle=FileOpen("\\optimalization\\tester\\files\\LastOptim.csv",FILE_CSV|FILE_READ,';');
      if(handle==Failed)
         {
           FileReportLocation="\\optimalization\\"+FileReport;   // Path into the tester directory   
           handle=FileOpen(FileReportLocation,FILE_CSV|FILE_READ,';');
           if (handle==-1) return(false);
           if(RCS_WriteLog) L2_WriteLog(7,"A_CheckStatus : No results were founded ! Probably no history data are loaded !");
           FileClose(handle);  
           return(true); //the file exists but it should not be so
         }   
      int pass=FileReadNumber(handle);
      FileClose(handle);
      if(pass>=AOP_ProveCyc_End-2*AOP_ProveCyc_Step) Sleep(10000);
      else 
         {
           return(false);
         }  
      FileReportLocation="\\optimalization\\"+FileReport;   // Path into the tester directory   
      handle=FileOpen(FileReportLocation,FILE_CSV|FILE_READ,';');
      if (handle==-1) return(false);
    
      if(RCS_WriteDebug) L3_WriteDebug(7,"A_CheckStatus : File "+FileReport+" is prepared !");
      fsize1=FileSize(handle);
      FileClose(handle);  
      
      Sleep(1000); 
      handle=FileOpen(FileReportLocation,FILE_CSV|FILE_READ,';');
      fsize2=FileSize(handle);  
      if (fsize1!=fsize2) 
         {
           FileClose(handle);        
           return(false); 
         }
      FileClose(handle); 
      if(RCS_WriteLog) L2_WriteLog(7,"A_CheckStatus : Ready to filter results of a optimalization !");

      return(true);
   }   

bool AutoOptStart(int AOP_TestDays,string RCS_NameEA)
  {
   
   string PuthTester;
   if(IsTesting())PuthTester=TerminalPath()+"\\tester\\files\\optimalization";   // Path of a executable tester file to the tester directory   
   else PuthTester=TerminalPath()+"\\experts\\files\\optimalization";   // Path of a executable tester file to the experts directory   
   
   string FileReport      = "FileReport_"+Symbol()+".htm";                   //Tester report file name
   datetime DayStart      = TimeLocal()-86400*AOP_TestDays;                        //Calculation of the starting date
   string DateStart       = TimeToStr(DayStart,TIME_DATE);                    //Optimization starting date
   string DateStop        = TimeToStr(TimeLocal()+86400,TIME_DATE);                 //Optimization ending date
   int    start,handle,cnt;
   string FileLine,FileReportLocation,FileLoc; 
   string ArrayOpttim[21]; 

   FileLoc="\\optimalization\\tester\\history\\"+Symbol()+Period()+"_0.fxt";
   handle=FileOpen(FileLoc,FILE_CSV|FILE_WRITE,';');     //Open a file to write
   if(handle!=-1) 
      {
         FileClose(handle); 
         FileDelete(FileLoc); //delete a generated file with bars from a history center , something like a tester's option Test Recalculate
         while(GetLastError()==4100) 
            {
               Sleep(1000);
               FileDelete(FileLoc); //probably the file is open, so try it again  
            }          
         if(RCS_WriteDebug) L3_WriteDebug(7,"AutoOptStart : File "+FileLoc+" was deleted !");
      }
   

//------------------------------parameters of the ini file are written in the string array----------------
   ArrayOpttim[0] = ";start strategy tester";                  //Prepare the ini file for optimization
   ArrayOpttim[1] = "ExpertsEnable=false";                        //Enable/Disable Expert Advisors
   ArrayOpttim[2] = "TestExpert="+RCS_NameEA;                        //Name of the EA file
   ArrayOpttim[3] = "TestExpertParameters=setGLFXforAutoOpt.set";   //Name of the file containing parameters
   ArrayOpttim[4] = "TestSymbol="+Symbol();                       //Symbol
   ArrayOpttim[5] = "TestPeriod="+Period();                       //Timeframe
   ArrayOpttim[6] = "TestModel="+0;                               //Modeling mode
   ArrayOpttim[7] = "TestRecalculate=true";                      //Recalculate
   ArrayOpttim[8] = "TestOptimization=true";                      //Optimization
   ArrayOpttim[9] = "TestDateEnable=true";                        //Use date
   ArrayOpttim[10]= "TestFromDate="+DateStart;                    //From
   ArrayOpttim[11]= "TestToDate="+DateStop;                       //To
   ArrayOpttim[12]= "TestReport="+FileReport;                     //Report file name
   ArrayOpttim[13]= "TestReplaceReport=true";                     //Rewrite the report file
   ArrayOpttim[14]= "TestShutdownTerminal=true";                  //Shut down the terminal upon completion
   
   handle=FileOpen("\\optimalization\\InitOptTester.ini",FILE_CSV|FILE_WRITE,';');     //Open a file to write
   for(cnt=0; cnt<15; cnt++) FileWrite(handle,ArrayOpttim[cnt]); //15=arraysize(ArrayOptim)
   FileClose(handle); 
   if(RCS_WriteDebug) L3_WriteDebug(7,"AutoOptStart : File InitOptTester.ini is prepared !");

//------------------------------parameters of the set file are written in the string array----------------
 
      string SfileName=StringConcatenate("Start-",TMT_Currency,"-",TMT_Period,".set");
      int Sfile=FileOpen(SfileName,FILE_READ,';');   
      int Tfile=FileOpen("\\optimalization\\tester\\setGLFXforAutoOpt.set",FILE_WRITE,';');  
      while(FileIsEnding(Sfile)==false)
        {                               //Cycle, until the file ends
          FileLine=FileReadString(Sfile); 
          if(FileLine!="") FileWrite(Tfile,FileLine);
        }
      FileClose(Sfile);                                                //Close the file
      FileClose(Tfile);                                                //Close the file
  

//---- enf of setting of time shift for optimalization

//changing basic set of variables with these values to be sure that a optimalization can run correctly
   ArrayOpttim[0] = "AOP_Optimalization_1On=1";               
   ArrayOpttim[1] = "SMT_ProveCurrentSet=1";                        
   ArrayOpttim[2] = "SMT_ProveHoursBack="+DoubleToStr(SMT_ProveHoursBack,0);                        
   ArrayOpttim[3] = "SMT_CurrentPass=0";          
   ArrayOpttim[4] = "SMT_CurrentPass,F=1";                       
   ArrayOpttim[5] = "SMT_CurrentPass,1="+DoubleToStr(AOP_ProveCyc_Start,0);                       
   ArrayOpttim[6] = "SMT_CurrentPass,2="+DoubleToStr(AOP_ProveCyc_Step,0);                              
   ArrayOpttim[7] = "SMT_CurrentPass,3="+DoubleToStr(AOP_ProveCyc_End,0);                     
   ArrayOpttim[8] = "FTS_NotTradeFrom1=0";                     
   ArrayOpttim[9] = "FTS_NotTradeTo1="+DoubleToStr(SetTimeFrom(SMT_ProveHoursBack,TimeCurrent()),0);                        
   ArrayOpttim[10]= "FTS_NotTradeFrom2="+DoubleToStr(TimeCurrent(),0);                    
   ArrayOpttim[11]= "FTS_NotTradeTo2=2054678400"; //set a date in far future ,f.e.'2035.02.10 00:00';                      
   ArrayOpttim[12]= "SMT_LookForNextSet=1";   
   ArrayOpttim[13]= "CLS_CheckPA_2On=0";
   ArrayOpttim[14]= "AOP_ModifyTPSL_2On=0";
   ArrayOpttim[15]= "RCS_WriteLog=0";
   ArrayOpttim[16]= "RCS_WriteDebug=0";
   ArrayOpttim[17]= "EXT_OpenDeniedTimeIfSwapOK=0"; //do not open trades according to swap
   ArrayOpttim[18]= "FTE_Time_2On=0"; //do not block trades according to time 
   ArrayOpttim[19]= "MMT_Martingale_1On=0"; //After each loss the bet should be increased so, that the win would recover all previous losses plus a small profit

//------------------------------- Write data into the set file           --------------------------                 
   handle=FileOpen("\\optimalization\\tester\\setGLFXforAutoOpt.set",FILE_CSV|FILE_WRITE|FILE_READ,';');     //Open a file to write
   FileSeek(handle,0,SEEK_END);
   for(cnt=0; cnt<20; cnt++) FileWrite(handle,ArrayOpttim[cnt]); //20=arraysize(ArrayOptim)
   FileClose(handle);  
   if(RCS_WriteDebug) L3_WriteDebug(7,"AutoOptStart : File setGLFXforAutoOpt.set is prepared !");                                           

//---------------------------------- Start Tester -------------------------
   if(IsTesting())FileReportLocation="\\optimalization\\"+FileReport;   // Path to the terminal into tester directory   
   else FileReportLocation="\\optimalization\\"+FileReport;   // Path to the terminal into experts directory  
   handle=FileOpen(FileReportLocation,FILE_CSV|FILE_READ,';');
   if(handle!=-1) 
      {
        FileClose(handle);
        FileDelete(FileReportLocation);  //Delete this file for sure that there is no colision in next optimalization 
      }   
   start   = ShellExecuteA(0,"Open","terminal.exe","InitOptTester.ini",PuthTester,7);
   if( start<0)
      {
        if(RCS_WriteLog) L2_WriteLog(7,"Failed starting Tester");
        return(false);
      } 
   if(RCS_WriteDebug) L3_WriteDebug(7,"AutoOptStart : Tester has started correctly with value :"+start);   
   return(true); 

 }  //Function AutoOptStart ends. 
 
 
bool AutoOptResult(int AOP_TestDays,string RCS_NameEA,int AOP_Gross_Profit,int AOP_Profit_Factor,int AOP_Expected_Payoff)
  {
   if(RCS_WriteDebug) L3_WriteDebug(7,"AutoOptResult : Starting AutoOptResult");   
   string PuthTester,PuthTerminal,FileReportLocation;
   if(IsTesting())PuthTester=TerminalPath()+"\\tester\\files\\optimalization";   // Path of a executable tester file to the tester directory   
   else PuthTester=TerminalPath()+"\\experts\\files\\optimalization";   // Path of a executable tester file to the experts directory   

   if(IsTesting())PuthTerminal=TerminalPath()+"\\tester\\files";   // Path to the terminal into tester directory   
   else PuthTerminal=TerminalPath()+"\\experts\\files";   // Path to the terminal into experts directory   

   string FileOptim       = "InitOptTester.ini";                                   //Name of the ini file for the tester
   datetime DayStart      = TimeLocal()-86400*AOP_TestDays;                        //Calculation of the starting date
   string DateStart       = TimeToStr(DayStart,TIME_DATE);                    //Optimization starting date
   string DateStop        = TimeToStr(TimeLocal()+86400,TIME_DATE);                 //Optimization ending date
   string FileReport      = "FileReport_"+Symbol()+".htm";                   //Tester report file name
   int    StepRes         = 21;                                               //The amount of lines for sorting
//-------------------------------other mediatory variables------------------------
   int    start,file=-1,Pptk,i;
   int    P1,P1k;
   int    ClStep,ClStepRazm,GrProf,GrProfRazm,TotTrad,TotTradRazm,ProfFact,ProfFactRazm,ExpPay,ExpPayRazm;
   int    text,index,kol,NumberStr,NumStr,CopyAr;
   int    GrosPr,PrCycle,Dubl;
   int    ResizeArayNew;
   double TotalTradesTransit,GrossProfitTransit,ExpectedPayoffTran;
   double PrFactDouble,PercSuitSets;
   double Prior1, Prior2, Prior3, transit, transit1;
   double Sort, SortTrans;
   string FileLine; 
   string CycleStep,GrossProfit,TotalTrades,ProfitFactor,ExpectedPayoff;
   string Perem1; 
   string select;
   bool   nodubl;
//----------------------------------- preparations of arrays -------------------------
   string ArrayOpttim[15]; 
   string ArrayStrg[10]; 
   double ArrayData[10][9]; 
   double ArrayTrans[10][9];

//------------------------ open a report file into the tester directory -------
   FileReportLocation="\\optimalization\\"+FileReport;   // Path to the terminal into tester directory   
   while (file<0)
      {
         if(RCS_WriteDebug) L3_WriteDebug(7,"AutoOptResult : Try to open "+FileReport);   
         file=FileOpen(FileReportLocation,FILE_READ,0x7F);                   //open the report file
      }      
//---------------- Read from file into the array ----------------------------------
    while(FileIsEnding(file)==false)
      {                               //Cycle, until the file ends
          FileLine=FileReadString(file);                            //Read a string from the report file
          index=StringFind(FileLine, "title", 20);                  //Find the necessary string and set the reference point there
          if(index>0)
           {
             ArrayResize(ArrayStrg,NumStr+1);                       //Increase the array in size
             ArrayStrg[NumStr]=FileLine;                            //Record the strings from the file in the array
             NumStr++;
           }  
      }
    FileClose(file);                                                //Close the file
    ArrayResize(ArrayData,NumStr);                                  //Set the array size by the amount of data read from the file
    PercSuitSets= (NumStr-1)*100 /((AOP_ProveCyc_End-AOP_ProveCyc_Start)/AOP_ProveCyc_Step);
    if(RCS_WriteLog) L2_WriteLog(7,StringConcatenate("There were founded ",PercSuitSets,"% profit sets from all of sets which were examined within optimalization."));
    if(AOP_MinPercSuitableSets > PercSuitSets)
      {
         if(RCS_WriteLog) L2_WriteLog(7,StringConcatenate("Because ",AOP_MinPercSuitableSets,"% is minimum, no set is choosen !"));
         return(false);
      }           
    
    for(text=0;text<NumStr;text++)
     {
        select=ArrayStrg[text]; 
//-------------------------------------------------------------------------; ">
//                    Then the necessary values are selected in the array:       
        //---------------------Reporting text processing (These are apples and oranges -----------------------------
        ClStep=StringFind(select, "; \">",20)+4;                                       //Position Pass 
        ClStepRazm=StringFind(select, "</td>",ClStep);                                 //Find the end of position
        CycleStep = StringSubstr(select, ClStep, ClStepRazm-ClStep);                   //Read the value
        //---------------- Position Profit  -------------------------------
        GrProf=StringFind(select, "<td class=mspt>",ClStepRazm);                       //Find the beginning of the position
        GrProfRazm=StringFind(select, "</td>",GrProf);                                 //Find the end of position
        GrossProfit = StringSubstr(select, GrProf+15,GrProfRazm-(GrProf+15));          //Read value
         //-------------Position Total Trades -----------------------------
        TotTrad=StringFind(select, "<td>",GrProfRazm);                                 //Find the beginning of position
        TotTradRazm=StringFind(select, "</td>",TotTrad);                               //Find the end of position
        TotalTrades = StringSubstr(select, TotTrad+4,TotTradRazm-(TotTrad+4));         //Read the value
        //-------------Position Profitability--------------------------------
        ProfFact=StringFind(select, "<td class=mspt>",TotTradRazm);                    //Find the beginning of position
        ProfFactRazm=StringFind(select, "</td>",ProfFact);                             //Find the end of position
        ProfitFactor = StringSubstr(select, ProfFact+15,ProfFactRazm-(ProfFact+15));     //Read the value
       //-------------Position Expected Payoff ---------------------------------
        ExpPay=StringFind(select, "<td class=mspt>",ProfFactRazm);                     //Find the beginning of position
        ExpPayRazm=StringFind(select, "</td>",ExpPay);                                 //Find the dn of position
        ExpectedPayoff = StringSubstr(select, ExpPay+15,ExpPayRazm-(ExpPay+15));         //Read the value
        //------------------------------------------------------------------
        //-------------Variables' positions starting with the second one---------------------
        P1=StringFind(select,"SMT_CurrentPass",20);                                                //Find the beginning of position
        P1k=StringFind(select, ";",P1);                                                //Find the end of position
        Perem1 = StringSubstr(select,P1+StringLen("SMT_CurrentPass")+1,P1k-(P1+1+StringLen("SMT_CurrentPass"))); //Read the Variable

//-----------------------Transform into number format----------------------------
       TotalTradesTransit=NormalizeDouble(StrToDouble(TotalTrades),0);
       GrossProfitTransit=NormalizeDouble(StrToDouble(GrossProfit),0);
       ExpectedPayoffTran=NormalizeDouble(StrToDouble(ExpectedPayoff),2);
       nodubl=true;
       if(RCS_WriteDebug) L3_WriteDebug(7,"AutoOptResult :Nr."+text+" Pass : "+CycleStep+" TotalTradesTransit : "+TotalTradesTransit+" GrossProfitTransit : "+GrossProfitTransit+" ExpectedPayoffTran : "+ExpectedPayoffTran); 
       
       if(AOP_MinTrCnt <= TotalTradesTransit && AOP_MaxTrCnt >= TotalTradesTransit)
        {                    //Filter by the amount of trades
          PrFactDouble = NormalizeDouble(StrToDouble(ProfitFactor),2);
          if(PrFactDouble==0){PrFactDouble=1000;}                                       //Replace 0 in the AOP_Profit_Factor for proper analysis
//-------------- Filter data having identical values -------------------       
           for(Dubl=0;Dubl<=text;Dubl++)
            {                                               //Start the loop searching for identical values
               if(GrossProfitTransit == ArrayData[Dubl][1])
                  {                            //check whether the results for maximal profit coincide
                     if(TotalTradesTransit == ArrayData[Dubl][2])
                        {                         //check whether the results for the amount of trades coincide
                           if(PrFactDouble == ArrayData[Dubl][3])
                              {                            //check whether the results for Profit Factor coincide
                                 if(ExpectedPayoffTran == ArrayData[Dubl][4])
                                    {                   //check whether the results for expected payoff coincide
                                       //nodubl=false;        // If everything coincides, flag it as coincided
                                    }   
                              }
                         }
                   }
            }                        
           
            
//---------------- Write the filtered data in the array ----------------------
           if(nodubl)
            {
              ArrayData[ResizeArayNew][1]=GrossProfitTransit;                                
              ArrayData[ResizeArayNew][2]=TotalTradesTransit;
              ArrayData[ResizeArayNew][3]=PrFactDouble;
              ArrayData[ResizeArayNew][4]=ExpectedPayoffTran;
              ArrayData[ResizeArayNew][5]=StrToDouble(Perem1);
              ResizeArayNew++;
            } 
        }
     }   
    //||||||||||||||||||||||||||||||| write variables into a intermediate file ||||||||||||||||||||||||||||||||||||                 
   int FileTst;
   int trs1,trs2,trs3,trs6;
   double trs4,trs5;
   if(RCS_WriteDebug) L3_WriteDebug(7,"AutoOptResult : Going to write results into a file ResultFilter1.csv");   
   FileTst=FileOpen("ResultFilter1.csv",FILE_CSV|FILE_WRITE,0x7F);           //open a file according to notes
   FileWrite(FileTst,"GrossProfit ; TotalTrades ; ProfitFactor ; ExpectedPayoff ;"+"SMT_CurrentPass"); 
   if(FileTst>0){
      for(i=0; i<ResizeArayNew; i++){
           trs2 = ArrayData[i][1];             
           trs3 = ArrayData[i][2];
           trs4 = ArrayData[i][3];             
           trs5 = ArrayData[i][4]; 
           trs6 = ArrayData[i][5];                       

          FileWrite(FileTst,trs2+";"+trs3+";"+trs4+";"+trs5+";"+trs6);                                  
      } 
      FileClose(FileTst);                                          //Close the file
   }
   else{
        if(RCS_WriteLog) L2_WriteLog(7,StringConcatenate("Not possible to write variables into a ResultFilter1 file. Error Nr. ",GetLastError()));
        return(false);
   }
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

   if(RCS_WriteDebug) L3_WriteDebug(7,"AutoOptResult : Going to write results into a file ResultFilter2.csv");   
   FileTst=FileOpen("ResultFilter2.csv",FILE_CSV|FILE_WRITE,0x7F);                      
 
//------------------------------Analyzer---------------------------------------- 
// Analyzing principle is the sequential checking of maximal values according to the predefined filtering priority 
   if(ResizeArayNew<=0) 
      {
         if(RCS_WriteLog) L2_WriteLog(7,"AutoOptResult: Because no set passed through filters, no set is choosen !");
         return(false);
      }   
   ArrayResize(ArrayTrans, ResizeArayNew-1);
   for(int PrioStep=1;PrioStep<4;PrioStep++){
   FileWrite(FileTst,"GrossProfit ; TotalTrades ; ProfitFactor ; ExpectedPayoff ;"+"SMT_CurrentPass"); 
       for(PrCycle=0;PrCycle<ResizeArayNew;PrCycle++){
           Sort     = ArrayData[PrCycle][0];
           Prior1   = ArrayData[PrCycle][1];             
           transit  = ArrayData[PrCycle][2];
           Prior2   = ArrayData[PrCycle][3];             
           Prior3   = ArrayData[PrCycle][4];             
           transit1 = ArrayData[PrCycle][5];
           
           if(PrioStep==1){
              //Prepare for the 1st sorting
              if(AOP_Gross_Profit   ==1){SortTrans=Prior1;}
              if(AOP_Profit_Factor  ==1){SortTrans=Prior2;}
              if(AOP_Expected_Payoff==1){SortTrans=Prior3;}
           }
           if(PrioStep==2){
              //Restore
              if(AOP_Gross_Profit   ==1){Prior1=Sort;}
              if(AOP_Profit_Factor  ==1){Prior2=Sort;}
              if(AOP_Expected_Payoff==1){Prior3=Sort;} 
              //Prepare for the 2nd sorting
              if(AOP_Gross_Profit   ==2){SortTrans=Prior1;}
              if(AOP_Profit_Factor  ==2){SortTrans=Prior2;}
              if(AOP_Expected_Payoff==2){SortTrans=Prior3;}
           }
           if(PrioStep==3){
              //Restore
              if(AOP_Gross_Profit   ==2){Prior1=Sort;}
              if(AOP_Profit_Factor  ==2){Prior2=Sort;}
              if(AOP_Expected_Payoff==2){Prior3=Sort;} 
              //Prepare for the 3rd sorting
              if(AOP_Gross_Profit   ==3){SortTrans=Prior1;}
              if(AOP_Profit_Factor  ==3){SortTrans=Prior2;}
              if(AOP_Expected_Payoff==3){SortTrans=Prior3;}
           }          
           ArrayTrans[PrCycle][0] = SortTrans;
           ArrayTrans[PrCycle][1] = Prior1;
           ArrayTrans[PrCycle][2] = transit;
           ArrayTrans[PrCycle][3] = Prior2;
           ArrayTrans[PrCycle][4] = Prior3;
           ArrayTrans[PrCycle][5] = transit1;
       }
       ArraySort(ArrayTrans,WHOLE_ARRAY,0,MODE_DESCEND);               //Sort the array       
       ArrayResize(ArrayTrans,StepRes);                            //Cut off the unnecessary things
       for(CopyAr=0;CopyAr<StepRes;CopyAr++){
           ArrayData[CopyAr][0]=ArrayTrans[CopyAr][0];
           ArrayData[CopyAr][1]=ArrayTrans[CopyAr][1];
           ArrayData[CopyAr][2]=ArrayTrans[CopyAr][2];
           ArrayData[CopyAr][3]=ArrayTrans[CopyAr][3];
           ArrayData[CopyAr][4]=ArrayTrans[CopyAr][4];             
           ArrayData[CopyAr][5]=ArrayTrans[CopyAr][5];             //"SMT_CurrentPass"    Variable 1
      }
//|||||||||||||||||||||||||||||||    ||||||||||||||||||||||||||||||||||||                 
   
   if(FileTst>0){
      for(i=0; i<StepRes; i++){
          trs2 = ArrayData[i][1];             
          trs3 = ArrayData[i][2];
          trs4 = ArrayData[i][3];             
          trs5 = ArrayData[i][4];             
          trs6 = ArrayData[i][5];
          FileWrite(FileTst,trs2+";"+trs3+";"+trs4+";"+trs5+";"+trs6);     //write a variable into a file
   }} 
   else{
        if(RCS_WriteLog) L2_WriteLog(7,StringConcatenate("AutoOptResult: Not possible to write variables into ResultFilter2 file. Error Nr. ",GetLastError()));
        return(false);
   }
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

       StepRes=StepRes/2;
   } 
    FileClose(FileTst);                                          //close the intermediate file with variables
     
       //Write the obtained results in variables
       double Peremen1 = ArrayTrans[0][5];                         
       if(Peremen1>0)
         {
           SMT_CurrentPass=Peremen1; 
           if(RCS_WriteLog) L2_WriteLog(7,StringConcatenate("AutoOptResult: The set Nr."," ",Peremen1," was choosen. Going to set it!"));
         }  
       else 
         {
           if(RCS_WriteLog) L2_WriteLog(7,"AutoOptResult: Optimalization is finished but the best Pass was not found !");
           return(false);
         }  
   if(RCS_WriteDebug) L3_WriteDebug(7,"AutoOptResult : Function is finished!");   
   return(true);    
 }  //Function ends. That's all, automated optimization is complete 
             
// ************** PART FOR A AUTO-OPTIMALIZATION - END ********************************

 
bool AOP_ModifyTPSL_2OnFunction()
   {
      int BuySigCnt=1,SellSigCnt=1;
      double orderSL,orderTP;
      double newSL,newTP,difference;
      int wait;
      string message;
      bool sellCnt=false,buyCnt=false;
      
      if(AOP_TPSLperi) AOP_TPSLnextRun=TimeCurrent()+AOP_TPSLwait; //run always after a certain amount of time
      if(!AOP_AllowNewTrades)
         {
            if(RCS_WriteDebug) L3_WriteDebug(6,"AOP_ModifyTPSL_2On : not change TP or SL, because a current set is not marked as profitable !");  
            return(false); 
         }   
      if(AOP_TPSLbuyCnt>=AOP_TPSLmaxChanges && AOP_TPSLsellCnt>=AOP_TPSLmaxChanges) return(false);
      if(RCS_WriteDebug) L3_WriteDebug(6,"Start AOP_ModifyTPSL_2On Function !");
      if(AOP_TPSLperi) 
         {
            BuySigCnt=0;
            SellSigCnt=0;
            if(A2_Check_If_Signal(1,BuySigCnt,SellSigCnt)==0 && !AOP_TPSLpromptly)
               {
                 if(RCS_WriteDebug) L3_WriteDebug(6,"AOP_ModifyTPSL_2On : No condition for opening a trade, so no modifying possible !");  
                 return(false);
               }  
         }   
      RefreshRates();
      for (int cnt = 0; cnt < OrdersTotal(); cnt++) 
        {
           if (OrderSelect(cnt, SELECT_BY_POS) == false) continue;
           if (OrderSymbol() != Symbol()) continue;
           if (OrderMagicNumber() >= GBV_MagicNumSet1 && OrderMagicNumber() <= GBV_MagicNumSet1 + GBV_maxMagic)
            {
              newSL=0;
              newTP=0; 
              wait=0;   
              message="Ticket Nr."+DoubleToStr(OrderTicket(),0);  
              if(RCS_WriteDebug) L3_WriteDebug(6,"AOP_ModifyTPSL_2On : "+message+" is examided if it is suitable to change TP or SL");  
              message=message+" was modified";  
              if(AOP_Optimalization_1On && AOP_LastAutoOptim<=OrderOpenTime() ) continue; //not change ticket within the set where it was opened                       
              if(OrderType()==OP_SELL && SellSigCnt>0 && AOP_TPSLsellCnt<AOP_TPSLmaxChanges) 
               {
                  orderSL=Ask+TMT_SL*Point;
                  if(OrderStopLoss()>orderSL) newSL=orderSL;
                  orderTP=Ask-TMT_TP*Point;
                  if(OrderTakeProfit()<orderTP) newTP=orderTP;
               }   
                  
              if(OrderType()==OP_BUY && BuySigCnt>0 && AOP_TPSLbuyCnt<AOP_TPSLmaxChanges) 
               {
                  orderSL=Bid-TMT_SL*Point;
                  if(OrderStopLoss()<orderSL) newSL=orderSL;
                  orderTP=Bid+TMT_TP*Point;
                  if(OrderTakeProfit()>orderTP) newTP=orderTP;
               }
              if(newSL!=0 || newTP!=0)
               {
                  if(newSL==0)newSL=OrderStopLoss();
                  else 
                     {
                        difference=MathAbs((OrderStopLoss()-newSL)/Point);
                        message=message+", SL was decreased about "+DoubleToStr(difference,0)+" points";
                     }   
                  if(newTP==0)newTP=OrderTakeProfit();
                  else 
                     {
                        difference=MathAbs((OrderTakeProfit()-newTP)/Point);
                        message=message+", TP was decreased about "+DoubleToStr(difference,0)+" points";
                     } 
                  while(wait>10 && !IsTradeAllowed()) 
                     {
                        Sleep(1000);
                        wait++;
                     } 
                  if(!A1_4_IsTradePossible())  //check if trade is allowed 
                     {
                        message="Modifying is not allowed !";
                        if(RCS_WriteLog) L2_WriteLog(6,message);
                        continue;
                     }   
                  if(OrderModify (OrderTicket(),OrderOpenPrice(), newSL,newTP,0, BlueViolet)==-1)
                     {
                        if(RCS_WriteLog) L2_WriteLog(6,"Modify error !");
                     }    
                  else 
                     {
                        if(OrderType()==OP_BUY) 
                           {
                              buyCnt=true;
                              message=message+", "+DoubleToStr(AOP_TPSLbuyCnt+1,0)+". change";
                           }  
                        else 
                           {
                              sellCnt=true;
                              message=message+", "+DoubleToStr(AOP_TPSLsellCnt+1,0)+". change";
                           }   
                        if(RCS_WriteLog) L2_WriteLog(6,message);                        
                     } 
               }   
            }
         } 
      if(buyCnt) AOP_TPSLbuyCnt++;
      if(sellCnt) AOP_TPSLsellCnt++;      
 
   }//end of AOP_ModifyTPSL_2OnFunction()
 
 
bool TextIntoArray (string textVar, string nameVar,int& variable[],int lenght)
   {
      string parametr,message;
      double val;
      if(StringLen(textVar)!=lenght*ArraySize(variable))
         {
            message=nameVar+" has wrong initial settings given by user! It uses predefined values.";
            Alert(message);
            if(RCS_WriteLog) L2_WriteLog(8,message);  
            return(false);
         } 
      for (int cnt=0;cnt<ArraySize(variable);cnt++)
         {
            parametr=StringSubstr(textVar,0,lenght);
            val=StrToDouble(parametr);
            variable[cnt]=val;
            textVar=StringSubstr(textVar,lenght,StringLen(textVar));
         }   
      return(true);
    }         

bool CloseBeforeWeekend (int ticket)
   {
      double price,TimeEnd;
      
      if(DayOfWeek()!=5) TimeEnd=EGF_TimeDayEnd;
      else TimeEnd=EGF_TimeFridayEnd;
      
      if(DayOfWeek()!=5 && EGF_CloseOnlyOnFriday) return(false); //is friday
      if(GBV_currentTime<TimeEnd-EGF_TimeBeforeEnd) return(false); //wait to active this function
      if(OrderType()==OP_BUY && OrderProfit()+OrderSwap()<0 && EGF_KeepWhenSwapOK && SwapLong>0) return(false);
      if(OrderType()==OP_SELL && OrderProfit()+OrderSwap()<0 && EGF_KeepWhenSwapOK && SwapShort>0) return(false);
      if(OrderType()==OP_BUY && GBV_currentTime>TimeEnd) price=Bid;
      if(OrderType()==OP_SELL && GBV_currentTime>TimeEnd) price=Ask;       
      
      if(OrderType()==OP_BUY && OrderProfit()+OrderSwap()>0) 
         {
            if(price==0 && EGF_WaitOnProfitInPips!=0)
               {
                  if(Bid-OrderOpenPrice()<EGF_WaitOnProfitInPips*Point) 
                     {
                        if(RCS_WriteDebug) L3_WriteDebug(5,"EGF_CloseBeforeRollOver : Ticket Nr."+ticket+" does not have expected profit.");  
                        return(false);
                     }   
               }   
            price=Bid;
         }   
      if(OrderType()==OP_SELL && OrderProfit()+OrderSwap()>0) 
         {
            if(price==0 && EGF_WaitOnProfitInPips!=0)
               {
                  if(OrderOpenPrice()-Ask<EGF_WaitOnProfitInPips*Point)
                     {
                        if(RCS_WriteDebug) L3_WriteDebug(5,"EGF_CloseBeforeRollOver : Ticket Nr."+ticket+" does not have expected profit.");  
                        return(false);
                     }   
               }   
            price=Ask; 
         }   
      
      if(price==0) return(false);
      if(!A1_4_IsTradePossible()) return(false); //check if trade is allowed 
      if(OrderClose(ticket,OrderLots(),price,TMT_Slippage,Red)!=-1)
         {
           if(RCS_WriteLog) L2_WriteLog(5,"EGF_CloseBeforeRollOver: Ticket Nr."+ticket+ "was closed because of a function CloseBeforeWeekend. SwapLong :"+SwapLong+" SwapShort : "+SwapShort);  
           if(EXT_OpenDeniedTimeIfSwapOK && FTE_Time_2On && Z_F2_BlockTradingFilter2()) EXT_IsOpenedTradeIfSwapOK=false;
           return(true);
         }
      else  if(RCS_WriteLog) L2_WriteLog(5,"EGF_CloseBeforeRollOver: Ticket Nr."+ticket+ " : closing error within function CloseBeforeWeekend"); 
      return(false);
      
   }

int SetTimeFrom (int SMT_ProveHoursBack,int NotFrom2) //gain time from which time it should trade {1.par = hours back, 2.par. counted from time}
   { 
      int cnt=SMT_ProveHoursBack;
      datetime NotTo1;
      datetime CurrTime=NotFrom2;
      NotTo1=NotFrom2;
          while(cnt>0)
            {
               CurrTime-=3600;               
               if(TimeDayOfWeek(CurrTime)==0 || TimeDayOfWeek(CurrTime)==6) continue; //saturday and sunday not counted
               NotTo1-=3600;
               cnt--;
            }  
      return(NotTo1);       
   } 
   
bool OpenIfSwapOK ()
   {
      if( FTE_Time_2On && !Z_F2_BlockTradingFilter2() ) return(false); //open only in restricted area
      if(EXT_IsOpenedTradeIfSwapOK) return(false);
      if(EGF_CloseOnlyOnFriday && DayOfWeek()!=5) return(false);
      bool TimeFilter=FTE_Time_2On;
      FTE_Time_2On=false;
      int TradeDirect=A2_Check_If_Signal(TMT_SignalsRepeat,GBV_BuySignalCount,GBV_SellSignalCount);
      FTE_Time_2On=TimeFilter;
            
      double TimeEnd;
      if(DayOfWeek()!=5) TimeEnd=EGF_TimeDayEnd;
      else TimeEnd=EGF_TimeFridayEnd;
            
      if(TradeDirect==1 && SwapLong>0 && GBV_currentTime<TimeEnd) //open when swap is in the direction of a future trade
        {
                if( A1_1_OrderNewBuy(MM_OptimizeLotSize(Buy)*A1_3_EntryConfirmation(OP_BUY)) != Failed)
                  {
                     if(RCS_WriteLog) L2_WriteLog(3,"Function EXT_OpenDeniedTimeIfSwapOK was opened a long trade !");
                     GBV_BuySignalCount   =0;
                     EXT_IsOpenedTradeIfSwapOK=true;
                  } 
        }
      else if(TradeDirect==-1 && SwapShort>0 && GBV_currentTime<TimeEnd)
        {
                if( A1_2_OrderNewSell(MM_OptimizeLotSize(Sell)*A1_3_EntryConfirmation(OP_SELL)) != Failed)
                  {
                     if(RCS_WriteLog) L2_WriteLog(3,"Function EXT_OpenDeniedTimeIfSwapOK was opened a short trade !");                     
                     GBV_SellSignalCount  =0;
                     EXT_IsOpenedTradeIfSwapOK=true;
                  } 
        }
        
   } //end of OpenIfSwapOK ()




//End Of File

