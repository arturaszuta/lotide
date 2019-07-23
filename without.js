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

const without = function(source, itemsToRemove) {
  let answerArray = source.filter((element) => {
    if (itemsToRemove.includes(element)) {
      return false;
    } else {
      return true;
    }
  });
  return answerArray;
};

console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(["1", "2", "3", "bob", "thomas", true], [1, 2, "3"]));
console.log(without(["1", "2", "3", "bob", "thomas", true], [1, 2, "3", "thomas"]));
console.log(without(["1", "2", "3", "bob", "thomas", true], [1, 2, "3", true]));
console.log(without(["1", "2", "3", "bob", "thomas", true], [1, 2, "3"]));

console.log(assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']));
console.log(assertArraysEqual(without(["1", "2", "3", "bob", "thomas", true], [1, 2, "3", true, "thomas"]), ["1", "2", "bob"]));
