const { assert } = require("chai");
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  const ab = { a: "1", b: "2" };
  const cd = { c: "1", d: ["2", 3] };

  it("should return true when passed eqObjects(ab, ba)", () => {
    const ba = { b: "2", a: "1" };

    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it("should return false when passed eqObjects(ab, abc)", () => {
    const abc = { a: "1", b: "2", c: "3" };

    assert.strictEqual(eqObjects(ab, abc), false);
  });
  it("should return true when passed eqObjects(cd, dc)", () => {
    const dc = { d: ["2", 3], c: "1" };

    assert.strictEqual(eqObjects(cd, dc), true);
  });
  it("should return false when passed eqObjects(cd, cd2)", () => {
    const cd2 = { c: "1", d: ["2", 3, 4] };
    
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
  it("should return true when passed eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it("should return true when passed eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it("should return false when passed eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
  it("should return false when passed eqObjects({ a: 2, b: { w: 1, d:{ t: 2, s: 3 } } }, { a: 2, b: { w: 1, d:{ t: 3, s: 3 } } })", () => {
    assert.strictEqual(eqObjects({ a: 2, b: { w: 1, d:{ t: 2, s: 3 } } }, { a: 2, b: { w: 1, d:{ t: 3, s: 3 } } }), false);
  });
  it("should return false when passed eqObjects({ a: { y: 0, z: { g: { c: 0 } } }, b: { w: 1, d:{ t: 2, s: 3 } } }, { a: { y: 0, z: { g: { c: 0 } } }, b: { w: 1, d:{ t: 3, s: 3 } } })", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: { g: { c: 0 } } }, b: { w: 1, d:{ t: 2, s: 3 } } }, { a: { y: 0, z: { g: { c: 0 } } }, b: { w: 1, d:{ t: 3, s: 3 } } }), false);
  }); 
  it("should return true when passed eqObjects({ a: { y: 0, z: { g: { c: 0 } } }, b: { w: 1, d:{ t: 3, s: 3 } } }, { a: { y: 0, z: { g: { c: 0 } } }, b: { w: 1, d:{ t: 3, s: 3 } } })", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: { g: { c: 0 } } }, b: { w: 1, d:{ t: 3, s: 3 } } }, { a: { y: 0, z: { g: { c: 0 } } }, b: { w: 1, d:{ t: 3, s: 3 } } }), true);
  });
});
