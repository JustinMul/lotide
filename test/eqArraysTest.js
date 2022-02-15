const eqArrays = require('../eqArrays');
const assert = require("chai").assert;

describe('#eqArrays', () => {
  it('should return true when matching arrays', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);
  });
  it('should return false when not matching arrays', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3 , 4]),false);
  });
  it('should return false when not matching arrays', () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);
  });


});
