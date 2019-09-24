const assert = require('chai').assert;
const assertEqual   = require('../assertEqual');

describe("#eqObjects", () => {
  it('returns false for "Lighthouse Labs, Bootcamp', () => {
    assert.deepEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });
  it('returns true for 1, 1', () => {
    assert.deepEqual(assertEqual(1, 1), true); 
  });
});