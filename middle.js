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

const middle = function(inputArray) {
  //if 1 or 2 elements return blank array
  if (inputArray.length < 3) {
    return [];
  //if even take middle 2
  } else if (inputArray.length % 2 === 0) {
    return inputArray.slice((middleIndex(inputArray) - 1),(middleIndex(inputArray) + 1));
  } else {
  //if odd take middle value only
    return inputArray.slice(middleIndex(inputArray), middleIndex(inputArray) + 1);
  }
};

const middleIndex = function(inputArray) {
  return Math.floor(inputArray.length / 2);
};

console.log(middle([1,2])); // => [3, 4])
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);// => [3]