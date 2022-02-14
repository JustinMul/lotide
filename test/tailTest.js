const assert = require("chai").assert;
const { it } = require('mocha');
const tail = require('../tail');

describe('#tail', () => {
  it('should return [14,46,22] when given [2,14,46,22]', () => {
    assert.deepEqual(tail([2,14,46,22]),[14,46,22]);
  });

  it('should return everthing except for yo yo ["Yo Yo", "Lighthouse", "Labs"]', () =>{
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]);
  });

});