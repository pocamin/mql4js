//+---------------------------------------------------------------------------+
//|   EA VERSION
//|   RenkoLiveChart_v3.3.mq4
//|   Inspired from Renko script by "e4" (renko_live_scr.mq4)
//|   Copyleft 2009 LastViking
//|   
//|   Aug 12 2009 (LV): 
//|            - Wanted volume in my Renko chart so I wrote my own script
//|     
//|   Aug 20-21 2009 (LV) (v1.1 - v1.3):
//|            - First attempt at live Renko brick formation (bugs O bugs...)
//|            - Fixed problem with strange symbol names at some 5 digit 
//|               brokers (credit to Tigertron)
//|     
//|   Aug 24 2009 (LV) (v1.4):
//|            - Handle High / Low in history in a reasonable way (prev. 
//|               used Close)
//|   
//|   Aug 26 2009 (Lou G) (v1.5/v1.6):
//|            - Finaly fixing the "late appearance" (live Renko brick 
//|               formation) bug
//| 
//|   Aug 31 2009 (LV) (v2.0):
//|            - Not a script anylonger, but run as indicator 
//|            - Naroved down the MT4 bug that used to cause the "late appearance bug" 
//|               a little closer (has to do with High / Low gaps)
//|            - Removed the while ... sleep() loop. Renko chart is now tick 
//|               driven: -MUSH nicer to system resources this way
//| 
//|   Sep 03 2009 (LV) (v2.1):
//|            - Fixed so that Time[] holds the open time of the renko 
//|               bricks (prev. used time of close)
//|     
//|   Sep 16 2009 (Lou G) (v3.0): 
//|            - Optional wicks added
//|            - Conversion back to EA 
//|            - Auto adjust for 5 and 6 dec brokers added
//|               enter RenkoBoxSize as "actual" size e.g. "10" for 10 pips
//|            - Compensation for "zero compare" problem added
//|
//|   Okt 05 2009 (LV) (v3.1): 
//|            - Fixed a bug related to BoxOffset
//|            - Auto adjust for 3 and 4 dec JPY pairs
//|            - Removed init() function
//|            - Changed back to old style Renko brick formation
//| 
//|   Okt 13 2009 (LV) (v3.2): 
//|            - Added "EmulateOnLineChart" option (credit to Skipperxit/Mimmo)
//| 
//+---------------------------------------------------------------------------+
#property copyright "" 
//+------------------------------------------------------------------+
//| Code added to orgininal copy
//| 1) Large Labels 
//| The above added code is clearly marked with START and END labels.              
//| OTHER THAN CODE INSERTION RE ABOVE, NO ORIGINAL CODE HAS BEEN ALTERED.
//| 2012 File45  
//+------------------------------------------------------------------+
#include <WinUser32.mqh>
#include <stdlib.mqh>
//+------------------------------------------------------------------+
#import "user32.dll"
	int RegisterWindowMessageA(string lpString); 
#import
//+------------------------------------------------------------------+

extern int RenkoBoxSize = 15;
extern int RenkoBoxOffset = 0;
extern int RenkoTimeFrame = 2;      // What time frame to use for the offline renko chart
extern bool ShowWicks = false;
extern bool EmulateOnLineChart = true;
extern bool StrangeSymbolName = false;
//+------------------------------------------------------------------+
//| START : LABEL DEFAULTS
//+------------------------------------------------------------------+  
extern string Large_Label_Options = "*** Large Font Support ***";
extern int Font_Size = 15;
extern int Label_X_Distance = 20;
extern int Label_Y_Distance = 20;
extern int Label_Corner = 0;
extern color Font_Color = DodgerBlue;
extern string Font_Face = "Arial";
extern bool Wicks_Label = false;
extern bool BoxOffset_Label = false;
//+------------------------------------------------------------------+
//| END : LABEL DEFAULTS                
//+------------------------------------------------------------------+ 
 
//+------------------------------------------------------------------+
int HstHandle = -1, LastFPos = 0, MT4InternalMsg = 0;
int Y_Adjust;
string SymbolName;
string Show_Wicks = "";
string RenkoSymbol;
//+------------------------------------------------------------------+


void UpdateChartWindow() {
	static int hwnd = 0;
 
	if(hwnd == 0) {
		hwnd = WindowHandle(SymbolName, RenkoTimeFrame);
		if(hwnd != 0) Print("Chart window detected");
	}

	if(EmulateOnLineChart && MT4InternalMsg == 0) 
		MT4InternalMsg = RegisterWindowMessageA("MetaTrader4_Internal_Message");

	if(hwnd != 0) if(PostMessageA(hwnd, WM_COMMAND, 0x822c, 0) == 0) hwnd = 0;
	if(hwnd != 0 && MT4InternalMsg != 0) PostMessageA(hwnd, MT4InternalMsg, 2, 1);

	return;
}

int init()
{
    if (ShowWicks == false)
    {
        Show_Wicks = "off"; 
    }
    else
    {    
        Show_Wicks = "on";       
    }

    if (Wicks_Label == true)
    {
        Y_Adjust = 8;
    }
    else
    {   
        Y_Adjust = 6;
    }    

}
//+------------------------------------------------------------------+
int start() {
          
//+------------------------------------------------------------------+
//| START : LARGE LABELS                   
//+------------------------------------------------------------------+  
    
   int RBS_Y_Distance = Label_Y_Distance + Font_Size*2;
   
   int RTF_Y_Distance = Label_Y_Distance + Font_Size*4;
   
   int RWK_Y_Distance = Label_Y_Distance + Font_Size*6;  
   
   int RBO_Y_Distance = Label_Y_Distance + Font_Size*Y_Adjust;            
   
   string SYB=RenkoSymbol;
   ObjectCreate("SYB",OBJ_LABEL,0,0,0);
   ObjectSetText("SYB",Symbol(), Font_Size, Font_Face,Font_Color);
   ObjectSet("SYB",OBJPROP_CORNER,Label_Corner);
   ObjectSet("SYB",OBJPROP_XDISTANCE, Label_X_Distance);
   ObjectSet("SYB",OBJPROP_YDISTANCE, Label_Y_Distance);
   
   string RBS=RenkoBoxSize;
   ObjectCreate("RBS",OBJ_LABEL,0,0,0);
   ObjectSetText("RBS","Renko BS - " + RBS, Font_Size, Font_Face,Font_Color);
   ObjectSet("RBS",OBJPROP_CORNER,Label_Corner);
   ObjectSet("RBS",OBJPROP_XDISTANCE, Label_X_Distance);
   ObjectSet("RBS",OBJPROP_YDISTANCE, RBS_Y_Distance);
   
   string RTF=RenkoTimeFrame;
   ObjectCreate("RTF",OBJ_LABEL,0,0,0);
   ObjectSetText("RTF","Renko TF - M" + RTF, Font_Size,Font_Face,Font_Color);
   ObjectSet("RTF",OBJPROP_CORNER,Label_Corner);
   ObjectSet("RTF",OBJPROP_XDISTANCE, Label_X_Distance);
   ObjectSet("RTF",OBJPROP_YDISTANCE, RTF_Y_Distance);
  
   if (Wicks_Label == true)
   {
   string WIC=ShowWicks;
   ObjectCreate("WIC",OBJ_LABEL,0,0,0);
   ObjectSetText("WIC","Wicks - " + Show_Wicks, Font_Size,Font_Face,Font_Color);
   ObjectSet("WIC",OBJPROP_CORNER,Label_Corner);
   ObjectSet("WIC",OBJPROP_XDISTANCE, Label_X_Distance);
   ObjectSet("WIC",OBJPROP_YDISTANCE, RWK_Y_Distance);
   }
   
   if (BoxOffset_Label == true)
   {
   string RBO=RenkoBoxOffset;
   ObjectCreate("RBO",OBJ_LABEL,0,0,0);
   ObjectSetText("RBO","BoxOffset - " + RenkoBoxOffset, Font_Size,Font_Face,Font_Color);
   ObjectSet("RBO",OBJPROP_CORNER,Label_Corner);
   ObjectSet("RBO",OBJPROP_XDISTANCE, Label_X_Distance);
   ObjectSet("RBO",OBJPROP_YDISTANCE, RBO_Y_Distance);
   }
//+------------------------------------------------------------------+
//| END : LARGE LABELS               
//+------------------------------------------------------------------+     
   
	static double BoxPoints, UpWick, DnWick;
	static double PrevLow, PrevHigh, PrevOpen, PrevClose, CurVolume, CurLow, CurHigh, CurOpen, CurClose;
	static datetime PrevTime;
   	
	//+------------------------------------------------------------------+
	// This is only executed ones, then the first tick arives.
	if(HstHandle < 0) {
		// Init

		// Error checking	
		if(!IsConnected()) {
			Print("Waiting for connection...");
			return(0);
		}							
		if(!IsDllsAllowed()) {
			Print("Error: Dll calls must be allowed!");
			return(-1);
		}		
		if(MathAbs(RenkoBoxOffset) >= RenkoBoxSize) {
			Print("Error: |RenkoBoxOffset| should be less then RenkoBoxSize!");
			return(-1);
		}
		switch(RenkoTimeFrame) {
		case 1: case 5: case 15: case 30: case 60: case 240:
		case 1440: case 10080: case 43200: case 0:
			Print("Error: Invald time frame used for offline renko chart (RenkoTimeFrame)!");
			return(-1);
		}
		//
		
		int BoxSize = RenkoBoxSize;
		int BoxOffset = RenkoBoxOffset;
		if(Digits == 5 || (Digits == 3 && StringFind(Symbol(), "JPY") != -1)) {
			BoxSize = BoxSize*10;
			BoxOffset = BoxOffset*10;
		}
		if(Digits == 6 || (Digits == 4 && StringFind(Symbol(), "JPY") != -1)) {
			BoxSize = BoxSize*100;		
			BoxOffset = BoxOffset*100;
		}
				
//+------------------------------------------------------------------+
//| START : 1 DIGIT PRICING              
//+------------------------------------------------------------------+   		
		if (Digits == 1)
      {
         BoxSize   = BoxSize * 10;
         BoxOffset = BoxOffset * 10;
      }		
//+------------------------------------------------------------------+
//| END : 1 DIGIT PRICING            
//+------------------------------------------------------------------+   			
		
		if(StrangeSymbolName) SymbolName = StringSubstr(Symbol(), 0, 6);
		else SymbolName = Symbol();
		BoxPoints = NormalizeDouble(BoxSize*Point, Digits);
		PrevLow = NormalizeDouble(BoxOffset*Point + MathFloor(Close[Bars-1]/BoxPoints)*BoxPoints, Digits);
		DnWick = PrevLow;
		PrevHigh = PrevLow + BoxPoints;
		UpWick = PrevHigh;
		PrevOpen = PrevLow;
		PrevClose = PrevHigh;
		CurVolume = 1;
		PrevTime = Time[Bars-1];
	
		// create / open hst file		
		HstHandle = FileOpenHistory(SymbolName + RenkoTimeFrame + ".hst", FILE_BIN|FILE_WRITE);
		if(HstHandle < 0) {
			Print("Error: can\'t create / open history file: " + ErrorDescription(GetLastError()) + ": " + SymbolName + RenkoTimeFrame + ".hst");
			return(-1);
		}
		//
   	
		// write hst file header
		int HstUnused[13];
		FileWriteInteger(HstHandle, 400, LONG_VALUE); 			// Version
		FileWriteString(HstHandle, "", 64);					// Copyright
		FileWriteString(HstHandle, SymbolName, 12);			// Symbol
		FileWriteInteger(HstHandle, RenkoTimeFrame, LONG_VALUE);	// Period
		FileWriteInteger(HstHandle, Digits, LONG_VALUE);		// Digits
		FileWriteInteger(HstHandle, 0, LONG_VALUE);			// Time Sign
		FileWriteInteger(HstHandle, 0, LONG_VALUE);			// Last Sync
		FileWriteArray(HstHandle, HstUnused, 0, 13);			// Unused
		//
   	
 		// process historical data
  		int i = Bars-2;
		//Print(Symbol() + " " + High[i] + " " + Low[i] + " " + Open[i] + " " + Close[i]);
		//---------------------------------------------------------------------------
  		while(i >= 0) {
  		
			CurVolume = CurVolume + Volume[i];
		
			UpWick = MathMax(UpWick, High[i]);
			DnWick = MathMin(DnWick, Low[i]);

			// update low before high or the reverse depending on previous bar
			bool UpTrend = High[i]+Low[i] > High[i+1]+Low[i+1];
		
			while(!UpTrend && (Low[i] < PrevLow-BoxPoints || CompareDoubles(Low[i], PrevLow-BoxPoints))) {
  				PrevHigh = PrevHigh - BoxPoints;
  				PrevLow = PrevLow - BoxPoints;
  				PrevOpen = PrevHigh;
  				PrevClose = PrevLow;

				FileWriteInteger(HstHandle, PrevTime, LONG_VALUE);
				FileWriteDouble(HstHandle, PrevOpen, DOUBLE_VALUE);
				FileWriteDouble(HstHandle, PrevLow, DOUBLE_VALUE);

				if(ShowWicks && UpWick > PrevHigh) FileWriteDouble(HstHandle, UpWick, DOUBLE_VALUE);
				else FileWriteDouble(HstHandle, PrevHigh, DOUBLE_VALUE);
				  				  			
				FileWriteDouble(HstHandle, PrevClose, DOUBLE_VALUE);
				FileWriteDouble(HstHandle, CurVolume, DOUBLE_VALUE);
				
				UpWick = 0;
				DnWick = EMPTY_VALUE;
				CurVolume = 0;
				CurHigh = PrevLow;
				CurLow = PrevLow;  
				
				if(PrevTime < Time[i]) PrevTime = Time[i];
				else PrevTime++;
			}
		
			while(High[i] > PrevHigh+BoxPoints || CompareDoubles(High[i], PrevHigh+BoxPoints)) {
  				PrevHigh = PrevHigh + BoxPoints;
  				PrevLow = PrevLow + BoxPoints;
  				PrevOpen = PrevLow;
  				PrevClose = PrevHigh;
  			
				FileWriteInteger(HstHandle, PrevTime, LONG_VALUE);
				FileWriteDouble(HstHandle, PrevOpen, DOUBLE_VALUE);

            if(ShowWicks && DnWick < PrevLow) FileWriteDouble(HstHandle, DnWick, DOUBLE_VALUE);
				else FileWriteDouble(HstHandle, PrevLow, DOUBLE_VALUE);
  				  			
				FileWriteDouble(HstHandle, PrevHigh, DOUBLE_VALUE);
				FileWriteDouble(HstHandle, PrevClose, DOUBLE_VALUE);
				FileWriteDouble(HstHandle, CurVolume, DOUBLE_VALUE);
				
				UpWick = 0;
				DnWick = EMPTY_VALUE;
				CurVolume = 0;
				CurHigh = PrevHigh;
				CurLow = PrevHigh;  
				
				if(PrevTime < Time[i]) PrevTime = Time[i];
				else PrevTime++;
			}
		
			while(UpTrend && (Low[i] < PrevLow-BoxPoints || CompareDoubles(Low[i], PrevLow-BoxPoints))) {
  				PrevHigh = PrevHigh - BoxPoints;
  				PrevLow = PrevLow - BoxPoints;
  				PrevOpen = PrevHigh;
  				PrevClose = PrevLow;
  			
				FileWriteInteger(HstHandle, PrevTime, LONG_VALUE);
				FileWriteDouble(HstHandle, PrevOpen, DOUBLE_VALUE);
				FileWriteDouble(HstHandle, PrevLow, DOUBLE_VALUE);
				
				if(ShowWicks && UpWick > PrevHigh) FileWriteDouble(HstHandle, UpWick, DOUBLE_VALUE);
				else FileWriteDouble(HstHandle, PrevHigh, DOUBLE_VALUE);
				
				FileWriteDouble(HstHandle, PrevClose, DOUBLE_VALUE);
				FileWriteDouble(HstHandle, CurVolume, DOUBLE_VALUE);

				UpWick = 0;
				DnWick = EMPTY_VALUE;
				CurVolume = 0;
				CurHigh = PrevLow;
				CurLow = PrevLow;  
								
				if(PrevTime < Time[i]) PrevTime = Time[i];
				else PrevTime++;
			}		
			i--;
		} 
		LastFPos = FileTell(HstHandle);   // Remember Last pos in file
		//
			
		Comment("RenkoLiveChart(" + RenkoBoxSize + "): Open Offline ", SymbolName, ",M", RenkoTimeFrame, " to view chart");
		
		if(Close[0] > MathMax(PrevClose, PrevOpen)) CurOpen = MathMax(PrevClose, PrevOpen);
		else if (Close[0] < MathMin(PrevClose, PrevOpen)) CurOpen = MathMin(PrevClose, PrevOpen);
		else CurOpen = Close[0];
		
		CurClose = Close[0];
				
		if(UpWick > PrevHigh) CurHigh = UpWick;
		if(DnWick < PrevLow) CurLow = DnWick;
      
		FileWriteInteger(HstHandle, PrevTime, LONG_VALUE);		// Time
		FileWriteDouble(HstHandle, CurOpen, DOUBLE_VALUE);         	// Open
		FileWriteDouble(HstHandle, CurLow, DOUBLE_VALUE);		// Low
		FileWriteDouble(HstHandle, CurHigh, DOUBLE_VALUE);		// High
		FileWriteDouble(HstHandle, CurClose, DOUBLE_VALUE);		// Close
		FileWriteDouble(HstHandle, CurVolume, DOUBLE_VALUE);		// Volume				
		FileFlush(HstHandle);
           	
		UpdateChartWindow();
			
		return(0);
 		// End historical data / Init			
	} 		
	//----------------------------------------------------------------------------
 	// HstHandle not < 0 so we always enter here after history done
	// Begin live data feed
   			
	UpWick = MathMax(UpWick, Bid);
	DnWick = MathMin(DnWick, Bid);

	CurVolume++;   			
	FileSeek(HstHandle, LastFPos, SEEK_SET);

 	//-------------------------------------------------------------------------	   				
 	// up box	   				
   	if(Bid > PrevHigh+BoxPoints || CompareDoubles(Bid, PrevHigh+BoxPoints)) {
		PrevHigh = PrevHigh + BoxPoints;
		PrevLow = PrevLow + BoxPoints;
  		PrevOpen = PrevLow;
  		PrevClose = PrevHigh;
  				  			
		FileWriteInteger(HstHandle, PrevTime, LONG_VALUE);
		FileWriteDouble(HstHandle, PrevOpen, DOUBLE_VALUE);

		if (ShowWicks && DnWick < PrevLow) FileWriteDouble(HstHandle, DnWick, DOUBLE_VALUE);
		else FileWriteDouble(HstHandle, PrevLow, DOUBLE_VALUE);
		  			
		FileWriteDouble(HstHandle, PrevHigh, DOUBLE_VALUE);
		FileWriteDouble(HstHandle, PrevClose, DOUBLE_VALUE);
		FileWriteDouble(HstHandle, CurVolume, DOUBLE_VALUE);
      	FileFlush(HstHandle);
  	  	LastFPos = FileTell(HstHandle);   // Remeber Last pos in file				  							
      	
		if(PrevTime < TimeCurrent()) PrevTime = TimeCurrent();
		else PrevTime++;
            		
  		CurVolume = 0;
		CurHigh = PrevHigh;
		CurLow = PrevHigh;  
		
		UpWick = 0;
		DnWick = EMPTY_VALUE;		
		
		UpdateChartWindow();				            		
  		   

  	}
 	//-------------------------------------------------------------------------	   				
 	// down box
	   else if(Bid < PrevLow-BoxPoints || CompareDoubles(Bid,PrevLow-BoxPoints)) {
  		PrevHigh = PrevHigh - BoxPoints;
  		PrevLow = PrevLow - BoxPoints;
  		PrevOpen = PrevHigh;
  		PrevClose = PrevLow;
  				  			
		FileWriteInteger(HstHandle, PrevTime, LONG_VALUE);
		FileWriteDouble(HstHandle, PrevOpen, DOUBLE_VALUE);
		FileWriteDouble(HstHandle, PrevLow, DOUBLE_VALUE);

		if(ShowWicks && UpWick > PrevHigh) FileWriteDouble(HstHandle, UpWick, DOUBLE_VALUE);
		else FileWriteDouble(HstHandle, PrevHigh, DOUBLE_VALUE);
				  			
		FileWriteDouble(HstHandle, PrevClose, DOUBLE_VALUE);
		FileWriteDouble(HstHandle, CurVolume, DOUBLE_VALUE);
      	FileFlush(HstHandle);
  	  	LastFPos = FileTell(HstHandle);   // Remeber Last pos in file				  							
      	
		if(PrevTime < TimeCurrent()) PrevTime = TimeCurrent();
		else PrevTime++;      	
            		
  		CurVolume = 0;
		CurHigh = PrevLow;
		CurLow = PrevLow;  
		
		UpWick = 0;
		DnWick = EMPTY_VALUE;		
		
		UpdateChartWindow();	
		
      
  	
     	} 
 	//-------------------------------------------------------------------------	   				
   	// no box - high/low not hit				
	else {
		if(Bid > CurHigh) CurHigh = Bid;
		if(Bid < CurLow) CurLow = Bid;
/*		
		if(PrevHigh <= Bid) CurOpen = PrevHigh;
		else if(PrevLow >= Bid) CurOpen = PrevLow;
		else CurOpen = Bid;
*/		
      CurOpen = PrevClose;
		CurClose = Bid;
		
		FileWriteInteger(HstHandle, PrevTime, LONG_VALUE);		// Time
		FileWriteDouble(HstHandle, CurOpen, DOUBLE_VALUE);         	// Open
		FileWriteDouble(HstHandle, CurLow, DOUBLE_VALUE);		// Low
		FileWriteDouble(HstHandle, CurHigh, DOUBLE_VALUE);		// High
		FileWriteDouble(HstHandle, CurClose, DOUBLE_VALUE);		// Close
		FileWriteDouble(HstHandle, CurVolume, DOUBLE_VALUE);		// Volume				
            FileFlush(HstHandle);
            
		UpdateChartWindow();            
     	}
     	return(0);
}
//+------------------------------------------------------------------+
int deinit() {
	if(HstHandle >= 0) {
		FileClose(HstHandle);
		HstHandle = -1;
	}
   	Comment("");
   	
   	ObjectDelete("SYB");
   	ObjectDelete("RBS");
   	ObjectDelete("RTF");
   	ObjectDelete("WIC");
   	ObjectDelete("RBO");

	return(0);
}
//+------------------------------------------------------------------+
   