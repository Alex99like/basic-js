const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
    let res = [];
    let add = [];
    let times = options.hasOwnProperty("repeatTimes") ? options.repeatTimes : 1;
    let addTimes = options.hasOwnProperty("additionRepeatTimes") ? options.additionRepeatTimes : 1;
    let sep = options.hasOwnProperty("separator") ? options.separator + "" : "+";
    let set = options.hasOwnProperty("addition") ? options.addition + "" : "";
    let addSep = options.hasOwnProperty("additionSeparator") ? options.additionSeparator : "|";
    for (let i = 0; i < addTimes; i++) {
        add.push(set);
    }
    add = add.join(addSep);
    for (let i = 0; i < times; i++) {
      res.push(str+add);
    }
    return res.join(sep);
  }


module.exports = {
  repeater
};
