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



module.exports = flatten;