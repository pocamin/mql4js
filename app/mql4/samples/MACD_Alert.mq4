//+------------------------------------------------------------------+
//|                                                   MACD_Alert.mq4 |
//|                                                     Ross McGuire |
//|                                             jmcguire90@gmail.com |
//+------------------------------------------------------------------+
#property copyright "Ross McGuire"
#property link      "jmcguire90@gmail.com"

//+------------------------------------------------------------------+
//| expert initialization function                                   |
//+------------------------------------------------------------------+
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
   double   
      macdizzle   =  iMACD(Symbol(),PERIOD_M5,12,26,9,PRICE_CLOSE,MODE_MAIN,0);
   if(macdizzle>0.00060) Alert("Macd above 0.00060!");
   if(macdizzle<-0.00060)   Alert("Macd below -0.00060!");
   return(0);
}
//+------------------------------------------------------------------+