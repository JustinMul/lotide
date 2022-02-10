const eqObjects = function(object1, object2) {
  //check to see if objects have same length
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  //check rest of conditions
  for (const key in object1) {
    if (Array.isArray(object1[key] || Array.isArray(object2[key]))) {
      if (!eqArrays(object1[key],object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      return false;
    }

  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🌼Assertion Passed ${inspect(actual)} === ${inspect(expected)}`);
  
  } else {
    console.log(`🌚Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd,dc); // => true


assertObjectsEqual(cd,cd2); // => false