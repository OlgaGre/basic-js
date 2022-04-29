const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
        let depth = 1
        if (Array.isArray(arr)) {
            depth += Math.max(0, ...arr.map((sub) => this.calculateDepth(sub)))
        } else {
            return 0;
        }
        return depth
    }
}

module.exports = {
    DepthCalculator
};