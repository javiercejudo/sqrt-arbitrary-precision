# sqrt-arbitrary-precision

[![Build Status](https://travis-ci.org/javiercejudo/sqrt-arbitrary-precision.svg)](https://travis-ci.org/javiercejudo/sqrt-arbitrary-precision)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/sqrt-arbitrary-precision/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/sqrt-arbitrary-precision?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/sqrt-arbitrary-precision/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/sqrt-arbitrary-precision)

sqrt abstraction to extend [linear-arbitrary-precision](https://github.com/javiercejudo/linear-arbitrary-precision/)

## Install

    npm i sqrt-arbitrary-precision

## Adapters

- [[adapter]](https://github.com/javiercejudo/floating-adapter) [[lib]](https://github.com/javiercejudo/floating) floating

## Usage

```js
var adapter = require('floating-adapter');

var Decimal = require('sqrt-arbitrary-precision')(require('linear-arbitrary-precision')(adapter));

new Decimal('2').pow(new Decimal('3')).valueOf(); // => 8
```

See [spec](test/spec.js).
