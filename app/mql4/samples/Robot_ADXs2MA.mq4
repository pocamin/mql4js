//+------------------------------------------------------------------+
//|                                               Robot_ADX+2MA      |
//|                                                     Tokman Yuriy |
//|                                            yuriytokman@gmail.com |
//+------------------------------------------------------------------+

extern double TakeProfit = 70;
extern double Sl = 20;
extern double Lots = 0.1;
extern int n = 9;             
//+------------------------------------------------------------------+
int start()
 {
  int cnt, ticket, total;
  double x1=iMA(NULL,0,5,0,MODE_EMA,PRICE_CLOSE,1);
  double x2=iMA(NULL,0,12,0,MODE_EMA,PRICE_CLOSE,1);
  double x3=MathAbs((x1-x2)/Point);
  double x4=iADX(NULL,1,6,0,MODE_PLUSDI,0);
  double x5=iADX(NULL,1,6,0,MODE_MINUSDI,0);
  double x6=iADX(NULL,1,6,0,MODE_PLUSDI,1);
  double x7=iADX(NULL,1,6,0,MODE_MINUSDI,1);
  double x8=iADX(NULL,60,6,0,MODE_PLUSDI,0);
  double x9=iADX(NULL,60,6,0,MODE_MINUSDI,0);
     
  total=OrdersTotal();
  if(total<1)//проверка количества ордеров 
   {
   if(AccountFreeMargin()<(1000*Lots))
    {
     Print("Недостаточно средств = ", AccountFreeMargin());
     return(0);  
    }
  if (x1<x2 && x3>n && x6<5 && x4>10 && x8>x9 )
   {
    ticket=OrderSend(Symbol(),OP_BUY,Lots,Ask,3,Bid-Sl*Point,Ask+TakeProfit*Point,"-",0,0,Green);
    if(ticket>0)
     {
      if(OrderSelect(ticket,SELECT_BY_TICKET,MODE_TRADES)) Print("открыта позиция BUY : ",OrderOpenPrice());
     }
    else Print("Ошибка при открытии BUY позиции : ",GetLastError());          
    return(0);
   }
  if (x1>x2 && x3>n && x7<5 && x5>10 && x8<x9 ) 
   {
    ticket=OrderSend(Symbol(),OP_SELL,Lots,Bid,3,Ask+Sl*Point,Bid-TakeProfit*Point,"-",0,0,Red);
    if(ticket>0)
     {
      if(OrderSelect(ticket,SELECT_BY_TICKET,MODE_TRADES)) Print("открыта позиция SELL : ",OrderOpenPrice());
     }
    else Print("Ошибка при открытии SELL позиции : ",GetLastError());
    return(0); 
   }
   return(0);
  }
  return(0);
 }