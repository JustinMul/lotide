const assertEqual = require('../assertEqual.js');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3,4]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);

// const names = ['Graham'];
// names = [];
// console.log(names)