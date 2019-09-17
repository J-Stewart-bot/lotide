const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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

assertArraysEqual(middle([1, 2, 3]), [2]); // => true
assertArraysEqual(middle(["apple", "orange", "bannana"]), ["orange"]); // => true

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => true