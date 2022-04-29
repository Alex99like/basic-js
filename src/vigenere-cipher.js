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
    this.code_A = 65;
    this.code_Z = this.code_A + 25;
    this.type = {
      encrypt: 'encrypt',
      decrypt: 'decrypt',
    }
  }

  encrypt(str, key) {
    this.validate(str, key);
    return this.crypt(str, key, this.type.encrypt);
  }
  decrypt(str, key) {
    this.validate(str, key);
    return this.crypt(str, key, this.type.decrypt);
  }

  crypt(str, key, type) {
    let shift = key.repeat(Math.ceil(str.length / key.length)).toUpperCase();
    let upper_str = String(str).trim().toUpperCase();
    let output = '';
    for(let i = 0, j = 0; i < upper_str.length; i++) {
      let code = upper_str.charCodeAt(i);
      if(code >= this.code_A && code <= this.code_Z) {
        if(type === this.type.encrypt) code = code + shift[j++].charCodeAt(0);
        else code = (code + 26 - shift[j++].charCodeAt(0));
        code = code % 26;
        code += this.code_A;
      }
      output += String.fromCharCode(code);
    } 
    return  this.isDirect ? output : output.split('').reverse().join('');
  }
 
  validate(str, key) {
    if (!str || !key) throw new Error("Incorrect arguments!");
  }
}

module.exports = {
  VigenereCipheringMachine
};
