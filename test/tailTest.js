const tail = require('../tail')
const assert = require('chai').assert;

describe("#tail", () => {

  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('returns [5,6,7,8] for [1,5,6,7,8]', () => {
    assert.deepEqual(tail([1,5,6,7,8]), [5,6,7,8]);
  });

});