const assert = require("chai").assert;
const eqObjects = require('../eqObjects.js');

describe('#eqObjects' , () => {

  it('Should return true when matching arrays', () => {
    assert.deepEqual(eqObjects({ c: "2", d: ["2", 3] },{ d: ["2", 3], c: "2" }),true);
  });

  it('Should return false when matching arrays', () => {
    assert.deepEqual(eqObjects({ c: "1", d: ["2", 3] },{ c: "1", d: ["2", 3, 4] }),false);
  });

  
});