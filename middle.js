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

module.exports = middle;