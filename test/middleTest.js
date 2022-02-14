const assertArrayEqual = require('../assertArraysEqual.js');
const middle = require('../middle.js');


assertArrayEqual(middle([1,2]),[]); // => [3, 4])
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);// => [3]
assertArrayEqual(middle([1,2,3,4]),[2,4]); //=> should fail

