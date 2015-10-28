grammar MQL4;


root
 : (property|rootDeclaration|functionDecl)*
 ;


property
 : '#property' (name=Identifier) (value=String)? /*TODO value shoud be expression*/
 ;

block
 : '{' statement* '}'
 | statement;


statement
 : (declaration| expression) ';'
 ;


functionDecl
 : type (name=Identifier) '(' functionArgument? (',' functionArgument)* ')' block
 ;

functionArgument : type (name=Identifier) ('=' + expression);


rootDeclaration :
       (memoryClass=MemoryClass)? type (name=Identifier)
       indexes?
       ('=' expression)?
       ';'
;

declaration :
       type (name=Identifier)
       indexes?
       ('=' expression)?
       ';'
  ;


type
    : Identifier
    | PredifinedType
    ;





idList
 : Identifier (',' Identifier)*
 ;



expression
 // unary expression
 : '-' expression                           #unaryMinusExpression
 | '!' expression                           #notExpression
 | '~' expression                           #complementExpression

 // assignement expression
 | expression '=' expression                #assignExpression
 | expression '+=' expression               #assignAddExpression
 | expression '-=' expression               #assignMinusExpression
 | expression '*=' expression               #assignMultiplyExpression
 | expression '/=' expression               #assignDivideExpression
 | expression '%=' expression               #assignModulusExpression
 | expression '>>=' expression              #assignShiftBitRightExpression
 | expression '<<=' expression              #assignShiftBitLeftExpression
 | expression '&=' expression               #assignBitAndExpression
 | expression '|=' expression               #assignBitOrExpression
 | expression '^=' expression               #assignBitXorExpression

 // inc dec expression
 | '--' expression                          #preDecExpression
 | '++' expression                          #preIncExpression
 | expression '--'                          #PostDecExpression
 | expression '++'                          #PostIncExpression

 // bit manipulation expression
 | expression '>>' expression               #shiftBitRightExpression
 | expression '<<' expression               #shiftBitLeftExpression
 | expression '&' expression                #bitAndExpression
 | expression '|' expression                #bitOrExpression
 | expression '^' expression                #bitXorExpression

 // math expression
 | expression '*' expression                #multiplyExpression
 | expression '/' expression                #divideExpression
 | expression '%' expression                #modulusExpression
 | expression '+' expression                #addExpression
 | expression '-' expression                #subtractExpression

 // Boolean operation
 | expression '>=' expression               #gtEqExpression
 | expression '<=' expression               #ltEqExpression
 | expression '>' expression                #gtExpression
 | expression '<' expression                #ltExpression
 | expression '==' expression               #eqExpression
 | expression '!=' expression               #notEqExpression
 | expression '&&' expression               #andExpression
 | expression '||' expression               #orExpression

 // Ternary operation
 | expression '?' expression ':' expression #ternaryExpression

 // direct value operation
 | String                                   #stringExpression
 | Bool                                     #boolExpression
 | Number                                   #numberExpression
 | Identifier                               #identifierExpression
 | Null                                     #nullExpression

 // function call
 | Identifier '(' expression ')'             #functionCallExpression

 // indexing
 | expression '[' expression ']'            #indexingExpression

 // Others
 | '(' expression ')'                       #expressionExpression
 | expression ',' expression                #multipleExpressions
 ;

indexes
 : ('[' expression ']')+
 ;

Null: 'NULL';


MemoryClass
    : 'extern'
    | 'input'
    | 'static'
;


PredifinedType
    : 'bool'
    | 'enum'
    | 'struct'
    | 'char'
    | 'float'
    | 'uchar'
    | 'class'
    | 'int'
    | 'uint'
    | 'color'
    | 'long'
    | 'ulong'
    | 'datetime'
    | 'short'
    | 'ushort'
    | 'double'
    | 'string'
    | 'void'
    ;

Bool
 : 'true'
 | 'false'
 ;

Number
 : Int ('.' Digit*)? ('e'('+'|'-') Int*)?
 ;

Identifier
 : [a-zA-Z_] [a-zA-Z_0-9]*
 ;

String
 : ["] (~["\r\n] | '\\\\' | '\\"')* ["]
 | ['] (~['\r\n] | '\\\\' | '\\\'')* [']
 ;

Comment
 : ('//' ~[\r\n]* | '/*' .*? '*/') -> skip
 ;

Space
 : [ \t\r\n\u000C] -> skip
 ;

fragment Int
 : [1-9] Digit*
 | '0'
 ;

fragment Digit
 : [0-9]
 ;

