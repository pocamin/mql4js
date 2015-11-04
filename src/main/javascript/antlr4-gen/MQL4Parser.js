// Generated from MQL4.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MQL4Listener = require('./MQL4Listener').MQL4Listener;
var MQL4Visitor = require('./MQL4Visitor').MQL4Visitor;

var grammarFileName = "MQL4.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003F\u01a9\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u00022\n\u0002\f\u0002",
    "\u000e\u00025\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003:\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004@\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005L\n\u0005\u0003\u0005\u0003\u0005\u0007\u0005P\n\u0005\f\u0005",
    "\u000e\u0005S\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u0005\\\n\u0005\r\u0005",
    "\u000e\u0005]\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005k\n\u0005\u0003\u0005\u0003\u0005\u0005\u0005o\n\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005s\n\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005~\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0007\u0006\u0083\n\u0006\f\u0006\u000e\u0006\u0086\u000b\u0006\u0003",
    "\u0007\u0003\u0007\u0005\u0007\u008a\n\u0007\u0003\b\u0003\b\u0003\b",
    "\u0005\b\u008f\n\b\u0003\b\u0003\b\u0007\b\u0093\n\b\f\b\u000e\b\u0096",
    "\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u009c\n\t\f\t\u000e",
    "\t\u009f\u000b\t\u0003\t\u0003\t\u0005\t\u00a3\n\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b",
    "\u00ad\n\u000b\f\u000b\u000e\u000b\u00b0\u000b\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00b9\n\f\u0007",
    "\f\u00bb\n\f\f\f\u000e\f\u00be\u000b\f\u0003\f\u0003\f\u0005\f\u00c2",
    "\n\f\u0003\r\u0003\r\u0003\r\u0005\r\u00c7\n\r\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0005\u000e\u00cd\n\u000e\u0003\u000e\u0003",
    "\u000e\u0007\u000e\u00d1\n\u000e\f\u000e\u000e\u000e\u00d4\u000b\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0006\u000f\u00dc\n\u000f\r\u000f\u000e\u000f\u00dd\u0003\u000f\u0005",
    "\u000f\u00e1\n\u000f\u0003\u0010\u0005\u0010\u00e4\n\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u00ea\n\u0010\f\u0010",
    "\u000e\u0010\u00ed\u000b\u0010\u0003\u0011\u0003\u0011\u0005\u0011\u00f1",
    "\n\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00f5\n\u0011\u0003\u0012",
    "\u0003\u0012\u0005\u0012\u00f9\n\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0007",
    "\u0014\u011b\n\u0014\f\u0014\u000e\u0014\u011e\u000b\u0014\u0003\u0014",
    "\u0005\u0014\u0121\n\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005",
    "\u0014\u0126\n\u0014\u0005\u0014\u0128\n\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0007\u0014\u0190\n",
    "\u0014\f\u0014\u000e\u0014\u0193\u000b\u0014\u0003\u0014\u0005\u0014",
    "\u0196\n\u0014\u0003\u0014\u0007\u0014\u0199\n\u0014\f\u0014\u000e\u0014",
    "\u019c\u000b\u0014\u0003\u0015\u0005\u0015\u019f\n\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0006\u0015\u01a5\n\u0015\r\u0015",
    "\u000e\u0015\u01a6\u0003\u0015\u0002\u0003&\u0016\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(\u0002",
    "\u0003\u0004\u0002==@@\u01f2\u00023\u0003\u0002\u0002\u0002\u00046\u0003",
    "\u0002\u0002\u0002\u0006?\u0003\u0002\u0002\u0002\b}\u0003\u0002\u0002",
    "\u0002\n\u007f\u0003\u0002\u0002\u0002\f\u0089\u0003\u0002\u0002\u0002",
    "\u000e\u008e\u0003\u0002\u0002\u0002\u0010\u0097\u0003\u0002\u0002\u0002",
    "\u0012\u00a4\u0003\u0002\u0002\u0002\u0014\u00a8\u0003\u0002\u0002\u0002",
    "\u0016\u00b3\u0003\u0002\u0002\u0002\u0018\u00c3\u0003\u0002\u0002\u0002",
    "\u001a\u00c8\u0003\u0002\u0002\u0002\u001c\u00d8\u0003\u0002\u0002\u0002",
    "\u001e\u00e3\u0003\u0002\u0002\u0002 \u00ee\u0003\u0002\u0002\u0002",
    "\"\u00f8\u0003\u0002\u0002\u0002$\u00fa\u0003\u0002\u0002\u0002&\u0127",
    "\u0003\u0002\u0002\u0002(\u019e\u0003\u0002\u0002\u0002*2\u0005\u0004",
    "\u0003\u0002+,\u0005\u001e\u0010\u0002,-\u0007\u0003\u0002\u0002-2\u0003",
    "\u0002\u0002\u0002.2\u0005\u0016\f\u0002/2\u0005\u001a\u000e\u00020",
    "2\u0005\u0010\t\u00021*\u0003\u0002\u0002\u00021+\u0003\u0002\u0002",
    "\u00021.\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u000210\u0003\u0002",
    "\u0002\u000225\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u000234\u0003",
    "\u0002\u0002\u00024\u0003\u0003\u0002\u0002\u000253\u0003\u0002\u0002",
    "\u000267\u0007\u0004\u0002\u000279\u0007@\u0002\u00028:\u0007A\u0002",
    "\u000298\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:\u0005\u0003",
    "\u0002\u0002\u0002;<\u0005\u001e\u0010\u0002<=\u0007\u0003\u0002\u0002",
    "=@\u0003\u0002\u0002\u0002>@\u0005\b\u0005\u0002?;\u0003\u0002\u0002",
    "\u0002?>\u0003\u0002\u0002\u0002@\u0007\u0003\u0002\u0002\u0002AB\u0005",
    "&\u0014\u0002BC\u0007\u0003\u0002\u0002C~\u0003\u0002\u0002\u0002DE",
    "\u0007\u0005\u0002\u0002EF\u0007\u0006\u0002\u0002FG\u0005&\u0014\u0002",
    "GH\u0007\u0007\u0002\u0002HK\u0005\b\u0005\u0002IJ\u0007\b\u0002\u0002",
    "JL\u0005\b\u0005\u0002KI\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002",
    "\u0002L~\u0003\u0002\u0002\u0002MQ\u0007\t\u0002\u0002NP\u0005\u0006",
    "\u0004\u0002ON\u0003\u0002\u0002\u0002PS\u0003\u0002\u0002\u0002QO\u0003",
    "\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RT\u0003\u0002\u0002\u0002",
    "SQ\u0003\u0002\u0002\u0002T~\u0007\n\u0002\u0002UV\u0007\u000b\u0002",
    "\u0002VW\u0007\u0006\u0002\u0002WX\u0005&\u0014\u0002XY\u0007\u0007",
    "\u0002\u0002Y[\u0007\t\u0002\u0002Z\\\u0005\u000e\b\u0002[Z\u0003\u0002",
    "\u0002\u0002\\]\u0003\u0002\u0002\u0002][\u0003\u0002\u0002\u0002]^",
    "\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002_`\u0007\n\u0002\u0002",
    "`~\u0003\u0002\u0002\u0002ab\u0007\f\u0002\u0002bc\u0007\u0006\u0002",
    "\u0002cd\u0005&\u0014\u0002de\u0007\u0007\u0002\u0002ef\u0005\b\u0005",
    "\u0002f~\u0003\u0002\u0002\u0002gh\u0007\r\u0002\u0002hj\u0007\u0006",
    "\u0002\u0002ik\u0005\n\u0006\u0002ji\u0003\u0002\u0002\u0002jk\u0003",
    "\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002ln\u0007\u0003\u0002\u0002",
    "mo\u0005\n\u0006\u0002nm\u0003\u0002\u0002\u0002no\u0003\u0002\u0002",
    "\u0002op\u0003\u0002\u0002\u0002pr\u0007\u0003\u0002\u0002qs\u0005\n",
    "\u0006\u0002rq\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002st\u0003",
    "\u0002\u0002\u0002tu\u0007\u0007\u0002\u0002u~\u0005\b\u0005\u0002v",
    "w\u0007\u000e\u0002\u0002wx\u0005\b\u0005\u0002xy\u0007\f\u0002\u0002",
    "yz\u0007\u0006\u0002\u0002z{\u0005&\u0014\u0002{|\u0007\u0007\u0002",
    "\u0002|~\u0003\u0002\u0002\u0002}A\u0003\u0002\u0002\u0002}D\u0003\u0002",
    "\u0002\u0002}M\u0003\u0002\u0002\u0002}U\u0003\u0002\u0002\u0002}a\u0003",
    "\u0002\u0002\u0002}g\u0003\u0002\u0002\u0002}v\u0003\u0002\u0002\u0002",
    "~\t\u0003\u0002\u0002\u0002\u007f\u0084\u0005\f\u0007\u0002\u0080\u0081",
    "\u0007\u000f\u0002\u0002\u0081\u0083\u0005\f\u0007\u0002\u0082\u0080",
    "\u0003\u0002\u0002\u0002\u0083\u0086\u0003\u0002\u0002\u0002\u0084\u0082",
    "\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u000b",
    "\u0003\u0002\u0002\u0002\u0086\u0084\u0003\u0002\u0002\u0002\u0087\u008a",
    "\u0005\u001e\u0010\u0002\u0088\u008a\u0005&\u0014\u0002\u0089\u0087",
    "\u0003\u0002\u0002\u0002\u0089\u0088\u0003\u0002\u0002\u0002\u008a\r",
    "\u0003\u0002\u0002\u0002\u008b\u008c\u0007\u0010\u0002\u0002\u008c\u008f",
    "\u0005&\u0014\u0002\u008d\u008f\u0007\u0011\u0002\u0002\u008e\u008b",
    "\u0003\u0002\u0002\u0002\u008e\u008d\u0003\u0002\u0002\u0002\u008f\u0090",
    "\u0003\u0002\u0002\u0002\u0090\u0094\u0007\u0012\u0002\u0002\u0091\u0093",
    "\u0005\u0006\u0004\u0002\u0092\u0091\u0003\u0002\u0002\u0002\u0093\u0096",
    "\u0003\u0002\u0002\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0094\u0095",
    "\u0003\u0002\u0002\u0002\u0095\u000f\u0003\u0002\u0002\u0002\u0096\u0094",
    "\u0003\u0002\u0002\u0002\u0097\u0098\u0007\u0013\u0002\u0002\u0098\u0099",
    "\u0007@\u0002\u0002\u0099\u009d\u0007\t\u0002\u0002\u009a\u009c\u0005",
    "\u0012\n\u0002\u009b\u009a\u0003\u0002\u0002\u0002\u009c\u009f\u0003",
    "\u0002\u0002\u0002\u009d\u009b\u0003\u0002\u0002\u0002\u009d\u009e\u0003",
    "\u0002\u0002\u0002\u009e\u00a0\u0003\u0002\u0002\u0002\u009f\u009d\u0003",
    "\u0002\u0002\u0002\u00a0\u00a2\u0007\n\u0002\u0002\u00a1\u00a3\u0007",
    "\u0003\u0002\u0002\u00a2\u00a1\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003",
    "\u0002\u0002\u0002\u00a3\u0011\u0003\u0002\u0002\u0002\u00a4\u00a5\u0005",
    "$\u0013\u0002\u00a5\u00a6\u0007@\u0002\u0002\u00a6\u00a7\u0007\u0003",
    "\u0002\u0002\u00a7\u0013\u0003\u0002\u0002\u0002\u00a8\u00a9\u0007\t",
    "\u0002\u0002\u00a9\u00ae\u0005&\u0014\u0002\u00aa\u00ab\u0007\u000f",
    "\u0002\u0002\u00ab\u00ad\u0005&\u0014\u0002\u00ac\u00aa\u0003\u0002",
    "\u0002\u0002\u00ad\u00b0\u0003\u0002\u0002\u0002\u00ae\u00ac\u0003\u0002",
    "\u0002\u0002\u00ae\u00af\u0003\u0002\u0002\u0002\u00af\u00b1\u0003\u0002",
    "\u0002\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b1\u00b2\u0007\n",
    "\u0002\u0002\u00b2\u0015\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007\u0014",
    "\u0002\u0002\u00b4\u00b5\u0007@\u0002\u0002\u00b5\u00bc\u0007\t\u0002",
    "\u0002\u00b6\u00b8\u0005\u0018\r\u0002\u00b7\u00b9\u0007\u000f\u0002",
    "\u0002\u00b8\u00b7\u0003\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002",
    "\u0002\u00b9\u00bb\u0003\u0002\u0002\u0002\u00ba\u00b6\u0003\u0002\u0002",
    "\u0002\u00bb\u00be\u0003\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002",
    "\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd\u00bf\u0003\u0002\u0002",
    "\u0002\u00be\u00bc\u0003\u0002\u0002\u0002\u00bf\u00c1\u0007\n\u0002",
    "\u0002\u00c0\u00c2\u0007\u0003\u0002\u0002\u00c1\u00c0\u0003\u0002\u0002",
    "\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u0017\u0003\u0002\u0002",
    "\u0002\u00c3\u00c6\u0007@\u0002\u0002\u00c4\u00c5\u0007\u0015\u0002",
    "\u0002\u00c5\u00c7\u0007?\u0002\u0002\u00c6\u00c4\u0003\u0002\u0002",
    "\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002\u00c7\u0019\u0003\u0002\u0002",
    "\u0002\u00c8\u00c9\u0005$\u0013\u0002\u00c9\u00ca\u0007@\u0002\u0002",
    "\u00ca\u00cc\u0007\u0006\u0002\u0002\u00cb\u00cd\u0005\u001c\u000f\u0002",
    "\u00cc\u00cb\u0003\u0002\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002",
    "\u00cd\u00d2\u0003\u0002\u0002\u0002\u00ce\u00cf\u0007\u000f\u0002\u0002",
    "\u00cf\u00d1\u0005\u001c\u000f\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002",
    "\u00d1\u00d4\u0003\u0002\u0002\u0002\u00d2\u00d0\u0003\u0002\u0002\u0002",
    "\u00d2\u00d3\u0003\u0002\u0002\u0002\u00d3\u00d5\u0003\u0002\u0002\u0002",
    "\u00d4\u00d2\u0003\u0002\u0002\u0002\u00d5\u00d6\u0007\u0007\u0002\u0002",
    "\u00d6\u00d7\u0005\b\u0005\u0002\u00d7\u001b\u0003\u0002\u0002\u0002",
    "\u00d8\u00d9\u0005$\u0013\u0002\u00d9\u00e0\u0007@\u0002\u0002\u00da",
    "\u00dc\u0007\u0015\u0002\u0002\u00db\u00da\u0003\u0002\u0002\u0002\u00dc",
    "\u00dd\u0003\u0002\u0002\u0002\u00dd\u00db\u0003\u0002\u0002\u0002\u00dd",
    "\u00de\u0003\u0002\u0002\u0002\u00de\u00df\u0003\u0002\u0002\u0002\u00df",
    "\u00e1\u0005&\u0014\u0002\u00e0\u00db\u0003\u0002\u0002\u0002\u00e0",
    "\u00e1\u0003\u0002\u0002\u0002\u00e1\u001d\u0003\u0002\u0002\u0002\u00e2",
    "\u00e4\u0007<\u0002\u0002\u00e3\u00e2\u0003\u0002\u0002\u0002\u00e3",
    "\u00e4\u0003\u0002\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e5",
    "\u00e6\u0005$\u0013\u0002\u00e6\u00eb\u0005 \u0011\u0002\u00e7\u00e8",
    "\u0007\u000f\u0002\u0002\u00e8\u00ea\u0005 \u0011\u0002\u00e9\u00e7",
    "\u0003\u0002\u0002\u0002\u00ea\u00ed\u0003\u0002\u0002\u0002\u00eb\u00e9",
    "\u0003\u0002\u0002\u0002\u00eb\u00ec\u0003\u0002\u0002\u0002\u00ec\u001f",
    "\u0003\u0002\u0002\u0002\u00ed\u00eb\u0003\u0002\u0002\u0002\u00ee\u00f0",
    "\u0007@\u0002\u0002\u00ef\u00f1\u0005(\u0015\u0002\u00f0\u00ef\u0003",
    "\u0002\u0002\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f1\u00f4\u0003",
    "\u0002\u0002\u0002\u00f2\u00f3\u0007\u0015\u0002\u0002\u00f3\u00f5\u0005",
    "\"\u0012\u0002\u00f4\u00f2\u0003\u0002\u0002\u0002\u00f4\u00f5\u0003",
    "\u0002\u0002\u0002\u00f5!\u0003\u0002\u0002\u0002\u00f6\u00f9\u0005",
    "\u0014\u000b\u0002\u00f7\u00f9\u0005&\u0014\u0002\u00f8\u00f6\u0003",
    "\u0002\u0002\u0002\u00f8\u00f7\u0003\u0002\u0002\u0002\u00f9#\u0003",
    "\u0002\u0002\u0002\u00fa\u00fb\t\u0002\u0002\u0002\u00fb%\u0003\u0002",
    "\u0002\u0002\u00fc\u00fd\b\u0014\u0001\u0002\u00fd\u00fe\u0007\u0016",
    "\u0002\u0002\u00fe\u0128\u0005&\u00143\u00ff\u0100\u0007\u0017\u0002",
    "\u0002\u0100\u0128\u0005&\u00142\u0101\u0102\u0007\u0018\u0002\u0002",
    "\u0102\u0128\u0005&\u00141\u0103\u0104\u0007#\u0002\u0002\u0104\u0128",
    "\u0005&\u0014$\u0105\u0106\u0007$\u0002\u0002\u0106\u0128\u0005&\u0014",
    "#\u0107\u0128\u0007B\u0002\u0002\u0108\u0109\u0007@\u0002\u0002\u0109",
    "\u010a\u00076\u0002\u0002\u010a\u0128\u0005&\u0014\u0002\u010b\u0128",
    "\u0007A\u0002\u0002\u010c\u0128\u0007>\u0002\u0002\u010d\u0128\u0007",
    "?\u0002\u0002\u010e\u0128\u0007@\u0002\u0002\u010f\u0128\u0007;\u0002",
    "\u0002\u0110\u0128\u0007C\u0002\u0002\u0111\u0112\u0007\u0006\u0002",
    "\u0002\u0112\u0113\u0005&\u0014\u0002\u0113\u0114\u0007\u0007\u0002",
    "\u0002\u0114\u0128\u0003\u0002\u0002\u0002\u0115\u0116\u0007@\u0002",
    "\u0002\u0116\u011c\u0007\u0006\u0002\u0002\u0117\u0118\u0005&\u0014",
    "\u0002\u0118\u0119\u0007\u000f\u0002\u0002\u0119\u011b\u0003\u0002\u0002",
    "\u0002\u011a\u0117\u0003\u0002\u0002\u0002\u011b\u011e\u0003\u0002\u0002",
    "\u0002\u011c\u011a\u0003\u0002\u0002\u0002\u011c\u011d\u0003\u0002\u0002",
    "\u0002\u011d\u0120\u0003\u0002\u0002\u0002\u011e\u011c\u0003\u0002\u0002",
    "\u0002\u011f\u0121\u0005&\u0014\u0002\u0120\u011f\u0003\u0002\u0002",
    "\u0002\u0120\u0121\u0003\u0002\u0002\u0002\u0121\u0122\u0003\u0002\u0002",
    "\u0002\u0122\u0128\u0007\u0007\u0002\u0002\u0123\u0125\u0007:\u0002",
    "\u0002\u0124\u0126\u0005&\u0014\u0002\u0125\u0124\u0003\u0002\u0002",
    "\u0002\u0125\u0126\u0003\u0002\u0002\u0002\u0126\u0128\u0003\u0002\u0002",
    "\u0002\u0127\u00fc\u0003\u0002\u0002\u0002\u0127\u00ff\u0003\u0002\u0002",
    "\u0002\u0127\u0101\u0003\u0002\u0002\u0002\u0127\u0103\u0003\u0002\u0002",
    "\u0002\u0127\u0105\u0003\u0002\u0002\u0002\u0127\u0107\u0003\u0002\u0002",
    "\u0002\u0127\u0108\u0003\u0002\u0002\u0002\u0127\u010b\u0003\u0002\u0002",
    "\u0002\u0127\u010c\u0003\u0002\u0002\u0002\u0127\u010d\u0003\u0002\u0002",
    "\u0002\u0127\u010e\u0003\u0002\u0002\u0002\u0127\u010f\u0003\u0002\u0002",
    "\u0002\u0127\u0110\u0003\u0002\u0002\u0002\u0127\u0111\u0003\u0002\u0002",
    "\u0002\u0127\u0115\u0003\u0002\u0002\u0002\u0127\u0123\u0003\u0002\u0002",
    "\u0002\u0128\u019a\u0003\u0002\u0002\u0002\u0129\u012a\f/\u0002\u0002",
    "\u012a\u012b\u0007\u0015\u0002\u0002\u012b\u0199\u0005&\u00140\u012c",
    "\u012d\f.\u0002\u0002\u012d\u012e\u0007\u0019\u0002\u0002\u012e\u0199",
    "\u0005&\u0014/\u012f\u0130\f-\u0002\u0002\u0130\u0131\u0007\u001a\u0002",
    "\u0002\u0131\u0199\u0005&\u0014.\u0132\u0133\f,\u0002\u0002\u0133\u0134",
    "\u0007\u001b\u0002\u0002\u0134\u0199\u0005&\u0014-\u0135\u0136\f+\u0002",
    "\u0002\u0136\u0137\u0007\u001c\u0002\u0002\u0137\u0199\u0005&\u0014",
    ",\u0138\u0139\f*\u0002\u0002\u0139\u013a\u0007\u001d\u0002\u0002\u013a",
    "\u0199\u0005&\u0014+\u013b\u013c\f)\u0002\u0002\u013c\u013d\u0007\u001e",
    "\u0002\u0002\u013d\u0199\u0005&\u0014*\u013e\u013f\f(\u0002\u0002\u013f",
    "\u0140\u0007\u001f\u0002\u0002\u0140\u0199\u0005&\u0014)\u0141\u0142",
    "\f\'\u0002\u0002\u0142\u0143\u0007 \u0002\u0002\u0143\u0199\u0005&\u0014",
    "(\u0144\u0145\f&\u0002\u0002\u0145\u0146\u0007!\u0002\u0002\u0146\u0199",
    "\u0005&\u0014\'\u0147\u0148\f%\u0002\u0002\u0148\u0149\u0007\"\u0002",
    "\u0002\u0149\u0199\u0005&\u0014&\u014a\u014b\f \u0002\u0002\u014b\u014c",
    "\u0007%\u0002\u0002\u014c\u0199\u0005&\u0014!\u014d\u014e\f\u001f\u0002",
    "\u0002\u014e\u014f\u0007&\u0002\u0002\u014f\u0199\u0005&\u0014 \u0150",
    "\u0151\f\u001e\u0002\u0002\u0151\u0152\u0007\'\u0002\u0002\u0152\u0199",
    "\u0005&\u0014\u001f\u0153\u0154\f\u001d\u0002\u0002\u0154\u0155\u0007",
    "(\u0002\u0002\u0155\u0199\u0005&\u0014\u001e\u0156\u0157\f\u001c\u0002",
    "\u0002\u0157\u0158\u0007)\u0002\u0002\u0158\u0199\u0005&\u0014\u001d",
    "\u0159\u015a\f\u001b\u0002\u0002\u015a\u015b\u0007*\u0002\u0002\u015b",
    "\u0199\u0005&\u0014\u001c\u015c\u015d\f\u001a\u0002\u0002\u015d\u015e",
    "\u0007+\u0002\u0002\u015e\u0199\u0005&\u0014\u001b\u015f\u0160\f\u0019",
    "\u0002\u0002\u0160\u0161\u0007,\u0002\u0002\u0161\u0199\u0005&\u0014",
    "\u001a\u0162\u0163\f\u0018\u0002\u0002\u0163\u0164\u0007-\u0002\u0002",
    "\u0164\u0199\u0005&\u0014\u0019\u0165\u0166\f\u0017\u0002\u0002\u0166",
    "\u0167\u0007\u0016\u0002\u0002\u0167\u0199\u0005&\u0014\u0018\u0168",
    "\u0169\f\u0016\u0002\u0002\u0169\u016a\u0007.\u0002\u0002\u016a\u0199",
    "\u0005&\u0014\u0017\u016b\u016c\f\u0015\u0002\u0002\u016c\u016d\u0007",
    "/\u0002\u0002\u016d\u0199\u0005&\u0014\u0016\u016e\u016f\f\u0014\u0002",
    "\u0002\u016f\u0170\u00070\u0002\u0002\u0170\u0199\u0005&\u0014\u0015",
    "\u0171\u0172\f\u0013\u0002\u0002\u0172\u0173\u00071\u0002\u0002\u0173",
    "\u0199\u0005&\u0014\u0014\u0174\u0175\f\u0012\u0002\u0002\u0175\u0176",
    "\u00072\u0002\u0002\u0176\u0199\u0005&\u0014\u0013\u0177\u0178\f\u0011",
    "\u0002\u0002\u0178\u0179\u00073\u0002\u0002\u0179\u0199\u0005&\u0014",
    "\u0012\u017a\u017b\f\u0010\u0002\u0002\u017b\u017c\u00074\u0002\u0002",
    "\u017c\u0199\u0005&\u0014\u0011\u017d\u017e\f\u000f\u0002\u0002\u017e",
    "\u017f\u00075\u0002\u0002\u017f\u0199\u0005&\u0014\u0010\u0180\u0181",
    "\f\r\u0002\u0002\u0181\u0182\u00077\u0002\u0002\u0182\u0183\u0005&\u0014",
    "\u0002\u0183\u0184\u0007\u0012\u0002\u0002\u0184\u0185\u0005&\u0014",
    "\u000e\u0185\u0199\u0003\u0002\u0002\u0002\u0186\u0187\f\"\u0002\u0002",
    "\u0187\u0199\u0007#\u0002\u0002\u0188\u0189\f!\u0002\u0002\u0189\u0199",
    "\u0007$\u0002\u0002\u018a\u018b\f\u0006\u0002\u0002\u018b\u0191\u0007",
    "8\u0002\u0002\u018c\u018d\u0005&\u0014\u0002\u018d\u018e\u0007\u000f",
    "\u0002\u0002\u018e\u0190\u0003\u0002\u0002\u0002\u018f\u018c\u0003\u0002",
    "\u0002\u0002\u0190\u0193\u0003\u0002\u0002\u0002\u0191\u018f\u0003\u0002",
    "\u0002\u0002\u0191\u0192\u0003\u0002\u0002\u0002\u0192\u0195\u0003\u0002",
    "\u0002\u0002\u0193\u0191\u0003\u0002\u0002\u0002\u0194\u0196\u0005&",
    "\u0014\u0002\u0195\u0194\u0003\u0002\u0002\u0002\u0195\u0196\u0003\u0002",
    "\u0002\u0002\u0196\u0197\u0003\u0002\u0002\u0002\u0197\u0199\u00079",
    "\u0002\u0002\u0198\u0129\u0003\u0002\u0002\u0002\u0198\u012c\u0003\u0002",
    "\u0002\u0002\u0198\u012f\u0003\u0002\u0002\u0002\u0198\u0132\u0003\u0002",
    "\u0002\u0002\u0198\u0135\u0003\u0002\u0002\u0002\u0198\u0138\u0003\u0002",
    "\u0002\u0002\u0198\u013b\u0003\u0002\u0002\u0002\u0198\u013e\u0003\u0002",
    "\u0002\u0002\u0198\u0141\u0003\u0002\u0002\u0002\u0198\u0144\u0003\u0002",
    "\u0002\u0002\u0198\u0147\u0003\u0002\u0002\u0002\u0198\u014a\u0003\u0002",
    "\u0002\u0002\u0198\u014d\u0003\u0002\u0002\u0002\u0198\u0150\u0003\u0002",
    "\u0002\u0002\u0198\u0153\u0003\u0002\u0002\u0002\u0198\u0156\u0003\u0002",
    "\u0002\u0002\u0198\u0159\u0003\u0002\u0002\u0002\u0198\u015c\u0003\u0002",
    "\u0002\u0002\u0198\u015f\u0003\u0002\u0002\u0002\u0198\u0162\u0003\u0002",
    "\u0002\u0002\u0198\u0165\u0003\u0002\u0002\u0002\u0198\u0168\u0003\u0002",
    "\u0002\u0002\u0198\u016b\u0003\u0002\u0002\u0002\u0198\u016e\u0003\u0002",
    "\u0002\u0002\u0198\u0171\u0003\u0002\u0002\u0002\u0198\u0174\u0003\u0002",
    "\u0002\u0002\u0198\u0177\u0003\u0002\u0002\u0002\u0198\u017a\u0003\u0002",
    "\u0002\u0002\u0198\u017d\u0003\u0002\u0002\u0002\u0198\u0180\u0003\u0002",
    "\u0002\u0002\u0198\u0186\u0003\u0002\u0002\u0002\u0198\u0188\u0003\u0002",
    "\u0002\u0002\u0198\u018a\u0003\u0002\u0002\u0002\u0199\u019c\u0003\u0002",
    "\u0002\u0002\u019a\u0198\u0003\u0002\u0002\u0002\u019a\u019b\u0003\u0002",
    "\u0002\u0002\u019b\'\u0003\u0002\u0002\u0002\u019c\u019a\u0003\u0002",
    "\u0002\u0002\u019d\u019f\u0007F\u0002\u0002\u019e\u019d\u0003\u0002",
    "\u0002\u0002\u019e\u019f\u0003\u0002\u0002\u0002\u019f\u01a4\u0003\u0002",
    "\u0002\u0002\u01a0\u01a1\u00078\u0002\u0002\u01a1\u01a2\u0005&\u0014",
    "\u0002\u01a2\u01a3\u00079\u0002\u0002\u01a3\u01a5\u0003\u0002\u0002",
    "\u0002\u01a4\u01a0\u0003\u0002\u0002\u0002\u01a5\u01a6\u0003\u0002\u0002",
    "\u0002\u01a6\u01a4\u0003\u0002\u0002\u0002\u01a6\u01a7\u0003\u0002\u0002",
    "\u0002\u01a7)\u0003\u0002\u0002\u0002+139?KQ]jnr}\u0084\u0089\u008e",
    "\u0094\u009d\u00a2\u00ae\u00b8\u00bc\u00c1\u00c6\u00cc\u00d2\u00dd\u00e0",
    "\u00e3\u00eb\u00f0\u00f4\u00f8\u011c\u0120\u0125\u0127\u0191\u0195\u0198",
    "\u019a\u019e\u01a6"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "';'", "'#property'", "'if'", "'('", "')'", 
                     "'else'", "'{'", "'}'", "'switch'", "'while'", "'for'", 
                     "'do'", "','", "'case'", "'default'", "':'", "'struct'", 
                     "'enum'", "'='", "'-'", "'!'", "'~'", "'+='", "'-='", 
                     "'*='", "'/='", "'%='", "'>>='", "'<<='", "'&='", "'|='", 
                     "'^='", "'--'", "'++'", "'>>'", "'<<'", "'&'", "'|'", 
                     "'^'", "'*'", "'/'", "'%'", "'+'", "'>='", "'<='", 
                     "'>'", "'<'", "'=='", "'!='", "'&&'", "'||'", "'.'", 
                     "'?'", "'['", "']'", "'return'", "'NULL'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', "Null", "MemoryClass", "PredifinedType", "Bool", 
                      "Number", "Identifier", "String", "Date", "Char", 
                      "Comment", "Space", "DynaArray" ];

var ruleNames =  [ "root", "property", "statement", "operation", "forMultiExpressions", 
                   "forExpression", "switchCase", "struct", "structElement", 
                   "structInit", "enumDef", "enumInstance", "functionDecl", 
                   "functionArgument", "declaration", "declarationElement", 
                   "declarationInitialValue", "type", "expression", "indexes" ];

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
MQL4Parser.Null = 57;
MQL4Parser.MemoryClass = 58;
MQL4Parser.PredifinedType = 59;
MQL4Parser.Bool = 60;
MQL4Parser.Number = 61;
MQL4Parser.Identifier = 62;
MQL4Parser.String = 63;
MQL4Parser.Date = 64;
MQL4Parser.Char = 65;
MQL4Parser.Comment = 66;
MQL4Parser.Space = 67;
MQL4Parser.DynaArray = 68;

MQL4Parser.RULE_root = 0;
MQL4Parser.RULE_property = 1;
MQL4Parser.RULE_statement = 2;
MQL4Parser.RULE_operation = 3;
MQL4Parser.RULE_forMultiExpressions = 4;
MQL4Parser.RULE_forExpression = 5;
MQL4Parser.RULE_switchCase = 6;
MQL4Parser.RULE_struct = 7;
MQL4Parser.RULE_structElement = 8;
MQL4Parser.RULE_structInit = 9;
MQL4Parser.RULE_enumDef = 10;
MQL4Parser.RULE_enumInstance = 11;
MQL4Parser.RULE_functionDecl = 12;
MQL4Parser.RULE_functionArgument = 13;
MQL4Parser.RULE_declaration = 14;
MQL4Parser.RULE_declarationElement = 15;
MQL4Parser.RULE_declarationInitialValue = 16;
MQL4Parser.RULE_type = 17;
MQL4Parser.RULE_expression = 18;
MQL4Parser.RULE_indexes = 19;

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
        this.state = 49;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MQL4Parser.T__1) | (1 << MQL4Parser.T__16) | (1 << MQL4Parser.T__17))) !== 0) || ((((_la - 58)) & ~0x1f) == 0 && ((1 << (_la - 58)) & ((1 << (MQL4Parser.MemoryClass - 58)) | (1 << (MQL4Parser.PredifinedType - 58)) | (1 << (MQL4Parser.Identifier - 58)))) !== 0)) {
            this.state = 47;
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 40;
                this.property();
                break;

            case 2:
                this.state = 41;
                this.declaration();
                this.state = 42;
                this.match(MQL4Parser.T__0);
                break;

            case 3:
                this.state = 44;
                this.enumDef();
                break;

            case 4:
                this.state = 45;
                this.functionDecl();
                break;

            case 5:
                this.state = 46;
                this.struct();
                break;

            }
            this.state = 51;
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
        this.state = 52;
        this.match(MQL4Parser.T__1);

        this.state = 53;
        localctx.name = this.match(MQL4Parser.Identifier);
        this.state = 55;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.String) {
            this.state = 54;
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
    this.enterRule(localctx, 4, MQL4Parser.RULE_statement);
    try {
        this.state = 61;
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 57;
            this.declaration();
            this.state = 58;
            this.match(MQL4Parser.T__0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 60;
            this.operation();
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
    this.enterRule(localctx, 6, MQL4Parser.RULE_operation);
    var _la = 0; // Token type
    try {
        this.state = 123;
        switch(this._input.LA(1)) {
        case MQL4Parser.T__3:
        case MQL4Parser.T__19:
        case MQL4Parser.T__20:
        case MQL4Parser.T__21:
        case MQL4Parser.T__32:
        case MQL4Parser.T__33:
        case MQL4Parser.T__55:
        case MQL4Parser.Null:
        case MQL4Parser.Bool:
        case MQL4Parser.Number:
        case MQL4Parser.Identifier:
        case MQL4Parser.String:
        case MQL4Parser.Date:
        case MQL4Parser.Char:
            localctx = new ExpressionOperationContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 63;
            this.expression(0);
            this.state = 64;
            this.match(MQL4Parser.T__0);
            break;
        case MQL4Parser.T__2:
            localctx = new IfElseOperationContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 66;
            this.match(MQL4Parser.T__2);
            this.state = 67;
            this.match(MQL4Parser.T__3);
            this.state = 68;
            localctx.condition = this.expression(0);
            this.state = 69;
            this.match(MQL4Parser.T__4);
            this.state = 70;
            localctx.opTrue = this.operation();
            this.state = 73;
            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
            if(la_===1) {
                this.state = 71;
                this.match(MQL4Parser.T__5);
                this.state = 72;
                localctx.opFalse = this.operation();

            }
            break;
        case MQL4Parser.T__6:
            localctx = new BlockOperationContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 75;
            this.match(MQL4Parser.T__6);
            this.state = 79;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 3)) & ~0x1f) == 0 && ((1 << (_la - 3)) & ((1 << (MQL4Parser.T__2 - 3)) | (1 << (MQL4Parser.T__3 - 3)) | (1 << (MQL4Parser.T__6 - 3)) | (1 << (MQL4Parser.T__8 - 3)) | (1 << (MQL4Parser.T__9 - 3)) | (1 << (MQL4Parser.T__10 - 3)) | (1 << (MQL4Parser.T__11 - 3)) | (1 << (MQL4Parser.T__19 - 3)) | (1 << (MQL4Parser.T__20 - 3)) | (1 << (MQL4Parser.T__21 - 3)) | (1 << (MQL4Parser.T__32 - 3)) | (1 << (MQL4Parser.T__33 - 3)))) !== 0) || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (MQL4Parser.T__55 - 56)) | (1 << (MQL4Parser.Null - 56)) | (1 << (MQL4Parser.MemoryClass - 56)) | (1 << (MQL4Parser.PredifinedType - 56)) | (1 << (MQL4Parser.Bool - 56)) | (1 << (MQL4Parser.Number - 56)) | (1 << (MQL4Parser.Identifier - 56)) | (1 << (MQL4Parser.String - 56)) | (1 << (MQL4Parser.Date - 56)) | (1 << (MQL4Parser.Char - 56)))) !== 0)) {
                this.state = 76;
                this.statement();
                this.state = 81;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 82;
            this.match(MQL4Parser.T__7);
            break;
        case MQL4Parser.T__8:
            localctx = new SwitchOperationContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 83;
            this.match(MQL4Parser.T__8);
            this.state = 84;
            this.match(MQL4Parser.T__3);
            this.state = 85;
            localctx.leftCondition = this.expression(0);
            this.state = 86;
            this.match(MQL4Parser.T__4);
            this.state = 87;
            this.match(MQL4Parser.T__6);
            this.state = 89; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 88;
                this.switchCase();
                this.state = 91; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===MQL4Parser.T__13 || _la===MQL4Parser.T__14);
            this.state = 93;
            this.match(MQL4Parser.T__7);
            break;
        case MQL4Parser.T__9:
            localctx = new WhileOperationContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 95;
            this.match(MQL4Parser.T__9);
            this.state = 96;
            this.match(MQL4Parser.T__3);
            this.state = 97;
            this.expression(0);
            this.state = 98;
            this.match(MQL4Parser.T__4);
            this.state = 99;
            this.operation();
            break;
        case MQL4Parser.T__10:
            localctx = new ForOperationContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 101;
            this.match(MQL4Parser.T__10);
            this.state = 102;
            this.match(MQL4Parser.T__3);
            this.state = 104;
            _la = this._input.LA(1);
            if(((((_la - 4)) & ~0x1f) == 0 && ((1 << (_la - 4)) & ((1 << (MQL4Parser.T__3 - 4)) | (1 << (MQL4Parser.T__19 - 4)) | (1 << (MQL4Parser.T__20 - 4)) | (1 << (MQL4Parser.T__21 - 4)) | (1 << (MQL4Parser.T__32 - 4)) | (1 << (MQL4Parser.T__33 - 4)))) !== 0) || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (MQL4Parser.T__55 - 56)) | (1 << (MQL4Parser.Null - 56)) | (1 << (MQL4Parser.MemoryClass - 56)) | (1 << (MQL4Parser.PredifinedType - 56)) | (1 << (MQL4Parser.Bool - 56)) | (1 << (MQL4Parser.Number - 56)) | (1 << (MQL4Parser.Identifier - 56)) | (1 << (MQL4Parser.String - 56)) | (1 << (MQL4Parser.Date - 56)) | (1 << (MQL4Parser.Char - 56)))) !== 0)) {
                this.state = 103;
                localctx.init = this.forMultiExpressions();
            }

            this.state = 106;
            this.match(MQL4Parser.T__0);
            this.state = 108;
            _la = this._input.LA(1);
            if(((((_la - 4)) & ~0x1f) == 0 && ((1 << (_la - 4)) & ((1 << (MQL4Parser.T__3 - 4)) | (1 << (MQL4Parser.T__19 - 4)) | (1 << (MQL4Parser.T__20 - 4)) | (1 << (MQL4Parser.T__21 - 4)) | (1 << (MQL4Parser.T__32 - 4)) | (1 << (MQL4Parser.T__33 - 4)))) !== 0) || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (MQL4Parser.T__55 - 56)) | (1 << (MQL4Parser.Null - 56)) | (1 << (MQL4Parser.MemoryClass - 56)) | (1 << (MQL4Parser.PredifinedType - 56)) | (1 << (MQL4Parser.Bool - 56)) | (1 << (MQL4Parser.Number - 56)) | (1 << (MQL4Parser.Identifier - 56)) | (1 << (MQL4Parser.String - 56)) | (1 << (MQL4Parser.Date - 56)) | (1 << (MQL4Parser.Char - 56)))) !== 0)) {
                this.state = 107;
                localctx.term = this.forMultiExpressions();
            }

            this.state = 110;
            this.match(MQL4Parser.T__0);
            this.state = 112;
            _la = this._input.LA(1);
            if(((((_la - 4)) & ~0x1f) == 0 && ((1 << (_la - 4)) & ((1 << (MQL4Parser.T__3 - 4)) | (1 << (MQL4Parser.T__19 - 4)) | (1 << (MQL4Parser.T__20 - 4)) | (1 << (MQL4Parser.T__21 - 4)) | (1 << (MQL4Parser.T__32 - 4)) | (1 << (MQL4Parser.T__33 - 4)))) !== 0) || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (MQL4Parser.T__55 - 56)) | (1 << (MQL4Parser.Null - 56)) | (1 << (MQL4Parser.MemoryClass - 56)) | (1 << (MQL4Parser.PredifinedType - 56)) | (1 << (MQL4Parser.Bool - 56)) | (1 << (MQL4Parser.Number - 56)) | (1 << (MQL4Parser.Identifier - 56)) | (1 << (MQL4Parser.String - 56)) | (1 << (MQL4Parser.Date - 56)) | (1 << (MQL4Parser.Char - 56)))) !== 0)) {
                this.state = 111;
                localctx.inc = this.forMultiExpressions();
            }

            this.state = 114;
            this.match(MQL4Parser.T__4);
            this.state = 115;
            localctx.operator = this.operation();
            break;
        case MQL4Parser.T__11:
            localctx = new DoWhileOperationContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 116;
            this.match(MQL4Parser.T__11);
            this.state = 117;
            localctx.operator = this.operation();
            this.state = 118;
            this.match(MQL4Parser.T__9);
            this.state = 119;
            this.match(MQL4Parser.T__3);
            this.state = 120;
            localctx.condition = this.expression(0);
            this.state = 121;
            this.match(MQL4Parser.T__4);
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
    this.enterRule(localctx, 8, MQL4Parser.RULE_forMultiExpressions);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.forExpression();
        this.state = 130;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MQL4Parser.T__12) {
            this.state = 126;
            this.match(MQL4Parser.T__12);
            this.state = 127;
            this.forExpression();
            this.state = 132;
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
    this.enterRule(localctx, 10, MQL4Parser.RULE_forExpression);
    try {
        this.state = 135;
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 133;
            this.declaration();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 134;
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
    this.enterRule(localctx, 12, MQL4Parser.RULE_switchCase);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        switch(this._input.LA(1)) {
        case MQL4Parser.T__13:
            this.state = 137;
            this.match(MQL4Parser.T__13);
            this.state = 138;
            localctx.rightCondition = this.expression(0);
            break;
        case MQL4Parser.T__14:
            this.state = 139;
            this.match(MQL4Parser.T__14);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 142;
        this.match(MQL4Parser.T__15);
        this.state = 146;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 3)) & ~0x1f) == 0 && ((1 << (_la - 3)) & ((1 << (MQL4Parser.T__2 - 3)) | (1 << (MQL4Parser.T__3 - 3)) | (1 << (MQL4Parser.T__6 - 3)) | (1 << (MQL4Parser.T__8 - 3)) | (1 << (MQL4Parser.T__9 - 3)) | (1 << (MQL4Parser.T__10 - 3)) | (1 << (MQL4Parser.T__11 - 3)) | (1 << (MQL4Parser.T__19 - 3)) | (1 << (MQL4Parser.T__20 - 3)) | (1 << (MQL4Parser.T__21 - 3)) | (1 << (MQL4Parser.T__32 - 3)) | (1 << (MQL4Parser.T__33 - 3)))) !== 0) || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (MQL4Parser.T__55 - 56)) | (1 << (MQL4Parser.Null - 56)) | (1 << (MQL4Parser.MemoryClass - 56)) | (1 << (MQL4Parser.PredifinedType - 56)) | (1 << (MQL4Parser.Bool - 56)) | (1 << (MQL4Parser.Number - 56)) | (1 << (MQL4Parser.Identifier - 56)) | (1 << (MQL4Parser.String - 56)) | (1 << (MQL4Parser.Date - 56)) | (1 << (MQL4Parser.Char - 56)))) !== 0)) {
            this.state = 143;
            this.statement();
            this.state = 148;
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
    this.enterRule(localctx, 14, MQL4Parser.RULE_struct);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.match(MQL4Parser.T__16);
        this.state = 150;
        localctx.name = this.match(MQL4Parser.Identifier);
        this.state = 151;
        this.match(MQL4Parser.T__6);
        this.state = 155;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MQL4Parser.PredifinedType || _la===MQL4Parser.Identifier) {
            this.state = 152;
            this.structElement();
            this.state = 157;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 158;
        this.match(MQL4Parser.T__7);
        this.state = 160;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.T__0) {
            this.state = 159;
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
    this.enterRule(localctx, 16, MQL4Parser.RULE_structElement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        localctx.elementType = this.type();
        this.state = 163;
        localctx.name = this.match(MQL4Parser.Identifier);
        this.state = 164;
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
    this.enterRule(localctx, 18, MQL4Parser.RULE_structInit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.match(MQL4Parser.T__6);
        this.state = 167;
        this.expression(0);
        this.state = 172;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MQL4Parser.T__12) {
            this.state = 168;
            this.match(MQL4Parser.T__12);
            this.state = 169;
            this.expression(0);
            this.state = 174;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 175;
        this.match(MQL4Parser.T__7);
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
    this.enterRule(localctx, 20, MQL4Parser.RULE_enumDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        this.match(MQL4Parser.T__17);
        this.state = 178;
        localctx.name = this.match(MQL4Parser.Identifier);
        this.state = 179;
        this.match(MQL4Parser.T__6);
        this.state = 186;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MQL4Parser.Identifier) {
            this.state = 180;
            this.enumInstance();
            this.state = 182;
            _la = this._input.LA(1);
            if(_la===MQL4Parser.T__12) {
                this.state = 181;
                this.match(MQL4Parser.T__12);
            }

            this.state = 188;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 189;
        this.match(MQL4Parser.T__7);
        this.state = 191;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.T__0) {
            this.state = 190;
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
    this.enterRule(localctx, 22, MQL4Parser.RULE_enumInstance);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        localctx.name = this.match(MQL4Parser.Identifier);
        this.state = 196;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.T__18) {
            this.state = 194;
            this.match(MQL4Parser.T__18);

            this.state = 195;
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
    this.enterRule(localctx, 24, MQL4Parser.RULE_functionDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        this.type();

        this.state = 199;
        localctx.name = this.match(MQL4Parser.Identifier);
        this.state = 200;
        this.match(MQL4Parser.T__3);
        this.state = 202;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.PredifinedType || _la===MQL4Parser.Identifier) {
            this.state = 201;
            this.functionArgument();
        }

        this.state = 208;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MQL4Parser.T__12) {
            this.state = 204;
            this.match(MQL4Parser.T__12);
            this.state = 205;
            this.functionArgument();
            this.state = 210;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 211;
        this.match(MQL4Parser.T__4);
        this.state = 212;
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
    this.enterRule(localctx, 26, MQL4Parser.RULE_functionArgument);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 214;
        this.type();

        this.state = 215;
        localctx.name = this.match(MQL4Parser.Identifier);
        this.state = 222;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.T__18) {
            this.state = 217; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 216;
                this.match(MQL4Parser.T__18);
                this.state = 219; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===MQL4Parser.T__18);
            this.state = 221;
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
    this.enterRule(localctx, 28, MQL4Parser.RULE_declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.MemoryClass) {
            this.state = 224;
            localctx.memoryClass = this.match(MQL4Parser.MemoryClass);
        }

        this.state = 227;
        this.type();
        this.state = 228;
        this.declarationElement();
        this.state = 233;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 229;
                this.match(MQL4Parser.T__12);
                this.state = 230;
                this.declarationElement(); 
            }
            this.state = 235;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
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
    this.enterRule(localctx, 30, MQL4Parser.RULE_declarationElement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        localctx.name = this.match(MQL4Parser.Identifier);
        this.state = 238;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.T__53 || _la===MQL4Parser.DynaArray) {
            this.state = 237;
            this.indexes();
        }

        this.state = 242;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.T__18) {
            this.state = 240;
            this.match(MQL4Parser.T__18);

            this.state = 241;
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
    this.enterRule(localctx, 32, MQL4Parser.RULE_declarationInitialValue);
    try {
        this.state = 246;
        switch(this._input.LA(1)) {
        case MQL4Parser.T__6:
            this.enterOuterAlt(localctx, 1);
            this.state = 244;
            this.structInit();
            break;
        case MQL4Parser.T__3:
        case MQL4Parser.T__19:
        case MQL4Parser.T__20:
        case MQL4Parser.T__21:
        case MQL4Parser.T__32:
        case MQL4Parser.T__33:
        case MQL4Parser.T__55:
        case MQL4Parser.Null:
        case MQL4Parser.Bool:
        case MQL4Parser.Number:
        case MQL4Parser.Identifier:
        case MQL4Parser.String:
        case MQL4Parser.Date:
        case MQL4Parser.Char:
            this.enterOuterAlt(localctx, 2);
            this.state = 245;
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
    this.enterRule(localctx, 34, MQL4Parser.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 248;
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
    var _startState = 36;
    this.enterRecursionRule(localctx, 36, MQL4Parser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 293;
        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
        switch(la_) {
        case 1:
            localctx = new UnaryMinusExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 251;
            this.match(MQL4Parser.T__19);
            this.state = 252;
            this.expression(49);
            break;

        case 2:
            localctx = new NotExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 253;
            this.match(MQL4Parser.T__20);
            this.state = 254;
            this.expression(48);
            break;

        case 3:
            localctx = new ComplementExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 255;
            this.match(MQL4Parser.T__21);
            this.state = 256;
            this.expression(47);
            break;

        case 4:
            localctx = new PreDecExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 257;
            this.match(MQL4Parser.T__32);
            this.state = 258;
            this.expression(34);
            break;

        case 5:
            localctx = new PreIncExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 259;
            this.match(MQL4Parser.T__33);
            this.state = 260;
            this.expression(33);
            break;

        case 6:
            localctx = new DateExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 261;
            this.match(MQL4Parser.Date);
            break;

        case 7:
            localctx = new SpecializationExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 262;
            localctx.name = this.match(MQL4Parser.Identifier);
            this.state = 263;
            this.match(MQL4Parser.T__51);

            this.state = 264;
            localctx.right = this.expression(0);
            break;

        case 8:
            localctx = new StringExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 265;
            this.match(MQL4Parser.String);
            break;

        case 9:
            localctx = new BoolExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 266;
            this.match(MQL4Parser.Bool);
            break;

        case 10:
            localctx = new NumberExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 267;
            this.match(MQL4Parser.Number);
            break;

        case 11:
            localctx = new IdentifierExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 268;
            this.match(MQL4Parser.Identifier);
            break;

        case 12:
            localctx = new NullExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 269;
            this.match(MQL4Parser.Null);
            break;

        case 13:
            localctx = new CharExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 270;
            this.match(MQL4Parser.Char);
            break;

        case 14:
            localctx = new ExpressionExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 271;
            this.match(MQL4Parser.T__3);
            this.state = 272;
            this.expression(0);
            this.state = 273;
            this.match(MQL4Parser.T__4);
            break;

        case 15:
            localctx = new FunctionCallExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 275;
            this.match(MQL4Parser.Identifier);
            this.state = 276;
            this.match(MQL4Parser.T__3);
            this.state = 282;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 277;
                    this.expression(0);
                    this.state = 278;
                    this.match(MQL4Parser.T__12); 
                }
                this.state = 284;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
            }

            this.state = 286;
            _la = this._input.LA(1);
            if(((((_la - 4)) & ~0x1f) == 0 && ((1 << (_la - 4)) & ((1 << (MQL4Parser.T__3 - 4)) | (1 << (MQL4Parser.T__19 - 4)) | (1 << (MQL4Parser.T__20 - 4)) | (1 << (MQL4Parser.T__21 - 4)) | (1 << (MQL4Parser.T__32 - 4)) | (1 << (MQL4Parser.T__33 - 4)))) !== 0) || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (MQL4Parser.T__55 - 56)) | (1 << (MQL4Parser.Null - 56)) | (1 << (MQL4Parser.Bool - 56)) | (1 << (MQL4Parser.Number - 56)) | (1 << (MQL4Parser.Identifier - 56)) | (1 << (MQL4Parser.String - 56)) | (1 << (MQL4Parser.Date - 56)) | (1 << (MQL4Parser.Char - 56)))) !== 0)) {
                this.state = 285;
                this.expression(0);
            }

            this.state = 288;
            this.match(MQL4Parser.T__4);
            break;

        case 16:
            localctx = new ReturnExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 289;
            this.match(MQL4Parser.T__55);
            this.state = 291;
            var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
            if(la_===1) {
                this.state = 290;
                this.expression(0);

            }
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 408;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 406;
                var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new AssignExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 295;
                    if (!( this.precpred(this._ctx, 45))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 45)");
                    }
                    this.state = 296;
                    this.match(MQL4Parser.T__18);
                    this.state = 297;
                    this.expression(46);
                    break;

                case 2:
                    localctx = new AssignAddExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 298;
                    if (!( this.precpred(this._ctx, 44))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 44)");
                    }
                    this.state = 299;
                    this.match(MQL4Parser.T__22);
                    this.state = 300;
                    this.expression(45);
                    break;

                case 3:
                    localctx = new AssignMinusExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 301;
                    if (!( this.precpred(this._ctx, 43))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 43)");
                    }
                    this.state = 302;
                    this.match(MQL4Parser.T__23);
                    this.state = 303;
                    this.expression(44);
                    break;

                case 4:
                    localctx = new AssignMultiplyExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 304;
                    if (!( this.precpred(this._ctx, 42))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 42)");
                    }
                    this.state = 305;
                    this.match(MQL4Parser.T__24);
                    this.state = 306;
                    this.expression(43);
                    break;

                case 5:
                    localctx = new AssignDivideExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 307;
                    if (!( this.precpred(this._ctx, 41))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 41)");
                    }
                    this.state = 308;
                    this.match(MQL4Parser.T__25);
                    this.state = 309;
                    this.expression(42);
                    break;

                case 6:
                    localctx = new AssignModulusExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 310;
                    if (!( this.precpred(this._ctx, 40))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 40)");
                    }
                    this.state = 311;
                    this.match(MQL4Parser.T__26);
                    this.state = 312;
                    this.expression(41);
                    break;

                case 7:
                    localctx = new AssignShiftBitRightExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 313;
                    if (!( this.precpred(this._ctx, 39))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 39)");
                    }
                    this.state = 314;
                    this.match(MQL4Parser.T__27);
                    this.state = 315;
                    this.expression(40);
                    break;

                case 8:
                    localctx = new AssignShiftBitLeftExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 316;
                    if (!( this.precpred(this._ctx, 38))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 38)");
                    }
                    this.state = 317;
                    this.match(MQL4Parser.T__28);
                    this.state = 318;
                    this.expression(39);
                    break;

                case 9:
                    localctx = new AssignBitAndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 319;
                    if (!( this.precpred(this._ctx, 37))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 37)");
                    }
                    this.state = 320;
                    this.match(MQL4Parser.T__29);
                    this.state = 321;
                    this.expression(38);
                    break;

                case 10:
                    localctx = new AssignBitOrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 322;
                    if (!( this.precpred(this._ctx, 36))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 36)");
                    }
                    this.state = 323;
                    this.match(MQL4Parser.T__30);
                    this.state = 324;
                    this.expression(37);
                    break;

                case 11:
                    localctx = new AssignBitXorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 325;
                    if (!( this.precpred(this._ctx, 35))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 35)");
                    }
                    this.state = 326;
                    this.match(MQL4Parser.T__31);
                    this.state = 327;
                    this.expression(36);
                    break;

                case 12:
                    localctx = new ShiftBitRightExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 328;
                    if (!( this.precpred(this._ctx, 30))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 30)");
                    }
                    this.state = 329;
                    this.match(MQL4Parser.T__34);
                    this.state = 330;
                    this.expression(31);
                    break;

                case 13:
                    localctx = new ShiftBitLeftExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 331;
                    if (!( this.precpred(this._ctx, 29))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 29)");
                    }
                    this.state = 332;
                    this.match(MQL4Parser.T__35);
                    this.state = 333;
                    this.expression(30);
                    break;

                case 14:
                    localctx = new BitAndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 334;
                    if (!( this.precpred(this._ctx, 28))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 28)");
                    }
                    this.state = 335;
                    this.match(MQL4Parser.T__36);
                    this.state = 336;
                    this.expression(29);
                    break;

                case 15:
                    localctx = new BitOrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 337;
                    if (!( this.precpred(this._ctx, 27))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 27)");
                    }
                    this.state = 338;
                    this.match(MQL4Parser.T__37);
                    this.state = 339;
                    this.expression(28);
                    break;

                case 16:
                    localctx = new BitXorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 340;
                    if (!( this.precpred(this._ctx, 26))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 26)");
                    }
                    this.state = 341;
                    this.match(MQL4Parser.T__38);
                    this.state = 342;
                    this.expression(27);
                    break;

                case 17:
                    localctx = new MultiplyExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 343;
                    if (!( this.precpred(this._ctx, 25))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
                    }
                    this.state = 344;
                    this.match(MQL4Parser.T__39);
                    this.state = 345;
                    this.expression(26);
                    break;

                case 18:
                    localctx = new DivideExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 346;
                    if (!( this.precpred(this._ctx, 24))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
                    }
                    this.state = 347;
                    this.match(MQL4Parser.T__40);
                    this.state = 348;
                    this.expression(25);
                    break;

                case 19:
                    localctx = new ModulusExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 349;
                    if (!( this.precpred(this._ctx, 23))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
                    }
                    this.state = 350;
                    this.match(MQL4Parser.T__41);
                    this.state = 351;
                    this.expression(24);
                    break;

                case 20:
                    localctx = new AddExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 352;
                    if (!( this.precpred(this._ctx, 22))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
                    }
                    this.state = 353;
                    this.match(MQL4Parser.T__42);
                    this.state = 354;
                    this.expression(23);
                    break;

                case 21:
                    localctx = new SubtractExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 355;
                    if (!( this.precpred(this._ctx, 21))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                    }
                    this.state = 356;
                    this.match(MQL4Parser.T__19);
                    this.state = 357;
                    this.expression(22);
                    break;

                case 22:
                    localctx = new GtEqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 358;
                    if (!( this.precpred(this._ctx, 20))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                    }
                    this.state = 359;
                    this.match(MQL4Parser.T__43);
                    this.state = 360;
                    this.expression(21);
                    break;

                case 23:
                    localctx = new LtEqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 361;
                    if (!( this.precpred(this._ctx, 19))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                    }
                    this.state = 362;
                    this.match(MQL4Parser.T__44);
                    this.state = 363;
                    this.expression(20);
                    break;

                case 24:
                    localctx = new GtExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 364;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 365;
                    this.match(MQL4Parser.T__45);
                    this.state = 366;
                    this.expression(19);
                    break;

                case 25:
                    localctx = new LtExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 367;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 368;
                    this.match(MQL4Parser.T__46);
                    this.state = 369;
                    this.expression(18);
                    break;

                case 26:
                    localctx = new EqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 370;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 371;
                    this.match(MQL4Parser.T__47);
                    this.state = 372;
                    this.expression(17);
                    break;

                case 27:
                    localctx = new NotEqExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 373;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 374;
                    this.match(MQL4Parser.T__48);
                    this.state = 375;
                    this.expression(16);
                    break;

                case 28:
                    localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 376;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 377;
                    this.match(MQL4Parser.T__49);
                    this.state = 378;
                    this.expression(15);
                    break;

                case 29:
                    localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 379;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 380;
                    this.match(MQL4Parser.T__50);
                    this.state = 381;
                    this.expression(14);
                    break;

                case 30:
                    localctx = new TernaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 382;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 383;
                    this.match(MQL4Parser.T__52);
                    this.state = 384;
                    this.expression(0);
                    this.state = 385;
                    this.match(MQL4Parser.T__15);
                    this.state = 386;
                    this.expression(12);
                    break;

                case 31:
                    localctx = new PostDecExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 388;
                    if (!( this.precpred(this._ctx, 32))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 32)");
                    }
                    this.state = 389;
                    this.match(MQL4Parser.T__32);
                    break;

                case 32:
                    localctx = new PostIncExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 390;
                    if (!( this.precpred(this._ctx, 31))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 31)");
                    }
                    this.state = 391;
                    this.match(MQL4Parser.T__33);
                    break;

                case 33:
                    localctx = new IndexingExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MQL4Parser.RULE_expression);
                    this.state = 392;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 393;
                    this.match(MQL4Parser.T__53);
                    this.state = 399;
                    this._errHandler.sync(this);
                    var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
                    while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                        if(_alt===1) {
                            this.state = 394;
                            this.expression(0);
                            this.state = 395;
                            this.match(MQL4Parser.T__12); 
                        }
                        this.state = 401;
                        this._errHandler.sync(this);
                        _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
                    }

                    this.state = 403;
                    _la = this._input.LA(1);
                    if(((((_la - 4)) & ~0x1f) == 0 && ((1 << (_la - 4)) & ((1 << (MQL4Parser.T__3 - 4)) | (1 << (MQL4Parser.T__19 - 4)) | (1 << (MQL4Parser.T__20 - 4)) | (1 << (MQL4Parser.T__21 - 4)) | (1 << (MQL4Parser.T__32 - 4)) | (1 << (MQL4Parser.T__33 - 4)))) !== 0) || ((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (MQL4Parser.T__55 - 56)) | (1 << (MQL4Parser.Null - 56)) | (1 << (MQL4Parser.Bool - 56)) | (1 << (MQL4Parser.Number - 56)) | (1 << (MQL4Parser.Identifier - 56)) | (1 << (MQL4Parser.String - 56)) | (1 << (MQL4Parser.Date - 56)) | (1 << (MQL4Parser.Char - 56)))) !== 0)) {
                        this.state = 402;
                        this.expression(0);
                    }

                    this.state = 405;
                    this.match(MQL4Parser.T__54);
                    break;

                } 
            }
            this.state = 410;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
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
    this.enterRule(localctx, 38, MQL4Parser.RULE_indexes);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 412;
        _la = this._input.LA(1);
        if(_la===MQL4Parser.DynaArray) {
            this.state = 411;
            localctx.dynamic = this.match(MQL4Parser.DynaArray);
        }

        this.state = 418; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 414;
            this.match(MQL4Parser.T__53);
            this.state = 415;
            this.expression(0);
            this.state = 416;
            this.match(MQL4Parser.T__54);
            this.state = 420; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===MQL4Parser.T__53);
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
	case 18:
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
