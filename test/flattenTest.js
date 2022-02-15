const assert = require("chai").assert;
const flatten = require('../flatten.js');

describe('#flattenTest' , () => {

  it('Should return [2,4,6] when reciving [2,[4,6]]', () => {
    assert.deepEqual(flatten([2,[4,6]]),[2,4,6]);
  });

  it('Should return [2,4,6] when reciving [2,4,6]', () => {
    assert.deepEqual(flatten([2,4,6]),[2,4,6]);
  });
  
});

