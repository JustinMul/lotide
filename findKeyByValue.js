const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(showObject, show) {
  let showName;
  for (const key in showObject) {
    showName = showObject[key];
    if (showName === show) {
      return key;
    }
  }
};



module.exports = findKeyByValue;
