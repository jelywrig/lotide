const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }else if (typeof object1[key] === 'object' && object1[key] !== null) {
      if(!eqObjects(object1[key], object2[key])) {
        return false;
      }
    }else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

if(require.main === module) {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  assertEqual(eqObjects(ab, ba), true); // => true

  const abc = { a: "1", b: "2", c: "3" };
  assertEqual(eqObjects(ab, abc), false); // => false

  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  assertEqual(eqObjects(cd, dc), true); // => true

  const cd2 = { c: "1", d: ["2", 3, 4] };
  assertEqual(eqObjects(cd, cd2), false); // => false

  assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

  assertEqual(eqObjects({ a: { z: 1 , x: {a:2}}, b: 2 }, { a: { z: 1, x: {a:2} }, b: 2 }), true); // => true

  assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
  assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false


}




module.exports = eqObjects;