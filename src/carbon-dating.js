const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */ // 
function dateSample(sampleActivity = 0) {
    if (sampleActivity < 1 || sampleActivity > 15 || typeof sampleActivity != 'string' || sampleActivity == NaN) {
        return false
    }
    const timeHalf = 0.693;
    let speed = timeHalf / HALF_LIFE_PERIOD;
    let result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / speed)
        // if (typeof result == "number") {
        //     return result
        // } else {
        //     return false
        // }
    if (isNaN(result)) {
        return false
    } else {
        return result
    }


}

module.exports = {
    dateSample
};