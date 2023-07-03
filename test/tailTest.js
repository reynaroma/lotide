// path/directory of the file
const tail = require('../tail');
const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual(["Yo Yo", "Lighthouse", "Labs"].length, 3); // original array should still have 3 elements!
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail(["apple", "orange", "strawberry"]), ["orange", "strawberry"]);
assertEqual(tail([1, 2, 5, 7]), [2, 5, 7]);
assertEqual(tail([7, 'a', 5, '2']), ['a', 5, 21]);