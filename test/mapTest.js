const assert = require('chai').assert;
const map   = require('../map');

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);

describe("#map", () => {
  it("returns ['g', 'c', 't', 'm', 't'] for first letter of words", () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
});