const { assert } = require("chai");
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it(`should return 'drama' when passed ${bestTVshowsByGenre} and 'The Wire'`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it(`should return undefined when passed ${bestTVshowsByGenre} and 'That '70s Show'`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it(`should return 'sci_fi' when passed ${bestTVshowsByGenre} and 'The Expanse'`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });
  it(`should return 'comedy' when passed ${bestTVshowsByGenre}and 'Brooklyn Nine-Nine'`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });
});