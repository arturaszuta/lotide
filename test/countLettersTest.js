const expect = require('chai').expect
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  
  it('should return empty object if passed object is empty', () => {
    expect(countLetters('')).to.be.an('object').which.is.empty;
  });

  it('should return correct number of letters', () => {
    expect(countLetters('sparta')).to.deep.equal({ s: 1, p: 1, a: 2, r: 1, t: 1 });
  });

});