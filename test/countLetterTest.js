const assert = require('chai').assert;
const countLetters   = require('../countLetters');

const answer = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, ' ': 3, n: 1 }

describe("#countLetters", () => {
  it("returns the correct count of each letter in 'lighthouse in the house'", () => {
    assert.deepEqual(countLetters("lighthouse in the house"), answer);
  });
});