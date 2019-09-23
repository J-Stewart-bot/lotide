const flatten = function(arr) {
  let answer = [];
  if (arr.length === 0) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        answer.push(arr[i][j]);
      }
    } else {
      answer.push(arr[i]);
    }
  }
  return answer;
};

module.exports = flatten;