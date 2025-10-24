const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const repeatTimes = Number(options.repeatTimes ?? 1);
  const separator = String(options.separator ?? '+');
  const addition = options.addition === undefined ? '' : String(options.addition);
  const additionRepeatTimes = Number(options.additionRepeatTimes ?? 1);
  const additionSeparator = String(options.additionSeparator ?? '|');
  const copyStr = String(str);

  let strAddition = [];
  strAddition.push(copyStr + addition)

  for (let i = 1; i < additionRepeatTimes; i += 1) {  // i is 1 because 1 itteration is complete
    strAddition.push(addition);
  }

  strAddition = strAddition.join(additionSeparator);
  let resutArr = [];

  for (let j = 0; j < repeatTimes; j += 1) {
    resutArr.push(strAddition)
  }

  return resutArr.join(separator);
}

module.exports = {
  repeater
};
