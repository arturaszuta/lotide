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
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (let element of Object.keys(object1)) {
    if (Array.isArray(object1[element])) {
      if (!eqArrays(object1[element],object2[element])) return false;
      continue;
    }
    if (typeof object1[element] === 'object' && !Array.isArray(object1[element])) {
      return eqObjects(object1[element], object2[element]);
    }
    if (object1[element] !== object2[element]) return false;
  }
  return true;
};
 
 
 
  
// const ab = { a: '1', b: '2'};
// const ba = { b: '2', a: '1'};
// const abc = { a: '1', b: '2', c: '3' };
// console.log(assertEqual(eqObjects(ab, ba), true));
// console.log(assertEqual(eqObjects(ab, abc), false));

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true)); // => true
console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false)); // => false
console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false)); // => false




