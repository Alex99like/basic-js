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
  let obj = {};
    for (let domain of domains) {
      let arr = domain.split('.');
      let dom = '';
      for (let i = arr.length; i > 0; i--) {
        dom += '.' + arr.slice(i - 1, i);
               
      if (obj[dom]) obj[dom] += 1;
      else obj[dom] = 1;
    }
  }
  return obj;
}
  


module.exports = {
  getDNSStats
};
