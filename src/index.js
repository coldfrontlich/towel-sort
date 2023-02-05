
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let answer = [];
  if (matrix != undefined && matrix.length >= 0) {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 != 0) {
        reverseRow = matrix[i].reverse();
        answer = answer.concat(reverseRow);
      } else  {
        answer = answer.concat(matrix[i]);
      }
    }
  }
  return answer;
}
