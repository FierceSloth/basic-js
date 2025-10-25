const { NotImplementedError } = require('../lib');

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
  if (typeof n !== 'number') throw new Error('invalid parameter');

  let arrN = [...String(n)];
  arrN = arrN.map((el) => +el);
  let combinations = [];

  arrN.forEach((_, index) => {
    let copy = [...arrN];
    copy.splice(index, 1);
    combinations.push(+copy.join(''));
  })

  return Math.max(...combinations);
}

module.exports = {
  deleteDigit
};
