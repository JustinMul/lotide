const assert = require("chai").assert;
const middle = require('../middle.js');

describe('#middleTest' , () => {

  it('Should return [] when reciving and array less than 3 items', () => {
    assert.deepEqual(middle([1,2]),[]);
  });

  it('should equaal 2 middle number when array is even number and greater than 3 items', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);
  });
});

