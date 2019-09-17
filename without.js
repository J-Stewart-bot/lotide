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

assertArraysEqual(without([1, 2, 3], [4, 5, 6, 7, 8, 1, 3]), [2]);
assertArraysEqual(without([1, 2, 3], [4, 3]), [1, 2]);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);