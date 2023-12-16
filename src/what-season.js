/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
  console.log(date);
  // Check if the date argument is not provided
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  
  // Check if the date is a valid JavaScript Date object
  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }
  
  try {
    let a = isNaN(date) + isNaN(date.getTime());
  } catch (e) {
    throw new Error('Invalid date!');
  }
  
  if (isNaN(date)) {
    throw new Error('Invalid date!');
  }
  
  // Extract the month from the date (0-indexed)
  const month = date.getMonth();
  
  // Determine the season based on the month
  if (month >= 2 && month <= 4) {
    return 'spring';
  } else if (month >= 5 && month <= 7) {
    return 'summer';
  } else if (month >= 8 && month <= 10) {
    return 'autumn';
  } else {
    return 'winter';
  }
}

module.exports = {
  getSeason
};
