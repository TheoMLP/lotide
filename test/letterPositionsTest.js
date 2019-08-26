const { assert } = require("chai");
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  let letterPositionObject = {
    h: [ 0 ],
    e: [ 1, 12 ],
    l: [ 2, 3 ],
    o: [ 4, 18 ],
    m: [ 6, 11 ],
    y: [ 7 ],
    n: [ 9 ],
    a: [ 10 ],
    i: [ 14 ],
    s: [ 15 ],
    b: [ 17, 19 ]
  };

  it(`should return ${letterPositionObject} for 'hello my name is bob'`, () => {
    assert.deepEqual(letterPositions("hello my name is bob"), letterPositionObject);
  });
  it(`should return [ 17, 19 ] for letter b in 'hello my name is bob'`, () => {
    assert.deepEqual(letterPositions("hello my name is bob").b, [ 17, 19 ]);
  });
  it("should return {a: [0, 1, 2], b: [4, 5, 6], c: [3, 7]} for 'aaacbbbc'", () => {
    assert.deepEqual(letterPositions("aaacbbbc"), {a: [0, 1, 2], b: [4, 5, 6], c: [3, 7]});
  });
  it("should return {} when passed an empty string", () => {
    assert.deepEqual(letterPositions(""), {});
  });
});