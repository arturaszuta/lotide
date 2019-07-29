const eqArrays = function(array1, array2) {
  let longestArray = 0;
  if (array1.length >= array2.length) {
    longestArray = array1;
  } else {
    longestArray = array2;
  }
  for (let i = 0; i < longestArray.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  const result = eqArrays(array1,array2);
  if (result) {
    console.log(`✅ ✅ ✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${array1} !== ${array2}`);
  }
};

const flatten = function(inputArray) {
  let answerArray = [];
  for (let element of inputArray) {
    if (Array.isArray(element)) {
      answerArray.push(...element);
    } else {
      answerArray.push(element);
    }
  }
  return answerArray;
};

module.exports = flatten;

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]));
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,3,4,5,6]));
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6],['bob', true]]), [1,2,3,4,5,6, 'bob', true]));
console.log(assertArraysEqual(flatten([[[[[[[[[[1]]]]]]]]]]), [1]));