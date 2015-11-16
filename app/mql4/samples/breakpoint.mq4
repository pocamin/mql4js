//+------------------------------------------------------------------+
//|                                                  breakpointv.mq4 |
//|                                 Copyright 2015, @traderconfident |
//|                             http://confident-trader.blogspot.com |
//+------------------------------------------------------------------+
/*
Strategy : 
1. EA by BreakPoint (Sell & Buy) of the Day on H1 timeframe
   Break BreakPoint jalan dengan asumsi size candle sebelumnya < 30

Created : 30/08/2015 : 3:50
Modified: 3/09/2015 : 3:50 
*/
#property copyright "© @traderconfident"
#property link      "http://confident-trader.blogspot.com"
#property version   "1.0"
//---
extern string _Strategy_1_=" --- Break Point ---";
extern bool Strategy_1_Enable=true;
extern int BreakPoint=20;
extern int MinSizePrevBarForBreak = 5;
extern int MaxSizePrevBarForBreak = 30;
//---
extern string _Orders_=" --- Set Order ---";
extern double Lots=0.1;
extern int StopLoss=100;
extern int TakeProfit=10;
extern int MaxOrderAtOnceTime=1;
extern int MaxOpen=100;
//---
extern int Magic=123456;
//---
extern string _BuySellColor_=" --- Chart ---";
extern color colBuy=Blue;
extern color colSell=Red;
extern color colClose=White;
//---
#include <stdlib.mqh>
#include <stderror.mqh>
//---
double Pip;
double BreakBuy;
double BreakSell;
int SleepOk=2000;
int SleepErr = 6000;
int Slippage = 30;
double _sl,_tp;
string comb,_EA="@BreakPoint",_remark="";
//+------------------------------------------------------------------+
//|                                                                  |
//+------------------------------------------------------------------+
int init()
  {
   Pip=Point;
   if(Digits==3 || Digits==5) Pip=10*Point;
   return(0);
  }
//+------------------------------------------------------------------+
//|                                                                  |
//+------------------------------------------------------------------+
int start()
  {
   static datetime LastCandle;
//---
   if(LastCandle!=Time[0])
     {
      process();
      LastCandle=Time[0];
     }
   return(0);
  }
//+------------------------------------------------------------------+
//|                                                                  |
//+------------------------------------------------------------------+
int process()
  {
   int ticket=0;
   if(OrdersTotal()<=MaxOpen || MaxOpen==0)
     {
      int shift=iBarShift(Symbol(),PERIOD_D1,Time[0]);
      double DayOpen=iOpen(Symbol(),PERIOD_D1,shift);
      BreakBuy = DayOpen+BreakPoint*Pip;
      BreakSell= DayOpen-BreakPoint*Pip;
      //---
      double lastOpen   = iOpen(Symbol(),0,1);
      double lastClose  = iClose(Symbol(),0,1);
      //--- Strategy 1 BUY
      if((Strategy_1_Enable) && lastClose>lastOpen && (Open[0])>=BreakBuy && BreakBuy>=lastOpen && BreakBuy<=lastClose && (lastClose-lastOpen)<MaxSizePrevBarForBreak*Pip && (lastClose-lastOpen)>MinSizePrevBarForBreak*Pip)
        {
         //--- Buy
         _remark= _EA+"-S1";
         ticket = Order("BUY",Lots);
        }
      //--- Strategy 1 SELL
      if((Strategy_1_Enable) && lastClose<lastOpen && (Open[0])<=BreakSell && BreakSell<=lastOpen && BreakSell>=lastClose && (lastOpen-lastClose)<MaxSizePrevBarForBreak*Pip && (lastOpen-lastClose)>MinSizePrevBarForBreak*Pip)
        {
         //--- Sell
         _remark= _EA+"-S1";
         ticket = Order("SELL",Lots);
        }
      //---
      if(ticket>=0)
        {
         Sleep(SleepOk);
         return(ticket);
        }
      //---
      int code=GetLastError();
      Print("Error opening order: ",ErrorDescription(code)," (",code,")");
      Sleep(SleepErr);
      return(-1);
     }
   return(ticket);
  }
//+------------------------------------------------------------------+
//|                                                                  |
//+------------------------------------------------------------------+
int Order(string _order,double _lots)
  {
   int ticket=0;
   int i;
//---
   if(_order=="BUY")
     {
      if(StopLoss>0) _sl=Ask-StopLoss*Pip; else _sl=0.0;
      if(TakeProfit>0) _tp=Ask+TakeProfit*Pip; else _tp=0.0;
      for(i=0; i<MaxOrderAtOnceTime; i++)
        {
         if(OrdersTotal()>MaxOpen && MaxOpen!=0 ) return(0);
         ticket=OrderSend(Symbol(),OP_BUY,_lots,Ask,3,_sl,_tp,_remark,Magic,0,colBuy);
        }
      return(ticket);
     }
   if(_order=="SELL")
     {
      if(StopLoss>0) _sl=Bid+StopLoss*Pip; else _sl=0.0;
      if(TakeProfit>0) _tp=Bid-TakeProfit*Pip; else _tp=0.0;
      for(i=0; i<MaxOrderAtOnceTime; i++)
        {
         if(OrdersTotal()>MaxOpen && MaxOpen!=0 ) return(0);
         ticket=OrderSend(Symbol(),OP_SELL,_lots,Bid,3,_sl,_tp,_remark,Magic,0,colSell);
        }
      return(ticket);
     }
   return(-1);
  }
//+------------------------------------------------------------------+
