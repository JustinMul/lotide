const letterPositions = function(sentence) {
  const results = {};
  //let noSpace = sentence.split(' ').join('');

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      results;
    } else if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
    
  }
  return results;
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

assertArrayEqual(letterPositions('lighthouse in the house').i,[1,11]);