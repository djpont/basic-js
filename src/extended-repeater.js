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

// function repeater(rawStr, options) {
//   const str = rawStr.toString();
//   const repeatTimes = Number(options.repeatTimes || 1);
//   const separator = options.separator?.toString() || '+';
//   const addition = options.addition?.toString() || '|';
//   const additionRepeatTimes = Number(options.additionRepeatTimes || ((addition === '|') ? 0 : 1));
//   const additionSeparator = options.additionSeparator?.toString() || '';
//   let repeatStr = str;
//   let finalStr = '';
//   for(let i=1; i <= repeatTimes; i++){
//     finalStr+=repeatStr;
//     for(let a=1; a<=additionRepeatTimes; a++){
//       finalStr+=addition;
//       if(a<additionRepeatTimes) finalStr+=additionSeparator;
//     }
//     if( i < repeatTimes) {finalStr+=separator;}
//   }
//   return finalStr;
// }

// console.log('repeater')
// repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' });
// repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 })
// repeater(9.234, { repeatTimes: 4, separator: '||', addition: { a: 5 }, additionRepeatTimes: 3, additionSeparator: '&&' })

module.exports = {
  repeater
};
