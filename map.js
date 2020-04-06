const map = function(array, callback) {
  const results =[];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}
module.exports = map;

// const assertArraysEqual = require('./assertArraysEqual');
// const words = ["ground", "control", "to", "major", "tom"];

// assertArraysEqual(map(words, word => word + 's'), [ 'grounds', 'controls', 'tos', 'majors', 'toms' ]);
// assertArraysEqual(map(words, word => word.length), [ 6, 7, 2, 5, 3 ]);

// assertArraysEqual(map('hello', x => x.toUpperCase()), [ 'H', 'E', 'L', 'L', 'O' ]);