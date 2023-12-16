const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Create an array of heights excluding -1
  const heights = arr.filter(height => height !== -1);
  
  // Sort the heights array
  heights.sort((a, b) => a - b);
  
  // Replace the sorted heights back into the original array at the correct positions
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = heights[index];
      index++;
    }
  }
  
  return arr;
}

module.exports = {
  sortByHeight
};
