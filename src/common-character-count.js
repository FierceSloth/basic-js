const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const arrS1 = [...s1];
  const arrS2 = [...s2];

  return arrS1.reduce((acc, el) => {
    if (arrS2.includes(el)) {
      arrS2[arrS2.indexOf(el)] = 'deleted'
      return acc + 1
    };
    return acc
  }, 0);
}

module.exports = {
  getCommonCharacterCount
};
