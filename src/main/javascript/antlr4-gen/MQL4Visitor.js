// Generated from MQL4.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by MQL4Parser.

function MQL4Visitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

MQL4Visitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
MQL4Visitor.prototype.constructor = MQL4Visitor;

// Visit a parse tree produced by MQL4Parser#root.
MQL4Visitor.prototype.visitRoot = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#property.
MQL4Visitor.prototype.visitProperty = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#block.
MQL4Visitor.prototype.visitBlock = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#statement.
MQL4Visitor.prototype.visitStatement = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#functionDecl.
MQL4Visitor.prototype.visitFunctionDecl = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#functionArgument.
MQL4Visitor.prototype.visitFunctionArgument = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#rootDeclaration.
MQL4Visitor.prototype.visitRootDeclaration = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#declaration.
MQL4Visitor.prototype.visitDeclaration = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#type.
MQL4Visitor.prototype.visitType = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#idList.
MQL4Visitor.prototype.visitIdList = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#divideExpression.
MQL4Visitor.prototype.visitDivideExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#assignMinusExpression.
MQL4Visitor.prototype.visitAssignMinusExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#assignMultiplyExpression.
MQL4Visitor.prototype.visitAssignMultiplyExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#modulusExpression.
MQL4Visitor.prototype.visitModulusExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#eqExpression.
MQL4Visitor.prototype.visitEqExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#addExpression.
MQL4Visitor.prototype.visitAddExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#assignDivideExpression.
MQL4Visitor.prototype.visitAssignDivideExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#assignExpression.
MQL4Visitor.prototype.visitAssignExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#assignBitXorExpression.
MQL4Visitor.prototype.visitAssignBitXorExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#orExpression.
MQL4Visitor.prototype.visitOrExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#assignBitOrExpression.
MQL4Visitor.prototype.visitAssignBitOrExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#indexingExpression.
MQL4Visitor.prototype.visitIndexingExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#complementExpression.
MQL4Visitor.prototype.visitComplementExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#andExpression.
MQL4Visitor.prototype.visitAndExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#boolExpression.
MQL4Visitor.prototype.visitBoolExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#ltExpression.
MQL4Visitor.prototype.visitLtExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#bitOrExpression.
MQL4Visitor.prototype.visitBitOrExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#expressionExpression.
MQL4Visitor.prototype.visitExpressionExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#nullExpression.
MQL4Visitor.prototype.visitNullExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#assignShiftBitLeftExpression.
MQL4Visitor.prototype.visitAssignShiftBitLeftExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#assignBitAndExpression.
MQL4Visitor.prototype.visitAssignBitAndExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#PostIncExpression.
MQL4Visitor.prototype.visitPostIncExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#bitXorExpression.
MQL4Visitor.prototype.visitBitXorExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#ltEqExpression.
MQL4Visitor.prototype.visitLtEqExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#shiftBitLeftExpression.
MQL4Visitor.prototype.visitShiftBitLeftExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#stringExpression.
MQL4Visitor.prototype.visitStringExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#identifierExpression.
MQL4Visitor.prototype.visitIdentifierExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#gtEqExpression.
MQL4Visitor.prototype.visitGtEqExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#notExpression.
MQL4Visitor.prototype.visitNotExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#preDecExpression.
MQL4Visitor.prototype.visitPreDecExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#multipleExpressions.
MQL4Visitor.prototype.visitMultipleExpressions = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#notEqExpression.
MQL4Visitor.prototype.visitNotEqExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#bitAndExpression.
MQL4Visitor.prototype.visitBitAndExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#shiftBitRightExpression.
MQL4Visitor.prototype.visitShiftBitRightExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#assignModulusExpression.
MQL4Visitor.prototype.visitAssignModulusExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#subtractExpression.
MQL4Visitor.prototype.visitSubtractExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#ternaryExpression.
MQL4Visitor.prototype.visitTernaryExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#multiplyExpression.
MQL4Visitor.prototype.visitMultiplyExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#gtExpression.
MQL4Visitor.prototype.visitGtExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#unaryMinusExpression.
MQL4Visitor.prototype.visitUnaryMinusExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#preIncExpression.
MQL4Visitor.prototype.visitPreIncExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#functionCallExpression.
MQL4Visitor.prototype.visitFunctionCallExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#assignShiftBitRightExpression.
MQL4Visitor.prototype.visitAssignShiftBitRightExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#numberExpression.
MQL4Visitor.prototype.visitNumberExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#assignAddExpression.
MQL4Visitor.prototype.visitAssignAddExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#PostDecExpression.
MQL4Visitor.prototype.visitPostDecExpression = function(ctx) {
};


// Visit a parse tree produced by MQL4Parser#indexes.
MQL4Visitor.prototype.visitIndexes = function(ctx) {
};



exports.MQL4Visitor = MQL4Visitor;