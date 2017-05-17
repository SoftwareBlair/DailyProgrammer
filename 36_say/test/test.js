var say = require('../solutions/say.js');
var assert = require('assert');

describe('say', function () {

  it('zero', function () {
    assert.equal(say.inEnglish(0), 'zero');
  });

  it('one', function () {
    assert.equal(say.inEnglish(1), 'one');
  });

  it('fourteen', function () {
    assert.equal(say.inEnglish(14), 'fourteen');
  });

  it('twenty', function () {
    assert.equal(say.inEnglish(20), 'twenty');
  });

  it('twenty-two', function () {
    assert.equal(say.inEnglish(22), 'twenty-two');
  });

  xit('one hundred', function () {
    assert.equal(say.inEnglish(100), 'one hundred');
  });

  xit('one hundred twenty-three', function () {
    assert.equal(say.inEnglish(123), 'one hundred twenty-three');
  });

  xit('one thousand', function () {
    assert.equal(say.inEnglish(1000), 'one thousand');
  });

  xit('one thousand two hundred thirty-four', function () {
    assert.equal(say.inEnglish(1234), 'one thousand two hundred thirty-four');
  });

  xit('one million', function () {
    assert.equal(say.inEnglish(1000000), 'one million');
  });

  xit('one million two', function () {
    assert.equal(say.inEnglish(1000002), 'one million two');
  });

  xit('one million two thousand three hundred forty-five', function () {
    expect(say.inEnglish(1002345))
      .toBe('one million two thousand three hundred forty-five');
  });

  xit('one billion', function () {
    assert.equal(say.inEnglish(1000000000), 'one billion');
  });

  xit('a really big number', function () {
    var expected = 'nine hundred eighty-seven billion ';
    expected += 'six hundred fifty-four million ';
    expected += 'three hundred twenty-one thousand ';
    expected += 'one hundred twenty-three';
    assert.equal(say.inEnglish(987654321123), expected);
  });

  it('raises an error below zero', function () {
    assert.throws(function() {
      say.inEnglish(-1)
    }, new Error('Number must be between 0 and 999,999,999,999.'));
  });

  it('raises an error above 999,999,999,999', function () {
    assert.throws(function() {
      say.inEnglish(1000000000000)
    }, new Error('Number must be between 0 and 999,999,999,999.'));
  });

});
