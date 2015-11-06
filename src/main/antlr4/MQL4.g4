grammar MQL4;


root
 : (include|define|notSupportedPreprocessor|declaration ';'|enumDef|functionDecl|struct)*
 ;

include:
    '#include' filename=String
    | '#include' '<' expression '>'
;

define:
    '#define' name=Identifier value=expression
;

notSupportedPreprocessor
 : NotSupportedPreprocessor
 ;


statement
 : declaration ';'
 | operation
 | include
 | define
 | notSupportedPreprocessor
 ;


operation :
    expression ';'                                                                         #expressionOperation
    | 'if' '(' condition=expression ')' opTrue=operation ('else' opFalse=operation)?       #ifElseOperation
    | '{' (statement)* '}'                                                                 #blockOperation
    | 'switch' '(' leftCondition=expression ')' '{' switchCase+ '}'                        #switchOperation
    | 'while' '(' expression ')' operation                                                 #whileOperation
    | 'for' '(' (init=forMultiExpressions)? ';'
    (term=forMultiExpressions)? ';'
    (inc=forMultiExpressions)? ')'
    operator=operation                                                                     #forOperation
    | 'do' operator=operation 'while' '(' condition=expression ')'                         #doWhileOperation
;

forMultiExpressions:
    forExpression (',' forExpression)*
;

forExpression:
    declaration| expression
;


switchCase :
    ('case' rightCondition=expression | 'default') ':' (statement)*
;

// Structure declaration
struct : 'struct'  name=Identifier '{' (structElement)* '}' ';'?;
structElement : elementType = type name=Identifier ';';
structInit : '{' expression (',' expression)* '}';


// Enum
enumDef : 'enum' name=Identifier '{' (enumInstance ','?)* '}' ';'?;
enumInstance : (name=Identifier) ('=' (value=Number))?;


functionDecl
 : type (name=Identifier) '(' functionArgument? (',' functionArgument)* ')' functionContent=operation
 ;

functionArgument : type (name=Identifier) ('=' + expression)?;


declaration :
       (memoryClass=MemoryClass)? type declarationElement (',' declarationElement)*
  ;

declarationElement :
    (name=Identifier)
       indexes?
       ('=' (initialValue=declarationInitialValue))?
;

declarationInitialValue :
    structInit
    |expression
;



type
    : Identifier
    | PredifinedType
    ;


expression
 // unary expression
 : '-' expression                            #unaryMinusExpression
 | '!' expression                            #notExpression
 | '~' expression                            #complementExpression
 | Date                                      #dateExpression

 // assignement expression
 | expression '=' expression                 #assignExpression
 | expression '+=' expression                #assignAddExpression
 | expression '-=' expression                #assignMinusExpression
 | expression '*=' expression                #assignMultiplyExpression
 | expression '/=' expression                #assignDivideExpression
 | expression '%=' expression                #assignModulusExpression
 | expression '>>=' expression               #assignShiftBitRightExpression
 | expression '<<=' expression               #assignShiftBitLeftExpression
 | expression '&=' expression                #assignBitAndExpression
 | expression '|=' expression                #assignBitOrExpression
 | expression '^=' expression                #assignBitXorExpression

 // inc dec expression
 | '--' expression                           #preDecExpression
 | '++' expression                           #preIncExpression
 | expression '--'                           #PostDecExpression
 | expression '++'                           #PostIncExpression

 // bit manipulation expression
 | expression '>>' expression                #shiftBitRightExpression
 | expression '<<' expression                #shiftBitLeftExpression
 | expression '&' expression                 #bitAndExpression
 | expression '|' expression                 #bitOrExpression
 | expression '^' expression                 #bitXorExpression

 // math expression
 | expression '*' expression                 #multiplyExpression
 | expression '/' expression                 #divideExpression
 | expression '%' expression                 #modulusExpression
 | expression '+' expression                 #addExpression
 | expression '-' expression                 #subtractExpression

 // Boolean operation
 | expression '>=' expression                #gtEqExpression
 | expression '<=' expression                #ltEqExpression
 | expression '>' expression                 #gtExpression
 | expression '<' expression                 #ltExpression
 | expression '==' expression                #eqExpression
 | expression '!=' expression                #notEqExpression
 | expression '&&' expression                #andExpression
 | expression '||' expression                #orExpression
 | (name=Identifier) '.' (right=expression)      #specializationExpression


 // Ternary operation
 | expression '?' expression ':' expression  #ternaryExpression

 // direct value operation
 | String                                    #stringExpression
 | Bool                                      #boolExpression
 | Number                                    #numberExpression
 | Identifier                                #identifierExpression
 | Null                                      #nullExpression
 | Char                                      #charExpression


 // indexing
 | expression '[' (expression ',')* expression? ']'      #indexingExpression

 // Others
 | '(' expression ')'                                    #expressionExpression

 // function call
  | Identifier '(' (expression ',')* expression? ')'     #functionCallExpression


 // Operator expression
 | 'return' expression?                      #returnExpression
 ;


indexes
 : (dynamic=DynaArray)? ('[' expression ']')+
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
 ;

Date : [D]['] [0-9.: ]* ['];

Char : ['] . ['];

NotSupportedPreprocessor
 : ('#ifdef'|'#ifndef'|'#else'|'#endif'|'#property') ~[\r\n]*
 | '#import' .*? '#import'
 ;


Comment
 : ('//' ~[\r\n]* | '/*' .*? '*/') -> channel(2)
 ;

Space
 : [ \t\r\n\u000C] -> skip
 ;

DynaArray
: '[' ']'
;

fragment Int
 : [1-9] Digit*
 | '0'
 ;

fragment Digit
 : [0-9]
 ;

