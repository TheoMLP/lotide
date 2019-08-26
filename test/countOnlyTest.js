const { assert } = require("chai");
const countOnly = require("../countOnly");

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  it("should return { Fang: 2, Jason: 1 } for { 'Jason': true, 'Karima': true, 'Fang': true }", () => {
    assert.deepEqual(countOnly(firstNames, { 'Jason': true, 'Karima': true, 'Fang': true }), { Fang: 2, Jason: 1 });
  });
  it("should return { Kavith: 1, Agouhanna: 1 } for { 'Agouhanna': true, 'Kavith': true }", () => {
    assert.deepEqual(countOnly(firstNames, { 'Kavith': true, 'Agouhanna': true }), {  Kavith: 1, Agouhanna: 1 });
  });
  it("should return {} for { 'Karima': true }", () => {
    assert.deepEqual(countOnly(firstNames, { 'Karima': true }), {});
  });
});