const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#eqObjects", () => {
  it('returns true for [1, 2, 3] and [1, 2, 3]', () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });
  it('returns false for ["1", "2", "3"] and ["1", "2", 3]', () => {
    assert.deepEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), false); 
  });
  it('returns false for [1, 2, 3] and [3, 2, 1]', () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]), false);
  });
});