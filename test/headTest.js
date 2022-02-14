const { equal } = require('assert');
const { expect } = require('chai');
const { assert } = require('console');
const head = require('../head');

describe('#head', () => {
  it('returns the first element of the array', () => {
    expect(head([1,2,3])).to.equal(1);
  });

  it("returns '5' for ['5']", () => {
    expect(head(['5'])).to.equal('5');
  });

  it("returns 'hello' for [[Hello, Lighthouse, Labs]", () => {
    expect(head(["Hello", "Lighthouse", "Labs"])).to.equal('Hello');
  });
  
});

