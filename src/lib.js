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
  let oldDelta = "";
  let currentDelta = 0;
  let newDelta = delta1;
  return function (delta2) {
    oldDelta = newDelta;
    if (!(delta2 == undefined)) {
      currentDelta = delta2;
      newDelta = oldDelta + currentDelta;
      delta2 = oldDelta;
    }
    return {'old':oldDelta, 'delta':currentDelta, 'new':newDelta};
  }
}

const makeFiboGenerator = function (arg1, arg2) {
  let lastTerm = 1;
  let secondLastTerm = 0;
  let pos = -1;
  if (arg1 != undefined && arg2 == undefined) {
    lastTerm = arg1;
  }
  if (arg1 != undefined && arg2 != undefined) {
    secondLastTerm = arg1;
    lastTerm = arg2;
  }
  let currentTerm = lastTerm + secondLastTerm;
  let fiboSeries =[secondLastTerm, lastTerm];
  return function() {
    fiboSeries.push(currentTerm);
    secondLastTerm = lastTerm;
    lastTerm = currentTerm;
    currentTerm = lastTerm + secondLastTerm;
    pos++;
    return fiboSeries[pos];
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
