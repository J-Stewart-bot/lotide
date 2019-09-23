# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install justin_stewart/lotide`

**Require it:**

`const _ = require('justin_stewart/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element of an array
* `tail(array)`: returns all elements from an array that are not the first element
* `middle(array)`: returns the middle element of an array, if the number of elements is even it will return the two middle elements
* `flatten(array)`: if there is an array within the array flatten will take the elements within the nested array and put them into the                           original array at the same place
* `countOnly()`:
* `findKeyByValue()`:
* `eqObjects(object1, object2)`: returns true if the objects passed are equal, returns false if the objects are not equal
* `eqArrays(array1, array2)`: returns true if the arrays are equal, returns false if the objects are not equal