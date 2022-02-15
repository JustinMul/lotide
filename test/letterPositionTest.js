const assert = require("chai").assert;
const letterPositions = require('../letterPositions.js');

describe('#letterPositionTest.js', () => {

  it('This is what happens when you want to find the positon of i in the sentence provided', () => {
    assert.deepEqual(letterPositions('lighthouse in the house').i,[1,11]);
  });
  it('This is what happens when you want to find the positon of of a letter not in the sentence', () => {
    assert.deepEqual(letterPositions('lighthouse in the house').z,undefined);
  });

});