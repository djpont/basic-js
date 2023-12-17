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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  
  validateArgs(...args) {
    if (args.some(arg => !arg)) {
      throw new Error('Incorrect arguments!');
    }
  }
  
  encrypt(message, key) {
    this.validateArgs(message, key);
    
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    
    for (let i = 0, j = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);
      
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode(((charCode + key.charCodeAt(j % key.length)) % 26) + 65);
        j++;
      } else {
        result += message[i];
      }
    }
    
    return this.isDirect ? result : result.split('').reverse().join('');
  }
  
  decrypt(encryptedMessage, key) {
    this.validateArgs(encryptedMessage, key);
    
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    
    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      const charCode = encryptedMessage.charCodeAt(i);
      
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode(((charCode - key.charCodeAt(j % key.length) + 26) % 26) + 65);
        j++;
      } else {
        result += encryptedMessage[i];
      }
    }
    
    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
