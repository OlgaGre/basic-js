const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    // let result = [];
    // let disNext = '--discard-next';
    // let disPrev = '--discard-prev';
    // let doubleNext = '--double-next';
    // let doublePrev = '--double-prev';
    // if (Array.isArray(arr)) {

    //     for (let i = 0; i < arr.length; i++) {
    //         if (Number.isInteger(arr[i])) {
    //             result.push(arr[i])
    //         } else if (arr[i] == disPrev) {
    //             result.pop()
    //         } else if (arr[i] == disNext) {
    //             i++
    //         } else if (arr[i] == doublePrev) {
    //             result.push(result[result.length - 1])
    //         } else {
    //             result.push(arr[i + 1])
    //             result.push(arr[i])
    //             i--
    //         }


    //     }
    //     return result
    // } else {
    //     throw new Error("'arr' parameter must be an instance of the Array!")
    // }

}

module.exports = {
    transform
};