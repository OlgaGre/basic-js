const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let num = n + '';
    let arr = []
    for (let i = 0; i < num.length; i++) {
        let numDel = num.slice(0, i) + num.slice(++i)
        arr.push(+numDel)
        i--
    }
    return Math.max(...arr)
}

module.exports = {
    deleteDigit
};