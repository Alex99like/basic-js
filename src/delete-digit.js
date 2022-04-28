const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  let arr = String(n).split('');
  for (let i = 0; i < arr.length; i++) {
    let item = arr.splice(i, 1);
    let tmp = parseInt(arr.join(''));
    if (tmp > result) result = tmp;
    arr.splice(i, 0, item);
  }
  return result;
}

module.exports = {
  deleteDigit
};
