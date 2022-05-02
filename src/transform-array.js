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
    let result = [];
    let disNext = '--discard-next';
    let disPrev = '--discard-prev';
    let doubleNext = '--double-next';
    let doublePrev = '--double-prev';

    if (Array.isArray(arr)) {
        if (!arr.includes(disNext) && !arr.includes(disPrev) && !arr.includes(doubleNext) && !arr.includes(doublePrev)) {
            return arr
        }
        for (let i = 0; i < arr.length; i++) {
            if (Number.isInteger(arr[i])) {
                result.push(arr[i])
            } else if (arr[i] == disPrev && Number.isInteger(arr[i + 1]) && Number.isInteger(arr[i - 2]) && i != 0) {
                result.pop()
                i--
            } else if (arr[i] == disNext && Number.isInteger(arr[i + 1]) && Number.isInteger(arr[i - 2]) && i != arr.length - 1) {
                //    i += 1;
            } else if (arr[i] == doublePrev && Number.isInteger(arr[i + 1]) && Number.isInteger(arr[i - 2]) && i != 0) {
                result.push(result[result.length - 1])
                i--
            } else if (arr[i] == doubleNext && Number.isInteger(arr[i + 1]) && Number.isInteger(arr[i - 2]) && i != arr.length - 1) {
                result.push(arr[i])
                result.push(arr[i])
                i--
            } else {
                i
            }


        }
        return result
    } else {
        throw new Error("'arr' parameter must be an instance of the Array!")
    }

}

module.exports = {
    transform
};