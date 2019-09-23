const without = function(arr1, arr2) {
  let answer = [];
  let remove = false;
  if (arr2.length === 0 || arr1.length === 0) {
    return arr1;
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        remove = true;
      }
    }
    if (!remove) {
      answer.push(arr1[i]);
    }
    remove = false;
  }
  return answer;
};

module.exports = without;