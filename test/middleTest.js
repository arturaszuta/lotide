const middle = require('../middle')
const assert = require('chai').assert;

describe("#middle", () => {

  it('returns [5, 6] for [1,2,3,4,5,6,7,8,9,10]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8,9,10]), [5, 6]);
  });

  it('returns [4] for [1,2,3,4,5,6,7]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7]), [4]);
  });
  
  it('returns [] for ["john", "bob"]', () => {
    assert.deepEqual(middle(["john", "bob"]), []);
  });
});