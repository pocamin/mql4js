//+------------------------------------------------------------------+
//|                                               "Neuro + MACD.mq4" |
//|                             Copyright © 2008, Henadiy E. Batohov |
//+------------------------------------------------------------------+
#property copyright "Copyright © 2008, Henadiy E. Batohov"

//---- input parameters for Neuro part
extern int          x11 = 100;
extern int          x12 = 100;
extern int          x13 = 100;
extern int          x14 = 100;
extern double       tp1 = 100;
extern double       sl1 = 50;
extern int          p1 = 10;
extern int          x21 = 100;
extern int          x22 = 100;
extern int          x23 = 100;
extern int          x24 = 100;
extern double       tp2 = 100;
extern double       sl2 = 50;
extern int          p2 = 10;
extern int          x31 = 100;
extern int          x32 = 100;
extern int          x33 = 100;
extern int          x34 = 100;
extern int          p3 = 10;
//---- input parameters
extern int          pass = 4;
extern double       lots = 0.1;
extern int          mn = 555;

static int          prevtime = 0;
static double       tp = 100;
static double       sl = 50;


//+------------------------------------------------------------------+
//| expert start function                                            |
//+------------------------------------------------------------------+
int start()
  {
   if (Time[0] == prevtime) return(0);
   prevtime = Time[0];
   
   if (! IsTradeAllowed()) {
      again();
      return(0);
   }

   int total = OrdersTotal();
   for (int i = 0; i < total; i++) {
      OrderSelect(i, SELECT_BY_POS, MODE_TRADES);
      if (OrderSymbol() == Symbol() && OrderMagicNumber() == mn) return(0);
   }
   
   int MACD       = getMACD();
   int perceptron = Supervisor();
   int ticket = -1;
   
   if (MACD > 0 && perceptron > 0) {
      ticket = OrderSend(Symbol(), OP_BUY, lots, Ask, 1, Bid - sl * Point, Bid + tp * Point, WindowExpertName(), mn, 0, Blue); 
      if (ticket < 0) {
         again();      
      }
   } 
   
   if (MACD < 0 && perceptron < 0) {
      ticket = OrderSend(Symbol(), OP_SELL, lots, Bid, 1, Ask + sl * Point, Ask - tp * Point, WindowExpertName(), mn, 0, Red); 
      if (ticket < 0) {
         again();
      }
   }
   
   return(0);
}


//+------------------------------------------------------------------+
//| calculate perciptrons value                                      |
//+------------------------------------------------------------------+
double Supervisor() {

   if (pass == 3) {
      if (perceptron3() > 0) {
         if (perceptron2() > 0) {
            sl = sl2;
            tp = tp2;
            return(1);
         }
       } else {
         if (perceptron1() < 0) {
            sl = sl1;
            tp = tp1;
            return(-1);
         }
      }
      return(0);
   }

   if (pass == 2) {
      if (perceptron2() > 0) {
         sl = sl2;
         tp = tp2;
         return(1);
       } else {
         return(0);
       }
   }

   if (pass == 1) {
      if (perceptron1() < 0) {
         sl = sl1;
         tp = tp1;
         return(-1);
       } else {
         return(0);
       }

   }

   return(0);
}

double perceptron1()   {
   double       w1 = x11 - 100;
   double       w2 = x12 - 100;
   double       w3 = x12 - 100;
   double       w4 = x12 - 100;
   double a1 = Close[0] - Open[p1];
   double a2 = Open[p1] - Open[p1 * 2];
   double a3 = Open[p1 * 2] - Open[p1 * 3];
   double a4 = Open[p1 * 3] - Open[p1 * 4];
   return(w1 * a1 + w2 * a2 + w3 * a3 + w4 * a4);
}

double perceptron2()   {
   double       w1 = x21 - 100;
   double       w2 = x22 - 100;
   double       w3 = x23 - 100;
   double       w4 = x24 - 100;
   double a1 = Close[0] - Open[p2];
   double a2 = Open[p2] - Open[p2 * 2];
   double a3 = Open[p2 * 2] - Open[p2 * 3];
   double a4 = Open[p2 * 3] - Open[p2 * 4];
   return(w1 * a1 + w2 * a2 + w3 * a3 + w4 * a4);
}

double perceptron3()   {
   double       w1 = x31 - 100;
   double       w2 = x32 - 100;
   double       w3 = x33 - 100;
   double       w4 = x34 - 100;
   double a1 = Close[0] - Open[p3];
   double a2 = Open[p3] - Open[p3 * 2];
   double a3 = Open[p3 * 2] - Open[p3 * 3];
   double a4 = Open[p3 * 3] - Open[p3 * 4];
   return(w1 * a1 + w2 * a2 + w3 * a3 + w4 * a4);
}


//+------------------------------------------------------------------+
//| Calculate MACD value                                             |
//+------------------------------------------------------------------+
int getMACD() {
   double MacdCurrent, MacdPrevious, SignalCurrent, SignalPrevious;

   MacdCurrent=iMACD(NULL,0,12,26,9,PRICE_CLOSE,MODE_MAIN,0);
   MacdPrevious=iMACD(NULL,0,12,26,9,PRICE_CLOSE,MODE_MAIN,2);
   SignalCurrent=iMACD(NULL,0,12,26,9,PRICE_CLOSE,MODE_SIGNAL,0);
   SignalPrevious=iMACD(NULL,0,12,26,9,PRICE_CLOSE,MODE_SIGNAL,2);
   
   if(MacdCurrent<0 && MacdCurrent>=SignalCurrent && MacdPrevious<=SignalPrevious) {
      return(1);
   }
   if(MacdCurrent>0 && MacdCurrent<=SignalCurrent && MacdPrevious>=SignalPrevious) {
      return(-1);
   }
   return(0);
}


//+------------------------------------------------------------------+
//| pause and try to do expert again                                 |
//+------------------------------------------------------------------+
void again() {
   prevtime = Time[1];
   Sleep(30000);
}

