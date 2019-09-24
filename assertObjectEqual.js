const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌Assertion failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: 4}, {a: 4});