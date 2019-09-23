const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
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
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
    return true;
  } else {
    console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
    return false;
  }
};

const eqObjects = function(object1, object2) {
  let size1 = Object.keys(object1).length;
  let size2 = Object.keys(object2).length;
  if (size1 !== size2) {
    console.log(`❌❌❌Assertion Failed: Sizes are different`);
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

console.log("TEST 1")

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

console.log("TEST 2")

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

console.log("TEST 3")

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

module.exports = eqObjects;