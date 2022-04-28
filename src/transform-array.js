const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(array) {
  if(!Array.isArray(array)) throw new Error("'arr' parameter must be an instance of the Array!");
  let arr = [...array];
  for(let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--double-next': 
        if(arr[i + 1])
          arr[i] = arr[i+1];
        else 
          arr.splice(i, 1);
        break;
      case '--discard-prev':
        if(arr[i - 1] && arr[i - 1] != -1)
          arr.splice(i-1, 2);
        else 
          arr.splice(i, 1);
        break;
      case '--discard-next':
        if(arr[i + 1])
          arr.splice(i, 2, -1);
        else 
          arr.splice(i, 1);
        break;
      case '--double-prev':
        if(arr[i - 1] && arr[i - 1] != -1)
          arr[i] = arr[i-1];
        else 
          arr.splice(i, 1);
        break;
    }
    
  }
  return arr.filter(i => { if(i>=0 || Object.keys(i).length > 0) return i; });
}

module.exports = {
  transform
};
