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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions('lighthouse in the house'));
console.log(assertArraysEqual(letterPositions('hello')['l'], [2, 3]));
console.log(assertArraysEqual(letterPositions('this is sparta')['s'], [3, 6, 8]));