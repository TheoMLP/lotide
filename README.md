# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @theo.mp/lotide`

**Require it:**

`const _ = require('@theo.mp/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Asserts whether two arrays are equal 

* `assertEqual`: Asserts whether two primitive values are equal.

* `asserObjectEqual`: Asserts whether two objects are equal.

* `countLetters`: Returns an object where each unique character encountered in a given string is a key and the value for that property should be the number of occurrences for that character.

* `countOnly`: Given an array and an object, it will return an object containing counts of everything that the
input object listed and was contained in the array as well.

* `eqArrays`: Compares the data of two arrays to check if they are equal to each other.

* `eqObjects`: Compares the data of two objects to check if they are equal to each other.

* `findKey`: Takes an object and a callback and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

* `findKeyByValue`: Takes an object and a value and returns the first key which contains the given value. If no key with that given value is found, it returns undefined.

* `flatten`: Given an array containing other nested arrays, it flattens it into a single-level array.

* `head`: Returns the first item in the array.

* `letterPositions`: Returns an object containing each characters as keys and as values all the indices in the string where each character is found.

* `map`: Returns a new array based on the results of the callback function.

* `middle`: Returns an array with only the middle element(s) of the provided array, a single middle element for odd arrays and two middle elements for even arrays.

* `tail`: Returns the "tail" of an array: everything except for the first item (head) of the provided array.

* `takeUntil`: Returns a "slice of the array with elements taken from the beginning." It should keep going until the callback returns a truthy value.

* `without`: Takes an array and an itemsToRemove array. It should return a new array with only the elements from source that are not present in the itemsToRemove array.