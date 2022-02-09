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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3,4], c: "2" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(dc, cd2),false); // => false