/*jshint node:true, mocha:true */

'use strict';

require('should');

var adapter = require('floating-adapter');
var Decimal = require('core-arbitrary-precision')(adapter);

Decimal = require('../src/')(Decimal);

describe('sqrt', function() {
  it('should give the square root', function() {
    new Decimal('9').sqrt().valueOf().should.be.exactly(3);
  });
});
