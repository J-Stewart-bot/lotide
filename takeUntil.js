const takeUntil = function(array, callback) {
  let results = [];
  for (const index of array) {
    if (callback(index)) {
      return results;
    } else {
      results.push(index);
    }
  }
  return results;
};

module.exports = takeUntil;