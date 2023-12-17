const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param rawStr {string}
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
  const add =
      options.addition === undefined
          ? ""
          : new Array(options.additionRepeatTimes)
              .fill(options.addition || `${options.addition}`)
              .join(options.additionSeparator || "|");
  // console.log(add);
  return new Array(options.repeatTimes)
      .fill(str + add)
      .join(options.separator || "+");
}

module.exports = {
  repeater
};
