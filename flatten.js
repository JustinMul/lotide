const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌼Assertion Passed ${actual} === ${expected}`);
  
  } else {
    console.log(`🌚Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      return false;
    }

  }
  return true;
};

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`🌼Assertion Passed ${array1} === ${array2}`);
  
  } else {
    console.log(`🌚Assertion Failed: ${array1} !== ${array2}`);
  }
};

// could use this function instead
// const flatten = function(array) {
//   console.log(array.flat());
// };


const flatten = function(array) {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      //if multiple array use recerusion here flatArray.concat(flatten(array[i])) I think lol
      flatArray = flatArray.concat((array[i]));
    } else {
      flatArray.push(array[i]);
    }
    
  }
  return flatArray;
};

console.log(flatten([2,4,5,[2,5,6]]));

