const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arry) {
  let result = [];
  if (arry.length > 2) {
    if(arry.length % 2) {
      result.push(arry[Math.floor(arry.length / 2)]);
    } else {
      result.push(arry[arry.length/2 - 1]);
      result.push(arry[arry.length/2]);
    }
  }

  return result;
}


if(require.main === module) {
  assertArraysEqual(middle([1]),[]);
  assertArraysEqual(middle([1,2]), []);
  assertArraysEqual(middle([1,2,3]), [2]);
  assertArraysEqual(middle([1,2,3,4,5]), [3]);
  assertArraysEqual(middle([1,2,3,4]), [2,3]);
  assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);

}
