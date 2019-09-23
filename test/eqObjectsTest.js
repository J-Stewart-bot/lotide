const assert = require('chai').assert;
const eqObjects   = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const cd = { c: "1", d: {a: "2", b: 3} };
const dc = { d: {a: "2", b: 3}, c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };


describe("#eqObjects", () => {
  it('returns true for { a: "1", b: "2" } and { b: "2", a: "1" }', () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it('returns true for { c: "1", d: {a: "2", b: 3} and { d: {a: "2", b: 3}, c: "1" }', () => {
    assert.deepEqual(eqObjects(cd, dc), true); 
  });
  it('returns false for { c: "1", d: {a: "2", b: 3} } and { c: "1", d: ["2", 3, 4] }', () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
});