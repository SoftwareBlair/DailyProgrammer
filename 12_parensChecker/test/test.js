var parensChecker = require('../solutions/parensChecker.js');
var assert = require('assert');

describe('Parentheses Checker', function() {

  it('should check if all parens are closed', function() {
    assert(parensChecker("()(((())))") === true);
    assert(parensChecker("())))(") === false);
    assert(parensChecker(")(") === false);
    assert(parensChecker('((()()()))') === true);
  });

});
