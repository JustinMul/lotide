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

const head   = returns the first element of an array 
const tail   = returns all elements of the array execpt for the first element/
const middle = array and return the middle-most element(s) of the given array.
const assertArraysEqual = take in two arrays and console.log an appropriate message to the console.
const assertEqual = a function to mimic the assert function of lotide (checks to see if your output is what you expect)
const assertObjectsEqual = take in two objects and console.log an appropriate message to the console.
const countLetters = takes in a sentence (as a string) and then return a count of each of the letters in that sentence
const countOnly = return a proper report on all the strings found in the input array, and their respective counts. 
const eqArrays =  takes in two arrays and returns true or false, based on a perfect match.
const eqObjects = Used to compare if 2 objects are the same
const findKey = takes in an object and a callback. It scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
const findKeyByValue = takes in an object and a value and it scan the object and return the first key which contains the given value. If no key with that given value is found, then it return undefined.
const flatten = flattens out an array by making all arrays in the same level. For example nested arrrays are no longer nested and now become inline with the non nested arrays.
const letterPositions = return all the indices (zero-based positions) in the string where each character is found.
const map = takes and array of elements and modifies them based on your call back function and outputs a new array.
const takeUntil = The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
const without = return a subset of a given array, removing unwanted elements.