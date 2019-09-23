const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

const eqObjects = function(object1, object2) {
  let size1 = Object.keys(object1).length;
  let size2 = Object.keys(object2).length;
  if (size1 !== size2) {
    return false;
  }
  for (const index of Object.keys(object1)) {
    if (object1[index] instanceof Object) {
      if (!eqObjects(object1[index], object2[index])) {
        return false;
      }
    } else if (Array.isArray(object1[index])) {
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

module.exports = eqObjects;