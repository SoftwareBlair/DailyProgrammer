var wordy = require('../solutions/wordy.js');
var assert = require('assert');

describe('Word Problem', function() {

  it('add 1', function() {
    var question = 'What is 1 plus 1?';
    assert.equal(2, wordy(question));
  });

  it('add 2', function() {
    var question = 'What is 53 plus 2?';
    assert.equal(55, wordy(question));
  });

  it('add negative numbers', function() {
    var question = 'What is -1 plus -10?';
    assert.equal(-11, wordy(question));
  });

  it('add more digits', function() {
    var question = 'What is 123 plus 45678?';
    assert.equal(45801, wordy(question));
  });

  it('subtract', function() {
    var question = 'What is 4 minus -12?';
    assert.equal(16, wordy(question));
  });

  it('multiply', function() {
    var question = 'What is -3 multiplied by 25?';
    assert.equal(-75, wordy(question));
  });

  it('divide', function() {
    var question = 'What is 33 divided by -3?';
    assert.equal(-11, wordy(question));
  });

  it('add twice', function() {
    var question = 'What is 1 plus 1 plus 1?';
    assert.equal(3, wordy(question));
  });

  it('add then subtract', function() {
    var question = 'What is 1 plus 5 minus -2?';
    assert.equal(8, wordy(question));
  });

  it('subtract twice', function() {
    var question = 'What is 20 minus 4 minus 13?';
    assert.equal(3, wordy(question));
  });

  it('subtract then add', function() {
    var question = 'What is 17 minus 6 plus 3?';
    assert.equal(14, wordy(question));
  });

  it('multiply twice', function() {
    var question = 'What is 2 multiplied by -2 multiplied by 3?';
    assert.equal(-12, wordy(question));
  });

  it('add then multiply', function() {
    var question = 'What is -3 plus 7 multiplied by -2?';
    assert.equal(-8, wordy(question));
  });

  it('divide twice', function() {
    var question = 'What is -12 divided by 2 divided by -3?';
    assert.equal(2, wordy(question));
  });

  it('returns 42 when question is irrelevant', function() {
    var question = 'Who is the president of the United States?';
    assert.equal(42, wordy(question));
  });

});
