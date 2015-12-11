describe('COMPLEX_EXPR_EVAL', function () {
  it('is able to compute tick based evaluation', function () {
    var expressionEvaluator = new COMPLEX_EXPR_EVAL();
    expressionEvaluator.addExpressionCondition("open", 0, 0, {type: "forAnyTick"});
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(), false);
    expect(expressionEvaluator.evaluateGroup("open", 0)).toBeFalsy();
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(), true);
    expect(expressionEvaluator.evaluateGroup("open", 0)).toBeTruthy();
  });

  fit('need no gaps in data', function () {
    var expressionEvaluator = new COMPLEX_EXPR_EVAL();
    expressionEvaluator.addExpressionCondition("open", 0, 0, {type: "percentForPeriod", percent: 50, timeUnit: 'minute', timeAmount: 3.5});
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 1), true);
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 2), true);
    expect(expressionEvaluator.evaluateGroup("open", 0)).toBeFalsy();
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 10), true);
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 11), true);
    expect(expressionEvaluator.evaluateGroup("open", 0)).toBeFalsy();
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 12), true);
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 12), true);
    expect(expressionEvaluator.evaluateGroup("open", 0)).toBeFalsy();
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 13), true);
    expect(expressionEvaluator.evaluateGroup("open", 0)).toBeTruthy();
  });

  it('is able to compute percent for period based evaluation', function () {
    var expressionEvaluator = new COMPLEX_EXPR_EVAL();
    expressionEvaluator.addExpressionCondition("open", 0, 0, {type: "percentForPeriod", percent: 50, timeUnit: 'minute', timeAmount: 3.5});
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 1), true);
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 2), true);
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 3), true);
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 4), true);
    expect(expressionEvaluator.evaluateGroup("open", 0)).toBeTruthy();
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 5), false);
    expect(expressionEvaluator.evaluateGroup("open", 0)).toBeTruthy();
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 6), false);
    expect(expressionEvaluator.evaluateGroup("open", 0)).toBeTruthy();
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 7), false);
    expect(expressionEvaluator.evaluateGroup("open", 0)).toBeFalsy();
  });

  it('is able to compute at least once for period based evaluation', function () {
    var expressionEvaluator = new COMPLEX_EXPR_EVAL();
    expressionEvaluator.addExpressionCondition("open", 0, 0, {type: "atLeastOnceForPeriod", timeUnit: 'minute', timeAmount: 3.5});
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 1), true);
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 2), true);
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 3), true);
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 4), true);
    expect(expressionEvaluator.evaluateGroup("open", 0)).toBeTruthy();
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 5), false);
    expect(expressionEvaluator.evaluateGroup("open", 0)).toBeTruthy();
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 6), false);
    expect(expressionEvaluator.evaluateGroup("open", 0)).toBeTruthy();
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 7), false);
    expect(expressionEvaluator.evaluateGroup("open", 0)).toBeTruthy();
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 8), false);
    expect(expressionEvaluator.evaluateGroup("open", 0)).toBeFalsy();
  });

  it('is able to compute at least once for period based evaluation', function () {
    var expressionEvaluator = new COMPLEX_EXPR_EVAL();
    expressionEvaluator.addExpressionCondition("open", 0, 0, {type: "neverForPeriod", timeUnit: 'minute', timeAmount: 3.5});
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 1), true);
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 2), true);
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 3), true);
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 4), true);
    expect(expressionEvaluator.evaluateGroup("open", 0)).toBeFalsy();
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 5), false);
    expect(expressionEvaluator.evaluateGroup("open", 0)).toBeFalsy();
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 6), false);
    expect(expressionEvaluator.evaluateGroup("open", 0)).toBeFalsy();
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 7), false);
    expect(expressionEvaluator.evaluateGroup("open", 0)).toBeFalsy();
    expressionEvaluator.addToEvaluation("open", 0, 0, new Date(2010, 1, 1, 10, 8), false);
    expect(expressionEvaluator.evaluateGroup("open", 0)).toBeTruthy();
  });
});