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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  const result = eqObjects(actual, expected);
  if (result) {
    console.log(`✅ ✅ ✅  Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1});
assertObjectsEqual({a: 1, b: 2, c: 'dog'}, {b: 2, a: 1, c: 'dog'});
assertObjectsEqual({a: 1, b: 2, d: 4 }, {b: 2, a: 1, d: 5});