const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it('should return ["Lighthouse", "Labs"] when given ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  })
  it('should not alter the original array', () => {
    const testArry = [1, 2, 3];
    tail(testArry);
    assert.deepEqual(testArry, [1, 2, 3]);
  });

});

