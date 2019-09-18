const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
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
    return true;
  } else {
    return false;
  }
};

const eqObjects = function(object1, object2) {
  let size1 = Object.keys(object1).length;
  let size2 = Object.keys(object2).length;
  if (size1 !== size2) {
    return false;
  }
  for (const index of Object.keys(object1)) {
    if (Array.isArray(object1[index])) {
      if (!assertArraysEqual(object1[index], object2[index])) {
        return false;
      }
    } else {
      if (!assertEqual(object1[index], object2[index])) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌Assertion failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};