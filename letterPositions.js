const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char !== ' ') {
      if (results[char]){
        results[char].push(i);
      } else {
        results[char] = [i];
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions('hello')['l'], [2, 3]);
assertArraysEqual(letterPositions('hello fellow')['l'], [2, 3,8,9]);

