# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jelywrig/lotide`

**Require it:**

`const _ = require('@jelywrig/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: console logs: pass if arrays equal, fail if not equal
* `assertEqual(actual, expected)`: console logs strict equality assertion of values passed
* `assertObjectsEqual(actual, expected)`: console logs: pass if objects equal, fail if not equal
* `countLetters(string)`: given a string returns character account excluding spaces
* `countOnly(allItems, itemsToCount)`: given array of values and object of values to count returns object with counts of values to be counted
* `eqArrays(actual, expected)`: given two arrays returns true if equal.  Supports nested arrays.  Does not support objects as values.
* `eqObjects(actual, expected)`: given two objects returns true if equal.  Supports nested objects.
* `flatten(array)`: given an arbitrarily nested array returns values in single 'flat' array
* `head(array)`: returns first element of array
* `letterPositions(string)`: given a string returns object with letters as keys and arrays of indices as values
* `map(array, callback)`: returns new array of values as modified from original array by callback function
* `middle(array)`: returns new array which represents middle of array passed (returns empty array for array with length  <=2, returns array with 1 val for odd length, 2 val for even length )
* `tail(array)`: returns new array with all but first element of array
* `takeUntil(array, callback)`: returns new array with all values from original array taken until callback returns true
* `without(source, itemsToRemove)`: returns new array with content of source without the values defined in itemsToRemove

