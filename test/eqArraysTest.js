const { assert } = require("chai");
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("should return true when passed eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should return false when passed eqArrays([1, 2, 3], [3, 2, 1])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("should return true when passed eqArrays(['1', '2', '3'], ['1', '2', '3'])", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("should return false when passed eqArrays(['1', '2', '3'], ['1', '2', 3])", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  it("should return true when passed eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should return true when passed eqArrays([[2, 3], [4]], [[2, 3], [4]])", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it("should return false when passed eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
  it("should return false when passed eqArrays([[2, 3], [4]], [[2, 3], 4])", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
  it("should return false when passed eqArrays([2, 4, [17, 5, [6, 21, 8], 14, [3, [11], 73], 13], 13, 100], [2, 3, [4, 5, [6, 7, 8], 9, [10, [11], 12], 13], 14, 13])", () => {
    assert.strictEqual(eqArrays([2, 4, [17, 5, [6, 21, 8], 14, [3, [11], 73], 13], 13, 100], [2, 3, [4, 5, [6, 7, 8], 9, [10, [11], 12], 13], 14, 13]), false);
  });
  it("should return true when passed eqArrays([2, 4, [17, 5, [6, 21, 8], 14, [3, [11], 73], 13], 13, 100], [2, 4, [17, 5, [6, 21, 8], 14, [3, [11], 73], 13], 13, 100]", () => {
    assert.strictEqual(eqArrays([2, 4, [17, 5, [6, 21, 8], 14, [3, [11], 73], 13], 13, 100], [2, 4, [17, 5, [6, 21, 8], 14, [3, [11], 73], 13], 13, 100]), true);
  });
  it("should return false when passed eqArrays([2, 4, [17, 5, [6, 21, 8], 14, [3, [11], 0], 13], 13, 100], [2, 4, [17, 5, [6, 21, 8], 14, [3, [11], 73], 13], 13, 100])", () => {
    assert.strictEqual(eqArrays([2, 4, [17, 5, [6, 21, 8], 14, [3, [11], 0], 13], 13, 100], [2, 4, [17, 5, [6, 21, 8], 14, [3, [11], 73], 13], 13, 100]), false);
  });
  it("should return false when passed eqArrays([1, [2, [3, [4, [5, [6], 7], 8], 9], 10], 11], [1, [2, [3, [4, [5, [100], 7], 8], 9], 10], 11])", () => {
    assert.strictEqual(eqArrays([1, [2, [3, [4, [5, [6], 7], 8], 9], 10], 11], [1, [2, [3, [4, [5, [100], 7], 8], 9], 10], 11]), false);
  });
});

