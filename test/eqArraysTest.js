const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
assertEqual(eqArrays([2, 4, [17, 5, [6, 21, 8], 14, [3, [11], 73], 13], 13, 100], [2, 3, [4, 5, [6, 7, 8], 9, [10, [11], 12], 13], 14, 13]), false);
assertEqual(eqArrays([2, 4, [17, 5, [6, 21, 8], 14, [3, [11], 73], 13], 13, 100], [2, 4, [17, 5, [6, 21, 8], 14, [3, [11], 73], 13], 13, 100]), true);
assertEqual(eqArrays([2, 4, [17, 5, [6, 21, 8], 14, [3, [11], 0], 13], 13, 100], [2, 4, [17, 5, [6, 21, 8], 14, [3, [11], 73], 13], 13, 100]), false);
assertEqual(eqArrays([1, [2, [3, [4, [5, [6], 7], 8], 9], 10], 11], [1, [2, [3, [4, [5, [100], 7], 8], 9], 10], 11]), false);
