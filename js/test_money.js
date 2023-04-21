const assert = require('assert');

let fiver = new Dollar (5)
let tenner = fiver.times(2)
assert.StrictEqual(tenner.amount, 10);


