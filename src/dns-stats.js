const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  domains.forEach(domain => {
    let nestPart = '';
    (`${domain}/`).split('.').reverse().forEach(part => {
      nestPart =`.${part}${nestPart}`;
      if(obj[nestPart]===undefined){
        obj[nestPart]=0;
      }
      obj[nestPart]++;
    })
  });
  const lastObj = {}
  Object.keys(obj).forEach(key => {
    const fixedKey = '.'+key.replaceAll('/','').split('.').slice(1).reverse().join('.');
    lastObj[fixedKey]=obj[key];
  });
  return lastObj;
}

getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']);

module.exports = {
  getDNSStats
};
