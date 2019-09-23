const middle = function(arr) {
  let len = arr.length;
  let answer = [];
  if (len === 0 || len === 1 || len === 2) {
    return answer;
  }
  if (len % 2 === 0) {
    answer.push(arr[(len / 2) - 1]);
    answer.push(arr[len / 2]);
    return answer;
  } else {
    answer.push(arr[(len - 1) / 2]);
    return answer;
  }
};

module.exports = middle;