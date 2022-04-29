const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let result = matrix.map(arr => [...arr].fill(0));
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j]) {
        result[i][j] = -1;
        if(j - 1 >= 0 && !matrix[i][j - 1])
          result[i][j-1] += 1;
        if(j + 1 < matrix.length && !matrix[i][j - 1])
          result[i][j+1] += 1;
        if(i - 1 >= 0)
          plus(matrix[i-1], result[i-1], j);
        if(i + 1 < matrix.length)
          plus(matrix[i+1], result[i+1], j);
      } 
    }
  }
  return result.map(arr => {
    return Array.from(arr, mine => {
      if(mine < 0) return 1; 
      return mine; 
    })
  });
}

function plus(row, result, index) {
  if(!row[index])
    result[index] += 1;
  if(index - 1 >= 0 && !row[index - 1])
    result[index - 1] +=1;
  if(index + 1 < row.length && !row[index + 1])
    result[index + 1] += 1;
} 

module.exports = {
  minesweeper
};
