const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

    encrypt(message = false, key = false) {
        if (message == false || key == false) {
            throw new Error('Incorrect arguments!');
        } else {
            let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
            message = message.toUpperCase();
            key = key.toUpperCase();
            while (key.length < message.length) { // удлиняем ключ до сообщения
                key += key
            }
            let i = 0;
            let j = 0;
            let result = ''
            while (i < message.length && j < key.length) {

                if (alpha.includes(message[i])) {
                    let indexInAlpha = alpha.indexOf(message[i]) //0
                    let indexInKey = alpha.indexOf(key[j]) //0
                    result += alpha[indexInKey + indexInAlpha]
                    i++
                    j++
                } else {
                    //если не латинская буква то добавляем, что есть

                    result += message[i]
                    i++
                }
            }
            return result
        }
    }
    decrypt(encryptedMessage = false, key = false) {
        if (encryptedMessage == false || key == false) {
            throw new Error('Incorrect arguments!');
        } else {
            // this.encrypt('attack at dawn!', 'alphonse').split('').reverse().join('')
            let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
            let revAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].reverse()
            encryptedMessage = encryptedMessage.toUpperCase();
            key = key.toUpperCase();
            while (key.length < encryptedMessage.length) { // удлиняем ключ до сообщения
                key += key
            }
            let i = 0;
            let j = 0;
            let result = ''
            while (i < encryptedMessage.length && j < key.length) {

                if (alpha.includes(encryptedMessage[i])) {
                    let indexInAlpha = alpha.indexOf(encryptedMessage[i], 25) //0
                    let indexInKey = alpha.indexOf(key[j], 25) //0
                    if (indexInAlpha - indexInKey >= 0) {
                        result += alpha[indexInAlpha - indexInKey]
                    } else {
                        result += revAlpha[Math.abs(indexInAlpha - indexInKey + 1)]
                    }


                    //    result += alpha[indexInAlpha - indexInKey]
                    i++
                    j++
                } else {
                    //если не латинская буква то добавляем, что есть

                    result += encryptedMessage[i]
                    i++
                }
            }
            return result
                //   return result.split('').reverse().join('')
        }
    }
}


module.exports = {
    VigenereCipheringMachine
};