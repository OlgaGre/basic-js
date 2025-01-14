const { NotImplementedError } = require('../extensions/index.js');

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
    if ((date instanceof Date === false || Object.getOwnPropertyNames(date).length > 0) && arguments.length > 0) {
        throw new Error('Invalid date!');
    }
    if (date instanceof Date) {
        let data = date;
        var mm = data.getMonth() + 1;

        switch (mm) {
            case 1:
            case 2:
            case 12:
                return 'winter'

                break;
            case 3:
            case 4:
            case 5:
                return 'spring'
                break;
            case 6:
            case 7:
            case 8:
                return 'summer'
                break;
            case 9:
            case 10:
            case 11:
                return 'autumn'
        }
    } else {
        return 'Unable to determine the time of year!'
    }


}

module.exports = {
    getSeason
};