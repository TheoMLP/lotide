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

const flatten = function(array) {
  let newArray = []
  array.forEach(function(element, index) {
    if (Array.isArray(element)) {
      element.forEach(function(element2){
        newArray.push(element2)
      })
    }
    else {
      newArray.push(element)
    }
  })
  return newArray
}

console.log(flatten([1, 2, [3, 4], 5, [6]]))

 /*if (Array.isArray(element)) {
      array.splice(index, 1)
      for (var x = element.length - 1; x >= 0; --x) {
        console.log(element)
        array.splice(index, 0, element[x])
      }
    }*/