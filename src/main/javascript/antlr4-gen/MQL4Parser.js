// Generated from MQL4.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MQL4Listener = require('./MQL4Listener').MQL4Listener;
var MQL4Visitor = require('./MQL4Visitor').MQL4Visitor;

var grammarFileName = "MQL4.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003H\u01c2\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0007\u00028\n\u0002\f\u0002\u000e\u0002",
    ";\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003D\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005",
    "\u0006S\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005",
    "\u0007_\n\u0007\u0003\u0007\u0003\u0007\u0007\u0007c\n\u0007\f\u0007",
    "\u000e\u0007f\u000b\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0006\u0007o\n\u0007\r\u0007",
    "\u000e\u0007p\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007~\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u0082",
    "\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u0086\n\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007\u0091\n\u0007\u0003\b\u0003\b\u0003",
    "\b\u0007\b\u0096\n\b\f\b\u000e\b\u0099\u000b\b\u0003\t\u0003\t\u0005",
    "\t\u009d\n\t\u0003\n\u0003\n\u0003\n\u0005\n\u00a2\n\n\u0003\n\u0003",
    "\n\u0007\n\u00a6\n\n\f\n\u000e\n\u00a9\u000b\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0007\u000b\u00af\n\u000b\f\u000b\u000e\u000b",
    "\u00b2\u000b\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00b6\n\u000b",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0007",
    "\r\u00c0\n\r\f\r\u000e\r\u00c3\u000b\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00cc\n\u000e",
    "\u0007\u000e\u00ce\n\u000e\f\u000e\u000e\u000e\u00d1\u000b\u000e\u0003",
    "\u000e\u0003\u000e\u0005\u000e\u00d5\n\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0005\u000f\u00da\n\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0005\u0010\u00e0\n\u0010\u0003\u0010\u0003\u0010",
    "\u0007\u0010\u00e4\n\u0010\f\u0010\u000e\u0010\u00e7\u000b\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0005\u0011\u00ee",
    "\n\u0011\u0003\u0011\u0003\u0011\u0006\u0011\u00f2\n\u0011\r\u0011\u000e",
    "\u0011\u00f3\u0003\u0011\u0005\u0011\u00f7\n\u0011\u0003\u0012\u0005",
    "\u0012\u00fa\n\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00fe\n\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u0103\n\u0012\f\u0012",
    "\u000e\u0012\u0106\u000b\u0012\u0003\u0013\u0003\u0013\u0005\u0013\u010a",
    "\n\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u010e\n\u0013\u0003\u0014",
    "\u0003\u0014\u0005\u0014\u0112\n\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0007",
    "\u0016\u0134\n\u0016\f\u0016\u000e\u0016\u0137\u000b\u0016\u0003\u0016",
    "\u0005\u0016\u013a\n\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0005",
    "\u0016\u013f\n\u0016\u0005\u0016\u0141\n\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0007\u0016\u01a9\n",
    "\u0016\f\u0016\u000e\u0016\u01ac\u000b\u0016\u0003\u0016\u0005\u0016",
    "\u01af\n\u0016\u0003\u0016\u0007\u0016\u01b2\n\u0016\f\u0016\u000e\u0016",
    "\u01b5\u000b\u0016\u0003\u0017\u0005\u0017\u01b8\n\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0006\u0017\u01be\n\u0017\r\u0017",
    "\u000e\u0017\u01bf\u0003\u0017\u0002\u0003*\u0018\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*",
    ",\u0002\u0003\u0004\u0002>>AA\u0210\u00029\u0003\u0002\u0002\u0002\u0004",
    "C\u0003\u0002\u0002\u0002\u0006E\u0003\u0002\u0002\u0002\bI\u0003\u0002",
    "\u0002\u0002\nR\u0003\u0002\u0002\u0002\f\u0090\u0003\u0002\u0002\u0002",
    "\u000e\u0092\u0003\u0002\u0002\u0002\u0010\u009c\u0003\u0002\u0002\u0002",
    "\u0012\u00a1\u0003\u0002\u0002\u0002\u0014\u00aa\u0003\u0002\u0002\u0002",
    "\u0016\u00b7\u0003\u0002\u0002\u0002\u0018\u00bb\u0003\u0002\u0002\u0002",
    "\u001a\u00c6\u0003\u0002\u0002\u0002\u001c\u00d6\u0003\u0002\u0002\u0002",
    "\u001e\u00db\u0003\u0002\u0002\u0002 \u00eb\u0003\u0002\u0002\u0002",
    "\"\u00f9\u0003\u0002\u0002\u0002$\u0107\u0003\u0002\u0002\u0002&\u0111",
    "\u0003\u0002\u0002\u0002(\u0113\u0003\u0002\u0002\u0002*\u0140\u0003",
    "\u0002\u0002\u0002,\u01b7\u0003\u0002\u0002\u0002.8\u0005\u0004\u0003",
    "\u0002/8\u0005\u0006\u0004\u000208\u0005\b\u0005\u000212\u0005\"\u0012",
    "\u000223\u0007\u0003\u0002\u000238\u0003\u0002\u0002\u000248\u0005\u001a",
    "\u000e\u000258\u0005\u001e\u0010\u000268\u0005\u0014\u000b\u00027.\u0003",
    "\u0002\u0002\u00027/\u0003\u0002\u0002\u000270\u0003\u0002\u0002\u0002",
    "71\u0003\u0002\u0002\u000274\u0003\u0002\u0002\u000275\u0003\u0002\u0002",
    "\u000276\u0003\u0002\u0002\u00028;\u0003\u0002\u0002\u000297\u0003\u0002",
    "\u0002\u00029:\u0003\u0002\u0002\u0002:\u0003\u0003\u0002\u0002\u0002",
    ";9\u0003\u0002\u0002\u0002<=\u0007\u0004\u0002\u0002=D\u0007B\u0002",
    "\u0002>?\u0007\u0004\u0002\u0002?@\u0007\u0005\u0002\u0002@A\u0005*",
    "\u0016\u0002AB\u0007\u0006\u0002\u0002BD\u0003\u0002\u0002\u0002C<\u0003",
    "\u0002\u0002\u0002C>\u0003\u0002\u0002\u0002D\u0005\u0003\u0002\u0002",
    "\u0002EF\u0007\u0007\u0002\u0002FG\u0007A\u0002\u0002GH\u0005*\u0016",
    "\u0002H\u0007\u0003\u0002\u0002\u0002IJ\u0007E\u0002\u0002J\t\u0003",
    "\u0002\u0002\u0002KL\u0005\"\u0012\u0002LM\u0007\u0003\u0002\u0002M",
    "S\u0003\u0002\u0002\u0002NS\u0005\f\u0007\u0002OS\u0005\u0004\u0003",
    "\u0002PS\u0005\u0006\u0004\u0002QS\u0005\b\u0005\u0002RK\u0003\u0002",
    "\u0002\u0002RN\u0003\u0002\u0002\u0002RO\u0003\u0002\u0002\u0002RP\u0003",
    "\u0002\u0002\u0002RQ\u0003\u0002\u0002\u0002S\u000b\u0003\u0002\u0002",
    "\u0002TU\u0005*\u0016\u0002UV\u0007\u0003\u0002\u0002V\u0091\u0003\u0002",
    "\u0002\u0002WX\u0007\b\u0002\u0002XY\u0007\t\u0002\u0002YZ\u0005*\u0016",
    "\u0002Z[\u0007\n\u0002\u0002[^\u0005\f\u0007\u0002\\]\u0007\u000b\u0002",
    "\u0002]_\u0005\f\u0007\u0002^\\\u0003\u0002\u0002\u0002^_\u0003\u0002",
    "\u0002\u0002_\u0091\u0003\u0002\u0002\u0002`d\u0007\f\u0002\u0002ac",
    "\u0005\n\u0006\u0002ba\u0003\u0002\u0002\u0002cf\u0003\u0002\u0002\u0002",
    "db\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002eg\u0003\u0002\u0002",
    "\u0002fd\u0003\u0002\u0002\u0002g\u0091\u0007\r\u0002\u0002hi\u0007",
    "\u000e\u0002\u0002ij\u0007\t\u0002\u0002jk\u0005*\u0016\u0002kl\u0007",
    "\n\u0002\u0002ln\u0007\f\u0002\u0002mo\u0005\u0012\n\u0002nm\u0003\u0002",
    "\u0002\u0002op\u0003\u0002\u0002\u0002pn\u0003\u0002\u0002\u0002pq\u0003",
    "\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002rs\u0007\r\u0002\u0002s",
    "\u0091\u0003\u0002\u0002\u0002tu\u0007\u000f\u0002\u0002uv\u0007\t\u0002",
    "\u0002vw\u0005*\u0016\u0002wx\u0007\n\u0002\u0002xy\u0005\f\u0007\u0002",
    "y\u0091\u0003\u0002\u0002\u0002z{\u0007\u0010\u0002\u0002{}\u0007\t",
    "\u0002\u0002|~\u0005\u000e\b\u0002}|\u0003\u0002\u0002\u0002}~\u0003",
    "\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0081\u0007",
    "\u0003\u0002\u0002\u0080\u0082\u0005\u000e\b\u0002\u0081\u0080\u0003",
    "\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0083\u0003",
    "\u0002\u0002\u0002\u0083\u0085\u0007\u0003\u0002\u0002\u0084\u0086\u0005",
    "\u000e\b\u0002\u0085\u0084\u0003\u0002\u0002\u0002\u0085\u0086\u0003",
    "\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0088\u0007",
    "\n\u0002\u0002\u0088\u0091\u0005\f\u0007\u0002\u0089\u008a\u0007\u0011",
    "\u0002\u0002\u008a\u008b\u0005\f\u0007\u0002\u008b\u008c\u0007\u000f",
    "\u0002\u0002\u008c\u008d\u0007\t\u0002\u0002\u008d\u008e\u0005*\u0016",
    "\u0002\u008e\u008f\u0007\n\u0002\u0002\u008f\u0091\u0003\u0002\u0002",
    "\u0002\u0090T\u0003\u0002\u0002\u0002\u0090W\u0003\u0002\u0002\u0002",
    "\u0090`\u0003\u0002\u0002\u0002\u0090h\u0003\u0002\u0002\u0002\u0090",
    "t\u0003\u0002\u0002\u0002\u0090z\u0003\u0002\u0002\u0002\u0090\u0089",
    "\u0003\u0002\u0002\u0002\u0091\r\u0003\u0002\u0002\u0002\u0092\u0097",
    "\u0005\u0010\t\u0002\u0093\u0094\u0007\u0012\u0002\u0002\u0094\u0096",
    "\u0005\u0010\t\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0096\u0099",
    "\u0003\u0002\u0002\u0002\u0097\u0095\u0003\u0002\u0002\u0002\u0097\u0098",
    "\u0003\u0002\u0002\u0002\u0098\u000f\u0003\u0002\u0002\u0002\u0099\u0097",
    "\u0003\u0002\u0002\u0002\u009a\u009d\u0005\"\u0012\u0002\u009b\u009d",
    "\u0005*\u0016\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009c\u009b",
    "\u0003\u0002\u0002\u0002\u009d\u0011\u0003\u0002\u0002\u0002\u009e\u009f",
    "\u0007\u0013\u0002\u0002\u009f\u00a2\u0005*\u0016\u0002\u00a0\u00a2",
    "\u0007\u0014\u0002\u0002\u00a1\u009e\u0003\u0002\u0002\u0002\u00a1\u00a0",
    "\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3\u00a7",
    "\u0007\u0015\u0002\u0002\u00a4\u00a6\u0005\n\u0006\u0002\u00a5\u00a4",
    "\u0003\u0002\u0002\u0002\u00a6\u00a9\u0003\u0002\u0002\u0002\u00a7\u00a5",
    "\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002\u0002\u00a8\u0013",
    "\u0003\u0002\u0002\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00aa\u00ab",
    "\u0007\u0016\u0002\u0002\u00ab\u00ac\u0007A\u0002\u0002\u00ac\u00b0",
    "\u0007\f\u0002\u0002\u00ad\u00af\u0005\u0016\f\u0002\u00ae\u00ad\u0003",
    "\u0002\u0002\u0002\u00af\u00b2\u0003\u0002\u0002\u0002\u00b0\u00ae\u0003",
    "\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b3\u0003",
    "\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b3\u00b5\u0007",
    "\r\u0002\u0002\u00b4\u00b6\u0007\u0003\u0002\u0002\u00b5\u00b4\u0003",
    "\u0002\u0002\u0002\u00b5\u00b6\u0003\u0002\u0002\u0002\u00b6\u0015\u0003",
    "\u0002\u0002\u0002\u00b7\u00b8\u0005(\u0015\u0002\u00b8\u00b9\u0007",
    "A\u0002\u0002\u00b9\u00ba\u0007\u0003\u0002\u0002\u00ba\u0017\u0003",
    "\u0002\u0002\u0002\u00bb\u00bc\u0007\f\u0002\u0002\u00bc\u00c1\u0005",
    "*\u0016\u0002\u00bd\u00be\u0007\u0012\u0002\u0002\u00be\u00c0\u0005",
    "*\u0016\u0002\u00bf\u00bd\u0003\u0002\u0002\u0002\u00c0\u00c3\u0003",
    "\u0002\u0002\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c1\u00c2\u0003",
    "\u0002\u0002\u0002\u00c2\u00c4\u0003\u0002\u0002\u0002\u00c3\u00c1\u0003",
    "\u0002\u0002\u0002\u00c4\u00c5\u0007\r\u0002\u0002\u00c5\u0019\u0003",
    "\u0002\u0002\u0002\u00c6\u00c7\u0007\u0017\u0002\u0002\u00c7\u00c8\u0007",
    "A\u0002\u0002\u00c8\u00cf\u0007\f\u0002\u0002\u00c9\u00cb\u0005\u001c",
    "\u000f\u0002\u00ca\u00cc\u0007\u0012\u0002\u0002\u00cb\u00ca\u0003\u0002",
    "\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc\u00ce\u0003\u0002",
    "\u0002\u0002\u00cd\u00c9\u0003\u0002\u0002\u0002\u00ce\u00d1\u0003\u0002",
    "\u0002\u0002\u00cf\u00cd\u0003\u0002\u0002\u0002\u00cf\u00d0\u0003\u0002",
    "\u0002\u0002\u00d0\u00d2\u0003\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002",
    "\u0002\u0002\u00d2\u00d4\u0007\r\u0002\u0002\u00d3\u00d5\u0007\u0003",
    "\u0002\u0002\u00d4\u00d3\u0003\u0002\u0002\u0002\u00d4\u00d5\u0003\u0002",
    "\u0002\u0002\u00d5\u001b\u0003\u0002\u0002\u0002\u00d6\u00d9\u0007A",
    "\u0002\u0002\u00d7\u00d8\u0007\u0018\u0002\u0002\u00d8\u00da\u0007@",
    "\u0002\u0002\u00d9\u00d7\u0003\u0002\u0002\u0002\u00d9\u00da\u0003\u0002",
    "\u0002\u0002\u00da\u001d\u0003\u0002\u0002\u0002\u00db\u00dc\u0005(",
    "\u0015\u0002\u00dc\u00dd\u0007A\u0002\u0002\u00dd\u00df\u0007\t\u0002",
    "\u0002\u00de\u00e0\u0005 \u0011\u0002\u00df\u00de\u0003\u0002\u0002",
    "\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u00e5\u0003\u0002\u0002",
    "\u0002\u00e1\u00e2\u0007\u0012\u0002\u0002\u00e2\u00e4\u0005 \u0011",
    "\u0002\u00e3\u00e1\u0003\u0002\u0002\u0002\u00e4\u00e7\u0003\u0002\u0002",
    "\u0002\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002",
    "\u0002\u00e6\u00e8\u0003\u0002\u0002\u0002\u00e7\u00e5\u0003\u0002\u0002",
    "\u0002\u00e8\u00e9\u0007\n\u0002\u0002\u00e9\u00ea\u0005\f\u0007\u0002",
    "\u00ea\u001f\u0003\u0002\u0002\u0002\u00eb\u00ed\u0005(\u0015\u0002",
    "\u00ec\u00ee\u0007\u0019\u0002\u0002\u00ed\u00ec\u0003\u0002\u0002\u0002",
    "\u00ed\u00ee\u0003\u0002\u0002\u0002\u00ee\u00ef\u0003\u0002\u0002\u0002",
    "\u00ef\u00f6\u0007A\u0002\u0002\u00f0\u00f2\u0007\u0018\u0002\u0002",
    "\u00f1\u00f0\u0003\u0002\u0002\u0002\u00f2\u00f3\u0003\u0002\u0002\u0002",
    "\u00f3\u00f1\u0003\u0002\u0002\u0002\u00f3\u00f4\u0003\u0002\u0002\u0002",
    "\u00f4\u00f5\u0003\u0002\u0002\u0002\u00f5\u00f7\u0005*\u0016\u0002",
    "\u00f6\u00f1\u0003\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002",
    "\u00f7!\u0003\u0002\u0002\u0002\u00f8\u00fa\u0007=\u0002\u0002\u00f9",
    "\u00f8\u0003\u0002\u0002\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002\u00fa",
    "\u00fb\u0003\u0002\u0002\u0002\u00fb\u00fd\u0005(\u0015\u0002\u00fc",
    "\u00fe\u0007\u001a\u0002\u0002\u00fd\u00fc\u0003\u0002\u0002\u0002\u00fd",
    "\u00fe\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003\u0002\u0002\u0002\u00ff",
    "\u0104\u0005$\u0013\u0002\u0100\u0101\u0007\u0012\u0002\u0002\u0101",
    "\u0103\u0005$\u0013\u0002\u0102\u0100\u0003\u0002\u0002\u0002\u0103",
    "\u0106\u0003\u0002\u0002\u0002\u0104\u0102\u0003\u0002\u0002\u0002\u0104",
    "\u0105\u0003\u0002\u0002\u0002\u0105#\u0003\u0002\u0002\u0002\u0106",
    "\u0104\u0003\u0002\u0002\u0002\u0107\u0109\u0007A\u0002\u0002\u0108",
    "\u010a\u0005,\u0017\u0002\u0109\u0108\u0003\u0002\u0002\u0002\u0109",
    "\u010a\u0003\u0002\u0002\u0002\u010a\u010d\u0003\u0002\u0002\u0002\u010b",
    "\u010c\u0007\u0018\u0002\u0002\u010c\u010e\u0005&\u0014\u0002\u010d",
    "\u010b\u0003\u0002\u0002\u0002\u010d\u010e\u0003\u0002\u0002\u0002\u010e",
    "%\u0003\u0002\u0002\u0002\u010f\u0112\u0005\u0018\r\u0002\u0110\u0112",
    "\u0005*\u0016\u0002\u0111\u010f\u0003\u0002\u0002\u0002\u0111\u0110",
    "\u0003\u0002\u0002\u0002\u0112\'\u0003\u0002\u0002\u0002\u0113\u0114",
    "\t\u0002\u0002\u0002\u0114)\u0003\u0002\u0002\u0002\u0115\u0116\b\u0016",
    "\u0001\u0002\u0116\u0117\u0007\u001b\u0002\u0002\u0117\u0141\u0005*",
    "\u00163\u0118\u0119\u0007\u001c\u0002\u0002\u0119\u0141\u0005*\u0016",
    "2\u011a\u011b\u0007\u001d\u0002\u0002\u011b\u0141\u0005*\u00161\u011c",
    "\u011d\u0007(\u0002\u0002\u011d\u0141\u0005*\u0016$\u011e\u011f\u0007",
    ")\u0002\u0002\u011f\u0141\u0005*\u0016#\u0120\u0141\u0007C\u0002\u0002",
    "\u0121\u0122\u0007A\u0002\u0002\u0122\u0123\u00077\u0002\u0002\u0123",
    "\u0141\u0005*\u0016\u0002\u0124\u0141\u0007B\u0002\u0002\u0125\u0141",
    "\u0007?\u0002\u0002\u0126\u0141\u0007@\u0002\u0002\u0127\u0141\u0007",
    "A\u0002\u0002\u0128\u0141\u0007<\u0002\u0002\u0129\u0141\u0007D\u0002",
    "\u0002\u012a\u012b\u0007\t\u0002\u0002\u012b\u012c\u0005*\u0016\u0002",
    "\u012c\u012d\u0007\n\u0002\u0002\u012d\u0141\u0003\u0002\u0002\u0002",
    "\u012e\u012f\u0007A\u0002\u0002\u012f\u0135\u0007\t\u0002\u0002\u0130",
    "\u0131\u0005*\u0016\u0002\u0131\u0132\u0007\u0012\u0002\u0002\u0132",
    "\u0134\u0003\u0002\u0002\u0002\u0133\u0130\u0003\u0002\u0002\u0002\u0134",
    "\u0137\u0003\u0002\u0002\u0002\u0135\u0133\u0003\u0002\u0002\u0002\u0135",
    "\u0136\u0003\u0002\u0002\u0002\u0136\u0139\u0003\u0002\u0002\u0002\u0137",
    "\u0135\u0003\u0002\u0002\u0002\u0138\u013a\u0005*\u0016\u0002\u0139",
    "\u0138\u0003\u0002\u0002\u0002\u0139\u013a\u0003\u0002\u0002\u0002\u013a",
    "\u013b\u0003\u0002\u0002\u0002\u013b\u0141\u0007\n\u0002\u0002\u013c",
    "\u013e\u0007;\u0002\u0002\u013d\u013f\u0005*\u0016\u0002\u013e\u013d",
    "\u0003\u0002\u0002\u0002\u013e\u013f\u0003\u0002\u0002\u0002\u013f\u0141",
    "\u0003\u0002\u0002\u0002\u0140\u0115\u0003\u0002\u0002\u0002\u0140\u0118",
    "\u0003\u0002\u0002\u0002\u0140\u011a\u0003\u0002\u0002\u0002\u0140\u011c",
    "\u0003\u0002\u0002\u0002\u0140\u011e\u0003\u0002\u0002\u0002\u0140\u0120",
    "\u0003\u0002\u0002\u0002\u0140\u0121\u0003\u0002\u0002\u0002\u0140\u0124",
    "\u0003\u0002\u0002\u0002\u0140\u0125\u0003\u0002\u0002\u0002\u0140\u0126",
    "\u0003\u0002\u0002\u0002\u0140\u0127\u0003\u0002\u0002\u0002\u0140\u0128",
    "\u0003\u0002\u0002\u0002\u0140\u0129\u0003\u0002\u0002\u0002\u0140\u012a",
    "\u0003\u0002\u0002\u0002\u0140\u012e\u0003\u0002\u0002\u0002\u0140\u013c",
    "\u0003\u0002\u0002\u0002\u0141\u01b3\u0003\u0002\u0002\u0002\u0142\u0143",
    "\f/\u0002\u0002\u0143\u0144\u0007\u0018\u0002\u0002\u0144\u01b2\u0005",
    "*\u00160\u0145\u0146\f.\u0002\u0002\u0146\u0147\u0007\u001e\u0002\u0002",
    "\u0147\u01b2\u0005*\u0016/\u0148\u0149\f-\u0002\u0002\u0149\u014a\u0007",
    "\u001f\u0002\u0002\u014a\u01b2\u0005*\u0016.\u014b\u014c\f,\u0002\u0002",
    "\u014c\u014d\u0007 \u0002\u0002\u014d\u01b2\u0005*\u0016-\u014e\u014f",
    "\f+\u0002\u0002\u014f\u0150\u0007!\u0002\u0002\u0150\u01b2\u0005*\u0016",
    ",\u0151\u0152\f*\u0002\u0002\u0152\u0153\u0007\"\u0002\u0002\u0153\u01b2",
    "\u0005*\u0016+\u0154\u0155\f)\u0002\u0002\u0155\u0156\u0007#\u0002\u0002",
    "\u0156\u01b2\u0005*\u0016*\u0157\u0158\f(\u0002\u0002\u0158\u0159\u0007",
    "$\u0002\u0002\u0159\u01b2\u0005*\u0016)\u015a\u015b\f\'\u0002\u0002",
    "\u015b\u015c\u0007%\u0002\u0002\u015c\u01b2\u0005*\u0016(\u015d\u015e",
    "\f&\u0002\u0002\u015e\u015f\u0007&\u0002\u0002\u015f\u01b2\u0005*\u0016",
    "\'\u0160\u0161\f%\u0002\u0002\u0161\u0162\u0007\'\u0002\u0002\u0162",
    "\u01b2\u0005*\u0016&\u0163\u0164\f \u0002\u0002\u0164\u0165\u0007*\u0002",
    "\u0002\u0165\u01b2\u0005*\u0016!\u0166\u0167\f\u001f\u0002\u0002\u0167",
    "\u0168\u0007+\u0002\u0002\u0168\u01b2\u0005*\u0016 \u0169\u016a\f\u001e",
    "\u0002\u0002\u016a\u016b\u0007\u0019\u0002\u0002\u016b\u01b2\u0005*",
    "\u0016\u001f\u016c\u016d\f\u001d\u0002\u0002\u016d\u016e\u0007,\u0002",
    "\u0002\u016e\u01b2\u0005*\u0016\u001e\u016f\u0170\f\u001c\u0002\u0002",
    "\u0170\u0171\u0007-\u0002\u0002\u0171\u01b2\u0005*\u0016\u001d\u0172",
    "\u0173\f\u001b\u0002\u0002\u0173\u0174\u0007\u001a\u0002\u0002\u0174",
    "\u01b2\u0005*\u0016\u001c\u0175\u0176\f\u001a\u0002\u0002\u0176\u0177",
    "\u0007.\u0002\u0002\u0177\u01b2\u0005*\u0016\u001b\u0178\u0179\f\u0019",
    "\u0002\u0002\u0179\u017a\u0007/\u0002\u0002\u017a\u01b2\u0005*\u0016",
    "\u001a\u017b\u017c\f\u0018\u0002\u0002\u017c\u017d\u00070\u0002\u0002",
    "\u017d\u01b2\u0005*\u0016\u0019\u017e\u017f\f\u0017\u0002\u0002\u017f",
    "\u0180\u0007\u001b\u0002\u0002\u0180\u01b2\u0005*\u0016\u0018\u0181",
    "\u0182\f\u0016\u0002\u0002\u0182\u0183\u00071\u0002\u0002\u0183\u01b2",
    "\u0005*\u0016\u0017\u0184\u0185\f\u0015\u0002\u0002\u0185\u0186\u0007",
    "2\u0002\u0002\u0186\u01b2\u0005*\u0016\u0016\u0187\u0188\f\u0014\u0002",
    "\u0002\u0188\u0189\u0007\u0006\u0002\u0002\u0189\u01b2\u0005*\u0016",
    "\u0015\u018a\u018b\f\u0013\u0002\u0002\u018b\u018c\u0007\u0005\u0002",
    "\u0002\u018c\u01b2\u0005*\u0016\u0014\u018d\u018e\f\u0012\u0002\u0002",
    "\u018e\u018f\u00073\u0002\u0002\u018f\u01b2\u0005*\u0016\u0013\u0190",
    "\u0191\f\u0011\u0002\u0002\u0191\u0192\u00074\u0002\u0002\u0192\u01b2",
    "\u0005*\u0016\u0012\u0193\u0194\f\u0010\u0002\u0002\u0194\u0195\u0007",
    "5\u0002\u0002\u0195\u01b2\u0005*\u0016\u0011\u0196\u0197\f\u000f\u0002",
    "\u0002\u0197\u0198\u00076\u0002\u0002\u0198\u01b2\u0005*\u0016\u0010",
    "\u0199\u019a\f\r\u0002\u0002\u019a\u019b\u00078\u0002\u0002\u019b\u019c",
    "\u0005*\u0016\u0002\u019c\u019d\u0007\u0015\u0002\u0002\u019d\u019e",
    "\u0005*\u0016\u000e\u019e\u01b2\u0003\u0002\u0002\u0002\u019f\u01a0",
    "\f\"\u0002\u0002\u01a0\u01b2\u0007(\u0002\u0002\u01a1\u01a2\f!\u0002",
    "\u0002\u01a2\u01b2\u0007)\u0002\u0002\u01a3\u01a4\f\u0006\u0002\u0002",
    "\u01a4\u01aa\u00079\u0002\u0002\u01a5\u01a6\u0005*\u0016\u0002\u01a6",
    "\u01a7\u0007\u0012\u0002\u0002\u01a7\u01a9\u0003\u0002\u0002\u0002\u01a8",
    "\u01a5\u0003\u0002\u0002\u0002\u01a9\u01ac\u0003\u0002\u0002\u0002\u01aa",
    "\u01a8\u0003\u0002\u0002\u0002\u01aa\u01ab\u0003\u0002\u0002\u0002\u01ab",
    "\u01ae\u0003\u0002\u0002\u0002\u01ac\u01aa\u0003\u0002\u0002\u0002\u01ad",
    "\u01af\u0005*\u0016\u0002\u01ae\u01ad\u0003\u0002\u0002\u0002\u01ae",
    "\u01af\u0003\u0002\u0002\u0002\u01af\u01b0\u0003\u0002\u0002\u0002\u01b0",
    "\u01b2\u0007:\u0002\u0002\u01b1\u0142\u0003\u0002\u0002\u0002\u01b1",
    "\u0145\u0003\u0002\u0002\u0002\u01b1\u0148\u0003\u0002\u0002\u0002\u01b1",
    "\u014b\u0003\u0002\u0002\u0002\u01b1\u014e\u0003\u0002\u0002\u0002\u01b1",
    "\u0151\u0003\u0002\u0002\u0002\u01b1\u0154\u0003\u0002\u0002\u0002\u01b1",
    "\u0157\u0003\u0002\u0002\u0002\u01b1\u015a\u0003\u0002\u0002\u0002\u01b1",
    "\u015d\u0003\u0002\u0002\u0002\u01b1\u0160\u0003\u0002\u0002\u0002\u01b1",
    "\u0163\u0003\u0002\u0002\u0002\u01b1\u0166\u0003\u0002\u0002\u0002\u01b1",
    "\u0169\u0003\u0002\u0002\u0002\u01b1\u016c\u0003\u0002\u0002\u0002\u01b1",
    "\u016f\u0003\u0002\u0002\u0002\u01b1\u0172\u0003\u0002\u0002\u0002\u01b1",
    "\u0175\u0003\u0002\u0002\u0002\u01b1\u0178\u0003\u0002\u0002\u0002\u01b1",
    "\u017b\u0003\u0002\u0002\u0002\u01b1\u017e\u0003\u0002\u0002\u0002\u01b1",
    "\u0181\u0003\u0002\u0002\u0002\u01b1\u0184\u0003\u0002\u0002\u0002\u01b1",
    "\u0187\u0003\u0002\u0002\u0002\u01b1\u018a\u0003\u0002\u0002\u0002\u01b1",
    "\u018d\u0003\u0002\u0002\u0002\u01b1\u0190\u0003\u0002\u0002\u0002\u01b1",
    "\u0193\u0003\u0002\u0002\u0002\u01b1\u0196\u0003\u0002\u0002\u0002\u01b1",
    "\u0199\u0003\u0002\u0002\u0002\u01b1\u019f\u0003\u0002\u0002\u0002\u01b1",
    "\u01a1\u0003\u0002\u0002\u0002\u01b1\u01a3\u0003\u0002\u0002\u0002\u01b2",
    "\u01b5\u0003\u0002\u0002\u0002\u01b3\u01b1\u0003\u0002\u0002\u0002\u01b3",
    "\u01b4\u0003\u0002\u0002\u0002\u01b4+\u0003\u0002\u0002\u0002\u01b5",
    "\u01b3\u0003\u0002\u0002\u0002\u01b6\u01b8\u0007H\u0002\u0002\u01b7",
    "\u01b6\u0003\u0002\u0002\u0002\u01b7\u01b8\u0003\u0002\u0002\u0002\u01b8",
    "\u01bd\u0003\u0002\u0002\u0002\u01b9\u01ba\u00079\u0002\u0002\u01ba",
    "\u01bb\u0005*\u0016\u0002\u01bb\u01bc\u0007:\u0002\u0002\u01bc\u01be",
    "\u0003\u0002\u0002\u0002\u01bd\u01b9\u0003\u0002\u0002\u0002\u01be\u01bf",
    "\u0003\u0002\u0002\u0002\u01bf\u01bd\u0003\u0002\u0002\u0002\u01bf\u01c0",
    "\u0003\u0002\u0002\u0002\u01c0-\u0003\u0002\u0002\u0002-79CR^dp}\u0081",
    "\u0085\u0090\u0097\u009c\u00a1\u00a7\u00b0\u00b5\u00c1\u00cb\u00cf\u00d4",
    "\u00d9\u00df\u00e5\u00ed\u00f3\u00f6\u00f9\u00fd\u0104\u0109\u010d\u0111",
    "\u0135\u0139\u013e\u0140\u01aa\u01ae\u01b1\u01b3\u01b7\u01bf"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "';'", "'#include'", "'<'", "'>'", "'#define'", 
                     "'if'", "'('", "')'", "'else'", "'{'", "'}'", "'switch'", 
                     "'while'", "'for'", "'do'", "','", "'case'", "'default'", 
                     "':'", "'struct'", "'enum'", "'='", "'&'", "'*'", "'-'", 
                     "'!'", "'~'", "'+='", "'-='", "'*='", "'/='", "'%='", 
                     "'>>='", "'<<='", "'&='", "'|='", "'^='", "'--'", "'++'", 
                     "'>>'", "'<<'", "'|'", "'^'", "'/'", "'%'", "'+'", 
                     "'>='", "'<='", "'=='", "'!='", "'&&'", "'||'", "'.'", 
                     "'?'", "'['", "']'", "'return'", "'NULL'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', "Null", "MemoryClass", "PredifinedType", 
                      "Bool", "Number", "Identifier", "String", "Date", 
                      "Char", "NotSupportedPreprocessor", "Comment", "Space", 
                      "DynaArray" ];

var ruleNames =  [ "root", "include", "define", "notSupportedPreprocessor", 
                   "statement", "operation", "forMultiExpressions", "forExpression", 
                   "switchCase", "struct", "structElement", "structInit", 
                   "enumDef", "enumInstance", "functionDecl", "functionArgument", 
                   "declaration", "declarationElement", "declarationInitialValue", 
                   "type", "expression", "indexes" ];

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
MQL4Parser.T__44 = 45;
MQL4Parser.T__45 = 46;
MQL4Parser.T__46 = 47;
MQL4Parser.T__47 = 48;
MQL4Parser.T__48 = 49;
MQL4Parser.T__49 = 50;
MQL4Parser.T__50 = 51;
MQL4Parser.T__51 = 52;
MQL4Parser.T__52 = 53;
MQL4Parser.T__53 = 54;
MQL4Parser.T__54 = 55;
MQL4Parser.T__55 = 56;
MQL4Parser.T__56 = 57;
MQL4Parser.Null = 58;
MQL4Parser.MemoryClass = 59;
MQL4Parser.PredifinedType = 60;
MQL4Parser.Bool = 61;
MQL4Parser.Number = 62;
MQL4Parser.Identifier = 63;
MQL4Parser.String = 64;
MQL4Parser.Date = 65;
MQL4Parser.Char = 66;
MQL4Parser.NotSupportedPreprocessor = 67;
MQL4Parser.Comment = 68;
MQL4Parser.Space = 69;
MQL4Parser.DynaArray = 70;

MQL4Parser.RULE_root = 0;
MQL4Parser.RULE_include = 1;
MQL4Parser.RULE_define = 2;
MQL4Parser.RULE_notSupportedPreprocessor = 3;
MQL4Parser.RULE_statement = 4;
MQL4Parser.RULE_operation = 5;
MQL4Parser.RULE_forMultiExpressions = 6;
MQL4Parser.RULE_forExpression = 7;
MQL4Parser.RULE_switchCase = 8;
MQL4Parser.RULE_struct = 9;
MQL4Parser.RULE_structElement = 10;
MQL4Parser.RULE_structInit = 11;
MQL4Parser.RULE_enumDef = 12;
MQL4Parser.RULE_enumInstance = 13;
MQL4Parser.RULE_functionDecl = 14;
MQL4Parser.RULE_functionArgument = 15;
MQL4Parser.RULE_declaration = 16;
MQL4Parser.RULE_declarationElement = 17;
MQL4Parser.RULE_declarationInitialValue = 18;
MQL4Parser.RULE_type = 19;
MQL4Parser.RULE_expression = 20;
MQL4Parser.RULE_indexes = 21;

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

RootContext.prototype.include = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IncludeContext);
    } else {
        return this.getTypedRuleContext(IncludeContext,i);
    }
};

RootContext.prototype.define = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DefineContext);
    } else {
        return this.getTypedRuleContext(DefineContext,i);
    }
};

RootContext.prototype.notSupportedPreprocessor = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NotSupportedPreprocessorContext);
    } else {
        return this.getTypedRuleContext(NotSupportedPreprocessorContext,i);
    }
};

RootContext.prototype.declaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DeclarationContext);
    } else {
        return this.getTypedRuleContext(DeclarationContext,i);
    }
};

RootContext.prototype.enumDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EnumDefContext);
    } else {
        return this.getTypedRuleContext(EnumDefContext,i);
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

RootContext.prototype.struct = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StructContext);
    } else {
        return this.getTypedRuleContext(StructContext,i);
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
        this.state = 55;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MQL4Parser.T__1) | (1 << MQL4Parser.T__4) | (1 << MQL4Parser.T__19) | (1 << MQL4Parser.T__20))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (MQL4Parser.MemoryClass - 59)) | (1 << (MQL4Parser.PredifinedType - 59)) | (1 << (MQL4Parser.Identifier - 59)) | (1 << (MQL4Parser.NotSupportedPreprocessor - 59)))) !== 0)) {
            this.state = 53;
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 44;
                this.include();
                break;

            case 2:
                this.state = 45;
                this.define();
                break;

            case 3:
                this.state = 46;
                this.notSupportedPreprocessor();
                break;

            case 4:
                this.state = 47;
                this.declaration();
                this.state = 48;
                this.match(MQL4Parser.T__0);
                break;

            case 5:
                this.state = 50;
                this.enumDef();
                break;

            case 6:
                this.state = 51;
                this.functionDecl();
                break;

            case 7:
                this.state = 52;
                this.struct();
                break;

            }
            this.state = 57;
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

function IncludeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_include;
    this.filename = null; // Token
    return this;
}

IncludeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IncludeContext.prototype.constructor = IncludeContext;

IncludeContext.prototype.String = function() {
    return this.getToken(MQL4Parser.String, 0);
};

IncludeContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

IncludeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterInclude(this);
	}
};

IncludeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitInclude(this);
	}
};

IncludeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitInclude(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.IncludeContext = IncludeContext;

MQL4Parser.prototype.include = function() {

    var localctx = new IncludeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, MQL4Parser.RULE_include);
    try {
        this.state = 65;
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 58;
            this.match(MQL4Parser.T__1);
            this.state = 59;
            localctx.filename = this.match(MQL4Parser.String);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 60;
            this.match(MQL4Parser.T__1);
            this.state = 61;
            this.match(MQL4Parser.T__2);
            this.state = 62;
            this.expression(0);
            this.state = 63;
            this.match(MQL4Parser.T__3);
            break;

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

function DefineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_define;
    this.name = null; // Token
    this.value = null; // ExpressionContext
    return this;
}

DefineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefineContext.prototype.constructor = DefineContext;

DefineContext.prototype.Identifier = function() {
    return this.getToken(MQL4Parser.Identifier, 0);
};

DefineContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

DefineContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterDefine(this);
	}
};

DefineContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitDefine(this);
	}
};

DefineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitDefine(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.DefineContext = DefineContext;

MQL4Parser.prototype.define = function() {

    var localctx = new DefineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, MQL4Parser.RULE_define);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.match(MQL4Parser.T__4);
        this.state = 68;
        localctx.name = this.match(MQL4Parser.Identifier);
        this.state = 69;
        localctx.value = this.expression(0);
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

function NotSupportedPreprocessorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_notSupportedPreprocessor;
    return this;
}

NotSupportedPreprocessorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NotSupportedPreprocessorContext.prototype.constructor = NotSupportedPreprocessorContext;

NotSupportedPreprocessorContext.prototype.NotSupportedPreprocessor = function() {
    return this.getToken(MQL4Parser.NotSupportedPreprocessor, 0);
};

NotSupportedPreprocessorContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterNotSupportedPreprocessor(this);
	}
};

NotSupportedPreprocessorContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitNotSupportedPreprocessor(this);
	}
};

NotSupportedPreprocessorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitNotSupportedPreprocessor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.NotSupportedPreprocessorContext = NotSupportedPreprocessorContext;

MQL4Parser.prototype.notSupportedPreprocessor = function() {

    var localctx = new NotSupportedPreprocessorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, MQL4Parser.RULE_notSupportedPreprocessor);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this.match(MQL4Parser.NotSupportedPreprocessor);
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

StatementContext.prototype.operation = function() {
    return this.getTypedRuleContext(OperationContext,0);
};

StatementContext.prototype.include = function() {
    return this.getTypedRuleContext(IncludeContext,0);
};

StatementContext.prototype.define = function() {
    return this.getTypedRuleContext(DefineContext,0);
};

StatementContext.prototype.notSupportedPreprocessor = function() {
    return this.getTypedRuleContext(NotSupportedPreprocessorContext,0);
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
    this.enterRule(localctx, 8, MQL4Parser.RULE_statement);
    try {
        this.state = 80;
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 73;
            this.declaration();
            this.state = 74;
            this.match(MQL4Parser.T__0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 76;
            this.operation();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 77;
            this.include();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 78;
            this.define();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 79;
            this.notSupportedPreprocessor();
            break;

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

function OperationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_operation;
    return this;
}

OperationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperationContext.prototype.constructor = OperationContext;


 
OperationContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function IfElseOperationContext(parser, ctx) {
	OperationContext.call(this, parser);
    this.condition = null; // ExpressionContext;
    this.opTrue = null; // OperationContext;
    this.opFalse = null; // OperationContext;
    OperationContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IfElseOperationContext.prototype = Object.create(OperationContext.prototype);
IfElseOperationContext.prototype.constructor = IfElseOperationContext;

MQL4Parser.IfElseOperationContext = IfElseOperationContext;

IfElseOperationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

IfElseOperationContext.prototype.operation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OperationContext);
    } else {
        return this.getTypedRuleContext(OperationContext,i);
    }
};
IfElseOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterIfElseOperation(this);
	}
};

IfElseOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitIfElseOperation(this);
	}
};

IfElseOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitIfElseOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BlockOperationContext(parser, ctx) {
	OperationContext.call(this, parser);
    OperationContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BlockOperationContext.prototype = Object.create(OperationContext.prototype);
BlockOperationContext.prototype.constructor = BlockOperationContext;

MQL4Parser.BlockOperationContext = BlockOperationContext;

BlockOperationContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};
BlockOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterBlockOperation(this);
	}
};

BlockOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitBlockOperation(this);
	}
};

BlockOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitBlockOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ForOperationContext(parser, ctx) {
	OperationContext.call(this, parser);
    this.init = null; // ForMultiExpressionsContext;
    this.term = null; // ForMultiExpressionsContext;
    this.inc = null; // ForMultiExpressionsContext;
    this.operator = null; // OperationContext;
    OperationContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ForOperationContext.prototype = Object.create(OperationContext.prototype);
ForOperationContext.prototype.constructor = ForOperationContext;

MQL4Parser.ForOperationContext = ForOperationContext;

ForOperationContext.prototype.operation = function() {
    return this.getTypedRuleContext(OperationContext,0);
};

ForOperationContext.prototype.forMultiExpressions = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ForMultiExpressionsContext);
    } else {
        return this.getTypedRuleContext(ForMultiExpressionsContext,i);
    }
};
ForOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterForOperation(this);
	}
};

ForOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitForOperation(this);
	}
};

ForOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitForOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function WhileOperationContext(parser, ctx) {
	OperationContext.call(this, parser);
    OperationContext.prototype.copyFrom.call(this, ctx);
    return this;
}

WhileOperationContext.prototype = Object.create(OperationContext.prototype);
WhileOperationContext.prototype.constructor = WhileOperationContext;

MQL4Parser.WhileOperationContext = WhileOperationContext;

WhileOperationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

WhileOperationContext.prototype.operation = function() {
    return this.getTypedRuleContext(OperationContext,0);
};
WhileOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterWhileOperation(this);
	}
};

WhileOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitWhileOperation(this);
	}
};

WhileOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitWhileOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DoWhileOperationContext(parser, ctx) {
	OperationContext.call(this, parser);
    this.operator = null; // OperationContext;
    this.condition = null; // ExpressionContext;
    OperationContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DoWhileOperationContext.prototype = Object.create(OperationContext.prototype);
DoWhileOperationContext.prototype.constructor = DoWhileOperationContext;

MQL4Parser.DoWhileOperationContext = DoWhileOperationContext;

DoWhileOperationContext.prototype.operation = function() {
    return this.getTypedRuleContext(OperationContext,0);
};

DoWhileOperationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
DoWhileOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterDoWhileOperation(this);
	}
};

DoWhileOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitDoWhileOperation(this);
	}
};

DoWhileOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitDoWhileOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpressionOperationContext(parser, ctx) {
	OperationContext.call(this, parser);
    OperationContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpressionOperationContext.prototype = Object.create(OperationContext.prototype);
ExpressionOperationContext.prototype.constructor = ExpressionOperationContext;

MQL4Parser.ExpressionOperationContext = ExpressionOperationContext;

ExpressionOperationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ExpressionOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterExpressionOperation(this);
	}
};

ExpressionOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitExpressionOperation(this);
	}
};

ExpressionOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitExpressionOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SwitchOperationContext(parser, ctx) {
	OperationContext.call(this, parser);
    this.leftCondition = null; // ExpressionContext;
    OperationContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SwitchOperationContext.prototype = Object.create(OperationContext.prototype);
SwitchOperationContext.prototype.constructor = SwitchOperationContext;

MQL4Parser.SwitchOperationContext = SwitchOperationContext;

SwitchOperationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

SwitchOperationContext.prototype.switchCase = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SwitchCaseContext);
    } else {
        return this.getTypedRuleContext(SwitchCaseContext,i);
    }
};
SwitchOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterSwitchOperation(this);
	}
};

SwitchOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitSwitchOperation(this);
	}
};

SwitchOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitSwitchOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};



MQL4Parser.OperationContext = OperationContext;

MQL4Parser.prototype.operation = function() {

    var localctx = new OperationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, MQL4Parser.RULE_operation);
    var _la = 0; // Token type
    try {
        this.state = 142;
        switch(this._input.LA(1)) {
        case MQL4Parser.T__6:
        case MQL4Parser.T__24:
        case MQL4Parser.T__25:
        case MQL4Parser.T__26:
        case MQL4Parser.T__37:
        case MQL4Parser.T__38:
        case MQL4Parser.T__56:
        case MQL4Parser.Null:
        case MQL4Parser.Bool:
        case MQL4Parser.Number:
        case MQL4Parser.Identifier:
        case MQL4Parser.String:
        case MQL4Parser.Date:
        case MQL4Parser.Char:
            localctx = new ExpressionOperationContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 82;
            this.expression(0);
            this.state = 83;
            this.match(MQL4Parser.T__0);
            break;
        case MQL4Parser.T__5:
            localctx = new IfElseOperationContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 85;
            this.match(MQL4Parser.T__5);
            this.state = 86;
            this.match(MQL4Parser.T__6);
            this.state = 87;
            localctx.condition = this.expression(0);
            this.state = 88;
            this.match(MQL4Parser.T__7);
            this.state = 89;
            localctx.opTrue = this.operation();
            this.state = 92;
            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
            if(la_===1) {
                this.state = 90;
                this.match(MQL4Parser.T__8);
                this.state = 91;
                localctx.opFalse = this.operation();

            }
            break;
        case MQL4Parser.T__9:
            localctx = new BlockOperationContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 94;
            this.match(MQL4Parser.T__9);
            this.state = 98;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MQL4Parser.T__1) | (1 << MQL4Parser.T__4) | (1 << MQL4Parser.T__5) | (1 << MQL4Parser.T__6) | (1 << MQL4Parser.T__9) | (1 << MQL4Parser.T__11) | (1 << MQL4Parser.T__12) | (1 << MQL4Parser.T__13) | (1 << MQL4Parser.T__14) | (1 << MQL4Parser.T__24) | (1 << MQL4Parser.T__25) | (1 << MQL4Parser.T__26))) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (MQL4Parser.T__37 - 38)) | (1 << (MQL4Parser.T__38 - 38)) | (1 << (MQL4Parser.T__56 - 38)) | (1 << (MQL4Parser.Null - 38)) | (1 << (MQL4Parser.MemoryClass - 38)) | (1 << (MQL4Parser.PredifinedType - 38)) | (1 << (MQL4Parser.Bool - 38)) | (1 << (MQL4Parser.Number - 38)) | (1 << (MQL4Parser.Identifier - 38)) | (1 << (MQL4Parser.String - 38)) | (1 << (MQL4Parser.Date - 38)) | (1 << (MQL4Parser.Char - 38)) | (1 << (MQL4Parser.NotSupportedPreprocessor - 38)))) !== 0)) {
                this.state = 95;
                this.statement();
                this.state = 100;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 101;
            this.match(MQL4Parser.T__10);
            break;
        case MQL4Parser.T__11:
            localctx = new SwitchOperationContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 102;
            this.match(MQL4Parser.T__11);
            this.state = 103;
            this.match(MQL4Parser.T__6);
            this.state = 104;
            localctx.leftCondition = this.expression(0);
            this.state = 105;
            this.match(MQL4Parser.T__7);
            this.state = 106;
            this.match(MQL4Parser.T__9);
            this.state = 108; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 107;
                this.switchCase();
                this.state = 110; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===MQL4Parser.T__16 || _la===MQL4Parser.T__17);
            this.state = 112;
            this.match(MQL4Parser.T__10);
            break;
        case MQL4Parser.T__12:
            localctx = new WhileOperationContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 114;
            this.match(MQL4Parser.T__12);
            this.state = 115;
            this.match(MQL4Parser.T__6);
            this.state = 116;
            this.expression(0);
            this.state = 117;
            this.match(MQL4Parser.T__7);
            this.state = 118;
            this.operation();
            break;
        case MQL4Parser.T__13:
            localctx = new ForOperationContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 120;
            this.match(MQL4Parser.T__13);
            this.state = 121;
            this.match(MQL4Parser.T__6);
            this.state = 123;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MQL4Parser.T__6) | (1 << MQL4Parser.T__24) | (1 << MQL4Parser.T__25) | (1 << MQL4Parser.T__26))) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (MQL4Parser.T__37 - 38)) | (1 << (MQL4Parser.T__38 - 38)) | (1 << (MQL4Parser.T__56 - 38)) | (1 << (MQL4Parser.Null - 38)) | (1 << (MQL4Parser.MemoryClass - 38)) | (1 << (MQL4Parser.PredifinedType - 38)) | (1 << (MQL4Parser.Bool - 38)) | (1 << (MQL4Parser.Number - 38)) | (1 << (MQL4Parser.Identifier - 38)) | (1 << (MQL4Parser.String - 38)) | (1 << (MQL4Parser.Date - 38)) | (1 << (MQL4Parser.Char - 38)))) !== 0)) {
                this.state = 122;
                localctx.init = this.forMultiExpressions();
            }

            this.state = 125;
            this.match(MQL4Parser.T__0);
            this.state = 127;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MQL4Parser.T__6) | (1 << MQL4Parser.T__24) | (1 << MQL4Parser.T__25) | (1 << MQL4Parser.T__26))) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (MQL4Parser.T__37 - 38)) | (1 << (MQL4Parser.T__38 - 38)) | (1 << (MQL4Parser.T__56 - 38)) | (1 << (MQL4Parser.Null - 38)) | (1 << (MQL4Parser.MemoryClass - 38)) | (1 << (MQL4Parser.PredifinedType - 38)) | (1 << (MQL4Parser.Bool - 38)) | (1 << (MQL4Parser.Number - 38)) | (1 << (MQL4Parser.Identifier - 38)) | (1 << (MQL4Parser.String - 38)) | (1 << (MQL4Parser.Date - 38)) | (1 << (MQL4Parser.Char - 38)))) !== 0)) {
                this.state = 126;
                localctx.term = this.forMultiExpressions();
            }

            this.state = 129;
            this.match(MQL4Parser.T__0);
            this.state = 131;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MQL4Parser.T__6) | (1 << MQL4Parser.T__24) | (1 << MQL4Parser.T__25) | (1 << MQL4Parser.T__26))) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (MQL4Parser.T__37 - 38)) | (1 << (MQL4Parser.T__38 - 38)) | (1 << (MQL4Parser.T__56 - 38)) | (1 << (MQL4Parser.Null - 38)) | (1 << (MQL4Parser.MemoryClass - 38)) | (1 << (MQL4Parser.PredifinedType - 38)) | (1 << (MQL4Parser.Bool - 38)) | (1 << (MQL4Parser.Number - 38)) | (1 << (MQL4Parser.Identifier - 38)) | (1 << (MQL4Parser.String - 38)) | (1 << (MQL4Parser.Date - 38)) | (1 << (MQL4Parser.Char - 38)))) !== 0)) {
                this.state = 130;
                localctx.inc = this.forMultiExpressions();
            }

            this.state = 133;
            this.match(MQL4Parser.T__7);
            this.state = 134;
            localctx.operator = this.operation();
            break;
        case MQL4Parser.T__14:
            localctx = new DoWhileOperationContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 135;
            this.match(MQL4Parser.T__14);
            this.state = 136;
            localctx.operator = this.operation();
            this.state = 137;
            this.match(MQL4Parser.T__12);
            this.state = 138;
            this.match(MQL4Parser.T__6);
            this.state = 139;
            localctx.condition = this.expression(0);
            this.state = 140;
            this.match(MQL4Parser.T__7);
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

function ForMultiExpressionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_forMultiExpressions;
    return this;
}

ForMultiExpressionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForMultiExpressionsContext.prototype.constructor = ForMultiExpressionsContext;

ForMultiExpressionsContext.prototype.forExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ForExpressionContext);
    } else {
        return this.getTypedRuleContext(ForExpressionContext,i);
    }
};

ForMultiExpressionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterForMultiExpressions(this);
	}
};

ForMultiExpressionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitForMultiExpressions(this);
	}
};

ForMultiExpressionsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitForMultiExpressions(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.ForMultiExpressionsContext = ForMultiExpressionsContext;

MQL4Parser.prototype.forMultiExpressions = function() {

    var localctx = new ForMultiExpressionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, MQL4Parser.RULE_forMultiExpressions);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 144;
        this.forExpression();
        this.state = 149;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MQL4Parser.T__15) {
            this.state = 145;
            this.match(MQL4Parser.T__15);
            this.state = 146;
            this.forExpression();
            this.state = 151;
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

function ForExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_forExpression;
    return this;
}

ForExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForExpressionContext.prototype.constructor = ForExpressionContext;

ForExpressionContext.prototype.declaration = function() {
    return this.getTypedRuleContext(DeclarationContext,0);
};

ForExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ForExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterForExpression(this);
	}
};

ForExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitForExpression(this);
	}
};

ForExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitForExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.ForExpressionContext = ForExpressionContext;

MQL4Parser.prototype.forExpression = function() {

    var localctx = new ForExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, MQL4Parser.RULE_forExpression);
    try {
        this.state = 154;
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 152;
            this.declaration();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 153;
            this.expression(0);
            break;

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

function SwitchCaseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_switchCase;
    this.rightCondition = null; // ExpressionContext
    return this;
}

SwitchCaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SwitchCaseContext.prototype.constructor = SwitchCaseContext;

SwitchCaseContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

SwitchCaseContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

SwitchCaseContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterSwitchCase(this);
	}
};

SwitchCaseContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitSwitchCase(this);
	}
};

SwitchCaseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitSwitchCase(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.SwitchCaseContext = SwitchCaseContext;

MQL4Parser.prototype.switchCase = function() {

    var localctx = new SwitchCaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, MQL4Parser.RULE_switchCase);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        switch(this._input.LA(1)) {
        case MQL4Parser.T__16:
            this.state = 156;
            this.match(MQL4Parser.T__16);
            this.state = 157;
            localctx.rightCondition = this.expression(0);
            break;
        case MQL4Parser.T__17:
            this.state = 158;
            this.match(MQL4Parser.T__17);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 161;
        this.match(MQL4Parser.T__18);
        this.state = 165;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MQL4Parser.T__1) | (1 << MQL4Parser.T__4) | (1 << MQL4Parser.T__5) | (1 << MQL4Parser.T__6) | (1 << MQL4Parser.T__9) | (1 << MQL4Parser.T__11) | (1 << MQL4Parser.T__12) | (1 << MQL4Parser.T__13) | (1 << MQL4Parser.T__14) | (1 << MQL4Parser.T__24) | (1 << MQL4Parser.T__25) | (1 << MQL4Parser.T__26))) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (MQL4Parser.T__37 - 38)) | (1 << (MQL4Parser.T__38 - 38)) | (1 << (MQL4Parser.T__56 - 38)) | (1 << (MQL4Parser.Null - 38)) | (1 << (MQL4Parser.MemoryClass - 38)) | (1 << (MQL4Parser.PredifinedType - 38)) | (1 << (MQL4Parser.Bool - 38)) | (1 << (MQL4Parser.Number - 38)) | (1 << (MQL4Parser.Identifier - 38)) | (1 << (MQL4Parser.String - 38)) | (1 << (MQL4Parser.Date - 38)) | (1 << (MQL4Parser.Char - 38)) | (1 << (MQL4Parser.NotSupportedPreprocessor - 38)))) !== 0)) {
            this.state = 162;
            this.statement();
            this.state = 167;
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

function StructContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_struct;
    this.name = null; // Token
    return this;
}

StructContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StructContext.prototype.constructor = StructContext;

StructContext.prototype.Identifier = function() {
    return this.getToken(MQL4Parser.Identifier, 0);
};

StructContext.prototype.structElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StructElementContext);
    } else {
        return this.getTypedRuleContext(StructElementContext,i);
    }
};

StructContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterStruct(this);
	}
};

StructContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitStruct(this);
	}
};

StructContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitStruct(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.StructContext = StructContext;

MQL4Parser.prototype.struct = function() {

    var localctx = new StructContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, MQL4Parser.RULE_struct);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        this.match(MQL4Parser.T__19);
        this.state = 169;
        localctx.name = this.match(MQL4Parser.Identifier);
        this.state = 170;
        this.match(MQL4Parser.T__9);
        this.state = 174;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MQL4Parser.PredifinedType || _la===MQL4Parser.Identifier) {
            this.state = 171;
            this.structElement();
            this.state = 176;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 177;
        this.match(MQL4Parser.T__10);
        this.state = 179;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.T__0) {
            this.state = 178;
            this.match(MQL4Parser.T__0);
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

function StructElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_structElement;
    this.elementType = null; // TypeContext
    this.name = null; // Token
    return this;
}

StructElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StructElementContext.prototype.constructor = StructElementContext;

StructElementContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

StructElementContext.prototype.Identifier = function() {
    return this.getToken(MQL4Parser.Identifier, 0);
};

StructElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterStructElement(this);
	}
};

StructElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitStructElement(this);
	}
};

StructElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitStructElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.StructElementContext = StructElementContext;

MQL4Parser.prototype.structElement = function() {

    var localctx = new StructElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, MQL4Parser.RULE_structElement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        localctx.elementType = this.type();
        this.state = 182;
        localctx.name = this.match(MQL4Parser.Identifier);
        this.state = 183;
        this.match(MQL4Parser.T__0);
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

function StructInitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_structInit;
    return this;
}

StructInitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StructInitContext.prototype.constructor = StructInitContext;

StructInitContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

StructInitContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterStructInit(this);
	}
};

StructInitContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitStructInit(this);
	}
};

StructInitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitStructInit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.StructInitContext = StructInitContext;

MQL4Parser.prototype.structInit = function() {

    var localctx = new StructInitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, MQL4Parser.RULE_structInit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 185;
        this.match(MQL4Parser.T__9);
        this.state = 186;
        this.expression(0);
        this.state = 191;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MQL4Parser.T__15) {
            this.state = 187;
            this.match(MQL4Parser.T__15);
            this.state = 188;
            this.expression(0);
            this.state = 193;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 194;
        this.match(MQL4Parser.T__10);
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

function EnumDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_enumDef;
    this.name = null; // Token
    return this;
}

EnumDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumDefContext.prototype.constructor = EnumDefContext;

EnumDefContext.prototype.Identifier = function() {
    return this.getToken(MQL4Parser.Identifier, 0);
};

EnumDefContext.prototype.enumInstance = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EnumInstanceContext);
    } else {
        return this.getTypedRuleContext(EnumInstanceContext,i);
    }
};

EnumDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterEnumDef(this);
	}
};

EnumDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitEnumDef(this);
	}
};

EnumDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitEnumDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.EnumDefContext = EnumDefContext;

MQL4Parser.prototype.enumDef = function() {

    var localctx = new EnumDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, MQL4Parser.RULE_enumDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196;
        this.match(MQL4Parser.T__20);
        this.state = 197;
        localctx.name = this.match(MQL4Parser.Identifier);
        this.state = 198;
        this.match(MQL4Parser.T__9);
        this.state = 205;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MQL4Parser.Identifier) {
            this.state = 199;
            this.enumInstance();
            this.state = 201;
            _la = this._input.LA(1);
            if(_la===MQL4Parser.T__15) {
                this.state = 200;
                this.match(MQL4Parser.T__15);
            }

            this.state = 207;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 208;
        this.match(MQL4Parser.T__10);
        this.state = 210;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.T__0) {
            this.state = 209;
            this.match(MQL4Parser.T__0);
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

function EnumInstanceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_enumInstance;
    this.name = null; // Token
    this.value = null; // Token
    return this;
}

EnumInstanceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumInstanceContext.prototype.constructor = EnumInstanceContext;

EnumInstanceContext.prototype.Identifier = function() {
    return this.getToken(MQL4Parser.Identifier, 0);
};

EnumInstanceContext.prototype.Number = function() {
    return this.getToken(MQL4Parser.Number, 0);
};

EnumInstanceContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterEnumInstance(this);
	}
};

EnumInstanceContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitEnumInstance(this);
	}
};

EnumInstanceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitEnumInstance(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.EnumInstanceContext = EnumInstanceContext;

MQL4Parser.prototype.enumInstance = function() {

    var localctx = new EnumInstanceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, MQL4Parser.RULE_enumInstance);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        localctx.name = this.match(MQL4Parser.Identifier);
        this.state = 215;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.T__21) {
            this.state = 213;
            this.match(MQL4Parser.T__21);

            this.state = 214;
            localctx.value = this.match(MQL4Parser.Number);
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
    this.functionContent = null; // OperationContext
    return this;
}

FunctionDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclContext.prototype.constructor = FunctionDeclContext;

FunctionDeclContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

FunctionDeclContext.prototype.operation = function() {
    return this.getTypedRuleContext(OperationContext,0);
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
    this.enterRule(localctx, 28, MQL4Parser.RULE_functionDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 217;
        this.type();

        this.state = 218;
        localctx.name = this.match(MQL4Parser.Identifier);
        this.state = 219;
        this.match(MQL4Parser.T__6);
        this.state = 221;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.PredifinedType || _la===MQL4Parser.Identifier) {
            this.state = 220;
            this.functionArgument();
        }

        this.state = 227;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MQL4Parser.T__15) {
            this.state = 223;
            this.match(MQL4Parser.T__15);
            this.state = 224;
            this.functionArgument();
            this.state = 229;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 230;
        this.match(MQL4Parser.T__7);
        this.state = 231;
        localctx.functionContent = this.operation();
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

FunctionArgumentContext.prototype.Identifier = function() {
    return this.getToken(MQL4Parser.Identifier, 0);
};

FunctionArgumentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
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
    this.enterRule(localctx, 30, MQL4Parser.RULE_functionArgument);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 233;
        this.type();
        this.state = 235;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.T__22) {
            this.state = 234;
            this.match(MQL4Parser.T__22);
        }

        this.state = 237;
        localctx.name = this.match(MQL4Parser.Identifier);
        this.state = 244;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.T__21) {
            this.state = 239; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 238;
                this.match(MQL4Parser.T__21);
                this.state = 241; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===MQL4Parser.T__21);
            this.state = 243;
            this.expression(0);
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
    this.memoryClass = null; // Token
    return this;
}

DeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationContext.prototype.constructor = DeclarationContext;

DeclarationContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

DeclarationContext.prototype.declarationElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DeclarationElementContext);
    } else {
        return this.getTypedRuleContext(DeclarationElementContext,i);
    }
};

DeclarationContext.prototype.MemoryClass = function() {
    return this.getToken(MQL4Parser.MemoryClass, 0);
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
    this.enterRule(localctx, 32, MQL4Parser.RULE_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 247;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.MemoryClass) {
            this.state = 246;
            localctx.memoryClass = this.match(MQL4Parser.MemoryClass);
        }

        this.state = 249;
        this.type();
        this.state = 251;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.T__23) {
            this.state = 250;
            this.match(MQL4Parser.T__23);
        }

        this.state = 253;
        this.declarationElement();
        this.state = 258;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 254;
                this.match(MQL4Parser.T__15);
                this.state = 255;
                this.declarationElement(); 
            }
            this.state = 260;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
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

function DeclarationElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_declarationElement;
    this.name = null; // Token
    this.initialValue = null; // DeclarationInitialValueContext
    return this;
}

DeclarationElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationElementContext.prototype.constructor = DeclarationElementContext;

DeclarationElementContext.prototype.Identifier = function() {
    return this.getToken(MQL4Parser.Identifier, 0);
};

DeclarationElementContext.prototype.indexes = function() {
    return this.getTypedRuleContext(IndexesContext,0);
};

DeclarationElementContext.prototype.declarationInitialValue = function() {
    return this.getTypedRuleContext(DeclarationInitialValueContext,0);
};

DeclarationElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterDeclarationElement(this);
	}
};

DeclarationElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitDeclarationElement(this);
	}
};

DeclarationElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitDeclarationElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.DeclarationElementContext = DeclarationElementContext;

MQL4Parser.prototype.declarationElement = function() {

    var localctx = new DeclarationElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, MQL4Parser.RULE_declarationElement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 261;
        localctx.name = this.match(MQL4Parser.Identifier);
        this.state = 263;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.T__54 || _la===MQL4Parser.DynaArray) {
            this.state = 262;
            this.indexes();
        }

        this.state = 267;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.T__21) {
            this.state = 265;
            this.match(MQL4Parser.T__21);

            this.state = 266;
            localctx.initialValue = this.declarationInitialValue();
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

function DeclarationInitialValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MQL4Parser.RULE_declarationInitialValue;
    return this;
}

DeclarationInitialValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclarationInitialValueContext.prototype.constructor = DeclarationInitialValueContext;

DeclarationInitialValueContext.prototype.structInit = function() {
    return this.getTypedRuleContext(StructInitContext,0);
};

DeclarationInitialValueContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

DeclarationInitialValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterDeclarationInitialValue(this);
	}
};

DeclarationInitialValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitDeclarationInitialValue(this);
	}
};

DeclarationInitialValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitDeclarationInitialValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MQL4Parser.DeclarationInitialValueContext = DeclarationInitialValueContext;

MQL4Parser.prototype.declarationInitialValue = function() {

    var localctx = new DeclarationInitialValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, MQL4Parser.RULE_declarationInitialValue);
    try {
        this.state = 271;
        switch(this._input.LA(1)) {
        case MQL4Parser.T__9:
            this.enterOuterAlt(localctx, 1);
            this.state = 269;
            this.structInit();
            break;
        case MQL4Parser.T__6:
        case MQL4Parser.T__24:
        case MQL4Parser.T__25:
        case MQL4Parser.T__26:
        case MQL4Parser.T__37:
        case MQL4Parser.T__38:
        case MQL4Parser.T__56:
        case MQL4Parser.Null:
        case MQL4Parser.Bool:
        case MQL4Parser.Number:
        case MQL4Parser.Identifier:
        case MQL4Parser.String:
        case MQL4Parser.Date:
        case MQL4Parser.Char:
            this.enterOuterAlt(localctx, 2);
            this.state = 270;
            this.expression(0);
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
    this.enterRule(localctx, 38, MQL4Parser.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
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


function DateExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DateExpressionContext.prototype = Object.create(ExpressionContext.prototype);
DateExpressionContext.prototype.constructor = DateExpressionContext;

MQL4Parser.DateExpressionContext = DateExpressionContext;

DateExpressionContext.prototype.Date = function() {
    return this.getToken(MQL4Parser.Date, 0);
};
DateExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterDateExpression(this);
	}
};

DateExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitDateExpression(this);
	}
};

DateExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitDateExpression(this);
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


function SpecializationExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.name = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SpecializationExpressionContext.prototype = Object.create(ExpressionContext.prototype);
SpecializationExpressionContext.prototype.constructor = SpecializationExpressionContext;

MQL4Parser.SpecializationExpressionContext = SpecializationExpressionContext;

SpecializationExpressionContext.prototype.Identifier = function() {
    return this.getToken(MQL4Parser.Identifier, 0);
};

SpecializationExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
SpecializationExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterSpecializationExpression(this);
	}
};

SpecializationExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitSpecializationExpression(this);
	}
};

SpecializationExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitSpecializationExpression(this);
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


function ReturnExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ReturnExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ReturnExpressionContext.prototype.constructor = ReturnExpressionContext;

MQL4Parser.ReturnExpressionContext = ReturnExpressionContext;

ReturnExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ReturnExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterReturnExpression(this);
	}
};

ReturnExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitReturnExpression(this);
	}
};

ReturnExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitReturnExpression(this);
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

FunctionCallExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
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


function CharExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CharExpressionContext.prototype = Object.create(ExpressionContext.prototype);
CharExpressionContext.prototype.constructor = CharExpressionContext;

MQL4Parser.CharExpressionContext = CharExpressionContext;

CharExpressionContext.prototype.Char = function() {
    return this.getToken(MQL4Parser.Char, 0);
};
CharExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.enterCharExpression(this);
	}
};

CharExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MQL4Listener ) {
        listener.exitCharExpression(this);
	}
};

CharExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MQL4Visitor ) {
        return visitor.visitCharExpression(this);
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
    var _startState = 40;
    this.enterRecursionRule(localctx, 40, MQL4Parser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 318;
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        switch(la_) {
        case 1:
            localctx = new UnaryMinusExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 276;
            this.match(MQL4Parser.T__24);
            this.state = 277;
            this.expression(49);
            break;

        case 2:
            localctx = new NotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 278;
            this.match(MQL4Parser.T__25);
            this.state = 279;
            this.expression(48);
            break;

        case 3:
            localctx = new ComplementExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 280;
            this.match(MQL4Parser.T__26);
            this.state = 281;
            this.expression(47);
            break;

        case 4:
            localctx = new PreDecExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 282;
            this.match(MQL4Parser.T__37);
            this.state = 283;
            this.expression(34);
            break;

        case 5:
            localctx = new PreIncExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 284;
            this.match(MQL4Parser.T__38);
            this.state = 285;
            this.expression(33);
            break;

        case 6:
            localctx = new DateExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 286;
            this.match(MQL4Parser.Date);
            break;

        case 7:
            localctx = new SpecializationExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 287;
            localctx.name = this.match(MQL4Parser.Identifier);
            this.state = 288;
            this.match(MQL4Parser.T__52);

            this.state = 289;
            localctx.right = this.expression(0);
            break;

        case 8:
            localctx = new StringExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 290;
            this.match(MQL4Parser.String);
            break;

        case 9:
            localctx = new BoolExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 291;
            this.match(MQL4Parser.Bool);
            break;

        case 10:
            localctx = new NumberExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 292;
            this.match(MQL4Parser.Number);
            break;

        case 11:
            localctx = new IdentifierExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 293;
            this.match(MQL4Parser.Identifier);
            break;

        case 12:
            localctx = new NullExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 294;
            this.match(MQL4Parser.Null);
            break;

        case 13:
            localctx = new CharExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 295;
            this.match(MQL4Parser.Char);
            break;

        case 14:
            localctx = new ExpressionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 296;
            this.match(MQL4Parser.T__6);
            this.state = 297;
            this.expression(0);
            this.state = 298;
            this.match(MQL4Parser.T__7);
            break;

        case 15:
            localctx = new FunctionCallExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 300;
            this.match(MQL4Parser.Identifier);
            this.state = 301;
            this.match(MQL4Parser.T__6);
            this.state = 307;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 302;
                    this.expression(0);
                    this.state = 303;
                    this.match(MQL4Parser.T__15); 
                }
                this.state = 309;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
            }

            this.state = 311;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MQL4Parser.T__6) | (1 << MQL4Parser.T__24) | (1 << MQL4Parser.T__25) | (1 << MQL4Parser.T__26))) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (MQL4Parser.T__37 - 38)) | (1 << (MQL4Parser.T__38 - 38)) | (1 << (MQL4Parser.T__56 - 38)) | (1 << (MQL4Parser.Null - 38)) | (1 << (MQL4Parser.Bool - 38)) | (1 << (MQL4Parser.Number - 38)) | (1 << (MQL4Parser.Identifier - 38)) | (1 << (MQL4Parser.String - 38)) | (1 << (MQL4Parser.Date - 38)) | (1 << (MQL4Parser.Char - 38)))) !== 0)) {
                this.state = 310;
                this.expression(0);
            }

            this.state = 313;
            this.match(MQL4Parser.T__7);
            break;

        case 16:
            localctx = new ReturnExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 314;
            this.match(MQL4Parser.T__56);
            this.state = 316;
            var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
            if(la_===1) {
                this.state = 315;
                this.expression(0);

            }
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 433;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 431;
                var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new AssignExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 320;
                    if (!( this.precpred(this._ctx, 45))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 45)");
                    }
                    this.state = 321;
                    this.match(MQL4Parser.T__21);
                    this.state = 322;
                    this.expression(46);
                    break;

                case 2:
                    localctx = new AssignAddExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 323;
                    if (!( this.precpred(this._ctx, 44))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 44)");
                    }
                    this.state = 324;
                    this.match(MQL4Parser.T__27);
                    this.state = 325;
                    this.expression(45);
                    break;

                case 3:
                    localctx = new AssignMinusExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 326;
                    if (!( this.precpred(this._ctx, 43))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 43)");
                    }
                    this.state = 327;
                    this.match(MQL4Parser.T__28);
                    this.state = 328;
                    this.expression(44);
                    break;

                case 4:
                    localctx = new AssignMultiplyExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 329;
                    if (!( this.precpred(this._ctx, 42))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 42)");
                    }
                    this.state = 330;
                    this.match(MQL4Parser.T__29);
                    this.state = 331;
                    this.expression(43);
                    break;

                case 5:
                    localctx = new AssignDivideExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 332;
                    if (!( this.precpred(this._ctx, 41))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 41)");
                    }
                    this.state = 333;
                    this.match(MQL4Parser.T__30);
                    this.state = 334;
                    this.expression(42);
                    break;

                case 6:
                    localctx = new AssignModulusExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 335;
                    if (!( this.precpred(this._ctx, 40))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 40)");
                    }
                    this.state = 336;
                    this.match(MQL4Parser.T__31);
                    this.state = 337;
                    this.expression(41);
                    break;

                case 7:
                    localctx = new AssignShiftBitRightExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 338;
                    if (!( this.precpred(this._ctx, 39))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 39)");
                    }
                    this.state = 339;
                    this.match(MQL4Parser.T__32);
                    this.state = 340;
                    this.expression(40);
                    break;

                case 8:
                    localctx = new AssignShiftBitLeftExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 341;
                    if (!( this.precpred(this._ctx, 38))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 38)");
                    }
                    this.state = 342;
                    this.match(MQL4Parser.T__33);
                    this.state = 343;
                    this.expression(39);
                    break;

                case 9:
                    localctx = new AssignBitAndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 344;
                    if (!( this.precpred(this._ctx, 37))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 37)");
                    }
                    this.state = 345;
                    this.match(MQL4Parser.T__34);
                    this.state = 346;
                    this.expression(38);
                    break;

                case 10:
                    localctx = new AssignBitOrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 347;
                    if (!( this.precpred(this._ctx, 36))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 36)");
                    }
                    this.state = 348;
                    this.match(MQL4Parser.T__35);
                    this.state = 349;
                    this.expression(37);
                    break;

                case 11:
                    localctx = new AssignBitXorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 350;
                    if (!( this.precpred(this._ctx, 35))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 35)");
                    }
                    this.state = 351;
                    this.match(MQL4Parser.T__36);
                    this.state = 352;
                    this.expression(36);
                    break;

                case 12:
                    localctx = new ShiftBitRightExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 353;
                    if (!( this.precpred(this._ctx, 30))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 30)");
                    }
                    this.state = 354;
                    this.match(MQL4Parser.T__39);
                    this.state = 355;
                    this.expression(31);
                    break;

                case 13:
                    localctx = new ShiftBitLeftExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 356;
                    if (!( this.precpred(this._ctx, 29))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 29)");
                    }
                    this.state = 357;
                    this.match(MQL4Parser.T__40);
                    this.state = 358;
                    this.expression(30);
                    break;

                case 14:
                    localctx = new BitAndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 359;
                    if (!( this.precpred(this._ctx, 28))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 28)");
                    }
                    this.state = 360;
                    this.match(MQL4Parser.T__22);
                    this.state = 361;
                    this.expression(29);
                    break;

                case 15:
                    localctx = new BitOrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 362;
                    if (!( this.precpred(this._ctx, 27))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 27)");
                    }
                    this.state = 363;
                    this.match(MQL4Parser.T__41);
                    this.state = 364;
                    this.expression(28);
                    break;

                case 16:
                    localctx = new BitXorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 365;
                    if (!( this.precpred(this._ctx, 26))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 26)");
                    }
                    this.state = 366;
                    this.match(MQL4Parser.T__42);
                    this.state = 367;
                    this.expression(27);
                    break;

                case 17:
                    localctx = new MultiplyExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 368;
                    if (!( this.precpred(this._ctx, 25))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
                    }
                    this.state = 369;
                    this.match(MQL4Parser.T__23);
                    this.state = 370;
                    this.expression(26);
                    break;

                case 18:
                    localctx = new DivideExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 371;
                    if (!( this.precpred(this._ctx, 24))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
                    }
                    this.state = 372;
                    this.match(MQL4Parser.T__43);
                    this.state = 373;
                    this.expression(25);
                    break;

                case 19:
                    localctx = new ModulusExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 374;
                    if (!( this.precpred(this._ctx, 23))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
                    }
                    this.state = 375;
                    this.match(MQL4Parser.T__44);
                    this.state = 376;
                    this.expression(24);
                    break;

                case 20:
                    localctx = new AddExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 377;
                    if (!( this.precpred(this._ctx, 22))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
                    }
                    this.state = 378;
                    this.match(MQL4Parser.T__45);
                    this.state = 379;
                    this.expression(23);
                    break;

                case 21:
                    localctx = new SubtractExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 380;
                    if (!( this.precpred(this._ctx, 21))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                    }
                    this.state = 381;
                    this.match(MQL4Parser.T__24);
                    this.state = 382;
                    this.expression(22);
                    break;

                case 22:
                    localctx = new GtEqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 383;
                    if (!( this.precpred(this._ctx, 20))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                    }
                    this.state = 384;
                    this.match(MQL4Parser.T__46);
                    this.state = 385;
                    this.expression(21);
                    break;

                case 23:
                    localctx = new LtEqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 386;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 387;
                    this.match(MQL4Parser.T__47);
                    this.state = 388;
                    this.expression(20);
                    break;

                case 24:
                    localctx = new GtExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 389;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 390;
                    this.match(MQL4Parser.T__3);
                    this.state = 391;
                    this.expression(19);
                    break;

                case 25:
                    localctx = new LtExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 392;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 393;
                    this.match(MQL4Parser.T__2);
                    this.state = 394;
                    this.expression(18);
                    break;

                case 26:
                    localctx = new EqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 395;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 396;
                    this.match(MQL4Parser.T__48);
                    this.state = 397;
                    this.expression(17);
                    break;

                case 27:
                    localctx = new NotEqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 398;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 399;
                    this.match(MQL4Parser.T__49);
                    this.state = 400;
                    this.expression(16);
                    break;

                case 28:
                    localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 401;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 402;
                    this.match(MQL4Parser.T__50);
                    this.state = 403;
                    this.expression(15);
                    break;

                case 29:
                    localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 404;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 405;
                    this.match(MQL4Parser.T__51);
                    this.state = 406;
                    this.expression(14);
                    break;

                case 30:
                    localctx = new TernaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 407;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 408;
                    this.match(MQL4Parser.T__53);
                    this.state = 409;
                    this.expression(0);
                    this.state = 410;
                    this.match(MQL4Parser.T__18);
                    this.state = 411;
                    this.expression(12);
                    break;

                case 31:
                    localctx = new PostDecExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 413;
                    if (!( this.precpred(this._ctx, 32))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 32)");
                    }
                    this.state = 414;
                    this.match(MQL4Parser.T__37);
                    break;

                case 32:
                    localctx = new PostIncExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 415;
                    if (!( this.precpred(this._ctx, 31))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 31)");
                    }
                    this.state = 416;
                    this.match(MQL4Parser.T__38);
                    break;

                case 33:
                    localctx = new IndexingExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 417;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 418;
                    this.match(MQL4Parser.T__54);
                    this.state = 424;
                    this._errHandler.sync(this);
                    var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
                    while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                        if(_alt===1) {
                            this.state = 419;
                            this.expression(0);
                            this.state = 420;
                            this.match(MQL4Parser.T__15); 
                        }
                        this.state = 426;
                        this._errHandler.sync(this);
                        _alt = this._interp.adaptivePredict(this._input,37,this._ctx);
                    }

                    this.state = 428;
                    _la = this._input.LA(1);
                    if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MQL4Parser.T__6) | (1 << MQL4Parser.T__24) | (1 << MQL4Parser.T__25) | (1 << MQL4Parser.T__26))) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (MQL4Parser.T__37 - 38)) | (1 << (MQL4Parser.T__38 - 38)) | (1 << (MQL4Parser.T__56 - 38)) | (1 << (MQL4Parser.Null - 38)) | (1 << (MQL4Parser.Bool - 38)) | (1 << (MQL4Parser.Number - 38)) | (1 << (MQL4Parser.Identifier - 38)) | (1 << (MQL4Parser.String - 38)) | (1 << (MQL4Parser.Date - 38)) | (1 << (MQL4Parser.Char - 38)))) !== 0)) {
                        this.state = 427;
                        this.expression(0);
                    }

                    this.state = 430;
                    this.match(MQL4Parser.T__55);
                    break;

                } 
            }
            this.state = 435;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,40,this._ctx);
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
    this.dynamic = null; // Token
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

IndexesContext.prototype.DynaArray = function() {
    return this.getToken(MQL4Parser.DynaArray, 0);
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
    this.enterRule(localctx, 42, MQL4Parser.RULE_indexes);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 437;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.DynaArray) {
            this.state = 436;
            localctx.dynamic = this.match(MQL4Parser.DynaArray);
        }

        this.state = 443; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 439;
            this.match(MQL4Parser.T__54);
            this.state = 440;
            this.expression(0);
            this.state = 441;
            this.match(MQL4Parser.T__55);
            this.state = 445; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===MQL4Parser.T__54);
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
	case 20:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

MQL4Parser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 45);
		case 1:
			return this.precpred(this._ctx, 44);
		case 2:
			return this.precpred(this._ctx, 43);
		case 3:
			return this.precpred(this._ctx, 42);
		case 4:
			return this.precpred(this._ctx, 41);
		case 5:
			return this.precpred(this._ctx, 40);
		case 6:
			return this.precpred(this._ctx, 39);
		case 7:
			return this.precpred(this._ctx, 38);
		case 8:
			return this.precpred(this._ctx, 37);
		case 9:
			return this.precpred(this._ctx, 36);
		case 10:
			return this.precpred(this._ctx, 35);
		case 11:
			return this.precpred(this._ctx, 30);
		case 12:
			return this.precpred(this._ctx, 29);
		case 13:
			return this.precpred(this._ctx, 28);
		case 14:
			return this.precpred(this._ctx, 27);
		case 15:
			return this.precpred(this._ctx, 26);
		case 16:
			return this.precpred(this._ctx, 25);
		case 17:
			return this.precpred(this._ctx, 24);
		case 18:
			return this.precpred(this._ctx, 23);
		case 19:
			return this.precpred(this._ctx, 22);
		case 20:
			return this.precpred(this._ctx, 21);
		case 21:
			return this.precpred(this._ctx, 20);
		case 22:
			return this.precpred(this._ctx, 19);
		case 23:
			return this.precpred(this._ctx, 18);
		case 24:
			return this.precpred(this._ctx, 17);
		case 25:
			return this.precpred(this._ctx, 16);
		case 26:
			return this.precpred(this._ctx, 15);
		case 27:
			return this.precpred(this._ctx, 14);
		case 28:
			return this.precpred(this._ctx, 13);
		case 29:
			return this.precpred(this._ctx, 11);
		case 30:
			return this.precpred(this._ctx, 32);
		case 31:
			return this.precpred(this._ctx, 31);
		case 32:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.MQL4Parser = MQL4Parser;
