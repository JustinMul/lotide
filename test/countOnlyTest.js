const assert = require("chai").assert;
const countOnly = require('../countOnly.js');


describe('#countOnlyTest', () => {

  it("this case is what happens when you have a name on the list and want to search them ", () => {

    const result1 = countOnly([
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

    assert.equal(result1['Jason'],1);
  });

  it("this case is what happens when you have a name not on the list and want to search them", () => {

    const result1 = countOnly([
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

    assert.equal(result1['Karima'],undefined);
  });
  it("this case is what happens when you have a name on the list multiple times and want to search", () => {

    const result1 = countOnly([
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

    assert.equal(result1['Fang'],2);
  });
  it("this case is what happens when you have a name not on the list and don't want to search them", () => {

    const result1 = countOnly([
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

    assert.equal(result1['Agouhanna'],undefined);
  });
});

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);