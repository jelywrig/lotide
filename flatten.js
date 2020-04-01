const eqArrays = function(actual, expected) {
  if(actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✔️ ✔️ ✔️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✖️ ✖️ ✖️  Assertion Failed: ${actual} !== ${expected}`);
  }
}


const flatten = function(masterArray) {
  let result = [];
  for (let elem of masterArray) {
    if(Array.isArray(elem)) {
      result = result.concat(flatten(elem));
    } else {
      result.push(elem);
    }
  }
  return result;
}


assertArraysEqual(flatten([1, 2, [3, [4]], 5, [6]]), [1, 2, 3, 4, 5, 6]);

