const assert = require('chai').assert;
const head   = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(head([1, 2, 3]), [2, 3]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(head(['5']), []); 
  });
  it("returns \"Hello\" for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.deepEqual(head(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});