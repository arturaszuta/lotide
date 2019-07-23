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

const middle = function(array) {
  let midArray = [];
  const arrayMid = Math.trunc((array.length / 2));
  let isEven = Boolean;

  if (array.length <= 2) {
    return midArray = [];
  }

  if (array.length % 2) {
    isEven = true;
  } else {
    isEven = false;
  }
  
  if (!isEven) {
    midArray[0] = array[arrayMid - 1];
    midArray[1] = array[arrayMid];
  } else {
    midArray[0] = array[arrayMid];
  }

  return midArray;
};

assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,10]), [5,6]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,10]), [5,6,7]);
assertArraysEqual(middle([1,2,3,4,5,6,7]), [4]);
assertArraysEqual(middle(['john', 'bob', 'thomas', 'rudy']), ['bob', 'thomas']);
assertArraysEqual(middle(['john', 'bob', 'thomas', 'rudy', 'vincent']), ['thomas']);
assertArraysEqual(middle(['john', 'bob']), []);





