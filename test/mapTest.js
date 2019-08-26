const { assert } = require("chai");
const map = require("../map");

describe("#map", () => {
  it("should return [ 'g', 'c', 't', 'm', 't' ] when passed ['ground', 'control', 'to', 'major', 'tom'] and word => word[0] as callback", () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });
  it("should return [ 'y', 'n', 'm'] when passed ['yes', 'no', 'maybe'] and word => word[0] as callback", () => {
    assert.deepEqual(map(["yes", "no", "maybe"], word => word[0]), [ 'y', 'n', 'm']);
  });
  it("should return [ 'I', 'l', 'f', 'p'] when passed ['I', 'love', 'functional', 'programming'] and word => word[0] as callback", () => {
    assert.deepEqual(map(["I", "love", "functional", "programming"], word => word[0]), [ 'I', 'l', 'f', 'p']);
  });
  it("should return [] when passed an empty array and word => word[0] as callback", () => {
    assert.deepEqual(map([], word => word[0]), []);
  });
})