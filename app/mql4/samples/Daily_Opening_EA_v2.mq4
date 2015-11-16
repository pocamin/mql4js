//+------------------------------------------------------------------+
//|                                          Daily Opening EA v2.mq4 |
//|                                                       Bryan Wang |
//|                                                                  |
//+------------------------------------------------------------------+
#property copyright "Bryan Wang"
#property link      ""
extern double SL = 100;
extern double TP = 100;
extern double Lots = 0.01;
extern double RiskPercentage = 0.02;
datetime PrevTime = 0;
datetime CurrTime = 0;
int PendingSell = -1;
int PendingBuy = -1;
int init()
  {
//----
   
//----
   return(0);
  }
//+------------------------------------------------------------------+
//| expert deinitialization function                                 |
//+------------------------------------------------------------------+
int deinit()
  {
//----
   
//----
   return(0);
  }
//+------------------------------------------------------------------+
//| expert start function                                            |
//+------------------------------------------------------------------+
int start()
  {
   CurrTime = iTime(NULL,0,1);
   if (CurrTime==PrevTime) return(0);
   if (PendingSell != -1) {
      OrderSelect(PendingSell,SELECT_BY_TICKET,MODE_TRADES);
      if (OrderType()==OP_SELLSTOP) {
         OrderDelete(PendingSell);
         PendingSell = -1;
      } else if (OrderType()==OP_SELL && OrderCloseTime() <= 0) {
         OrderClose(PendingSell,OrderLots(),Ask,3,Green);
         PendingSell = -1;
      }
   }
   if (PendingBuy != -1) {
      OrderSelect(PendingBuy,SELECT_BY_TICKET,MODE_TRADES);
      if (OrderType()==OP_BUYSTOP) {
         OrderDelete(PendingBuy);
         PendingBuy = -1;
      } else if (OrderType()==OP_BUY && OrderCloseTime() <= 0) {
         OrderClose(PendingBuy,OrderLots(),Bid,3,Red);
         PendingBuy = -1;
      }
   }
   if (TimeDayOfWeek(CurrTime)<1 || TimeDayOfWeek(CurrTime)>4) return(0);
   double RSI = iRSI(Symbol(),0,21,PRICE_CLOSE,1);
   double CCI = iCCI(Symbol(),0,50,PRICE_CLOSE,1);
   double MACD = iMACD(Symbol(),0,12,26,9,PRICE_CLOSE,MODE_MAIN,1);
   if (CCI > 0 && RSI > 50 && MACD > 0) OpenLong();
   if (CCI < 0 && RSI < 50 && MACD < 0) OpenShort();
   PrevTime = CurrTime;
   return(0);
  }
void OpenLong() {
   double spread = Ask-Bid;
   double Lots2 = (AccountEquity()*RiskPercentage)/SL;
   if (Lots2 > 10) Lots2 = 10;
   PendingBuy = OrderSend(Symbol(),OP_BUYSTOP,Lots2,High[1]+spread,3,High[1]-SL*Point+spread,High[1]+TP*Point+spread,"Daily open v2",72,0,Green);
}
void OpenShort() {
   double spread = Ask-Bid;
   double Lots2 = (AccountEquity()*RiskPercentage)/SL;
   if (Lots2 > 10) Lots2 = 10;
   PendingSell = OrderSend(Symbol(),OP_SELLSTOP,Lots2,Low[1],3,Low[1]+SL*Point-spread,Low[1]-TP*Point-spread,"Daily open v2",72,0,Red);
}
//+------------------------------------------------------------------+