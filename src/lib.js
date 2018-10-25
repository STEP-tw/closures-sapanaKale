const makeConstant = function (constant) {
  return function (args) {
    return constant;
  }
}

const makeCounterFromN = function (counter) {
  return function () {
    return counter++;
  }
}

const makeCounterFromZero = function () {
  let count = 0;
  return function () {
    return count++;
  }
}
const makeDeltaTracker = function (delta1) {
  let deltaData = {"old":"","delta":0,"new":delta1};
  return function (delta2) {
    deltaData['old']= deltaData['new'];
    if (!(delta2 == undefined)) {
      deltaData['delta']= delta2;
      deltaData['new']= deltaData['old'] + deltaData['delta'];;
      delta2 = deltaData['old'];
    }
    return deltaData;
  }
}

const makeFiboGenerator = undefined;

const makeCycler = function (source) {
  let index = -1;
  const limit = source.length; 
  return function () {
    if (index < limit-1 ) {
      index++;
    } else {
      index = 0;
    }
    return constSource[index];
  }
}

const curry = function (functionRef,arg) {
  return function (arg1,arg2) {
    return functionRef(arg,arg1,arg2);
  }
}

const compose = function (functionRef1, functionRef2) {
  return function (arg1, arg2) {
    return functionRef1(functionRef2(arg1,arg2));
  }
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
