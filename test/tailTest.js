const tail = require('../tail');
const assertEqual = require('../assertEqual');




// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

//Test Case 2: Make sure original array isn't altered

let testArry = [1,2,3];
let result2 = tail(testArry);
assertEqual(testArry[0],1);