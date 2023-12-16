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
  const numberStr = String(n);
  let maxNumber = 0;
  
  for (let i = 0; i < numberStr.length; i++) {
    const modNumberStr = numberStr.slice(0, i) + numberStr.slice(i + 1);
    const modNumber = Number(modNumberStr);
    
    if (modNumber > maxNumber) {
      maxNumber = modNumber;
    }
  }
  
  return maxNumber;
}

module.exports = {
  deleteDigit
};
