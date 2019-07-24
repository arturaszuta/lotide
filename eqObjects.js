const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return `✅ ✅ ✅  Assertion passed: ${actual} === ${expected}`;
  } else {
    return `❌ ❌ ❌  Assertion failed: ${actual} !== ${expected}`;
  }
};

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

const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let key of obj1Keys) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key]))
        return false;
    }
    if (!Array.isArray(object1[key]) && object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
  
const ab = { a: '1', b: '2'};
const ba = { b: '2', a: '1'};
const abc = { a: '1', b: '2', c: '3' };
console.log(assertEqual(eqObjects(ab, ba), true));
console.log(assertEqual(eqObjects(ab, abc), false));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, dc), true)); // => true
console.log(assertEqual(eqObjects(cd, cd2), false)); // => false

