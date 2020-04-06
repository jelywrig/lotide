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

module.exports = middle;