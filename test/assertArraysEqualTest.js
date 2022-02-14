const assertArrayEqual = require('../assertArraysEqual.js');

assertArrayEqual([1,2,3],[4,3,5]); //false
assertArrayEqual([1,2,3],[1,2,3]); // true