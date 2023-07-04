# Lotide

Version: 1.0.0

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @reynaroma/lotide`

**Require it:**

`const _ = require('@reynaroma/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`
`const results = _.head([1, 2, 3]) // => [1]`
`const results = _.middle([1, 2, 3, 4, 5, 6]) // +> [3, 4])`

## Documentation

The following functions are currently implemented:

* `tail(...)`: returns a new array containing al the elements of the input array except the first element
* `head(...)`: returns the first element of the input array
* `middle(...)`: returns the middle element/elements of an input array
