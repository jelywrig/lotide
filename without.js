// const assertArraysEqual = require('./assertArraysEqual');


const without = function (source, itemsToRemove) {
  let result = [];

  for(let elem of source) {
    let keep = true;
    for (let item of itemsToRemove) {
      if (item === elem) { 
        keep = false;
      }
    }
    if (keep) {
      result.push (elem);
    }
  }

  return result;
};

module.exports = without;

// if (require.main === module) {
//   assertArraysEqual(without([1,2,3], [1]), [2,3]);
//   assertArraysEqual(without(["1", "2", "3"], [1,2,"3"]), ["1", "2"]);

//   const words = ["hello", "world", "lighthouse"];
//   without(words, ["lighthouse"]); // no need to capture return value for this test case
//   // Make sure the original array was not altered by the without function
//   assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// }