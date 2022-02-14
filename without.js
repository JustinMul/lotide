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

const without = function(source, itemsToRemove) {
  let arrayRemoved = source;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      source[i] === itemsToRemove[j] ? arrayRemoved.splice(i,1) : "";
    }
  }
  return arrayRemoved;
 


};
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
assertArrayEqual([2,3], without([1, 2, 3], [1]));
assertArrayEqual([1,2], without([1, 2, "3"], ['1', '2', "3"]));

module.exports = without;