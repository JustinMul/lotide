const assertEqual = require('../assertEqual.js');
const tail = require('../tail');

assertEqual(tail([2,14,46,22]),[14,46,22]);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!