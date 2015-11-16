//+------------------------------------------------------------------+
//|                        Copyright 2012, MetaQuotes Software Corp. |
//|                                        http://www.metaquotes.net |
//+------------------------------------------------------------------+
#property copyright "© 2013 August, HSR"
#property link      "http://www.metaquotes.net"

#define VERSION "1.03b"  //this is public version
// string&date function provided by "Handy MQL4 utility functions" on http://www.forexfactory.com/showthread.php?t=165557
#include <hanover --- function header (np).mqh>

//--- input parameters
extern double    Lots=0.01;
extern int       TakeProfit=125;
extern int       StopLoss=75;
extern string Start.date.and.time= "--MUST in format DD/MM/YYYY 24H:MM";
extern string    StartDate="09/09/2013";
extern string    StartTime="09:09";
extern string Set_1= "--actual start in minutes after start time";
extern int       StartStraddle=1;
extern string Set_2= "--stop in minutes from actual start time";
extern int       StopStraddle=15;
extern string Set_3= "--OP distance pips from current price";
extern int       Distance=60;
extern string Set_4= "--OP will be deleted (minutes)";
extern int       Expiration = 20;
extern int       ExpertID = 7999;

string	ver=VERSION;
int     Slippage=2; //this is public version

//+------------------------------------------------------------------+
//| expert initialization function                                   |
//+------------------------------------------------------------------+
int init()
  {
//----
   start();
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

#include <hanover --- extensible functions (np).mqh>
  
int TotalBuy=0, TotalSell=0;
int TotalBuyStop=0, TotalSellStop=0;
int TicketBuyStop=0, TicketSellStop=0;

void RefreshOrder() {

   TotalBuy=0;
   TotalSell=0;
   TotalBuyStop=0;
   TotalSellStop=0;
   TicketBuyStop=0;
   TicketSellStop=0;
   
   int i=OrdersTotal()-1;
   while(i>=0) {
      if(OrderSelect(i,SELECT_BY_POS,MODE_TRADES)) {
         if(OrderMagicNumber()==ExpertID && OrderSymbol()==Symbol()) {
            switch(OrderType()) {
            case OP_BUY:
               TotalBuy++;
               break;
            case OP_SELL:
               TotalSell++;
               break;
            case OP_BUYSTOP:
               TotalBuyStop++;
               TicketBuyStop=OrderTicket();
               break;
            case OP_SELLSTOP:
               TotalSellStop++;
               TicketSellStop=OrderTicket();
               break;
            }
         }
      }
      i--;
   }  
}

//+------------------------------------------------------------------+
//| expert start function                                            |
//+------------------------------------------------------------------+
int start()
  {
   if(Period() != PERIOD_M15 ) { //this is public version
      Comment("\nThis EA only can run on 15 minutes chart !");
      return(0);
   }

   datetime STnow=TimeCurrent();
   string   StartDateTime=StringConcatenate(StartDate," ",StartTime);
   datetime Sdatetime=StrToDate(StartDateTime, "DD/MM/YYYY HH:II", ""); 
   
   datetime STimeStart= Sdatetime  + StartStraddle*60;
   datetime STimeStop = STimeStart + StopStraddle*60;

   string sn=DateToStr(STnow, "D n Y  H:I");
   string s0=DateToStr(Sdatetime, "D n Y  H:I");
   string s1=DateToStr(STimeStart, "D n Y  H:I");
   string s2=DateToStr(STimeStop, "D n Y  H:I");
   string lc=DateToStr(TimeLocal(), "D n Y  H:I");
   string lt=DateToStr(Sdatetime,"D n Y  H:I");
   string set1=StringConcatenate("\nLots: ",Lots,"  TP: ",TakeProfit,"  SL: ",StopLoss,"  Dis: ",Distance,"  Exp: ",Expiration );
   string ltp = StringConcatenate("\nStart at Local Time: ",lt);

   string IComment = WindowExpertName();
   
   RefreshOrder();

   if ( STimeStop<STimeStart+300 || STnow<STimeStart || STnow>STimeStop ){  // its ready & waiting
      Comment("\nVersion: "+ver+"\nLocal Time: "+lc+"\nServer Time: "+sn+"\n"+ltp+"\nStart at Server on: "+s0+"\nStart  Straddle on:  "+s1+"\nStop  Straddle on:  "+s2+set1+"\n\nReady and waiting...!");
      return(0);
   }   

   double p1,p2;
   int    Exp = Expiration * 60; 
   
   if( STimeStop>STimeStart+300 && STnow>STimeStart && STnow<STimeStop ) {
      Comment("\nVersion: "+ver+"\nLocal Time: "+lc+"\nServer Time: "+sn+"\n"+ltp+"\nStart at Server on: "+s0+"\nStart  Straddle on:  "+s1+"\nStop  Straddle on:  "+s2+set1+"\n\nCAUTION: Ready to OPEN order!");
      static int lastbar=0;
      if(lastbar!=Bars) {
         lastbar=Bars;
         
         p1= Bid + Distance * Point;
         p2= Bid - Distance * Point;
         //this will set trailing pending order
         //if there is no OP & pending then create pending order 
         if(TotalBuy==0 && TotalSell==0 && TotalBuyStop==0 && TotalSellStop==0) {
            OrderSend(Symbol(),OP_BUYSTOP, Lots,p1,Slippage,p1-StopLoss*Point,p1+TakeProfit*Point,IComment,ExpertID,TimeCurrent()+Exp,DodgerBlue);
            OrderSend(Symbol(),OP_SELLSTOP,Lots,p2,Slippage,p2+StopLoss*Point,p2-TakeProfit*Point,IComment,ExpertID,TimeCurrent()+Exp,DeepPink);
         } else {
         //if there is pending then modify current pending order
            if(TotalBuyStop>0 && TotalSellStop>0) {
               //
               OrderModify(TicketBuyStop, p1,p1-StopLoss*Point,p1+TakeProfit*Point,TimeCurrent()+Exp);
               OrderModify(TicketSellStop,p2,p2+StopLoss*Point,p2-TakeProfit*Point,TimeCurrent()+Exp);
            } 
         }
      }
      
      if(TotalBuyStop>0 && TotalSellStop==0) {
         OrderDelete(TicketBuyStop);
      } else 
      if(TotalSellStop>0 && TotalBuyStop==0) {
         OrderDelete(TicketSellStop);
      }
      
   } else {
    
      if(TotalBuyStop>0 && TotalSellStop==0) {
         OrderDelete(TicketBuyStop);
      } else 
      if(TotalSellStop>0 && TotalBuyStop==0) {
         OrderDelete(TicketSellStop);
      }
   
   }
//----
   return(0);
  }
//+------------------------------------------------------------------+

