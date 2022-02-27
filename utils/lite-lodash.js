/**
 * @param {string[]} arr
 * @returns {string[]}
 */
function uniq(arr) {
  return [...new Set(
    arr.map(word => word.toLowerCase())
  )];
}

module.exports.uniq = uniq;
