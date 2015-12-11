var COMPLEX_EXPR_EVAL = function (evaluationFrequency) {
  evaluationFrequency = evaluationFrequency || 4; // need at least one evaluation for each 1/4 of the period's condition;
  var MILLIS_BY_PERIOD = {minute: 60000, second: 1000, hour: 3600000};
  var _conditions = {};
  var _evaluations = {};
  var _getGroupId = function (type, groupIndex) {
    return type + "_" + groupIndex;
  };

  var _hasGapsInEvaluations = function (evaluations, periodLengthInMillis) {
    var periodFiled = [];
    var minTime = evaluations[evaluations.length - 1].time - periodLengthInMillis;
    var increment = periodLengthInMillis / evaluationFrequency;
    for (var i = 0; i < evaluationFrequency; i++) {
      var index = Math.floor(evaluations.length / evaluationFrequency * i + evaluations.length / (2 * evaluationFrequency));
      if (evaluations[index].time < minTime + increment * i || evaluations[index].time > minTime + increment * (i + 1)) {
        return true;
      }
    }
    return false;
  };


  var _cleanEvaluations = function (groupId, expressionIndex, time) {
    var condition = _conditions[groupId][expressionIndex];
    var groupEvaluations = _evaluations[groupId];
    if (condition.type == 'forAnyTick') {
      groupEvaluations[expressionIndex] = [groupEvaluations[expressionIndex][groupEvaluations[expressionIndex].length - 1]];
    } else {
      var minTime = time - MILLIS_BY_PERIOD[condition.timeUnit] * condition.timeAmount;
      var indexToRemoveFrom = 0;
      var expressionEvaluation = groupEvaluations[expressionIndex];
      while (expressionEvaluation[indexToRemoveFrom].time < minTime) {
        indexToRemoveFrom++;
      }
      if (indexToRemoveFrom > 0) {
        groupEvaluations[expressionIndex].splice(0, indexToRemoveFrom);
      }
    }
  };

  var _computeEvaluationsWithConditions = function (groupId, expressionIndex) {
    var condition = _conditions[groupId][expressionIndex];
    var evaluations = _evaluations[groupId][expressionIndex];
    if (condition.type == 'forAnyTick') {
      return evaluations[0].result;
    }

    if (_hasGapsInEvaluations(evaluations, MILLIS_BY_PERIOD[condition.timeUnit] * condition.timeAmount)) {
      return false;
    }

    var percent = 100 * evaluations.filter(function (evaluation) {
        return evaluation.result
      }).length / evaluations.length;
    if (condition.type == "percentForPeriod") {
      return percent >= condition.percent;
    }
    if (condition.type == "atLeastOnceForPeriod") {
      return percent > 0;
    }

    return percent == 0;

  };


  var addExpressionCondition = function (type, groupIndex, expressionIndex, condition) {
    var groupId = _getGroupId(type, groupIndex);
    var groupConditions = _conditions[groupId];
    if (!groupConditions) {
      groupConditions = [];
      _conditions[groupId] = groupConditions;
    }
    groupConditions[expressionIndex] = condition;
  };

  var addToEvaluation = function (type, groupIndex, expressionIndex, date, evaluationResult) {
    var groupId = _getGroupId(type, groupIndex);
    var groupEvaluations = _evaluations[groupId];
    if (!groupEvaluations) {
      groupEvaluations = [];
      _evaluations[groupId] = groupEvaluations;
    }
    var expressionEvaluation = groupEvaluations[expressionIndex];
    if (!expressionEvaluation) {
      expressionEvaluation = [];
      groupEvaluations[expressionIndex] = expressionEvaluation;
    }

    expressionEvaluation.push({time: date.getTime(), result: evaluationResult});
    _cleanEvaluations(groupId, expressionIndex, date.getTime());
  };


  var evaluateGroup = function (type, groupIndex) {
    var groupId = _getGroupId(type, groupIndex);
    var result = true;
    for (var i = 0; i < _evaluations[groupId].length; i++) {
      result = result && _computeEvaluationsWithConditions(groupId, i);
    }
    return result;
  };

  return {addExpressionCondition: addExpressionCondition, addToEvaluation: addToEvaluation, evaluateGroup: evaluateGroup};
};

