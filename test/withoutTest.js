const assert = require('chai').assert;
const without   = require('../without');

describe("#without", () => {
  it("returns [2] for [1, 2, 3] without [4, 5, 6, 7, 8, 1, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [4, 5, 6, 7, 8, 1, 3]), [2]);
  });
  it("returns [1, 2] for [1, 2, 3] without [4, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [4, 3]), [1, 2]); 
  });
  it("returns \"Hello\" for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.deepEqual(without([1, 2, 3], []), [1, 2, 3]);
  });
});