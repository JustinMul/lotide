const eqArrays = require('./eqArrays.js');

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`🌼Assertion Passed ${array1} === ${array2}`);
  
  } else {
    console.log(`🌚Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArrayEqual;

// this done i need to add and push both this and the test file