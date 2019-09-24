const countLetters = function(sentence) {
  const results = {};
  for (const letter of sentence) {
    if (sentence[letter] !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;