const { assert } = require("chai");
const findKey = require("../findKey");

describe("#findKey", () => {
  let names = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  it(`should return 'noma' when passed ${names} object and (x => x.stars === 2) as callback func`, () => {
    assert.strictEqual(findKey(names, x => x.stars === 2), "noma");
  });
  it(`should return 'Akaleri' when passed ${names} object and (x => x.stars === 3) as callback func`, () => {
    assert.strictEqual(findKey(names, x => x.stars === 3), "Akaleri");
  });
  it(`should return 'Blue Hill' when passed$ {names} object and (x => x.stars === 1) as callback func`, () => {
    assert.strictEqual(findKey(names, x => x.stars === 1), "Blue Hill");
  });
});
