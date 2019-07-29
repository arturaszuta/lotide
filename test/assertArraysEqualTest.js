const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(['hi', 'my', 'name'], ['hi', 'my', 3, 'name']);
assertArraysEqual([1,2,34,5,'bob'], [1,2,34,5,'bob']);
assertArraysEqual(['hi', 2, false], ['hi', 2, false]);