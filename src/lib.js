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

const makeFiboGenerator = function (arg1, arg2) {
  let firstTerm = 0;
  let secondTerm = 1;
  if (arg1 != undefined && arg2 == undefined) {
    secondTerm = arg1;
  }
  if (arg1 != undefined && arg2 == undefined) {
    firstTerm = arg1;
    secondTerm = arg2;
  }
  let fiboSeries = [firstTerm, secondTerm];
  let index = 2;
  output = makeCycler(fiboSeries);
  return function() {
    fiboSeries[index] = fiboSeries[index-1] + fiboSeries[index-2];
    index++;
    return output();
  }
}


const makeCycler = function (source) {
  let index = -1;
  const limit = source.length; 
  let array = source;
  let newArray = [];
  return function () {
    if (index < limit-1 ) {
      index++;
    } else {
      index = 0;
      array = newArray;
    }
    newArray.push(array[index]);
    return array[index];
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
