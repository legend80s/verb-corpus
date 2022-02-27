/**
 * @param {string[]} arr
 * @returns {string[]}
 */
function uniq(arr) {
  return [...new Set(
    arr.map(word => word.toLowerCase())
  )];
}

/**
 * @param {string} verb
 * @returns {boolean}
 */
module.exports.isValidVerb = (verb) => {
  return /^[a-z]{2,}$/.test(verb);
}

module.exports.uniq = uniq;
