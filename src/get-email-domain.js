const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const domainIndex = email.lastIndexOf('@') + 1;
  const domain = email.substring(domainIndex);
  return domain;
}


module.exports = {
  getEmailDomain
};
