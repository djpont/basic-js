const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const strings = [];
  if (!Array.isArray(members)) return false;
  members.forEach(member => {
    if(typeof member === 'string'){
      strings.push(member.toUpperCase().trim()[0]);
    }
  })
  if (!strings.length) return false;
  return strings.sort((a,b) => a.charCodeAt(0)-b.charCodeAt(0)).join('');
}

module.exports = {
  createDreamTeam
};
