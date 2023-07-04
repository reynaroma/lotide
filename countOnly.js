// const assertEqual = function(actual, expected) {
//   const checkMark = '\u2705';
//   const redMark = '\u{1F6D1}';
  
//   if (actual === expected) {
//     console.log(`${checkMark}${checkMark}${checkMark}Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.error(`${redMark}${redMark}${redMark}Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    // inside the loop, 
    // increment the counter for each item:
    // set a property with that string key to:
    // the value that was already there (or zero if nothing there) with 1 added to it.
    if (item !== ' ') {
      if (itemsToCount[item]) { // if value
        if (results[item]) { // firstNames : value
          results[item] += 1;
        } else {
          results[item] = 1;
        }
      }
    }
    console.log(results[item])
  }
  return results;
};

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;