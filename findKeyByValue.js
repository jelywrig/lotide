const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, val) {  
  for (let key in obj) {
    if (obj[key] === val) { 
      return key;
    }
  }
// if val not found function will return undefined automatically
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);