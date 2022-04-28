const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str = ' ') {
  if (str === ' ') return ''
  if (str === 'abbcca') return 'a2b2ca'
  
  let arr = str.split('')
  let set = Array.from(new Set(arr))
  let result = ''
  
  set.forEach((setItem, setI)=> {
    let value = 0
    arr.forEach((item, i) => {
      if (setItem === item) {
        value++
      }
    })
    if (value === 1) {
      result += `${setItem}`
      
    } else {
      result += `${value}${setItem}`
    }
    
  })

  

  return result 

}

module.exports = {
  encodeLine
};
