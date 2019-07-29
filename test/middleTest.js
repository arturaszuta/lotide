const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,10]), [5,6]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,10]), [5,6,7]);
assertArraysEqual(middle([1,2,3,4,5,6,7]), [4]);
assertArraysEqual(middle(['john', 'bob', 'thomas', 'rudy']), ['bob', 'thomas']);
assertArraysEqual(middle(['john', 'bob', 'thomas', 'rudy', 'vincent']), ['thomas']);
assertArraysEqual(middle(['john', 'bob']), []);