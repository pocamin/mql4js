// Generated from MQL4.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MQL4Listener = require('./MQL4Listener').MQL4Listener;
var MQL4Visitor = require('./MQL4Visitor').MQL4Visitor;

var grammarFileName = "MQL4.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u00037\u0106\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002\u001e\n\u0002",
    "\f\u0002\u000e\u0002!\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003&\n\u0003\u0003\u0004\u0003\u0004\u0007\u0004*\n\u0004\f",
    "\u0004\u000e\u0004-\u000b\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "1\n\u0004\u0003\u0005\u0003\u0005\u0005\u00055\n\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006=",
    "\n\u0006\u0003\u0006\u0003\u0006\u0007\u0006A\n\u0006\f\u0006\u000e",
    "\u0006D\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0006\u0007L\n\u0007\r\u0007\u000e\u0007M\u0003",
    "\u0007\u0003\u0007\u0003\b\u0005\bS\n\b\u0003\b\u0003\b\u0003\b\u0005",
    "\bX\n\b\u0003\b\u0003\b\u0005\b\\\n\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0005\tc\n\t\u0003\t\u0003\t\u0005\tg\n\t\u0003\t\u0003\t",
    "\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000bp\n",
    "\u000b\f\u000b\u000e\u000bs\u000b\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0005\f\u008e\n\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0007\f\u00f9\n\f\f\f\u000e\f\u00fc\u000b",
    "\f\u0003\r\u0003\r\u0003\r\u0003\r\u0006\r\u0102\n\r\r\r\u000e\r\u0103",
    "\u0003\r\u0002\u0003\u0016\u000e\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u0002\u0003\u0004\u00021144\u0137\u0002\u001f",
    "\u0003\u0002\u0002\u0002\u0004\"\u0003\u0002\u0002\u0002\u00060\u0003",
    "\u0002\u0002\u0002\b4\u0003\u0002\u0002\u0002\n8\u0003\u0002\u0002\u0002",
    "\fH\u0003\u0002\u0002\u0002\u000eR\u0003\u0002\u0002\u0002\u0010_\u0003",
    "\u0002\u0002\u0002\u0012j\u0003\u0002\u0002\u0002\u0014l\u0003\u0002",
    "\u0002\u0002\u0016\u008d\u0003\u0002\u0002\u0002\u0018\u0101\u0003\u0002",
    "\u0002\u0002\u001a\u001e\u0005\u0004\u0003\u0002\u001b\u001e\u0005\u000e",
    "\b\u0002\u001c\u001e\u0005\n\u0006\u0002\u001d\u001a\u0003\u0002\u0002",
    "\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001d\u001c\u0003\u0002\u0002",
    "\u0002\u001e!\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002",
    "\u0002\u001f \u0003\u0002\u0002\u0002 \u0003\u0003\u0002\u0002\u0002",
    "!\u001f\u0003\u0002\u0002\u0002\"#\u0007\u0003\u0002\u0002#%\u00074",
    "\u0002\u0002$&\u00075\u0002\u0002%$\u0003\u0002\u0002\u0002%&\u0003",
    "\u0002\u0002\u0002&\u0005\u0003\u0002\u0002\u0002\'+\u0007\u0004\u0002",
    "\u0002(*\u0005\b\u0005\u0002)(\u0003\u0002\u0002\u0002*-\u0003\u0002",
    "\u0002\u0002+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,.\u0003",
    "\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002.1\u0007\u0005\u0002\u0002",
    "/1\u0005\b\u0005\u00020\'\u0003\u0002\u0002\u00020/\u0003\u0002\u0002",
    "\u00021\u0007\u0003\u0002\u0002\u000225\u0005\u0010\t\u000235\u0005",
    "\u0016\f\u000242\u0003\u0002\u0002\u000243\u0003\u0002\u0002\u00025",
    "6\u0003\u0002\u0002\u000267\u0007\u0006\u0002\u00027\t\u0003\u0002\u0002",
    "\u000289\u0005\u0012\n\u00029:\u00074\u0002\u0002:<\u0007\u0007\u0002",
    "\u0002;=\u0005\f\u0007\u0002<;\u0003\u0002\u0002\u0002<=\u0003\u0002",
    "\u0002\u0002=B\u0003\u0002\u0002\u0002>?\u0007\b\u0002\u0002?A\u0005",
    "\f\u0007\u0002@>\u0003\u0002\u0002\u0002AD\u0003\u0002\u0002\u0002B",
    "@\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002CE\u0003\u0002\u0002",
    "\u0002DB\u0003\u0002\u0002\u0002EF\u0007\t\u0002\u0002FG\u0005\u0006",
    "\u0004\u0002G\u000b\u0003\u0002\u0002\u0002HI\u0005\u0012\n\u0002IK",
    "\u00074\u0002\u0002JL\u0007\n\u0002\u0002KJ\u0003\u0002\u0002\u0002",
    "LM\u0003\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002",
    "\u0002NO\u0003\u0002\u0002\u0002OP\u0005\u0016\f\u0002P\r\u0003\u0002",
    "\u0002\u0002QS\u00070\u0002\u0002RQ\u0003\u0002\u0002\u0002RS\u0003",
    "\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002TU\u0005\u0012\n\u0002U",
    "W\u00074\u0002\u0002VX\u0005\u0018\r\u0002WV\u0003\u0002\u0002\u0002",
    "WX\u0003\u0002\u0002\u0002X[\u0003\u0002\u0002\u0002YZ\u0007\n\u0002",
    "\u0002Z\\\u0005\u0016\f\u0002[Y\u0003\u0002\u0002\u0002[\\\u0003\u0002",
    "\u0002\u0002\\]\u0003\u0002\u0002\u0002]^\u0007\u0006\u0002\u0002^\u000f",
    "\u0003\u0002\u0002\u0002_`\u0005\u0012\n\u0002`b\u00074\u0002\u0002",
    "ac\u0005\u0018\r\u0002ba\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002",
    "\u0002cf\u0003\u0002\u0002\u0002de\u0007\n\u0002\u0002eg\u0005\u0016",
    "\f\u0002fd\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002gh\u0003",
    "\u0002\u0002\u0002hi\u0007\u0006\u0002\u0002i\u0011\u0003\u0002\u0002",
    "\u0002jk\t\u0002\u0002\u0002k\u0013\u0003\u0002\u0002\u0002lq\u0007",
    "4\u0002\u0002mn\u0007\b\u0002\u0002np\u00074\u0002\u0002om\u0003\u0002",
    "\u0002\u0002ps\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002qr\u0003",
    "\u0002\u0002\u0002r\u0015\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002",
    "\u0002tu\b\f\u0001\u0002uv\u0007\u000b\u0002\u0002v\u008e\u0005\u0016",
    "\f0wx\u0007\f\u0002\u0002x\u008e\u0005\u0016\f/yz\u0007\r\u0002\u0002",
    "z\u008e\u0005\u0016\f.{|\u0007\u0018\u0002\u0002|\u008e\u0005\u0016",
    "\f\"}~\u0007\u0019\u0002\u0002~\u008e\u0005\u0016\f!\u007f\u008e\u0007",
    "5\u0002\u0002\u0080\u008e\u00072\u0002\u0002\u0081\u008e\u00073\u0002",
    "\u0002\u0082\u008e\u00074\u0002\u0002\u0083\u008e\u0007/\u0002\u0002",
    "\u0084\u0085\u00074\u0002\u0002\u0085\u0086\u0007\u0007\u0002\u0002",
    "\u0086\u0087\u0005\u0016\f\u0002\u0087\u0088\u0007\t\u0002\u0002\u0088",
    "\u008e\u0003\u0002\u0002\u0002\u0089\u008a\u0007\u0007\u0002\u0002\u008a",
    "\u008b\u0005\u0016\f\u0002\u008b\u008c\u0007\t\u0002\u0002\u008c\u008e",
    "\u0003\u0002\u0002\u0002\u008dt\u0003\u0002\u0002\u0002\u008dw\u0003",
    "\u0002\u0002\u0002\u008dy\u0003\u0002\u0002\u0002\u008d{\u0003\u0002",
    "\u0002\u0002\u008d}\u0003\u0002\u0002\u0002\u008d\u007f\u0003\u0002",
    "\u0002\u0002\u008d\u0080\u0003\u0002\u0002\u0002\u008d\u0081\u0003\u0002",
    "\u0002\u0002\u008d\u0082\u0003\u0002\u0002\u0002\u008d\u0083\u0003\u0002",
    "\u0002\u0002\u008d\u0084\u0003\u0002\u0002\u0002\u008d\u0089\u0003\u0002",
    "\u0002\u0002\u008e\u00fa\u0003\u0002\u0002\u0002\u008f\u0090\f-\u0002",
    "\u0002\u0090\u0091\u0007\n\u0002\u0002\u0091\u00f9\u0005\u0016\f.\u0092",
    "\u0093\f,\u0002\u0002\u0093\u0094\u0007\u000e\u0002\u0002\u0094\u00f9",
    "\u0005\u0016\f-\u0095\u0096\f+\u0002\u0002\u0096\u0097\u0007\u000f\u0002",
    "\u0002\u0097\u00f9\u0005\u0016\f,\u0098\u0099\f*\u0002\u0002\u0099\u009a",
    "\u0007\u0010\u0002\u0002\u009a\u00f9\u0005\u0016\f+\u009b\u009c\f)\u0002",
    "\u0002\u009c\u009d\u0007\u0011\u0002\u0002\u009d\u00f9\u0005\u0016\f",
    "*\u009e\u009f\f(\u0002\u0002\u009f\u00a0\u0007\u0012\u0002\u0002\u00a0",
    "\u00f9\u0005\u0016\f)\u00a1\u00a2\f\'\u0002\u0002\u00a2\u00a3\u0007",
    "\u0013\u0002\u0002\u00a3\u00f9\u0005\u0016\f(\u00a4\u00a5\f&\u0002\u0002",
    "\u00a5\u00a6\u0007\u0014\u0002\u0002\u00a6\u00f9\u0005\u0016\f\'\u00a7",
    "\u00a8\f%\u0002\u0002\u00a8\u00a9\u0007\u0015\u0002\u0002\u00a9\u00f9",
    "\u0005\u0016\f&\u00aa\u00ab\f$\u0002\u0002\u00ab\u00ac\u0007\u0016\u0002",
    "\u0002\u00ac\u00f9\u0005\u0016\f%\u00ad\u00ae\f#\u0002\u0002\u00ae\u00af",
    "\u0007\u0017\u0002\u0002\u00af\u00f9\u0005\u0016\f$\u00b0\u00b1\f\u001e",
    "\u0002\u0002\u00b1\u00b2\u0007\u001a\u0002\u0002\u00b2\u00f9\u0005\u0016",
    "\f\u001f\u00b3\u00b4\f\u001d\u0002\u0002\u00b4\u00b5\u0007\u001b\u0002",
    "\u0002\u00b5\u00f9\u0005\u0016\f\u001e\u00b6\u00b7\f\u001c\u0002\u0002",
    "\u00b7\u00b8\u0007\u001c\u0002\u0002\u00b8\u00f9\u0005\u0016\f\u001d",
    "\u00b9\u00ba\f\u001b\u0002\u0002\u00ba\u00bb\u0007\u001d\u0002\u0002",
    "\u00bb\u00f9\u0005\u0016\f\u001c\u00bc\u00bd\f\u001a\u0002\u0002\u00bd",
    "\u00be\u0007\u001e\u0002\u0002\u00be\u00f9\u0005\u0016\f\u001b\u00bf",
    "\u00c0\f\u0019\u0002\u0002\u00c0\u00c1\u0007\u001f\u0002\u0002\u00c1",
    "\u00f9\u0005\u0016\f\u001a\u00c2\u00c3\f\u0018\u0002\u0002\u00c3\u00c4",
    "\u0007 \u0002\u0002\u00c4\u00f9\u0005\u0016\f\u0019\u00c5\u00c6\f\u0017",
    "\u0002\u0002\u00c6\u00c7\u0007!\u0002\u0002\u00c7\u00f9\u0005\u0016",
    "\f\u0018\u00c8\u00c9\f\u0016\u0002\u0002\u00c9\u00ca\u0007\"\u0002\u0002",
    "\u00ca\u00f9\u0005\u0016\f\u0017\u00cb\u00cc\f\u0015\u0002\u0002\u00cc",
    "\u00cd\u0007\u000b\u0002\u0002\u00cd\u00f9\u0005\u0016\f\u0016\u00ce",
    "\u00cf\f\u0014\u0002\u0002\u00cf\u00d0\u0007#\u0002\u0002\u00d0\u00f9",
    "\u0005\u0016\f\u0015\u00d1\u00d2\f\u0013\u0002\u0002\u00d2\u00d3\u0007",
    "$\u0002\u0002\u00d3\u00f9\u0005\u0016\f\u0014\u00d4\u00d5\f\u0012\u0002",
    "\u0002\u00d5\u00d6\u0007%\u0002\u0002\u00d6\u00f9\u0005\u0016\f\u0013",
    "\u00d7\u00d8\f\u0011\u0002\u0002\u00d8\u00d9\u0007&\u0002\u0002\u00d9",
    "\u00f9\u0005\u0016\f\u0012\u00da\u00db\f\u0010\u0002\u0002\u00db\u00dc",
    "\u0007\'\u0002\u0002\u00dc\u00f9\u0005\u0016\f\u0011\u00dd\u00de\f\u000f",
    "\u0002\u0002\u00de\u00df\u0007(\u0002\u0002\u00df\u00f9\u0005\u0016",
    "\f\u0010\u00e0\u00e1\f\u000e\u0002\u0002\u00e1\u00e2\u0007)\u0002\u0002",
    "\u00e2\u00f9\u0005\u0016\f\u000f\u00e3\u00e4\f\r\u0002\u0002\u00e4\u00e5",
    "\u0007*\u0002\u0002\u00e5\u00f9\u0005\u0016\f\u000e\u00e6\u00e7\f\f",
    "\u0002\u0002\u00e7\u00e8\u0007+\u0002\u0002\u00e8\u00e9\u0005\u0016",
    "\f\u0002\u00e9\u00ea\u0007,\u0002\u0002\u00ea\u00eb\u0005\u0016\f\r",
    "\u00eb\u00f9\u0003\u0002\u0002\u0002\u00ec\u00ed\f\u0003\u0002\u0002",
    "\u00ed\u00ee\u0007\b\u0002\u0002\u00ee\u00f9\u0005\u0016\f\u0004\u00ef",
    "\u00f0\f \u0002\u0002\u00f0\u00f9\u0007\u0018\u0002\u0002\u00f1\u00f2",
    "\f\u001f\u0002\u0002\u00f2\u00f9\u0007\u0019\u0002\u0002\u00f3\u00f4",
    "\f\u0005\u0002\u0002\u00f4\u00f5\u0007-\u0002\u0002\u00f5\u00f6\u0005",
    "\u0016\f\u0002\u00f6\u00f7\u0007.\u0002\u0002\u00f7\u00f9\u0003\u0002",
    "\u0002\u0002\u00f8\u008f\u0003\u0002\u0002\u0002\u00f8\u0092\u0003\u0002",
    "\u0002\u0002\u00f8\u0095\u0003\u0002\u0002\u0002\u00f8\u0098\u0003\u0002",
    "\u0002\u0002\u00f8\u009b\u0003\u0002\u0002\u0002\u00f8\u009e\u0003\u0002",
    "\u0002\u0002\u00f8\u00a1\u0003\u0002\u0002\u0002\u00f8\u00a4\u0003\u0002",
    "\u0002\u0002\u00f8\u00a7\u0003\u0002\u0002\u0002\u00f8\u00aa\u0003\u0002",
    "\u0002\u0002\u00f8\u00ad\u0003\u0002\u0002\u0002\u00f8\u00b0\u0003\u0002",
    "\u0002\u0002\u00f8\u00b3\u0003\u0002\u0002\u0002\u00f8\u00b6\u0003\u0002",
    "\u0002\u0002\u00f8\u00b9\u0003\u0002\u0002\u0002\u00f8\u00bc\u0003\u0002",
    "\u0002\u0002\u00f8\u00bf\u0003\u0002\u0002\u0002\u00f8\u00c2\u0003\u0002",
    "\u0002\u0002\u00f8\u00c5\u0003\u0002\u0002\u0002\u00f8\u00c8\u0003\u0002",
    "\u0002\u0002\u00f8\u00cb\u0003\u0002\u0002\u0002\u00f8\u00ce\u0003\u0002",
    "\u0002\u0002\u00f8\u00d1\u0003\u0002\u0002\u0002\u00f8\u00d4\u0003\u0002",
    "\u0002\u0002\u00f8\u00d7\u0003\u0002\u0002\u0002\u00f8\u00da\u0003\u0002",
    "\u0002\u0002\u00f8\u00dd\u0003\u0002\u0002\u0002\u00f8\u00e0\u0003\u0002",
    "\u0002\u0002\u00f8\u00e3\u0003\u0002\u0002\u0002\u00f8\u00e6\u0003\u0002",
    "\u0002\u0002\u00f8\u00ec\u0003\u0002\u0002\u0002\u00f8\u00ef\u0003\u0002",
    "\u0002\u0002\u00f8\u00f1\u0003\u0002\u0002\u0002\u00f8\u00f3\u0003\u0002",
    "\u0002\u0002\u00f9\u00fc\u0003\u0002\u0002\u0002\u00fa\u00f8\u0003\u0002",
    "\u0002\u0002\u00fa\u00fb\u0003\u0002\u0002\u0002\u00fb\u0017\u0003\u0002",
    "\u0002\u0002\u00fc\u00fa\u0003\u0002\u0002\u0002\u00fd\u00fe\u0007-",
    "\u0002\u0002\u00fe\u00ff\u0005\u0016\f\u0002\u00ff\u0100\u0007.\u0002",
    "\u0002\u0100\u0102\u0003\u0002\u0002\u0002\u0101\u00fd\u0003\u0002\u0002",
    "\u0002\u0102\u0103\u0003\u0002\u0002\u0002\u0103\u0101\u0003\u0002\u0002",
    "\u0002\u0103\u0104\u0003\u0002\u0002\u0002\u0104\u0019\u0003\u0002\u0002",
    "\u0002\u0015\u001d\u001f%+04<BMRW[bfq\u008d\u00f8\u00fa\u0103"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'#property'", "'{'", "'}'", "';'", "'('", 
                     "','", "')'", "'='", "'-'", "'!'", "'~'", "'+='", "'-='", 
                     "'*='", "'/='", "'%='", "'>>='", "'<<='", "'&='", "'|='", 
                     "'^='", "'--'", "'++'", "'>>'", "'<<'", "'&'", "'|'", 
                     "'^'", "'*'", "'/'", "'%'", "'+'", "'>='", "'<='", 
                     "'>'", "'<'", "'=='", "'!='", "'&&'", "'||'", "'?'", 
                     "':'", "'['", "']'", "'NULL'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', "Null", "MemoryClass", "PredifinedType", 
                      "Bool", "Number", "Identifier", "String", "Comment", 
                      "Space" ];

var ruleNames =  [ "root", "property", "block", "statement", "functionDecl", 
                   "functionArgument", "rootDeclaration", "declaration", 
                   "type", "idList", "expression", "indexes" ];

function MQL4Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

MQL4Parser.prototype = Object.create(antlr4.Parser.prototype);
MQL4Parser.prototype.constructor = MQL4Parser;

Object.defineProperty(MQL4Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

MQL4Parser.EOF = antlr4.Token.EOF;
MQL4Parser.T__0 = 1;
MQL4Parser.T__1 = 2;
MQL4Parser.T__2 = 3;
MQL4Parser.T__3 = 4;
MQL4Parser.T__4 = 5;
MQL4Parser.T__5 = 6;
MQL4Parser.T__6 = 7;
MQL4Parser.T__7 = 8;
MQL4Parser.T__8 = 9;
MQL4Parser.T__9 = 10;
MQL4Parser.T__10 = 11;
MQL4Parser.T__11 = 12;
MQL4Parser.T__12 = 13;
MQL4Parser.T__13 = 14;
MQL4Parser.T__14 = 15;
MQL4Parser.T__15 = 16;
MQL4Parser.T__16 = 17;
MQL4Parser.T__17 = 18;
MQL4Parser.T__18 = 19;
MQL4Parser.T__19 = 20;
MQL4Parser.T__20 = 21;
MQL4Parser.T__21 = 22;
MQL4Parser.T__22 = 23;
MQL4Parser.T__23 = 24;
MQL4Parser.T__24 = 25;
MQL4Parser.T__25 = 26;
MQL4Parser.T__26 = 27;
MQL4Parser.T__27 = 28;
MQL4Parser.T__28 = 29;
MQL4Parser.T__29 = 30;
MQL4Parser.T__30 = 31;
MQL4Parser.T__31 = 32;
MQL4Parser.T__32 = 33;
MQL4Parser.T__33 = 34;
MQL4Parser.T__34 = 35;
MQL4Parser.T__35 = 36;
MQL4Parser.T__36 = 37;
MQL4Parser.T__37 = 38;
MQL4Parser.T__38 = 39;
MQL4Parser.T__39 = 40;
MQL4Parser.T__40 = 41;
MQL4Parser.T__41 = 42;
MQL4Parser.T__42 = 43;
MQL4Parser.T__43 = 44;
MQL4Parser.Null = 45;
MQL4Parser.MemoryClass = 46;
MQL4Parser.PredifinedType = 47;
MQL4Parser.Bool = 48;
MQL4Parser.Number = 49;
MQL4Parser.Identifier = 50;
MQL4Parser.String = 51;
MQL4Parser.Comment = 52;
MQL4Parser.Space = 53;

MQL4Parser.RULE_root = 0;
MQL4Parser.RULE_property = 1;
MQL4Parser.RULE_block = 2;
MQL4Parser.RULE_statement = 3;
MQL4Parser.RULE_functionDecl = 4;
MQL4Parser.RULE_functionArgument = 5;
MQL4Parser.RULE_rootDeclaration = 6;
MQL4Parser.RULE_declaration = 7;
MQL4Parser.RULE_type = 8;
MQL4Parser.RULE_idList = 9;
MQL4Parser.RULE_expression = 10;
MQL4Parser.RULE_indexes = 11;

function RootContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_root;
    return this;
}

RootContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RootContext.prototype.constructor = RootContext;

RootContext.prototype.property = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PropertyContext);
    } else {
        return this.getTypedRuleContext(PropertyContext,i);
    }
};

RootContext.prototype.rootDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RootDeclarationContext);
    } else {
        return this.getTypedRuleContext(RootDeclarationContext,i);
    }
};

RootContext.prototype.functionDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunctionDeclContext);
    } else {
        return this.getTypedRuleContext(FunctionDeclContext,i);
    }
};

RootContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterRoot(this);
	}
};

RootContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitRoot(this);
	}
};

RootContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitRoot(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.RootContext = RootContext;

MQL4Parser.prototype.root = function() {

    var localctx = new RootContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, MQL4Parser.RULE_root);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MQL4Parser.T__0 || ((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (MQL4Parser.MemoryClass - 46)) | (1 << (MQL4Parser.PredifinedType - 46)) | (1 << (MQL4Parser.Identifier - 46)))) !== 0)) {
            this.state = 27;
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 24;
                this.property();
                break;

            case 2:
                this.state = 25;
                this.rootDeclaration();
                break;

            case 3:
                this.state = 26;
                this.functionDecl();
                break;

            }
            this.state = 31;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_property;
    this.name = null; // Token
    this.value = null; // Token
    return this;
}

PropertyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyContext.prototype.constructor = PropertyContext;

PropertyContext.prototype.Identifier = function() {
    return this.getToken(MQL4Parser.Identifier, 0);
};

PropertyContext.prototype.String = function() {
    return this.getToken(MQL4Parser.String, 0);
};

PropertyContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterProperty(this);
	}
};

PropertyContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitProperty(this);
	}
};

PropertyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitProperty(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.PropertyContext = PropertyContext;

MQL4Parser.prototype.property = function() {

    var localctx = new PropertyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, MQL4Parser.RULE_property);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        this.match(MQL4Parser.T__0);

        this.state = 33;
        localctx.name = this.match(MQL4Parser.Identifier);
        this.state = 35;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.String) {
            this.state = 34;
            localctx.value = this.match(MQL4Parser.String);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitBlock(this);
	}
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.BlockContext = BlockContext;

MQL4Parser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, MQL4Parser.RULE_block);
    var _la = 0; // Token type
    try {
        this.state = 46;
        switch(this._input.LA(1)) {
        case MQL4Parser.T__1:
            this.enterOuterAlt(localctx, 1);
            this.state = 37;
            this.match(MQL4Parser.T__1);
            this.state = 41;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MQL4Parser.T__4) | (1 << MQL4Parser.T__8) | (1 << MQL4Parser.T__9) | (1 << MQL4Parser.T__10) | (1 << MQL4Parser.T__21) | (1 << MQL4Parser.T__22))) !== 0) || ((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (MQL4Parser.Null - 45)) | (1 << (MQL4Parser.PredifinedType - 45)) | (1 << (MQL4Parser.Bool - 45)) | (1 << (MQL4Parser.Number - 45)) | (1 << (MQL4Parser.Identifier - 45)) | (1 << (MQL4Parser.String - 45)))) !== 0)) {
                this.state = 38;
                this.statement();
                this.state = 43;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 44;
            this.match(MQL4Parser.T__2);
            break;
        case MQL4Parser.T__4:
        case MQL4Parser.T__8:
        case MQL4Parser.T__9:
        case MQL4Parser.T__10:
        case MQL4Parser.T__21:
        case MQL4Parser.T__22:
        case MQL4Parser.Null:
        case MQL4Parser.PredifinedType:
        case MQL4Parser.Bool:
        case MQL4Parser.Number:
        case MQL4Parser.Identifier:
        case MQL4Parser.String:
            this.enterOuterAlt(localctx, 2);
            this.state = 45;
            this.statement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.declaration = function() {
    return this.getTypedRuleContext(DeclarationContext,0);
};

StatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.StatementContext = StatementContext;

MQL4Parser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, MQL4Parser.RULE_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.state = 48;
            this.declaration();
            break;

        case 2:
            this.state = 49;
            this.expression(0);
            break;

        }
        this.state = 52;
        this.match(MQL4Parser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_functionDecl;
    this.name = null; // Token
    return this;
}

FunctionDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclContext.prototype.constructor = FunctionDeclContext;

FunctionDeclContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

FunctionDeclContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

FunctionDeclContext.prototype.Identifier = function() {
    return this.getToken(MQL4Parser.Identifier, 0);
};

FunctionDeclContext.prototype.functionArgument = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunctionArgumentContext);
    } else {
        return this.getTypedRuleContext(FunctionArgumentContext,i);
    }
};

FunctionDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterFunctionDecl(this);
	}
};

FunctionDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitFunctionDecl(this);
	}
};

FunctionDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitFunctionDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.FunctionDeclContext = FunctionDeclContext;

MQL4Parser.prototype.functionDecl = function() {

    var localctx = new FunctionDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, MQL4Parser.RULE_functionDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this.type();

        this.state = 55;
        localctx.name = this.match(MQL4Parser.Identifier);
        this.state = 56;
        this.match(MQL4Parser.T__4);
        this.state = 58;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.PredifinedType || _la===MQL4Parser.Identifier) {
            this.state = 57;
            this.functionArgument();
        }

        this.state = 64;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MQL4Parser.T__5) {
            this.state = 60;
            this.match(MQL4Parser.T__5);
            this.state = 61;
            this.functionArgument();
            this.state = 66;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 67;
        this.match(MQL4Parser.T__6);
        this.state = 68;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionArgumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_functionArgument;
    this.name = null; // Token
    return this;
}

FunctionArgumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionArgumentContext.prototype.constructor = FunctionArgumentContext;

FunctionArgumentContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

FunctionArgumentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

FunctionArgumentContext.prototype.Identifier = function() {
    return this.getToken(MQL4Parser.Identifier, 0);
};

FunctionArgumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterFunctionArgument(this);
	}
};

FunctionArgumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitFunctionArgument(this);
	}
};

FunctionArgumentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitFunctionArgument(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.FunctionArgumentContext = FunctionArgumentContext;

MQL4Parser.prototype.functionArgument = function() {

    var localctx = new FunctionArgumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, MQL4Parser.RULE_functionArgument);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.type();

        this.state = 71;
        localctx.name = this.match(MQL4Parser.Identifier);

        this.state = 73; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 72;
            this.match(MQL4Parser.T__7);
            this.state = 75; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===MQL4Parser.T__7);
        this.state = 77;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RootDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_rootDeclaration;
    this.memoryClass = null; // Token
    this.name = null; // Token
    return this;
}

RootDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RootDeclarationContext.prototype.constructor = RootDeclarationContext;

RootDeclarationContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

RootDeclarationContext.prototype.Identifier = function() {
    return this.getToken(MQL4Parser.Identifier, 0);
};

RootDeclarationContext.prototype.indexes = function() {
    return this.getTypedRuleContext(IndexesContext,0);
};

RootDeclarationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

RootDeclarationContext.prototype.MemoryClass = function() {
    return this.getToken(MQL4Parser.MemoryClass, 0);
};

RootDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterRootDeclaration(this);
	}
};

RootDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitRootDeclaration(this);
	}
};

RootDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitRootDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.RootDeclarationContext = RootDeclarationContext;

MQL4Parser.prototype.rootDeclaration = function() {

    var localctx = new RootDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, MQL4Parser.RULE_rootDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.MemoryClass) {
            this.state = 79;
            localctx.memoryClass = this.match(MQL4Parser.MemoryClass);
        }

        this.state = 82;
        this.type();

        this.state = 83;
        localctx.name = this.match(MQL4Parser.Identifier);
        this.state = 85;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.T__42) {
            this.state = 84;
            this.indexes();
        }

        this.state = 89;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.T__7) {
            this.state = 87;
            this.match(MQL4Parser.T__7);
            this.state = 88;
            this.expression(0);
        }

        this.state = 91;
        this.match(MQL4Parser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_declaration;
    this.name = null; // Token
    return this;
}

DeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationContext.prototype.constructor = DeclarationContext;

DeclarationContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

DeclarationContext.prototype.Identifier = function() {
    return this.getToken(MQL4Parser.Identifier, 0);
};

DeclarationContext.prototype.indexes = function() {
    return this.getTypedRuleContext(IndexesContext,0);
};

DeclarationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

DeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterDeclaration(this);
	}
};

DeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitDeclaration(this);
	}
};

DeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.DeclarationContext = DeclarationContext;

MQL4Parser.prototype.declaration = function() {

    var localctx = new DeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, MQL4Parser.RULE_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this.type();

        this.state = 94;
        localctx.name = this.match(MQL4Parser.Identifier);
        this.state = 96;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.T__42) {
            this.state = 95;
            this.indexes();
        }

        this.state = 100;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.T__7) {
            this.state = 98;
            this.match(MQL4Parser.T__7);
            this.state = 99;
            this.expression(0);
        }

        this.state = 102;
        this.match(MQL4Parser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.Identifier = function() {
    return this.getToken(MQL4Parser.Identifier, 0);
};

TypeContext.prototype.PredifinedType = function() {
    return this.getToken(MQL4Parser.PredifinedType, 0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitType(this);
	}
};

TypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.TypeContext = TypeContext;

MQL4Parser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, MQL4Parser.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        _la = this._input.LA(1);
        if(!(_la===MQL4Parser.PredifinedType || _la===MQL4Parser.Identifier)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_idList;
    return this;
}

IdListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdListContext.prototype.constructor = IdListContext;

IdListContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MQL4Parser.Identifier);
    } else {
        return this.getToken(MQL4Parser.Identifier, i);
    }
};


IdListContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterIdList(this);
	}
};

IdListContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitIdList(this);
	}
};

IdListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitIdList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.IdListContext = IdListContext;

MQL4Parser.prototype.idList = function() {

    var localctx = new IdListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, MQL4Parser.RULE_idList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this.match(MQL4Parser.Identifier);
        this.state = 111;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MQL4Parser.T__5) {
            this.state = 107;
            this.match(MQL4Parser.T__5);
            this.state = 108;
            this.match(MQL4Parser.Identifier);
            this.state = 113;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function AssignMultiplyExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignMultiplyExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AssignMultiplyExpressionContext.prototype.constructor = AssignMultiplyExpressionContext;

MQL4Parser.AssignMultiplyExpressionContext = AssignMultiplyExpressionContext;

AssignMultiplyExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AssignMultiplyExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterAssignMultiplyExpression(this);
	}
};

AssignMultiplyExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitAssignMultiplyExpression(this);
	}
};

AssignMultiplyExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitAssignMultiplyExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AssignMinusExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignMinusExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AssignMinusExpressionContext.prototype.constructor = AssignMinusExpressionContext;

MQL4Parser.AssignMinusExpressionContext = AssignMinusExpressionContext;

AssignMinusExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AssignMinusExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterAssignMinusExpression(this);
	}
};

AssignMinusExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitAssignMinusExpression(this);
	}
};

AssignMinusExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitAssignMinusExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DivideExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DivideExpressionContext.prototype = Object.create(ExpressionContext.prototype);
DivideExpressionContext.prototype.constructor = DivideExpressionContext;

MQL4Parser.DivideExpressionContext = DivideExpressionContext;

DivideExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
DivideExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterDivideExpression(this);
	}
};

DivideExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitDivideExpression(this);
	}
};

DivideExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitDivideExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ModulusExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ModulusExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ModulusExpressionContext.prototype.constructor = ModulusExpressionContext;

MQL4Parser.ModulusExpressionContext = ModulusExpressionContext;

ModulusExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
ModulusExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterModulusExpression(this);
	}
};

ModulusExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitModulusExpression(this);
	}
};

ModulusExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitModulusExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqExpressionContext.prototype = Object.create(ExpressionContext.prototype);
EqExpressionContext.prototype.constructor = EqExpressionContext;

MQL4Parser.EqExpressionContext = EqExpressionContext;

EqExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
EqExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterEqExpression(this);
	}
};

EqExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitEqExpression(this);
	}
};

EqExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitEqExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AssignDivideExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignDivideExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AssignDivideExpressionContext.prototype.constructor = AssignDivideExpressionContext;

MQL4Parser.AssignDivideExpressionContext = AssignDivideExpressionContext;

AssignDivideExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AssignDivideExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterAssignDivideExpression(this);
	}
};

AssignDivideExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitAssignDivideExpression(this);
	}
};

AssignDivideExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitAssignDivideExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AddExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AddExpressionContext.prototype.constructor = AddExpressionContext;

MQL4Parser.AddExpressionContext = AddExpressionContext;

AddExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AddExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterAddExpression(this);
	}
};

AddExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitAddExpression(this);
	}
};

AddExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitAddExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AssignExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AssignExpressionContext.prototype.constructor = AssignExpressionContext;

MQL4Parser.AssignExpressionContext = AssignExpressionContext;

AssignExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AssignExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterAssignExpression(this);
	}
};

AssignExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitAssignExpression(this);
	}
};

AssignExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitAssignExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AssignBitXorExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignBitXorExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AssignBitXorExpressionContext.prototype.constructor = AssignBitXorExpressionContext;

MQL4Parser.AssignBitXorExpressionContext = AssignBitXorExpressionContext;

AssignBitXorExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AssignBitXorExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterAssignBitXorExpression(this);
	}
};

AssignBitXorExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitAssignBitXorExpression(this);
	}
};

AssignBitXorExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitAssignBitXorExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OrExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrExpressionContext.prototype = Object.create(ExpressionContext.prototype);
OrExpressionContext.prototype.constructor = OrExpressionContext;

MQL4Parser.OrExpressionContext = OrExpressionContext;

OrExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
OrExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterOrExpression(this);
	}
};

OrExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitOrExpression(this);
	}
};

OrExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitOrExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AssignBitOrExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignBitOrExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AssignBitOrExpressionContext.prototype.constructor = AssignBitOrExpressionContext;

MQL4Parser.AssignBitOrExpressionContext = AssignBitOrExpressionContext;

AssignBitOrExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AssignBitOrExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterAssignBitOrExpression(this);
	}
};

AssignBitOrExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitAssignBitOrExpression(this);
	}
};

AssignBitOrExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitAssignBitOrExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IndexingExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IndexingExpressionContext.prototype = Object.create(ExpressionContext.prototype);
IndexingExpressionContext.prototype.constructor = IndexingExpressionContext;

MQL4Parser.IndexingExpressionContext = IndexingExpressionContext;

IndexingExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
IndexingExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterIndexingExpression(this);
	}
};

IndexingExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitIndexingExpression(this);
	}
};

IndexingExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitIndexingExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ComplementExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ComplementExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ComplementExpressionContext.prototype.constructor = ComplementExpressionContext;

MQL4Parser.ComplementExpressionContext = ComplementExpressionContext;

ComplementExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ComplementExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterComplementExpression(this);
	}
};

ComplementExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitComplementExpression(this);
	}
};

ComplementExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitComplementExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AndExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AndExpressionContext.prototype.constructor = AndExpressionContext;

MQL4Parser.AndExpressionContext = AndExpressionContext;

AndExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AndExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterAndExpression(this);
	}
};

AndExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitAndExpression(this);
	}
};

AndExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitAndExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BoolExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolExpressionContext.prototype = Object.create(ExpressionContext.prototype);
BoolExpressionContext.prototype.constructor = BoolExpressionContext;

MQL4Parser.BoolExpressionContext = BoolExpressionContext;

BoolExpressionContext.prototype.Bool = function() {
    return this.getToken(MQL4Parser.Bool, 0);
};
BoolExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterBoolExpression(this);
	}
};

BoolExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitBoolExpression(this);
	}
};

BoolExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitBoolExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LtExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LtExpressionContext.prototype = Object.create(ExpressionContext.prototype);
LtExpressionContext.prototype.constructor = LtExpressionContext;

MQL4Parser.LtExpressionContext = LtExpressionContext;

LtExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
LtExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterLtExpression(this);
	}
};

LtExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitLtExpression(this);
	}
};

LtExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitLtExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BitOrExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BitOrExpressionContext.prototype = Object.create(ExpressionContext.prototype);
BitOrExpressionContext.prototype.constructor = BitOrExpressionContext;

MQL4Parser.BitOrExpressionContext = BitOrExpressionContext;

BitOrExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
BitOrExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterBitOrExpression(this);
	}
};

BitOrExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitBitOrExpression(this);
	}
};

BitOrExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitBitOrExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpressionExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ExpressionExpressionContext.prototype.constructor = ExpressionExpressionContext;

MQL4Parser.ExpressionExpressionContext = ExpressionExpressionContext;

ExpressionExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ExpressionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterExpressionExpression(this);
	}
};

ExpressionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitExpressionExpression(this);
	}
};

ExpressionExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitExpressionExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NullExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NullExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NullExpressionContext.prototype.constructor = NullExpressionContext;

MQL4Parser.NullExpressionContext = NullExpressionContext;

NullExpressionContext.prototype.Null = function() {
    return this.getToken(MQL4Parser.Null, 0);
};
NullExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterNullExpression(this);
	}
};

NullExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitNullExpression(this);
	}
};

NullExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitNullExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AssignShiftBitLeftExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignShiftBitLeftExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AssignShiftBitLeftExpressionContext.prototype.constructor = AssignShiftBitLeftExpressionContext;

MQL4Parser.AssignShiftBitLeftExpressionContext = AssignShiftBitLeftExpressionContext;

AssignShiftBitLeftExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AssignShiftBitLeftExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterAssignShiftBitLeftExpression(this);
	}
};

AssignShiftBitLeftExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitAssignShiftBitLeftExpression(this);
	}
};

AssignShiftBitLeftExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitAssignShiftBitLeftExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AssignBitAndExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignBitAndExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AssignBitAndExpressionContext.prototype.constructor = AssignBitAndExpressionContext;

MQL4Parser.AssignBitAndExpressionContext = AssignBitAndExpressionContext;

AssignBitAndExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AssignBitAndExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterAssignBitAndExpression(this);
	}
};

AssignBitAndExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitAssignBitAndExpression(this);
	}
};

AssignBitAndExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitAssignBitAndExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PostIncExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PostIncExpressionContext.prototype = Object.create(ExpressionContext.prototype);
PostIncExpressionContext.prototype.constructor = PostIncExpressionContext;

MQL4Parser.PostIncExpressionContext = PostIncExpressionContext;

PostIncExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
PostIncExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterPostIncExpression(this);
	}
};

PostIncExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitPostIncExpression(this);
	}
};

PostIncExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitPostIncExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BitXorExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BitXorExpressionContext.prototype = Object.create(ExpressionContext.prototype);
BitXorExpressionContext.prototype.constructor = BitXorExpressionContext;

MQL4Parser.BitXorExpressionContext = BitXorExpressionContext;

BitXorExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
BitXorExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterBitXorExpression(this);
	}
};

BitXorExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitBitXorExpression(this);
	}
};

BitXorExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitBitXorExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LtEqExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LtEqExpressionContext.prototype = Object.create(ExpressionContext.prototype);
LtEqExpressionContext.prototype.constructor = LtEqExpressionContext;

MQL4Parser.LtEqExpressionContext = LtEqExpressionContext;

LtEqExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
LtEqExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterLtEqExpression(this);
	}
};

LtEqExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitLtEqExpression(this);
	}
};

LtEqExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitLtEqExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ShiftBitLeftExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ShiftBitLeftExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ShiftBitLeftExpressionContext.prototype.constructor = ShiftBitLeftExpressionContext;

MQL4Parser.ShiftBitLeftExpressionContext = ShiftBitLeftExpressionContext;

ShiftBitLeftExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
ShiftBitLeftExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterShiftBitLeftExpression(this);
	}
};

ShiftBitLeftExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitShiftBitLeftExpression(this);
	}
};

ShiftBitLeftExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitShiftBitLeftExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringExpressionContext.prototype = Object.create(ExpressionContext.prototype);
StringExpressionContext.prototype.constructor = StringExpressionContext;

MQL4Parser.StringExpressionContext = StringExpressionContext;

StringExpressionContext.prototype.String = function() {
    return this.getToken(MQL4Parser.String, 0);
};
StringExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterStringExpression(this);
	}
};

StringExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitStringExpression(this);
	}
};

StringExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitStringExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdentifierExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierExpressionContext.prototype = Object.create(ExpressionContext.prototype);
IdentifierExpressionContext.prototype.constructor = IdentifierExpressionContext;

MQL4Parser.IdentifierExpressionContext = IdentifierExpressionContext;

IdentifierExpressionContext.prototype.Identifier = function() {
    return this.getToken(MQL4Parser.Identifier, 0);
};
IdentifierExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterIdentifierExpression(this);
	}
};

IdentifierExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitIdentifierExpression(this);
	}
};

IdentifierExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitIdentifierExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NotExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NotExpressionContext.prototype.constructor = NotExpressionContext;

MQL4Parser.NotExpressionContext = NotExpressionContext;

NotExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
NotExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterNotExpression(this);
	}
};

NotExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitNotExpression(this);
	}
};

NotExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitNotExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GtEqExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GtEqExpressionContext.prototype = Object.create(ExpressionContext.prototype);
GtEqExpressionContext.prototype.constructor = GtEqExpressionContext;

MQL4Parser.GtEqExpressionContext = GtEqExpressionContext;

GtEqExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
GtEqExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterGtEqExpression(this);
	}
};

GtEqExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitGtEqExpression(this);
	}
};

GtEqExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitGtEqExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PreDecExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreDecExpressionContext.prototype = Object.create(ExpressionContext.prototype);
PreDecExpressionContext.prototype.constructor = PreDecExpressionContext;

MQL4Parser.PreDecExpressionContext = PreDecExpressionContext;

PreDecExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
PreDecExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterPreDecExpression(this);
	}
};

PreDecExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitPreDecExpression(this);
	}
};

PreDecExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitPreDecExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ShiftBitRightExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ShiftBitRightExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ShiftBitRightExpressionContext.prototype.constructor = ShiftBitRightExpressionContext;

MQL4Parser.ShiftBitRightExpressionContext = ShiftBitRightExpressionContext;

ShiftBitRightExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
ShiftBitRightExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterShiftBitRightExpression(this);
	}
};

ShiftBitRightExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitShiftBitRightExpression(this);
	}
};

ShiftBitRightExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitShiftBitRightExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BitAndExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BitAndExpressionContext.prototype = Object.create(ExpressionContext.prototype);
BitAndExpressionContext.prototype.constructor = BitAndExpressionContext;

MQL4Parser.BitAndExpressionContext = BitAndExpressionContext;

BitAndExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
BitAndExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterBitAndExpression(this);
	}
};

BitAndExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitBitAndExpression(this);
	}
};

BitAndExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitBitAndExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NotEqExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NotEqExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NotEqExpressionContext.prototype.constructor = NotEqExpressionContext;

MQL4Parser.NotEqExpressionContext = NotEqExpressionContext;

NotEqExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
NotEqExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterNotEqExpression(this);
	}
};

NotEqExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitNotEqExpression(this);
	}
};

NotEqExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitNotEqExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MultipleExpressionsContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultipleExpressionsContext.prototype = Object.create(ExpressionContext.prototype);
MultipleExpressionsContext.prototype.constructor = MultipleExpressionsContext;

MQL4Parser.MultipleExpressionsContext = MultipleExpressionsContext;

MultipleExpressionsContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
MultipleExpressionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterMultipleExpressions(this);
	}
};

MultipleExpressionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitMultipleExpressions(this);
	}
};

MultipleExpressionsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitMultipleExpressions(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AssignModulusExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignModulusExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AssignModulusExpressionContext.prototype.constructor = AssignModulusExpressionContext;

MQL4Parser.AssignModulusExpressionContext = AssignModulusExpressionContext;

AssignModulusExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AssignModulusExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterAssignModulusExpression(this);
	}
};

AssignModulusExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitAssignModulusExpression(this);
	}
};

AssignModulusExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitAssignModulusExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SubtractExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SubtractExpressionContext.prototype = Object.create(ExpressionContext.prototype);
SubtractExpressionContext.prototype.constructor = SubtractExpressionContext;

MQL4Parser.SubtractExpressionContext = SubtractExpressionContext;

SubtractExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
SubtractExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterSubtractExpression(this);
	}
};

SubtractExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitSubtractExpression(this);
	}
};

SubtractExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitSubtractExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MultiplyExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplyExpressionContext.prototype = Object.create(ExpressionContext.prototype);
MultiplyExpressionContext.prototype.constructor = MultiplyExpressionContext;

MQL4Parser.MultiplyExpressionContext = MultiplyExpressionContext;

MultiplyExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
MultiplyExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterMultiplyExpression(this);
	}
};

MultiplyExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitMultiplyExpression(this);
	}
};

MultiplyExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitMultiplyExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TernaryExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TernaryExpressionContext.prototype = Object.create(ExpressionContext.prototype);
TernaryExpressionContext.prototype.constructor = TernaryExpressionContext;

MQL4Parser.TernaryExpressionContext = TernaryExpressionContext;

TernaryExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
TernaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterTernaryExpression(this);
	}
};

TernaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitTernaryExpression(this);
	}
};

TernaryExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitTernaryExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GtExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GtExpressionContext.prototype = Object.create(ExpressionContext.prototype);
GtExpressionContext.prototype.constructor = GtExpressionContext;

MQL4Parser.GtExpressionContext = GtExpressionContext;

GtExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
GtExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterGtExpression(this);
	}
};

GtExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitGtExpression(this);
	}
};

GtExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitGtExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnaryMinusExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryMinusExpressionContext.prototype = Object.create(ExpressionContext.prototype);
UnaryMinusExpressionContext.prototype.constructor = UnaryMinusExpressionContext;

MQL4Parser.UnaryMinusExpressionContext = UnaryMinusExpressionContext;

UnaryMinusExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
UnaryMinusExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterUnaryMinusExpression(this);
	}
};

UnaryMinusExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitUnaryMinusExpression(this);
	}
};

UnaryMinusExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitUnaryMinusExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PreIncExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreIncExpressionContext.prototype = Object.create(ExpressionContext.prototype);
PreIncExpressionContext.prototype.constructor = PreIncExpressionContext;

MQL4Parser.PreIncExpressionContext = PreIncExpressionContext;

PreIncExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
PreIncExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterPreIncExpression(this);
	}
};

PreIncExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitPreIncExpression(this);
	}
};

PreIncExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitPreIncExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AssignShiftBitRightExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignShiftBitRightExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AssignShiftBitRightExpressionContext.prototype.constructor = AssignShiftBitRightExpressionContext;

MQL4Parser.AssignShiftBitRightExpressionContext = AssignShiftBitRightExpressionContext;

AssignShiftBitRightExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AssignShiftBitRightExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterAssignShiftBitRightExpression(this);
	}
};

AssignShiftBitRightExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitAssignShiftBitRightExpression(this);
	}
};

AssignShiftBitRightExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitAssignShiftBitRightExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FunctionCallExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionCallExpressionContext.prototype = Object.create(ExpressionContext.prototype);
FunctionCallExpressionContext.prototype.constructor = FunctionCallExpressionContext;

MQL4Parser.FunctionCallExpressionContext = FunctionCallExpressionContext;

FunctionCallExpressionContext.prototype.Identifier = function() {
    return this.getToken(MQL4Parser.Identifier, 0);
};

FunctionCallExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
FunctionCallExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterFunctionCallExpression(this);
	}
};

FunctionCallExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitFunctionCallExpression(this);
	}
};

FunctionCallExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitFunctionCallExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NumberExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberExpressionContext.prototype = Object.create(ExpressionContext.prototype);
NumberExpressionContext.prototype.constructor = NumberExpressionContext;

MQL4Parser.NumberExpressionContext = NumberExpressionContext;

NumberExpressionContext.prototype.Number = function() {
    return this.getToken(MQL4Parser.Number, 0);
};
NumberExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterNumberExpression(this);
	}
};

NumberExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitNumberExpression(this);
	}
};

NumberExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitNumberExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AssignAddExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignAddExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AssignAddExpressionContext.prototype.constructor = AssignAddExpressionContext;

MQL4Parser.AssignAddExpressionContext = AssignAddExpressionContext;

AssignAddExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AssignAddExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterAssignAddExpression(this);
	}
};

AssignAddExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitAssignAddExpression(this);
	}
};

AssignAddExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitAssignAddExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PostDecExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PostDecExpressionContext.prototype = Object.create(ExpressionContext.prototype);
PostDecExpressionContext.prototype.constructor = PostDecExpressionContext;

MQL4Parser.PostDecExpressionContext = PostDecExpressionContext;

PostDecExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
PostDecExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterPostDecExpression(this);
	}
};

PostDecExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitPostDecExpression(this);
	}
};

PostDecExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitPostDecExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



MQL4Parser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 20;
    this.enterRecursionRule(localctx, 20, MQL4Parser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            localctx = new UnaryMinusExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 115;
            this.match(MQL4Parser.T__8);
            this.state = 116;
            this.expression(46);
            break;

        case 2:
            localctx = new NotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 117;
            this.match(MQL4Parser.T__9);
            this.state = 118;
            this.expression(45);
            break;

        case 3:
            localctx = new ComplementExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 119;
            this.match(MQL4Parser.T__10);
            this.state = 120;
            this.expression(44);
            break;

        case 4:
            localctx = new PreDecExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 121;
            this.match(MQL4Parser.T__21);
            this.state = 122;
            this.expression(32);
            break;

        case 5:
            localctx = new PreIncExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 123;
            this.match(MQL4Parser.T__22);
            this.state = 124;
            this.expression(31);
            break;

        case 6:
            localctx = new StringExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 125;
            this.match(MQL4Parser.String);
            break;

        case 7:
            localctx = new BoolExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 126;
            this.match(MQL4Parser.Bool);
            break;

        case 8:
            localctx = new NumberExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 127;
            this.match(MQL4Parser.Number);
            break;

        case 9:
            localctx = new IdentifierExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 128;
            this.match(MQL4Parser.Identifier);
            break;

        case 10:
            localctx = new NullExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 129;
            this.match(MQL4Parser.Null);
            break;

        case 11:
            localctx = new FunctionCallExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 130;
            this.match(MQL4Parser.Identifier);
            this.state = 131;
            this.match(MQL4Parser.T__4);
            this.state = 132;
            this.expression(0);
            this.state = 133;
            this.match(MQL4Parser.T__6);
            break;

        case 12:
            localctx = new ExpressionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 135;
            this.match(MQL4Parser.T__4);
            this.state = 136;
            this.expression(0);
            this.state = 137;
            this.match(MQL4Parser.T__6);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 248;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 246;
                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new AssignExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 141;
                    if (!( this.precpred(this._ctx, 43))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 43)");
                    }
                    this.state = 142;
                    this.match(MQL4Parser.T__7);
                    this.state = 143;
                    this.expression(44);
                    break;

                case 2:
                    localctx = new AssignAddExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 144;
                    if (!( this.precpred(this._ctx, 42))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 42)");
                    }
                    this.state = 145;
                    this.match(MQL4Parser.T__11);
                    this.state = 146;
                    this.expression(43);
                    break;

                case 3:
                    localctx = new AssignMinusExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 147;
                    if (!( this.precpred(this._ctx, 41))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 41)");
                    }
                    this.state = 148;
                    this.match(MQL4Parser.T__12);
                    this.state = 149;
                    this.expression(42);
                    break;

                case 4:
                    localctx = new AssignMultiplyExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 150;
                    if (!( this.precpred(this._ctx, 40))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 40)");
                    }
                    this.state = 151;
                    this.match(MQL4Parser.T__13);
                    this.state = 152;
                    this.expression(41);
                    break;

                case 5:
                    localctx = new AssignDivideExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 153;
                    if (!( this.precpred(this._ctx, 39))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 39)");
                    }
                    this.state = 154;
                    this.match(MQL4Parser.T__14);
                    this.state = 155;
                    this.expression(40);
                    break;

                case 6:
                    localctx = new AssignModulusExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 156;
                    if (!( this.precpred(this._ctx, 38))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 38)");
                    }
                    this.state = 157;
                    this.match(MQL4Parser.T__15);
                    this.state = 158;
                    this.expression(39);
                    break;

                case 7:
                    localctx = new AssignShiftBitRightExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 159;
                    if (!( this.precpred(this._ctx, 37))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 37)");
                    }
                    this.state = 160;
                    this.match(MQL4Parser.T__16);
                    this.state = 161;
                    this.expression(38);
                    break;

                case 8:
                    localctx = new AssignShiftBitLeftExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 162;
                    if (!( this.precpred(this._ctx, 36))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 36)");
                    }
                    this.state = 163;
                    this.match(MQL4Parser.T__17);
                    this.state = 164;
                    this.expression(37);
                    break;

                case 9:
                    localctx = new AssignBitAndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 165;
                    if (!( this.precpred(this._ctx, 35))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 35)");
                    }
                    this.state = 166;
                    this.match(MQL4Parser.T__18);
                    this.state = 167;
                    this.expression(36);
                    break;

                case 10:
                    localctx = new AssignBitOrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 168;
                    if (!( this.precpred(this._ctx, 34))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 34)");
                    }
                    this.state = 169;
                    this.match(MQL4Parser.T__19);
                    this.state = 170;
                    this.expression(35);
                    break;

                case 11:
                    localctx = new AssignBitXorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 171;
                    if (!( this.precpred(this._ctx, 33))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 33)");
                    }
                    this.state = 172;
                    this.match(MQL4Parser.T__20);
                    this.state = 173;
                    this.expression(34);
                    break;

                case 12:
                    localctx = new ShiftBitRightExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 174;
                    if (!( this.precpred(this._ctx, 28))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 28)");
                    }
                    this.state = 175;
                    this.match(MQL4Parser.T__23);
                    this.state = 176;
                    this.expression(29);
                    break;

                case 13:
                    localctx = new ShiftBitLeftExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 177;
                    if (!( this.precpred(this._ctx, 27))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 27)");
                    }
                    this.state = 178;
                    this.match(MQL4Parser.T__24);
                    this.state = 179;
                    this.expression(28);
                    break;

                case 14:
                    localctx = new BitAndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 180;
                    if (!( this.precpred(this._ctx, 26))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 26)");
                    }
                    this.state = 181;
                    this.match(MQL4Parser.T__25);
                    this.state = 182;
                    this.expression(27);
                    break;

                case 15:
                    localctx = new BitOrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 183;
                    if (!( this.precpred(this._ctx, 25))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
                    }
                    this.state = 184;
                    this.match(MQL4Parser.T__26);
                    this.state = 185;
                    this.expression(26);
                    break;

                case 16:
                    localctx = new BitXorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 186;
                    if (!( this.precpred(this._ctx, 24))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
                    }
                    this.state = 187;
                    this.match(MQL4Parser.T__27);
                    this.state = 188;
                    this.expression(25);
                    break;

                case 17:
                    localctx = new MultiplyExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 189;
                    if (!( this.precpred(this._ctx, 23))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
                    }
                    this.state = 190;
                    this.match(MQL4Parser.T__28);
                    this.state = 191;
                    this.expression(24);
                    break;

                case 18:
                    localctx = new DivideExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 192;
                    if (!( this.precpred(this._ctx, 22))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
                    }
                    this.state = 193;
                    this.match(MQL4Parser.T__29);
                    this.state = 194;
                    this.expression(23);
                    break;

                case 19:
                    localctx = new ModulusExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 195;
                    if (!( this.precpred(this._ctx, 21))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                    }
                    this.state = 196;
                    this.match(MQL4Parser.T__30);
                    this.state = 197;
                    this.expression(22);
                    break;

                case 20:
                    localctx = new AddExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 198;
                    if (!( this.precpred(this._ctx, 20))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                    }
                    this.state = 199;
                    this.match(MQL4Parser.T__31);
                    this.state = 200;
                    this.expression(21);
                    break;

                case 21:
                    localctx = new SubtractExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 201;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 202;
                    this.match(MQL4Parser.T__8);
                    this.state = 203;
                    this.expression(20);
                    break;

                case 22:
                    localctx = new GtEqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 204;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 205;
                    this.match(MQL4Parser.T__32);
                    this.state = 206;
                    this.expression(19);
                    break;

                case 23:
                    localctx = new LtEqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 207;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 208;
                    this.match(MQL4Parser.T__33);
                    this.state = 209;
                    this.expression(18);
                    break;

                case 24:
                    localctx = new GtExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 210;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 211;
                    this.match(MQL4Parser.T__34);
                    this.state = 212;
                    this.expression(17);
                    break;

                case 25:
                    localctx = new LtExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 213;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 214;
                    this.match(MQL4Parser.T__35);
                    this.state = 215;
                    this.expression(16);
                    break;

                case 26:
                    localctx = new EqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 216;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 217;
                    this.match(MQL4Parser.T__36);
                    this.state = 218;
                    this.expression(15);
                    break;

                case 27:
                    localctx = new NotEqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 219;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 220;
                    this.match(MQL4Parser.T__37);
                    this.state = 221;
                    this.expression(14);
                    break;

                case 28:
                    localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 222;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 223;
                    this.match(MQL4Parser.T__38);
                    this.state = 224;
                    this.expression(13);
                    break;

                case 29:
                    localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 225;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 226;
                    this.match(MQL4Parser.T__39);
                    this.state = 227;
                    this.expression(12);
                    break;

                case 30:
                    localctx = new TernaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 228;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 229;
                    this.match(MQL4Parser.T__40);
                    this.state = 230;
                    this.expression(0);
                    this.state = 231;
                    this.match(MQL4Parser.T__41);
                    this.state = 232;
                    this.expression(11);
                    break;

                case 31:
                    localctx = new MultipleExpressionsContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 234;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 235;
                    this.match(MQL4Parser.T__5);
                    this.state = 236;
                    this.expression(2);
                    break;

                case 32:
                    localctx = new PostDecExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 237;
                    if (!( this.precpred(this._ctx, 30))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 30)");
                    }
                    this.state = 238;
                    this.match(MQL4Parser.T__21);
                    break;

                case 33:
                    localctx = new PostIncExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 239;
                    if (!( this.precpred(this._ctx, 29))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 29)");
                    }
                    this.state = 240;
                    this.match(MQL4Parser.T__22);
                    break;

                case 34:
                    localctx = new IndexingExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 241;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 242;
                    this.match(MQL4Parser.T__42);
                    this.state = 243;
                    this.expression(0);
                    this.state = 244;
                    this.match(MQL4Parser.T__43);
                    break;

                } 
            }
            this.state = 250;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function IndexesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_indexes;
    return this;
}

IndexesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IndexesContext.prototype.constructor = IndexesContext;

IndexesContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

IndexesContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterIndexes(this);
	}
};

IndexesContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitIndexes(this);
	}
};

IndexesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitIndexes(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.IndexesContext = IndexesContext;

MQL4Parser.prototype.indexes = function() {

    var localctx = new IndexesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, MQL4Parser.RULE_indexes);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 251;
            this.match(MQL4Parser.T__42);
            this.state = 252;
            this.expression(0);
            this.state = 253;
            this.match(MQL4Parser.T__43);
            this.state = 257; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===MQL4Parser.T__42);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


MQL4Parser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 10:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

MQL4Parser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 43);
		case 1:
			return this.precpred(this._ctx, 42);
		case 2:
			return this.precpred(this._ctx, 41);
		case 3:
			return this.precpred(this._ctx, 40);
		case 4:
			return this.precpred(this._ctx, 39);
		case 5:
			return this.precpred(this._ctx, 38);
		case 6:
			return this.precpred(this._ctx, 37);
		case 7:
			return this.precpred(this._ctx, 36);
		case 8:
			return this.precpred(this._ctx, 35);
		case 9:
			return this.precpred(this._ctx, 34);
		case 10:
			return this.precpred(this._ctx, 33);
		case 11:
			return this.precpred(this._ctx, 28);
		case 12:
			return this.precpred(this._ctx, 27);
		case 13:
			return this.precpred(this._ctx, 26);
		case 14:
			return this.precpred(this._ctx, 25);
		case 15:
			return this.precpred(this._ctx, 24);
		case 16:
			return this.precpred(this._ctx, 23);
		case 17:
			return this.precpred(this._ctx, 22);
		case 18:
			return this.precpred(this._ctx, 21);
		case 19:
			return this.precpred(this._ctx, 20);
		case 20:
			return this.precpred(this._ctx, 19);
		case 21:
			return this.precpred(this._ctx, 18);
		case 22:
			return this.precpred(this._ctx, 17);
		case 23:
			return this.precpred(this._ctx, 16);
		case 24:
			return this.precpred(this._ctx, 15);
		case 25:
			return this.precpred(this._ctx, 14);
		case 26:
			return this.precpred(this._ctx, 13);
		case 27:
			return this.precpred(this._ctx, 12);
		case 28:
			return this.precpred(this._ctx, 11);
		case 29:
			return this.precpred(this._ctx, 10);
		case 30:
			return this.precpred(this._ctx, 1);
		case 31:
			return this.precpred(this._ctx, 30);
		case 32:
			return this.precpred(this._ctx, 29);
		case 33:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.MQL4Parser = MQL4Parser;
