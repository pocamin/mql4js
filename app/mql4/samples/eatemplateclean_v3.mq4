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
input int shift = 1;਀椀渀瀀甀琀 椀渀琀 䴀愀砀匀瀀爀攀愀搀 㴀 ㈀　㬀 
਀椀渀琀 吀椀挀欀攀琀Ⰰ 䰀愀猀琀伀爀搀攀爀 㴀 ㈀㬀 
double lows, highs, low, high, range;਀ 
int start() {਀   椀渀琀 洀 㴀 　㬀 
਀   昀漀爀 ⠀ 椀渀琀 渀 㴀 　㬀 渀 㰀 伀爀搀攀爀猀吀漀琀愀氀⠀⤀㬀 渀⬀⬀ ⤀ 笀 
਀      椀昀 ⠀ 伀爀搀攀爀匀攀氀攀挀琀 ⠀ 渀Ⰰ 匀䔀䰀䔀䌀吀开䈀夀开倀伀匀 ⤀ ⤀ 笀   
਀         椀昀 ⠀ 伀爀搀攀爀匀礀洀戀漀氀⠀⤀ 㴀㴀 匀礀洀戀漀氀⠀⤀ ⤀ 笀     
         ਀            椀昀 ⠀ 伀爀搀攀爀䴀愀最椀挀一甀洀戀攀爀⠀⤀ 㴀㴀 䴀愀最椀挀 ⤀ 笀 
਀               吀椀挀欀攀琀 㴀 伀爀搀攀爀吀椀挀欀攀琀⠀⤀㬀   
               if ( OrderSelect ( Ticket, SELECT_BY_TICKET ) == True ) { close(); }਀               洀⬀⬀㬀 
               ਀            紀 
            ਀         紀 
਀      紀 
਀   紀 
  ਀   椀昀 ⠀ 洀 㴀㴀 　 ⤀ 笀 䰀愀猀琀伀爀搀攀爀 㴀 ㈀㬀 紀 
   if ( m < MaxOrders ) { open(); }਀   
return ( 0 );਀紀 
਀椀渀琀 匀挀愀渀 ⠀ 椀渀琀 琀椀洀攀Ⰰ 椀渀琀 瀀攀爀椀漀搀Ⰰ 椀渀琀 猀栀椀昀琀攀 ⤀ 笀 
   for ( int n = shifte; n < time; n++ ) {    ਀   
      lows = iLow(NULL, period, n);਀      栀椀最栀猀 㴀 椀䠀椀最栀⠀一唀䰀䰀Ⰰ 瀀攀爀椀漀搀Ⰰ 渀⤀㬀 
  ਀      椀昀 ⠀ 渀 㴀㴀 猀栀椀昀琀攀 ⤀ 笀 
      ਀         氀漀眀 㴀 氀漀眀猀㬀 
         high = highs;    ਀         
      } else {਀       
         if ( low >= lows ) { low = lows; }਀         椀昀 ⠀ 栀椀最栀 㰀㴀 栀椀最栀猀 ⤀ 笀 栀椀最栀 㴀 栀椀最栀猀㬀 紀 
      ਀      紀   
   }਀   
   range = high - low;਀   
return ( 0 );਀紀 
਀椀渀琀 漀瀀攀渀⠀⤀ 笀   
਀   搀漀甀戀氀攀 䰀漀琀猀㬀 
਀   匀挀愀渀 ⠀ 䌀愀渀搀氀攀猀Ⰰ 倀䔀刀䤀伀䐀Ⰰ 猀栀椀昀琀 ⤀㬀 
   double BackHigh = high;਀   搀漀甀戀氀攀 䈀愀挀欀䰀漀眀 㴀 氀漀眀㬀 
   double BackRange = range;਀   
   if ( AutoLots == False ) { Lots = Lot; }਀   攀氀猀攀 笀 䰀漀琀猀 㴀 䴀愀琀栀刀漀甀渀搀 ⠀ 䄀挀挀漀甀渀琀䈀愀氀愀渀挀攀⠀⤀ ⼀ ㄀　　 ⤀ ⼀ ㄀　　㬀 紀 
  ਀   刀攀昀爀攀猀栀刀愀琀攀猀⠀⤀㬀 
   ਀   椀昀 ⠀ ⠀ 䄀猀欀 ⴀ 䈀椀搀 ⤀ ⼀ 倀漀椀渀琀 㰀 䴀愀砀匀瀀爀攀愀搀 ⤀ 笀  
   ਀      椀昀 ⠀ ㄀ 㴀㴀 　 ☀☀ 䰀愀猀琀伀爀搀攀爀 ℀㴀 ㄀ ⤀ 笀 
         Ticket = OrderSend ( Symbol(), OP_BUY, Lots, Ask, Slippage, Ask - ( StopLoss * Point ), Ask + ( TakeProfit * Point ), NULL, Magic, 0, Green);਀         䰀愀猀琀伀爀搀攀爀 㴀 ㄀㬀 
      }਀    
      if ( 1 == 0 && LastOrder != 1 ) {਀         吀椀挀欀攀琀 㴀 伀爀搀攀爀匀攀渀搀 ⠀ 匀礀洀戀漀氀⠀⤀Ⰰ 伀倀开䈀唀夀匀吀伀倀Ⰰ 䰀漀琀猀Ⰰ 䄀猀欀 ⬀ ⠀ 倀椀瀀猀 ⨀ 倀漀椀渀琀 ⤀Ⰰ 匀氀椀瀀瀀愀最攀Ⰰ 䄀猀欀 ⬀ ⠀ 倀椀瀀猀 ⨀ 倀漀椀渀琀 ⤀ ⴀ ⠀ 匀琀漀瀀䰀漀猀猀 ⨀ 倀漀椀渀琀 ⤀Ⰰ 䄀猀欀 ⴀ ⠀ 倀椀瀀猀 ⨀ 倀漀椀渀琀 ⤀ ⬀ ⠀ 吀愀欀攀倀爀漀昀椀琀 ⨀ 倀漀椀渀琀 ⤀Ⰰ 一唀䰀䰀Ⰰ 䴀愀最椀挀Ⰰ 吀椀洀攀䌀甀爀爀攀渀琀⠀⤀ ⬀ ⠀ 㘀　 ⨀ 䴀椀渀猀 ⤀Ⰰ 䜀爀攀攀渀⤀㬀 
         LastOrder = 1;਀      紀 
   ਀      椀昀 ⠀ ㄀ 㴀㴀 　 ☀☀ 䰀愀猀琀伀爀搀攀爀 ℀㴀 　 ⤀ 笀 
         Ticket = OrderSend ( Symbol(), OP_SELL, Lots, Bid, Slippage, Bid + ( StopLoss * Point ), Bid - ( TakeProfit * Point ), NULL, Magic, 0, Red);਀         䰀愀猀琀伀爀搀攀爀 㴀 　㬀 
      }਀    
      if ( 1 == 0 && LastOrder != 0 ) {਀         吀椀挀欀攀琀 㴀 伀爀搀攀爀匀攀渀搀 ⠀ 匀礀洀戀漀氀⠀⤀Ⰰ 伀倀开匀䔀䰀䰀匀吀伀倀Ⰰ 䰀漀琀猀Ⰰ 䈀椀搀 ⴀ ⠀ 倀椀瀀猀 ⨀ 倀漀椀渀琀 ⤀ Ⰰ 匀氀椀瀀瀀愀最攀Ⰰ 䈀椀搀 ⴀ ⠀ 倀椀瀀猀 ⨀ 倀漀椀渀琀 ⤀ ⬀ ⠀ 匀琀漀瀀䰀漀猀猀 ⨀ 倀漀椀渀琀 ⤀Ⰰ 䈀椀搀 ⬀ ⠀ 倀椀瀀猀 ⨀ 倀漀椀渀琀 ⤀ ⴀ ⠀ 吀愀欀攀倀爀漀昀椀琀 ⨀ 倀漀椀渀琀 ⤀Ⰰ 一唀䰀䰀Ⰰ 䴀愀最椀挀Ⰰ 吀椀洀攀䌀甀爀爀攀渀琀⠀⤀ ⬀ ⠀ 㘀　 ⨀ 䴀椀渀猀 ⤀Ⰰ 刀攀搀⤀㬀 
         LastOrder = 0;਀      紀 
   ਀   紀 
਀爀攀琀甀爀渀 ⠀ 　 ⤀㬀 
}਀ 
int close() {਀ 
   if ( OrderType() == OP_BUY ) {਀     
         RefreshRates();਀         椀昀 ⠀ 䈀椀搀 㸀㴀 伀爀搀攀爀伀瀀攀渀倀爀椀挀攀⠀⤀ ⬀ 吀爀愀椀氀椀渀最匀琀愀爀琀 ⨀ 倀漀椀渀琀 ☀☀ 伀爀搀攀爀匀琀漀瀀䰀漀猀猀⠀⤀ 㰀 䈀椀搀 ⴀ ⠀ 吀爀愀椀氀椀渀最匀琀漀瀀 ⨀ 倀漀椀渀琀 ⤀ ⤀ 笀 
            Ticket = OrderModify ( OrderTicket(), OrderOpenPrice(), Bid - ( TrailingStop * Point ), OrderTakeProfit() , 0 );਀         紀 
         ਀         椀昀 ⠀ 䈀椀搀 㸀㴀 伀爀搀攀爀伀瀀攀渀倀爀椀挀攀⠀⤀ ⬀ 䈀愀 ⨀ 倀漀椀渀琀 ☀☀ 䈀椀搀 㰀 伀爀搀攀爀伀瀀攀渀倀爀椀挀攀⠀⤀ ⬀ ⠀ 䈀愀 ⬀ 㔀 ⤀ ⨀ 倀漀椀渀琀 ⤀ 笀 
            Ticket = OrderModify ( OrderTicket(), OrderOpenPrice(), OrderOpenPrice() + ( 10 * Point ), OrderTakeProfit() , 0 );                ਀         紀  
        ਀         椀昀 ⠀ ㄀ 㴀㴀 　 ⤀ 笀 
            Ticket = OrderClose ( Ticket, OrderLots(), OrderClosePrice(), Slippage, Green );਀         紀            
      }਀   
   if ( OrderType() == OP_SELL ) {਀     
         RefreshRates();਀         椀昀 ⠀ 䄀猀欀 㰀㴀 伀爀搀攀爀伀瀀攀渀倀爀椀挀攀⠀⤀ ⴀ 吀爀愀椀氀椀渀最匀琀愀爀琀 ⨀ 倀漀椀渀琀 ☀☀ 伀爀搀攀爀匀琀漀瀀䰀漀猀猀⠀⤀ 㸀 䄀猀欀 ⬀ ⠀ 吀爀愀椀氀椀渀最匀琀漀瀀 ⨀ 倀漀椀渀琀 ⤀ ⤀ 笀 
            Ticket = OrderModify ( OrderTicket(), OrderOpenPrice(), Ask + ( TrailingStop * Point ), OrderTakeProfit(), 0 );਀         紀   
          ਀         椀昀 ⠀ 䄀猀欀 㰀㴀 伀爀搀攀爀伀瀀攀渀倀爀椀挀攀⠀⤀ ⴀ 䈀愀 ⨀ 倀漀椀渀琀 ☀☀  䄀猀欀 㸀 伀爀搀攀爀伀瀀攀渀倀爀椀挀攀⠀⤀ ⴀ ⠀ 䈀愀 ⬀ 㔀 ⤀ ⨀ 倀漀椀渀琀  ⤀ 笀 
            Ticket = OrderModify ( OrderTicket(), OrderOpenPrice(), OrderOpenPrice() - ( 10 * Point ) , OrderTakeProfit(), 0 );਀         紀            
਀         椀昀 ⠀ ㄀ 㴀㴀 　 ⤀ 笀 
            Ticket = OrderClose ( Ticket, OrderLots(), OrderClosePrice(), Slippage, Red );਀         紀         
      }    ਀ 
return ( 0 );਀紀�