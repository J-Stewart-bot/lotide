const tail = function(array) {
  return (array.slice(1));
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual(JSON.stringify(tail([5,6,7])), JSON.stringify([6,7]));
assertEqual(JSON.stringify(tail(["Hello", "Lighthouse", "Labs"])), JSON.stringify(["Lighthouse", "Labs"]));