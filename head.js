const assertEqual = require('./assertEqual');

const head = function(array) {
  array = array[0];
  return array;
};

module.exports = head;