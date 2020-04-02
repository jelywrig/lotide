const takeUntil = function (array, callback) {
  let result = [];
  for(const elem of array) {
    if(callback(elem)) {
      break;
    } else {
      result.push(elem);
    }
  }
  return result;
}



const assertArraysEqual = require('./assertArraysEqual');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);