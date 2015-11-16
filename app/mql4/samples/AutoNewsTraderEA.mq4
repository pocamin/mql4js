//+------------------------------------------------------------------+
//|                                 AutoNewsTrader.mq4 Version 1.1.8 |
//|                                 Id = novus trade                 |
//+------------------------------------------------------------------+
#property copyright "American Financial Institute modified by Tamter Trading Programs."
#property link      "http://www.americanfinancialinst.com"

#include <MarketNewsLib.mqh>
#include <stdlib.mqh>

extern int  Pipsaway=10;
extern int TP=20; // The Exact Amount Of the Pips u will get as the profit in your account
extern int SL=10; // Stop Loss amount in pips

extern int CTCBN=0; // Numbers Candles to check Before News For determining High & Lows , when it is 1 it check 2 candles the current candle and the 1 last one
extern int SecBPO=120; // Seconds Before News Which EA Will Place Pending Orders
extern int SecBMO=0; // Seconds Before News Which EA Will Stop Modifying Orders
extern int STWAN=150; // Seconds To Wait After News to Delete Pending Orders
extern bool OCO=true; // One Cancel The Other , will cancel the other pending order if one of them is hit
extern int BEPips=0; // Pips In profit which EA will Move SL to BE+1 after that
extern int TrailingStop=0; // Trailing Stop
extern bool mm=false;
extern int RiskPercent=3;
extern double Lots=0.1;
extern string TradeLog = " MI_Log";
extern int time_zone_gmt =0; // London GMT.. adjust to 1 for day light saving  
extern string news_url   = "http://www.dailyfx.com/files/";
extern bool trade_low_news = false;
extern bool trade_high_news = true;
extern bool trade_medium_news = true;


double h,l,ho,lo,hso,lso,htp,ltp,sp;
int Magic;
string filename;

string news[1000][10];
datetime lastNewsInit; // we want news file refreshed once a day
string lastNews = ""; 


//+------------------------------------------------------------------+
//| expert initialization function                                   |
//+------------------------------------------------------------------+
int init()
  {
    ObjectsDeleteAll();
    return(0);
  }
//+------------------------------------------------------------------+
//| expert deinitialization function                                 |
//+------------------------------------------------------------------+
int deinit()
  {
//----
    Comment("");
    ObjectsDeleteAll();
//----
   return(0);
  }

double LotsOptimized()
  {
   double lot=Lots;
  //---- select lot size
   if (mm) lot=NormalizeDouble(MathFloor(AccountFreeMargin()*RiskPercent/100)/100,1);
   
  // lot at this point is number of standard lots
   return(lot);
  } 

  
int CheckOrdersCondition()
  {
    int result=0;
    for (int i=0;i<OrdersTotal();i++) {
      OrderSelect(i,SELECT_BY_POS,MODE_TRADES);
      if ((OrderType()==OP_BUY) && (OrderSymbol() == Symbol()) && (OrderMagicNumber() == Magic)) {
        result=result+1000; 
      }
      if ((OrderType()==OP_SELL) && (OrderSymbol() == Symbol()) && (OrderMagicNumber() == Magic)) {
        result=result+100; 
      }
      if ((OrderType()==OP_BUYSTOP) && (OrderSymbol() == Symbol()) && (OrderMagicNumber() == Magic)) {
        result=result+10;
      }
      if ((OrderType()==OP_SELLSTOP) && (OrderSymbol() == Symbol()) && (OrderMagicNumber() == Magic)) {
        result=result+1; 
      }

    }
    return(result); // 0 means we have no trades
  }
  
// OrdersCondition Result Pattern
//    1    1    1    1
//    b    s    bs   ss
//  
  
  
void OpenBuyStop()
 {
    int ticket,err,tries;
        tries = 0;
        if (!GlobalVariableCheck("InTrade")) {
          while (tries < 3)
            {
               GlobalVariableSet("InTrade", CurTime());  // set lock indicator
               ticket = OrderSend(Symbol(),OP_BUYSTOP,LotsOptimized(),ho,1,hso,htp,"novus trade",Magic,0,Red);
               Write("in function OpenBuyStop OrderSend Executed , ticket ="+ticket);
               GlobalVariableDel("InTrade");   // clear lock indicator
               if(ticket<=0) {
                  Write("Error Accured : "+ErrorDescription(GetLastError())+" BuyStop @ "+ho+" SL @ "+hso+" TP @"+htp);
                  tries++;
               } else tries = 3;
            }
        }
 }
  
void OpenSellStop()
 {
    int ticket,err,tries;
        tries = 0;
        if (!GlobalVariableCheck("InTrade")) {
          while (tries < 3)
            {
               GlobalVariableSet("InTrade", CurTime());  // set lock indicator
               ticket = OrderSend(Symbol(),OP_SELLSTOP,LotsOptimized(),lo,1,lso,ltp,"novus trade",Magic,0,Red);
               Write("in function OpenSellStop OrderSend Executed , ticket ="+ticket);
               GlobalVariableDel("InTrade");   // clear lock indicator
               if(ticket<=0) {
                  Write("Error Accured : "+ErrorDescription(GetLastError())+" BuyStop @ "+lo+" SL @ "+lso+" TP @"+ltp);
                  tries++;
               } else tries = 3;
            }
        }
 }
 
void DoBE(int byPips)
  {
    for (int i = 0; i < OrdersTotal(); i++) {
     OrderSelect(i, SELECT_BY_POS, MODE_TRADES);
     if ( OrderSymbol()==Symbol() && (OrderMagicNumber() == Magic))  // only look if mygrid and symbol...
        {
            if (OrderType() == OP_BUY) if (Bid - OrderOpenPrice() > byPips * Point) if (OrderStopLoss() < OrderOpenPrice()) {
              Write("Movine StopLoss of Buy Order to BE+1");
              OrderModify(OrderTicket(), OrderOpenPrice(), OrderOpenPrice() +  Point, OrderTakeProfit(), Red);
            }
            if (OrderType() == OP_SELL) if (OrderOpenPrice() - Ask > byPips * Point) if (OrderStopLoss() > OrderOpenPrice()) { 
               Write("Movine StopLoss of Buy Order to BE+1");
               OrderModify(OrderTicket(), OrderOpenPrice(), OrderOpenPrice() -  Point, OrderTakeProfit(), Red);
            }
        }
    }
  }

void DoTrail()
  {
    for (int i = 0; i < OrdersTotal(); i++) {
     OrderSelect(i, SELECT_BY_POS, MODE_TRADES);
     if ( OrderSymbol()==Symbol() && (OrderMagicNumber() == Magic))  // only look if mygrid and symbol...
        {
          
          if (OrderType() == OP_BUY) {
             if(Bid-OrderOpenPrice()>Point*TrailingStop)
             {
                if(OrderStopLoss()<Bid-Point*TrailingStop)
                  {
                     OrderModify(OrderTicket(),OrderOpenPrice(),Bid-Point*TrailingStop,OrderTakeProfit(),0,Green);
                     return(0);
                  }
             }
          }

          if (OrderType() == OP_SELL) 
          {
             if((OrderOpenPrice()-Ask)>(Point*TrailingStop))
             {
                if((OrderStopLoss()>(Ask+Point*TrailingStop)) || (OrderStopLoss()==0))
                {
                   OrderModify(OrderTicket(),OrderOpenPrice(),Ask+Point*TrailingStop,OrderTakeProfit(),0,Red);
                   return(0);
                }
             }
          }
       }
    }
 }
 

void DeleteBuyStop()
{
   for (int i = 0; i < OrdersTotal(); i++) {
     OrderSelect(i, SELECT_BY_POS, MODE_TRADES);
     if (OrderSymbol()==Symbol() && (OrderMagicNumber() == Magic) && (OrderType()==OP_BUYSTOP)) {
       OrderDelete(OrderTicket());
       Write("in function DeleteBuyStopOrderDelete Executed");
     }
       
   }
}
   
void DeleteSellStop()
{
   for (int i = 0; i < OrdersTotal(); i++) {
     OrderSelect(i, SELECT_BY_POS, MODE_TRADES);
     if (OrderSymbol()==Symbol() && (OrderMagicNumber() == Magic) && (OrderType()==OP_SELLSTOP)) {
       OrderDelete(OrderTicket());
       Write("in function DeleteSellStopOrderDelete Executed");
     }
       
   }
}

void DoModify()
{
   for (int i = 0; i < OrdersTotal(); i++) {
     OrderSelect(i, SELECT_BY_POS, MODE_TRADES);
     if (OrderSymbol()==Symbol() && (OrderMagicNumber() == Magic) && (OrderType()==OP_SELLSTOP)) {
       if ((OrderOpenPrice()>lo) || (OrderOpenPrice()<lo)) {
         Write("in function DoModify , SellStop OrderModify Executed, Sell Stop was @ "+DoubleToStr(OrderOpenPrice(),4)+" it changed to "+DoubleToStr(lo,4));
         OrderModify(OrderTicket(),lo,lso,ltp,0,Red);
       }
     }

     if (OrderSymbol()==Symbol() && (OrderMagicNumber() == Magic) && (OrderType()==OP_BUYSTOP)) {
       if ((OrderOpenPrice()>ho) || (OrderOpenPrice()<ho)) {
         Write("in function DoModify , BuyStop OrderModify Executed, Buy Stop was @ "+DoubleToStr(OrderOpenPrice(),4)+" it changed to "+DoubleToStr(ho,4));
         OrderModify(OrderTicket(),ho,hso,htp,0,Red);
       }
     }
   }
}

int Write(string str)
{
   int handle;
  
   handle = FileOpen(filename,FILE_READ|FILE_WRITE|FILE_CSV,"/t");
   FileSeek(handle, 0, SEEK_END);      
   FileWrite(handle,str + " Time " + TimeToStr(CurTime(),TIME_DATE|TIME_SECONDS));
    FileClose(handle);
}

//+------------------------------------------------------------------+
//| expert start function                                            |
//+------------------------------------------------------------------+
int start()
  {
  
   Magic= TimeDay(TimeLocal()) + TimeHour(TimeLocal()) + TimeMinute(TimeLocal());
   
   if(TimeToStr(lastNewsInit,TIME_DATE) != TimeToStr(TimeLocal(),TIME_DATE))
   InitNews(news,time_zone_gmt,news_url );
   
   lastNewsInit = TimeLocal();
   
   
   string newsToTrade[1];
   
   bool gotNewsToTrade = GetNewsToTrade(news,newsToTrade,trade_medium_news,trade_medium_news,trade_high_news,
                   Symbol(), SecBPO);
    
   
   bool tradePlaced = (lastNews == newsToTrade[0]);
     
      
   lastNews = newsToTrade[0];
   
   int NHour = TimeHour(StrToTime(newsToTrade[1]));
   int NMin = TimeMinute(StrToTime(newsToTrade[1]));
   
   int i;
   int OrdersCondition,secofday,secofnews;
      
   filename=Symbol() + TradeLog + "-" + Month() + "-" + Day() + ".txt";

   if (BEPips>0) DoBE(BEPips);
   
   if (TrailingStop>0) DoTrail();
   
   OrdersCondition=CheckOrdersCondition();
   
   secofday=Hour()*3600+Minute()*60+Seconds();
   secofnews=NHour*3600+NMin*60;
   
   h=iHigh(NULL,PERIOD_M1,0);
   l=iLow(NULL,PERIOD_M1,0);
   for (i=1;i<=CTCBN;i++) if (iHigh(NULL,PERIOD_M1,i)>h) h=iHigh(NULL,PERIOD_M1,i);
   for (i=1;i<=CTCBN;i++) if (iLow(NULL,PERIOD_M1,i)<l) l=iLow(NULL,PERIOD_M1,i);
   sp=Ask-Bid;
   ho=h+sp+(Pipsaway)*Point;
   lo=l-(Pipsaway)*Point;
   hso=Bid+(Pipsaway-SL)*Point; //hso=h+sp;
   lso=Ask-(Pipsaway-SL)*Point; //lso=l;
   htp=ho+TP*Point;
   ltp=lo-TP*Point;

   
   Comment("\nAmazing Forex System Expert Advisor v 1.1.7 By Merchant409\n\nHigh @ ",h," Buy Order @ ",ho," Stoploss @ ",hso," TakeProfit @ ",htp,"\nLow @ ",l," Sell Order @ ",lo," StopLoss @ ",lso," TakeProfit @ ",ltp," ",NMin," CTCBN : ",CTCBN," SecBPO : ",SecBPO," SecBMO : ",SecBMO," STWAN : ",STWAN," OCO : ",OCO," BEPips : ",BEPips," Money Management : ",mm," RiskPercent: ",RiskPercent," Lots : ",LotsOptimized(), "\nNews: ", lastNews);
   
   if (gotNewsToTrade && (secofday<secofnews) && (secofday>(secofnews-SecBPO)) && !tradePlaced) {
      
      if (OrdersCondition==0) {
         Write("Opening BuyStop & SellStop, OrdersCondition="+OrdersCondition+" SecOfDay="+secofday);
         OpenBuyStop();
         OpenSellStop();
      }

      if (OrdersCondition==10) {
         Write("Opening SellStop, OrdersCondition="+OrdersCondition+" SecOfDay="+secofday);
         OpenSellStop();
      }
      
      if (OrdersCondition==1) {
         Write("Opening BuyStop , OrdersCondition="+OrdersCondition+" SecOfDay="+secofday);
         OpenBuyStop();
      }
   }

   if ((secofday<secofnews) && (secofday>(secofnews-SecBPO)) && (secofday<(secofnews-SecBMO)) && tradePlaced) {
         Write("Modifying Orders, OrdersCondition="+OrdersCondition+" SecOfDay="+secofday);
         DoModify();
      }
      
   


   if ((secofday>secofnews) && (secofday<(secofnews+STWAN)) && OCO && tradePlaced) {

      if (OrdersCondition==1001) {
         Write("Deleting SellStop Because of BuyStop Hit, OrdersCondition="+OrdersCondition+" SecOfDay="+secofday);
         DeleteSellStop();
      }
      
      if (OrdersCondition==110) {
        Write("Deleting BuyStop Because of SellStop Hit, OrdersCondition="+OrdersCondition+" SecOfDay="+secofday);
        DeleteBuyStop();
      }
   }
   
   if ((secofday>secofnews) && (secofday>(secofnews+STWAN)) && tradePlaced) {
      if (OrdersCondition==11) {
         Write("Deleting BuyStop and SellStop Because 4 min expired, OrdersCondition="+OrdersCondition+" SecOfDay="+secofday);
         DeleteBuyStop();
         DeleteSellStop();
      }
      
      if ((OrdersCondition==10) || (OrdersCondition==110)) {
        Write("Deleting BuyStop Because expired, OrdersCondition="+OrdersCondition+" SecOfDay="+secofday);
        DeleteBuyStop();
      }
      
      if ((OrdersCondition==1) || (OrdersCondition==1001)) {
        Write("Deleting SellStop Because expired, OrdersCondition="+OrdersCondition+" SecOfDay="+secofday);
        DeleteSellStop();
      }
   }
        
   
//----
   return(0);
  }
  

//+------------------------------------------------------------------+