const assert = require("chai").assert;
const findKeyByValue = require('../findKeyByValue.js');

describe('#findKeyByValue.js', () => {
  it('This is what happens when you give a valid value', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('This is what happens when you give an invalid value', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});