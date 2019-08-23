const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let value = 0; value < array1.length; value += 1) {
    if (array1[value] !== array2[value]) {
      return false;
    }
  }
  return true;
};


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } 
    else if ((typeof(object1[key]) !== typeof({}) && typeof(object2[key]) !== typeof({})) && (object1[key] !== object2[key])) {
      return false;
    }
    else if ((typeof(object1[key]) === typeof({}) || typeof(object1[key]) === typeof({})) && eqObjects(object1[key], object2[key]) === false) {
      return false
    }
    else if (typeof(object1[key]) === typeof({}) || typeof(object1[key]) === typeof({})) {
      eqObjects(object1[key], object2[key])
    }
  }
  return true;
}

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }))

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

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true)
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false)
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false)
assertEqual(eqObjects({ a: 2, b: { w: 1, d:{ t: 2, s: 3 } } }, { a: 2, b: { w: 1, d:{ t: 3, s: 3 } } }), false)
assertEqual(eqObjects({ a: { y: 0, z: { g: { c: 0 } } }, b: { w: 1, d:{ t: 2, s: 3 } } }, { a: { y: 0, z: { g: { c: 0 } } }, b: { w: 1, d:{ t: 3, s: 3 } } }), false)
assertEqual(eqObjects({ a: { y: 0, z: { g: { c: 0 } } }, b: { w: 1, d:{ t: 3, s: 3 } } }, { a: { y: 0, z: { g: { c: 0 } } }, b: { w: 1, d:{ t: 3, s: 3 } } }), true)

// let makeTree = (categories, parent) => {
//   let node = {}
//   categories
//     .filter(c => c.parent === parent)
//     .forEach(c => node[c.id] = makeTree(categories, c.id))
//   return node
// }