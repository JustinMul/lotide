const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    console.log(array1[i],array2[i]);
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;