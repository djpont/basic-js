const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const last = {char:undefined, times:0};
  let resultStr = '';
  Array.from((str)).forEach((char, charIndex) => {
    if (last.char===char) {
      last.times++;
    } else {
      if (last.char) resultStr+=`${last.times > 1 ? last.times : ''}${last.char}`;
      last.char=char;
      last.times=1;
    }
    if (charIndex === (str.length - 1)) {
      if (char === last.char){
        resultStr+=`${last.times > 1 ? last.times : ''}${last.char}`;
      } else {
        resultStr+=char;
      }
    }
  })
  return resultStr;
}

// encodeLine('aaaatttt');

module.exports = {
  encodeLine
};
