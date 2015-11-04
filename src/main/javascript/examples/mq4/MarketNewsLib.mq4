//+------------------------------------------------------------------+
//|                                                MarketNewsLib.mq4 |
//|                       Copyright © 2010, Tamter Trading Programs. |
//|                                            http://www.tamter.com |
//+------------------------------------------------------------------+
#property copyright "Copyright © 2010, Tamter Trading Programs."
#property link      "http://www.tamter.com"
#property library

#import "wininet.dll"
int InternetAttemptConnect (int x);
  int InternetOpenA(string sAgent, int lAccessType, 
                    string sProxyName = "", string sProxyBypass = "", 
                    int lFlags = 0);
  int InternetOpenUrlA(int hInternetSession, string sUrl, 
                       string sHeaders = "", int lHeadersLength = 0,
                       int lFlags = 0, int lContext = 0);
  int InternetReadFile(int hFile, int& sBuffer[], int lNumBytesToRead, 
                       int& lNumberOfBytesRead[]);
  int InternetCloseHandle(int hInet);
#import

#define COLUMN_DATE        0
#define COLUMN_TIME        1
#define COLUMN_TIMEZONE    2
#define COLUMN_CURRENCY    3
#define COLUMN_DESCRIPTION 4
#define COLUMN_IMPORTANCE  5
#define COLUMN_ACTUAL      6
#define COLUMN_FORECAST    7
#define COLUMN_PREVIOUS    8

#define COLUMN_DATE_DAY_STR    0
#define COLUMN_DATE_MONTH_STR  1
#define COLUMN_DATE_DAY_INT    2


void InitNews(string& news[][],int timeZone, string newsUrl)
{
   if(DoFileDownLoad()) 
         DownLoadWebPageToFile(newsUrl); 
    
     if(CsvNewsFileToArray(news) == 0) 
         return(0);
     
     NormalizeNewsData(news,timeZone);
}
// -----------------------------------------------------------------------------------------------------------------------------

// Used to find out if news curreny is of interest to current symbol. 
// Will have to be changed if symbol format does not look like for example eurusd or usdjpy

bool IsNewsCurrency(string cSymbol, string fSymbol)
{
   if(fSymbol == "usd")fSymbol = "USD"; else
   if(fSymbol == "gbp") fSymbol = "GBP";else
   if(fSymbol == "eur") fSymbol = "EUR";else 
   if(fSymbol == "cad") fSymbol = "CAD";else
   if(fSymbol == "aud") fSymbol = "AUD";else
   if(fSymbol == "chf") fSymbol = "CHF";else
   if(fSymbol == "jpy") fSymbol = "JPY";else
   if(fSymbol == "nzd") fSymbol = "NZD";
     
   for(int count = 3; count < StringLen(cSymbol); count = count+3)
   {
       int pos =   StringFind(fSymbol,StringSubstr(cSymbol, count-3, 3) ); 
       if (pos != -1) return(true);
   }  
   return(false);
}

bool GetNewsToTrade(string& news[][],string& newsToTrade[], bool newsHigh, bool newsMedium, bool newsLow, string currency, int alertSecs, int startRow=1)
{
   int totalNewsItems = ArrayRange( news, 0) - startRow;  
   int noOfAlerts = 0; 
   string strNewsHigh = "High";
   string strNewsMedium = "Medium";
   string strNewsLow = "Low";

   if(!newsHigh)
   strNewsHigh = "False";
   
   if(!newsMedium)
   strNewsMedium = "False";
   
   if(!newsLow)
   strNewsLow = "False";
   
    for(int i=0; i<totalNewsItems; i++)
    {
       datetime newsDate = StrToTime(TimeToStr(StrToTime(news[i][COLUMN_DATE]), TIME_DATE) + " " + news[i][COLUMN_TIME]);
       if(TimeDay(newsDate) == TimeDay(TimeLocal()))
       {
         int timediff = (newsDate - TimeLocal());
         if(timediff <= alertSecs && timediff > 0) 
         {
            string importance = news[i][COLUMN_IMPORTANCE];
            if (importance == strNewsHigh || importance == strNewsMedium || importance == strNewsLow )
            {
               string newsCurrency = news[i][COLUMN_CURRENCY];
               if(IsNewsCurrency(currency,  newsCurrency)) // lets see if currency col string in symbol string
               {
                 
                  newsToTrade[0] = news[i][COLUMN_DESCRIPTION];
                  newsToTrade[1] = TimeToStr(newsDate);
                 return( true);
              }
            }
         }
       }
   }
   return(false);
}


// -----------------------------------------------------------------------------------------------------------------------------
void ShowNewsCountDown(string& news[][], int alertMinsBeforeNews=3600,int startRow=1, color high_color=Red,color medium_color=Yellow,color low_color=Orange, color past_color=Gray, color title_color= White)
{
    int totalNewsItems = ArrayRange( news, 0) - startRow; 
     for(int iCount=1; iCount<20; iCount++)
   { 
      ObjectDelete("NewsCountDown"+iCount);
      ObjectDelete("NewsCountDown"+iCount);
   } 
    int noOfAlerts = 0;  
    for(int i=0; i<totalNewsItems; i++)
    {
       
       datetime newsDate = StrToTime(TimeToStr(StrToTime(news[i][COLUMN_DATE]), TIME_DATE) + " " + news[i][COLUMN_TIME]);
       if(TimeDay(newsDate) == TimeDay(TimeLocal()))
       {
         int timediff = (newsDate - TimeLocal());
         if(alertMinsBeforeNews >= timediff && timediff >-1800) // display until 30 mins after news event
         {
            noOfAlerts++;
            string importance = news[i][COLUMN_IMPORTANCE];
            color textColor = low_color;
            if (importance =="High")
            {
                  textColor = high_color;
            }
            else if (importance =="Medium")
            {
                  textColor = medium_color;        
            }
            
            if(timediff < 0)
               textColor = past_color;
            int yDistance = 45 + (noOfAlerts*15);
         
            string timeDiffString = TimeToStr(MathAbs(timediff), TIME_MINUTES|TIME_SECONDS);
            string description = StringSubstr( news[i][COLUMN_DESCRIPTION],0,40) + " " + timeDiffString;
            ObjectCreate("NewsCountDown" + noOfAlerts, OBJ_LABEL, 0, 0, 0, 0, 0);
            ObjectSet("NewsCountDown" + noOfAlerts, OBJPROP_CORNER, 1);
            ObjectSet("NewsCountDown" + noOfAlerts, OBJPROP_XDISTANCE, 4);
            ObjectSet("NewsCountDown" + noOfAlerts, OBJPROP_YDISTANCE,yDistance); 
            ObjectSet("NewsCountDown" + noOfAlerts, OBJPROP_BACK,true);
            ObjectSetText("NewsCountDown" + noOfAlerts,description ,10, "Arial Black", textColor);
         }
       }
    }
    if(noOfAlerts > 0)
    {
      ObjectCreate("NewsCountDown0", OBJ_LABEL, 0, 0, 0, 0, 0);
      ObjectSet("NewsCountDown0", OBJPROP_CORNER, 1);
      ObjectSet("NewsCountDown0", OBJPROP_XDISTANCE, 4);
      ObjectSet("NewsCountDown0", OBJPROP_YDISTANCE,45); 
      ObjectSetText("NewsCountDown0","Days Upcoming/Recent News Events",10, "Arial Black", title_color);
    }
}
// -----------------------------------------------------------------------------------------------------------------------------
void ShowNewsText(string& news[][],int startRow=1)
{
    string text = "";
    int totalNewsItems = ArrayRange( news, 0) - startRow; 
 
         string com = "";
         for(int i=0; i<totalNewsItems; i++)
         {
            datetime newsDate = StrToTime(TimeToStr(StrToTime(news[i][COLUMN_DATE]), TIME_DATE) + " " + news[i][COLUMN_TIME]);
            if(TimeDay(newsDate) == TimeDay(TimeLocal()))
            {
               text = "";
               if(news[i][COLUMN_DESCRIPTION] != "") text = "[" + news[i][COLUMN_PREVIOUS] + ", " + news[i][COLUMN_FORECAST] + "]";    
               com =  com + news[i][COLUMN_TIME] +  " " + news[i][COLUMN_DESCRIPTION] + " " + text + "\n";
            }
         }
         Comment(com);           
}
// -----------------------------------------------------------------------------------------------------------------------------
void NormalizeNewsData(string& news[][], int timeDiffGmt, int startRow=1)
{
int totalNewsItems = ArrayRange( news, 0) - startRow ; 
   for( int i=0; i<totalNewsItems; i++)
      {      
         string tmp[3], tmp1[2];    
         Explode(news[i][COLUMN_DATE], " ", tmp);
         int mon = 0;
         if(tmp[COLUMN_DATE_MONTH_STR]=="Jan") mon=1; else 
         if(tmp[COLUMN_DATE_MONTH_STR]=="Feb") mon=2; else 
         if(tmp[COLUMN_DATE_MONTH_STR]=="Mar") mon=3; else 
         if(tmp[COLUMN_DATE_MONTH_STR]=="Apr") mon=4; else 
         if(tmp[COLUMN_DATE_MONTH_STR]=="May") mon=5; else 
         if(tmp[COLUMN_DATE_MONTH_STR]=="Jun") mon=6; else 
         if(tmp[COLUMN_DATE_MONTH_STR]=="Jul") mon=7; else
         if(tmp[COLUMN_DATE_MONTH_STR]=="Aug") mon=8; else
         if(tmp[COLUMN_DATE_MONTH_STR]=="Sep") mon=9; else
         if(tmp[COLUMN_DATE_MONTH_STR]=="Oct") mon=10; else
         if(tmp[COLUMN_DATE_MONTH_STR]=="Nov") mon=11; else
         if(tmp[COLUMN_DATE_MONTH_STR]=="Dec") mon=12;
         news[i][COLUMN_DATE] = Year()+"."+mon+"."+tmp[COLUMN_DATE_DAY_INT];
         
         if(news[i][COLUMN_TIME] == "")
         {
            news[i][COLUMN_TIME] = "00:00";
            news[i][COLUMN_TIMEZONE] = "ALL";
         }      
         datetime dt = StrToTime(news[i][COLUMN_DATE]+" "+news[i][COLUMN_TIME]);
         
         // Adjust for time zone
         
         dt   = dt + ((timeDiffGmt) * 3600);
         
         news[i][COLUMN_DATE] = TimeToStr(dt , TIME_DATE);
         news[i][COLUMN_TIME] = TimeToStr(dt , TIME_MINUTES);        
      }
} 
// -----------------------------------------------------------------------------------------------------------------------------
string NewsImportanceFilter(bool high, bool medium, bool low)
{
   string Filter = "";
   if(!high)   Filter = Filter + "High|";
   if(!medium) Filter = Filter + "Medium|";
   if(!low)    Filter = Filter + "Low|";
   
   return (Filter);
}
// -----------------------------------------------------------------------------------------------------------------------------
void DrawNewsLines(string news[][], bool showLineText, color high_color=Red,color medium_color=Yellow,color low_color=Orange,int startRow=1)
{
   datetime current = 0;
   int totalNewsItems = ArrayRange( news, 0)- startRow;   
   if(Period() > PERIOD_H1)
              Print("Line text will only be shown for chart periods less than 4 hours");
      for( int i=0; i<totalNewsItems; i++) 
      {      
         if(StrToTime(news[i][COLUMN_DATE]+" "+news[i][COLUMN_TIME]) == current) continue;
         current = StrToTime(news[i][COLUMN_DATE]+" "+news[i][COLUMN_TIME]);
         color clr;
         if(news[i][COLUMN_IMPORTANCE] == "Low")    clr = low_color;     else
         if(news[i][COLUMN_IMPORTANCE] == "Medium") clr = medium_color;  else
         if(news[i][COLUMN_IMPORTANCE] == "High")   clr = high_color;
         
         string text = "";
         if(news[i][COLUMN_PREVIOUS] != "" || news[i][COLUMN_FORECAST] != "") text = "[" + news[i][COLUMN_PREVIOUS] + ", " + news[i][COLUMN_FORECAST] + "]";
         if(news[i][COLUMN_IMPORTANCE] != "") text = text + " " + news[i][COLUMN_IMPORTANCE];
         
         
         ObjectCreate("NewsLine"+i, OBJ_VLINE, 0, current, 0);
         ObjectSet("NewsLine"+i, OBJPROP_COLOR, clr);
         ObjectSet("NewsLine"+i, OBJPROP_STYLE, STYLE_DASHDOTDOT);
         ObjectSet("NewsLine"+i, OBJPROP_BACK, true);          
         ObjectSetText("NewsLine"+i, news[i][COLUMN_DATE] + " " + news[i][COLUMN_DESCRIPTION] + " " + text, 8);         
         
         if (showLineText)
         {
            if(Period() < PERIOD_H4)
            {
               ObjectCreate("NewsText"+i, OBJ_TEXT, 0, current, WindowPriceMin()+(WindowPriceMax()-WindowPriceMin())*0.8 );
               ObjectSet("NewsText"+i, OBJPROP_COLOR, clr);
               ObjectSet("NewsText"+i, OBJPROP_ANGLE, 90);
               ObjectSetText("NewsText"+i, news[i][COLUMN_DATE] + " " + news[i][COLUMN_DESCRIPTION] + " " + text, 8);
            }
            else
            {
              for(int x=0; x<totalNewsItems; x++)
              {
                  ObjectDelete("NewsText"+x);
               }   
            }
         }
         
         
      }              
}
// -----------------------------------------------------------------------------------------------------------------------------
int Explode(string str, string delimiter, string& arr[])
{
   int i = 0;
   int pos = StringFind(str, delimiter);
   while(pos != -1)
   {
      if(pos == 0) arr[i] = ""; else arr[i] = StringSubstr(str, 0, pos);
      i++;
      str = StringSubstr(str, pos+StringLen(delimiter));
      pos = StringFind(str, delimiter);
      if(pos == -1 || str == "") break;
   }
   arr[i] = str;
 
   return(i+1);
}

// -----------------------------------------------------------------------------------------------------------------------------
bool DoFileDownLoad() // If we have recent file don't download again
{
 int handle;
 handle=FileOpen(NewsFileName(), FILE_READ);
 if(handle>0)
 {
   FileClose(handle);
   return(false);
 }
 
 return(true);
}
 
// -----------------------------------------------------------------------------------------------------------------------------
void DownLoadWebPageToFile(string url = "http://www.dailyfx.com/files/") // andre9@ya.ru
{
   if (url == "http://www.dailyfx.com/files/")
      url = StringConcatenate(url,NewsFileName(true));
      
   if(!IsDllsAllowed())
   {
      Alert("Please allow DLL imports");
      return("");
   }
   int result = InternetAttemptConnect(0);
   if(result != 0)
   {
      Alert("Cannot connect to internet - InternetAttemptConnect()");
      return("");
   }
   int hInternetSession = InternetOpenA("Microsoft Internet Explorer", 0, "", "", 0);
   if(hInternetSession <= 0)
   {
       Alert("Cannot open internet session - InternetOpenA()");
       return("");         
   }
   int hURL = InternetOpenUrlA(hInternetSession, 
              url, "", 0, 0, 0);
   if(hURL <= 0)
     {
       Alert("Cannot open URL ", url, " - InternetOpenUrlA()");
       InternetCloseHandle(hInternetSession);
       return(0);         
     }      
   int cBuffer[256];
   int dwBytesRead[1]; 
   string fileContents = "";
   while(!IsStopped())
   {
      for(int i = 0; i<256; i++) cBuffer[i] = 0;
      bool bResult = InternetReadFile(hURL, cBuffer, 1024, dwBytesRead);
      if(dwBytesRead[0] == 0) break;
      string text = "";   
      for(i = 0; i < 256; i++)
      {
         text = text + CharToStr(cBuffer[i] & 0x000000FF);
         if(StringLen(text) == dwBytesRead[0]) break;
         text = text + CharToStr(cBuffer[i] >> 8 & 0x000000FF);
         if(StringLen(text) == dwBytesRead[0]) break;
         text = text + CharToStr(cBuffer[i] >> 16 & 0x000000FF);
         if(StringLen(text) == dwBytesRead[0]) break;
         text = text + CharToStr(cBuffer[i] >> 24 & 0x000000FF);   
      }
      fileContents = fileContents + text;
      Sleep(1);
   }
   InternetCloseHandle(hInternetSession);
 // Save to text file  
 int handle;
 handle=FileOpen(NewsFileName(), FILE_CSV|FILE_WRITE, ';');
 if(handle>0)
 {
   FileWrite(handle, fileContents);
   FileClose(handle);
 }
}
// -----------------------------------------------------------------------------------------------------------------------------
// We will get news every sunday, so name file with sundays date
string NewsFileName(bool forDailyFXUrl =false)
{
   int adjustDays = 0;
   switch(TimeDayOfWeek(TimeLocal()))
   {
     case 0:
     adjustDays = 0;
     break;
     case 1:
     adjustDays = 1;
     break;
     case 2:
     adjustDays = 2;
     break;
     case 3:
     adjustDays = 3;
     break;
     case 4:
     adjustDays = 4;
     break;
     case 5:
     adjustDays = 5;
     break;
     case 6:
     adjustDays = 6;
     break;
   } 
   datetime date =  TimeLocal() - (adjustDays  * 86400);
   string fileName = "";
   if(TimeDayOfWeek(date) == 0)// sunday
   {
   if(forDailyFXUrl) // if we are buildng URL to get file from daily fx site.
   {
      fileName =  (StringConcatenate("Calendar-", PadString(DoubleToStr(TimeMonth(date),0),"0",2),"-",PadString(DoubleToStr(TimeDay(date),0),"0",2),"-",TimeYear(date),".csv"));
   }
   else
   {
      fileName =  (StringConcatenate(TimeYear(date),"-",PadString(DoubleToStr(TimeMonth(date),0),"0",2),"-",PadString(DoubleToStr(TimeDay(date),0),"0",2),"-News",".csv"));
   } 
   }
 return (fileName);  
}

// -----------------------------------------------------------------------------------------------------------------------------
string PadString(string toBePadded, string paddingChar, int paddingLength)
{
   while(StringLen(toBePadded) <  paddingLength)
   {
      toBePadded = StringConcatenate(paddingChar,toBePadded);
   }
   return (toBePadded);
}

// -----------------------------------------------------------------------------------------------------------------------------

int CsvNewsFileToArray(string& lines[][], int numDelimItems = 8, bool ignoreFirstLine = true, int freeTextCol = 4)
{
  int handle;
  handle=FileOpen(NewsFileName(),FILE_READ,",");
  if(handle>0)
  {
    int lineCount = 0;
    int lineNumber = 0;
    bool processedFirstLine = false;
    while(!FileIsEnding(handle))
    {
    string lineData = "";
         if(ArrayRange(lines, 0) > lineCount)
         {
            for(int itemCount = 0 ;itemCount <= numDelimItems; itemCount++)
            { 
               
               lineData = FileReadString(handle);
              
               if(ignoreFirstLine && lineCount > 0)
               {
               
                lineNumber = lineCount-1;
                lines[lineNumber][itemCount] = lineData ; 
          
                 if(itemCount == freeTextCol)
                  {
                     
                     for(int i = 0 ; i <10; i++)
                     {           
                        lineData = FileReadString(handle);               
                        if(lineData == "Low" || lineData == "Medium" || lineData == "High")
                        {     
                          lines[lineNumber][freeTextCol+1] = lineData;
                          itemCount = freeTextCol+1;            
                          break; 
                        }  
                        else
                        {   
                           if(lineData != "")
                           {                        
                              lines[lineNumber][itemCount] = lines[lineNumber][itemCount] +", " + lineData;                     
                           } 
                        }                    
                     }  
                  }  
               }
            } 
         }        
         lineCount++;    
     }
    
    ArrayResize( lines, lineCount) ;
    FileClose(handle);
  }
  else if(handle<1)
  {
     Print("File ",NewsFileName(), " not found, the last error is ", GetLastError());   
  }
  
  return(lineCount);
}
// -----------------------------------------------------------------------------------------------------------------------------
int DeleteNewsObjects() 
{ 
   for(int i=0; i<1000; i++)
   {
      ObjectDelete("NewsLine"+i);
      ObjectDelete("NewsText"+i);
      ObjectDelete("NewsCountDown"+i);
   }   
   return(0); 
} 
// -----------------------------------------------------------------------------------------------------------------------------

