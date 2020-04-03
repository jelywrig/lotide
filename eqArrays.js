// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ ✔️ ✔️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✖️ ✖️ ✖️  Assertion Failed: ${actual} !== ${expected}`);
  }

};


const eqArrays = function(actual, expected) {
  if(actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (Array.isArray(actual[i]) && Array.isArray(expected[i])) {
      if(!eqArrays(actual[i], expected[i])) {
        return false;
      }
    } else if (actual[i] !== expected[i]) {
      return false
    }
  }
  return true;
};

if(require.main === module) {
  assertEqual(eqArrays([1,2,3], [1,2,3]), true);
  assertEqual(eqArrays([1,2], [1,2,3]), false);
  assertEqual(eqArrays([1,2,3], [1,2,4]), false);
  assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

  assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
  assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]) , false);// => false
}

module.exports = eqArrays;