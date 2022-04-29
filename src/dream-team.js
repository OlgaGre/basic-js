const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *'///ffg'
 */
function createDreamTeam(members) {
    // let arr = members.sort()
    if (Array.isArray(members)) {

    } else {
        return false
    }
    let arr = [];
    let result = ''
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] == 'string') {
            let str = members[i].split(' ').join('')
            arr.push(str.toUpperCase())
        }


    }
    arr.sort()
    for (let j = 0; j < arr.length; j++) {
        result += arr[j][0]

    }
    return result
    throw new NotImplementedError('Not implemented');

}

module.exports = {
    createDreamTeam
};