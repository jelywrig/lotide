const countLetters = function(string) {
  let noSpacesStr = string.replace(/\s/g, '');
  let result = {};

  for (let char of noSpacesStr) {
    if(result[char]){
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }

  return result;

}


module.exports = countLetters;

// console.log(countLetters("hello i am a string"));