const { assert } = require("chai");
const flatten = require("../flatten");

describe("#flatten", () => {
  it("should return [1, 2, 3, 4, 5, 6] when passed [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("should return [5, 4, 100, 0, 9] when passed [[5], [4, 100], [0, 9]]", () => {
    assert.deepEqual(flatten([[5], [4, 100], [0, 9]]), [5, 4, 100, 0, 9]);
  });
  it("shoudl return an empty array when passed an empty array", () => {
    assert.deepEqual(flatten([]), []);
  });
});
