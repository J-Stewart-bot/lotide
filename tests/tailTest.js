const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE
assertEqual(JSON.stringify(tail([5,6,7])), JSON.stringify([6,7]));
assertEqual(JSON.stringify(tail(["Hello", "Lighthouse", "Labs"])), JSON.stringify(["Lighthouse", "Labs"]));