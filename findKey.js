const findKey = function(list, func) {
  for (const index of Object.keys(list)) {
    if (func(list[index])) {
      return index;
    }
  }
};

module.exports = findKey;