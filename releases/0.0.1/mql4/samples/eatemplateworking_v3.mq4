//+------------------------------------------------------------------+਀⼀⼀簀                                                    䔀愀吀攀洀瀀氀愀琀攀⸀洀焀㐀簀 
//|                                          Jacek Dzambuіat-Colojew |਀⼀⼀簀                                                樀愀挀攀欀搀挀䀀最洀愀椀氀⸀挀漀洀 簀 
//+------------------------------------------------------------------+਀ 
#property copyright "Jacek Dzambuіat-Colojew"਀⌀瀀爀漀瀀攀爀琀礀 氀椀渀欀      ∀樀愀挀攀欀搀挀䀀最洀愀椀氀⸀挀漀洀∀ 
#property version   "2.00"਀ 
input double Lot = 1;਀椀渀瀀甀琀 戀漀漀氀 䄀甀琀漀䰀漀琀猀 㴀 䘀愀氀猀攀㬀 
input int TakeProfit = 1000;਀椀渀瀀甀琀 椀渀琀 匀琀漀瀀䰀漀猀猀 㴀 㔀　　㬀 
input int TrailingStart = 200;਀椀渀瀀甀琀 椀渀琀 吀爀愀椀氀椀渀最匀琀漀瀀 㴀 ㄀㔀　㬀 
input int Ba = 100;਀椀渀瀀甀琀 椀渀琀 匀氀椀瀀瀀愀最攀 㴀 ㌀㬀 
input int MaxOrders = 1;਀椀渀瀀甀琀 椀渀琀 䴀愀最椀挀 㴀 㘀㘀㘀㬀 
input int Pips = 10;਀椀渀瀀甀琀 椀渀琀 䴀椀渀猀 㴀 ㌀　㬀 
input int PERIOD = 15;਀椀渀瀀甀琀 椀渀琀 䌀愀渀搀氀攀猀 㴀 㠀㬀 
input int shift = 1;਀椀渀瀀甀琀 椀渀琀 愀搀砀椀渀琀 㴀 ㄀㐀㬀 
input int adxsignal = 5;਀椀渀瀀甀琀 椀渀琀 䴀愀砀匀瀀爀攀愀搀 㴀 ㈀　㬀 
਀⼀⼀䄀䐀堀 椀渀搀椀挀愀琀漀爀 瘀愀氀甀攀猀 甀猀攀搀 椀渀 洀礀 猀挀爀椀瀀琀㬀 
਀⼀⼀ 䴀礀 攀愀 椀猀 樀甀猀琀 攀砀愀洀瀀氀攀 洀愀搀攀 漀渀氀礀 琀漀 栀攀氀瀀 礀漀甀 甀渀搀攀爀猀琀愀渀搀 洀礀 猀挀爀椀瀀琀Ⰰ 渀漀琀 琀漀 眀椀渀⸀ 刀䔀䴀䔀䴀䈀䔀刀 吀䠀䄀吀℀℀℀ 
// I dont mind using my template to code working scripts based on my work. Feel free to use it but do not sell it!਀ 
int Ticket, LastOrder = 2;਀搀漀甀戀氀攀 氀漀眀猀Ⰰ 栀椀最栀猀Ⰰ 氀漀眀Ⰰ 栀椀最栀Ⰰ 爀愀渀最攀㬀 
਀椀渀琀 猀琀愀爀琀⠀⤀ 笀 
   int m = 0;਀ 
   for ( int n = 0; n < OrdersTotal(); n++ ) {਀ 
      if ( OrderSelect ( n, SELECT_BY_POS ) ) {  ਀ 
         if ( OrderSymbol() == Symbol() ) {    ਀          
            if ( OrderMagicNumber() == Magic ) {਀ 
               Ticket = OrderTicket();  ਀               椀昀 ⠀ 伀爀搀攀爀匀攀氀攀挀琀 ⠀ 吀椀挀欀攀琀Ⰰ 匀䔀䰀䔀䌀吀开䈀夀开吀䤀䌀䬀䔀吀 ⤀ 㴀㴀 吀爀甀攀 ⤀ 笀 挀氀漀猀攀⠀⤀㬀 紀 
               m++;਀                
            }਀             
         }਀ 
      }਀ 
   }਀   
   if ( m == 0 ) { LastOrder = 2; }਀   椀昀 ⠀ 洀 㰀 䴀愀砀伀爀搀攀爀猀 ⤀ 笀 漀瀀攀渀⠀⤀㬀 紀 
  ਀爀攀琀甀爀渀 ⠀ 　 ⤀㬀 
}਀ 
int Scan ( int time, int period, int shifte ) {਀   昀漀爀 ⠀ 椀渀琀 渀 㴀 猀栀椀昀琀攀㬀 渀 㰀 琀椀洀攀㬀 渀⬀⬀ ⤀ 笀     
  ਀      氀漀眀猀 㴀 椀䰀漀眀⠀一唀䰀䰀Ⰰ 瀀攀爀椀漀搀Ⰰ 渀⤀㬀 
      highs = iHigh(NULL, period, n);਀   
      if ( n == shifte ) {਀       
         low = lows;਀         栀椀最栀 㴀 栀椀最栀猀㬀     
        ਀      紀 攀氀猀攀 笀 
      ਀         椀昀 ⠀ 氀漀眀 㸀㴀 氀漀眀猀 ⤀ 笀 氀漀眀 㴀 氀漀眀猀㬀 紀 
         if ( high <= highs ) { high = highs; }਀       
      }  ਀   紀 
  ਀   爀愀渀最攀 㴀 栀椀最栀 ⴀ 氀漀眀㬀 
  ਀爀攀琀甀爀渀 ⠀ 　 ⤀㬀 
}਀ 
int open() {  ਀   搀漀甀戀氀攀 䰀漀琀猀㬀 
਀   匀挀愀渀 ⠀ 䌀愀渀搀氀攀猀Ⰰ 倀䔀刀䤀伀䐀Ⰰ 猀栀椀昀琀 ⤀㬀 
   double BackHigh = high;਀   搀漀甀戀氀攀 䈀愀挀欀䰀漀眀 㴀 氀漀眀㬀 
   double BackRange = range;਀   
   if ( AutoLots == False ) { Lots = Lot; }਀   攀氀猀攀 笀 䰀漀琀猀 㴀 䴀愀琀栀刀漀甀渀搀 ⠀ 䄀挀挀漀甀渀琀䈀愀氀愀渀挀攀⠀⤀ ⼀ ㄀　　 ⤀ ⼀ ㄀　　㬀 紀 
  ਀   刀攀昀爀攀猀栀刀愀琀攀猀⠀⤀㬀 
   ਀   ⼀⼀ 䠀攀爀攀 愀爀攀 猀漀洀攀 椀渀搀椀挀愀琀漀爀猀 甀猀攀搀 愀猀 瘀愀氀甀攀猀 琀漀 漀瀀攀渀 琀爀愀搀攀猀 
   // Remember, that you can also use iCutom values to use custom indicators, but my template is not tutorial how to use that :)਀   ⼀⼀ 䤀 甀猀攀搀 愀搀砀 椀渀搀椀挀愀琀漀爀Ⰰ 氀愀猀琀 渀甀洀戀攀爀 爀攀瀀爀攀猀攀渀琀猀 猀栀椀昀琀 昀爀漀洀 愀挀琀甀愀氀 挀愀渀搀氀攀⸀ 䘀漀爀 攀砀愀洀瀀氀攀 　 洀攀愀渀猀 愀挀琀甀愀氀 挀愀渀搀氀攀 瘀愀氀甀攀⸀ ㄀ 洀攀愀渀猀 瘀愀氀甀攀 昀爀漀洀 氀愀猀琀 挀愀渀搀氀攀 攀琀挀⸀ 
   ਀   搀漀甀戀氀攀 愀搀砀 㴀 椀䄀䐀堀⠀一唀䰀䰀Ⰰ 倀䔀刀䤀伀䐀Ⰰ 愀搀砀椀渀琀Ⰰ 倀刀䤀䌀䔀开䌀䰀伀匀䔀Ⰰ 䴀伀䐀䔀开䴀䄀䤀一Ⰰ 　⤀㬀 
   double adxplus = iADX(NULL, PERIOD, adxint, PRICE_CLOSE, MODE_PLUSDI, 0);਀   搀漀甀戀氀攀 愀搀砀洀椀渀甀猀 㴀 椀䄀䐀堀⠀一唀䰀䰀Ⰰ 倀䔀刀䤀伀䐀Ⰰ 愀搀砀椀渀琀Ⰰ 倀刀䤀䌀䔀开䌀䰀伀匀䔀Ⰰ 䴀伀䐀䔀开䴀䤀一唀匀䐀䤀Ⰰ 　⤀㬀 
   double adxpluslast = iADX(NULL, PERIOD, adxint, PRICE_CLOSE, MODE_PLUSDI, 2);਀   搀漀甀戀氀攀 愀搀砀洀椀渀甀猀氀愀猀琀 㴀 椀䄀䐀堀⠀一唀䰀䰀Ⰰ 倀䔀刀䤀伀䐀Ⰰ 愀搀砀椀渀琀Ⰰ 倀刀䤀䌀䔀开䌀䰀伀匀䔀Ⰰ 䴀伀䐀䔀开䴀䤀一唀匀䐀䤀Ⰰ ㈀⤀㬀 
   ਀    
   // I have deleted buy and sell trader to show, how buystop/sellstop works. After that, buy and sell stops will be even easier that buystops / sellstops to understand.਀    
      if ( ( Ask - Bid ) / Point < MaxSpread ) {  ਀    
      if ( adx > adxsignal && adxplus > adxminus && adxpluslast < adxminuslast && LastOrder != 1 ) {਀         吀椀挀欀攀琀 㴀 伀爀搀攀爀匀攀渀搀 ⠀ 匀礀洀戀漀氀⠀⤀Ⰰ 伀倀开䈀唀夀匀吀伀倀Ⰰ 䰀漀琀猀Ⰰ 䄀猀欀 ⬀ ⠀ 倀椀瀀猀 ⨀ 倀漀椀渀琀 ⤀Ⰰ 匀氀椀瀀瀀愀最攀Ⰰ 䄀猀欀 ⬀ ⠀ 倀椀瀀猀 ⨀ 倀漀椀渀琀 ⤀ ⴀ ⠀ 匀琀漀瀀䰀漀猀猀 ⨀ 倀漀椀渀琀 ⤀Ⰰ 䄀猀欀 ⴀ ⠀ 倀椀瀀猀 ⨀ 倀漀椀渀琀 ⤀ ⬀ ⠀ 吀愀欀攀倀爀漀昀椀琀 ⨀ 倀漀椀渀琀 ⤀Ⰰ 一唀䰀䰀Ⰰ 䴀愀最椀挀Ⰰ 吀椀洀攀䌀甀爀爀攀渀琀⠀⤀ ⬀ ⠀ 㘀　 ⨀ 䴀椀渀猀 ⤀Ⰰ 䜀爀攀攀渀⤀㬀 
         LastOrder = 1;਀      紀 
   ਀      椀昀 ⠀ 愀搀砀 㸀 愀搀砀猀椀最渀愀氀 ☀☀ 愀搀砀瀀氀甀猀 㰀 愀搀砀洀椀渀甀猀 ☀☀ 愀搀砀瀀氀甀猀氀愀猀琀 㸀 愀搀砀洀椀渀甀猀氀愀猀琀 ☀☀ 䰀愀猀琀伀爀搀攀爀 ℀㴀 　 ⤀ 笀 
         Ticket = OrderSend ( Symbol(), OP_SELLSTOP, Lots, Bid - ( Pips * Point ) , Slippage, Bid - ( Pips * Point ) + ( StopLoss * Point ), Bid + ( Pips * Point ) - ( TakeProfit * Point ), NULL, Magic, TimeCurrent() + ( 60 * Mins ), Red);਀         䰀愀猀琀伀爀搀攀爀 㴀 　㬀 
      }਀ 
   }਀ 
return ( 0 );਀紀 
਀椀渀琀 挀氀漀猀攀⠀⤀ 笀 
   double adxplus = iADX(NULL, PERIOD, adxint, PRICE_CLOSE, MODE_PLUSDI, 0);਀   搀漀甀戀氀攀 愀搀砀洀椀渀甀猀 㴀 椀䄀䐀堀⠀一唀䰀䰀Ⰰ 倀䔀刀䤀伀䐀Ⰰ 愀搀砀椀渀琀Ⰰ 倀刀䤀䌀䔀开䌀䰀伀匀䔀Ⰰ 䴀伀䐀䔀开䴀䤀一唀匀䐀䤀Ⰰ 　⤀㬀 
਀   椀昀 ⠀ 伀爀搀攀爀吀礀瀀攀⠀⤀ 㴀㴀 伀倀开䈀唀夀 ⤀ 笀 
    ਀         刀攀昀爀攀猀栀刀愀琀攀猀⠀⤀㬀 
         if ( Bid >= OrderOpenPrice() + TrailingStart * Point && OrderStopLoss() < Bid - ( TrailingStop * Point ) ) {਀            吀椀挀欀攀琀 㴀 伀爀搀攀爀䴀漀搀椀昀礀 ⠀ 伀爀搀攀爀吀椀挀欀攀琀⠀⤀Ⰰ 伀爀搀攀爀伀瀀攀渀倀爀椀挀攀⠀⤀Ⰰ 䈀椀搀 ⴀ ⠀ 吀爀愀椀氀椀渀最匀琀漀瀀 ⨀ 倀漀椀渀琀 ⤀Ⰰ 伀爀搀攀爀吀愀欀攀倀爀漀昀椀琀⠀⤀ Ⰰ 　 ⤀㬀 
         }਀          
         if ( Bid >= OrderOpenPrice() + Ba * Point && Bid < OrderOpenPrice() + ( Ba + 5 ) * Point ) {਀            吀椀挀欀攀琀 㴀 伀爀搀攀爀䴀漀搀椀昀礀 ⠀ 伀爀搀攀爀吀椀挀欀攀琀⠀⤀Ⰰ 伀爀搀攀爀伀瀀攀渀倀爀椀挀攀⠀⤀Ⰰ 伀爀搀攀爀伀瀀攀渀倀爀椀挀攀⠀⤀ ⬀ ⠀ ㄀　 ⨀ 倀漀椀渀琀 ⤀Ⰰ 伀爀搀攀爀吀愀欀攀倀爀漀昀椀琀⠀⤀ Ⰰ 　 ⤀㬀                 
         } ਀         
         // I also use adx to close orders ( just to show you, that there is so much ways to close opened order ).਀         椀昀 ⠀ 愀搀砀瀀氀甀猀 㰀 愀搀砀洀椀渀甀猀 ⤀ 笀 
            Ticket = OrderClose ( Ticket, OrderLots(), OrderClosePrice(), Slippage, Green );਀         紀            
      }਀   
   if ( OrderType() == OP_SELL ) {਀     
         RefreshRates();਀         椀昀 ⠀ 䄀猀欀 㰀㴀 伀爀搀攀爀伀瀀攀渀倀爀椀挀攀⠀⤀ ⴀ 吀爀愀椀氀椀渀最匀琀愀爀琀 ⨀ 倀漀椀渀琀 ☀☀ 伀爀搀攀爀匀琀漀瀀䰀漀猀猀⠀⤀ 㸀 䄀猀欀 ⬀ ⠀ 吀爀愀椀氀椀渀最匀琀漀瀀 ⨀ 倀漀椀渀琀 ⤀ ⤀ 笀 
            Ticket = OrderModify ( OrderTicket(), OrderOpenPrice(), Ask + ( TrailingStop * Point ), OrderTakeProfit(), 0 );਀         紀   
          ਀         椀昀 ⠀ 䄀猀欀 㰀㴀 伀爀搀攀爀伀瀀攀渀倀爀椀挀攀⠀⤀ ⴀ 䈀愀 ⨀ 倀漀椀渀琀 ☀☀  䄀猀欀 㸀 伀爀搀攀爀伀瀀攀渀倀爀椀挀攀⠀⤀ ⴀ ⠀ 䈀愀 ⬀ 㔀 ⤀ ⨀ 倀漀椀渀琀  ⤀ 笀 
            Ticket = OrderModify ( OrderTicket(), OrderOpenPrice(), OrderOpenPrice() - ( 10 * Point ) , OrderTakeProfit(), 0 );਀         紀         
            ਀         ⼀⼀ 䤀 愀氀猀漀 甀猀攀 愀搀砀 琀漀 挀氀漀猀攀 漀爀搀攀爀猀 ⠀ 樀甀猀琀 琀漀 猀栀漀眀 礀漀甀Ⰰ 琀栀愀琀 琀栀攀爀攀 椀猀 猀漀 洀甀挀栀 眀愀礀猀 琀漀 挀氀漀猀攀 漀瀀攀渀攀搀 漀爀搀攀爀 ⤀⸀ 
         if ( adxplus > adxminus ) {਀            吀椀挀欀攀琀 㴀 伀爀搀攀爀䌀氀漀猀攀 ⠀ 吀椀挀欀攀琀Ⰰ 伀爀搀攀爀䰀漀琀猀⠀⤀Ⰰ 伀爀搀攀爀䌀氀漀猀攀倀爀椀挀攀⠀⤀Ⰰ 匀氀椀瀀瀀愀最攀Ⰰ 刀攀搀 ⤀㬀 
         }        ਀      紀     
਀爀攀琀甀爀渀 ⠀ 　 ⤀㬀 
}