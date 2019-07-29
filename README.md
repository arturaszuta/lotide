# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by Arturas Zuta as a part of the program at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @eedev/lotide`

**Require it:**

`const _ = require('@eedev/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `tail([array])`: returns the "tail" of the passed array - an array of all the elements without the first one
* `assertArraysEqual([array1], [array2])`: returns true if passed arrays are equal and false if they are not
* `assertEqual(a, b)`: compares two primitive values and returns true if they are equal
* `assertObjectsEqual({obj1}, {obj2})`: takes two objects as parameters and returns true if they are equal
* `countLetters('string')`: takes a string and returns an object with all listed unique letters and their counts
* `countOnly([array1], arg)`: takes an array and a paramater - returns an object with the counts of matching elements in the array
* `eqArrays([array1], [array2])`: takes two arrays and returns true if they are equal
* `eqObjects({obj1}, {obj2})`: takes two objects and returns true if they are equal
* `findKeyByValue({obj}, 'value')`: takes and object and an argument and returns a key from the object if it matches the passed value
* `findKeys({obj}, callback)`: takes an object and a callback, returns first truthy value using the callback as a filter
* `flatten([array])`: takes a nested array and returns a "single level array"
* `head([array])`: takes an array and returns the first element of it 
* `letterPositions([array])`: takes a string/sentence and returns an object with all the letter indexes
* `map([array], callback)`: takes an array and a callback and returns a newarray with elements of the original array which pass the callback function
* `middle([array])`: takes an array returns the middle element of it if the array has an odd number of elements, or two middle elements if the array has an even amount of elements
* `takeUntil([array], callback)`: takes an array and a callback function, it returns the first part of the input array, which is decided with the callback function
* `without([array], argument)`: takes an array and returns a new array without the "argument" element
