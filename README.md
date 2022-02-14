# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @justinmulroney/lotide`

**Require it:**

`const _ = require('@justinmulroney/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual.js');
const assertEqual = require('./assertEqual.js');
const assertObjectsEqual = require('./assertObjectsEqual.js');
const countLetters = require('./countLetters.js');
const countOnly = require('./countOnly.js');
const eqArrays = require('./eqArrays.js');
const eqObjects = require('./eqObjects.js');
const findKey = require('./findKey.js');
const findKeyByValue = require('./findKeyByValue.js');
const flatten = require('./flatten.js');
const letterPositions = require('./letterPositions.js');
const map = require('./map.js');
const takeUntil = require('./takeUntil.js');
const without = require('./without.js');