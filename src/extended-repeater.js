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
    if (!options.additionSeparator) {
        options.additionSeparator = '|'
    }

    if (!options.separator) {
        options.separator = '+'
    }

    

    let addition = ''
    let value = str
    let result = ''

    if (String(options.addition)) {
        addition += options.addition
    }

    if (options.additionRepeatTimes > 1) {
        addition += options.additionSeparator
        if (options.additionRepeatTimes) {
            addition = addition.repeat(options.additionRepeatTimes)
            addition = addition.slice(0, addition.length - options.additionSeparator.length)
        }
    }

    value += addition

    if (options.repeatTimes > 1) {
        value += options.separator
        value = value.repeat(options.repeatTimes)
        value = value.slice(0, value.length - options.separator.length)
    }
    


    return value
}


module.exports = {
  repeater
};
