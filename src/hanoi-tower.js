const { NotImplementedError } = require('../lib');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const SEC_PER_HOUR = 3600;
  const result = {turns: 0, seconds: 0};

  result.turns = 2 ** disksNumber - 1;
  result.seconds = Math.floor(SEC_PER_HOUR / turnsSpeed * result.turns); 

  return result;
}

module.exports = {
  calculateHanoi
};
