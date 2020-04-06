const eqArrays = require('./eqArrays');

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✔️ ✔️ ✔️  Assertion Passed: %j === %j`, actual, expected);
  } else {
    console.log(`✖️ ✖️ ✖️  Assertion Failed: %j !== %j`, actual, expected);
  }
}

if (require.main === module) {
  assertArraysEqual([1,2,3], [1,2,3]);
  assertArraysEqual([1,2], [1]);
}

module.exports = assertArraysEqual;