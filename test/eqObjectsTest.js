const assertEqual = require("../assertEqual");
const eqObjects = require("../eqObjects");

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqObjects({ a: 2, b: { w: 1, d:{ t: 2, s: 3 } } }, { a: 2, b: { w: 1, d:{ t: 3, s: 3 } } }), false);
assertEqual(eqObjects({ a: { y: 0, z: { g: { c: 0 } } }, b: { w: 1, d:{ t: 2, s: 3 } } }, { a: { y: 0, z: { g: { c: 0 } } }, b: { w: 1, d:{ t: 3, s: 3 } } }), false);
assertEqual(eqObjects({ a: { y: 0, z: { g: { c: 0 } } }, b: { w: 1, d:{ t: 3, s: 3 } } }, { a: { y: 0, z: { g: { c: 0 } } }, b: { w: 1, d:{ t: 3, s: 3 } } }), true);
