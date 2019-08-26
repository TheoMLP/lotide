const eqArrays = require("./eqArrays");
//same number of keys (check length)
//same keys
//same values
//if the value is an array use eqArrays

const eqObjectsRecursive = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if ((typeof(object1[key]) !== typeof({}) && typeof(object2[key]) !== typeof({})) && (object1[key] !== object2[key])) {
      return false;
    } else if ((typeof(object1[key]) === typeof({}) || typeof(object1[key]) === typeof({})) && eqObjectsRecursive(object1[key], object2[key]) === false) {
      return false;
    } else if (typeof(object1[key]) === typeof({}) || typeof(object1[key]) === typeof({})) {
      eqObjectsRecursive(object1[key], object2[key]);
    }
  }
  return true;
};

// let makeTree = (categories, parent) => {
//   let node = {}
//   categories
//     .filter(c => c.parent === parent)
//     .forEach(c => node[c.id] = makeTree(categories, c.id))
//   return node
// }
module.exports = eqObjects;