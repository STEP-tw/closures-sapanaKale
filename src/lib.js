const makeConstant = undefined;
const makeCounterFromN = undefined;
const makeCounterFromZero = undefined;
const makeDeltaTracker = undefined;
const makeFiboGenerator = undefined;
const makeCycler = undefined;

const curry = function (functionRef,arg) {
  return function (arg1,arg2) {
    return functionRef(arg,arg1,arg2);
  }
}

const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
