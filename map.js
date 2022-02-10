const words = ["ground", "control", "to", "major", "tom"];
const words1 = ['Luffy', 'Zoro', 'Nami', 'Ussop', 'Sanji'];
const nums = [5,10,2,44,5];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
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


const results1 = map(words, word => word[0]);
console.log(results1);

assertArrayEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);//true
assertArrayEqual(map(words1, word => word + 's'),[ 'Luffys', 'Zoros', 'Namis', 'Ussops', 'Sanjis', 'Chopppers','Robins', 'Frankies', 'Brooks', 'Jimbes' ]); // false
assertArrayEqual(map(nums, num => num * 3),[15,30,6,132,15]); //True