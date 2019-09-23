const assert = require('chai').assert;
const takeUntil   = require('../takeUntil');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

describe("#takeUntil", () => {
  it("returns [2] for [1, 2, 3] takeUntil [4, 5, 6, 7, 8, 1, 3]", () => {
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });
  it("returns [1, 2] for [1, 2, 3] takeUntil [4, 3]", () => {
    assert.deepEqual(results2, ["I've", "been", "to", "Hollywood"]); 
  });
});