const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns [1, 2, 5, 7]", () => {
    assert.deepEqual(tail([1, 2, 5, 7]), [2, 5, 7]);
  });
  it("returns [7, 'a', 5, '2']", () => {
    assert.deepEqual(tail([7, 'a', 5, '2']), ['a', 5, '2']);
  });
  it("returns ['Reyna', 'Lighthouse', 'Roma, 'Labs']", () => {
    assert.deepEqual(tail([42, 'Reyna', 'Lighthouse', 'Roma', 'Labs']), ['Reyna', 'Lighthouse', 'Roma', 'Labs']);
  });
});