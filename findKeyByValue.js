const findKeyByValue = function(list, theValue) {
  for (const index of Object.keys(list)) {
    if (list[index] === theValue) {
      return index;
    }
  }
}

module.exports = findKeyByValue;