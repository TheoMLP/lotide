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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["yes", "no", "maybe"];
const words3 = ["I", "love", "functional", "programming"]

const map = function(array, callback) {
  let results = []
  for (let item of array) {
    results.push(callback(item))
  }
  return results
}

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual(map(words2, word => word[0]), [ 'y', 'n', 'm'])
assertArraysEqual(map(words3, word => word[0]), [ 'I', 'l', 'f', 'p'])