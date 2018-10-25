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
const makeDeltaTracker = undefined;
const makeFiboGenerator = undefined;
const makeCycler = undefined;

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
