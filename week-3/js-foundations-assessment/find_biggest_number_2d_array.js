//Create a function named maxTwoDimArray that receives a two-dimensional array (also called matrix) of numbers as an argument.
The function should return the greatest number from the given nested arrays.

function maxTwoDimArray(matrix) {
  let max = matrix[0][0]
  for(let i = 0; i < matrix.length; i++){
  for(let j = 0; j <matrix[i].length; j++) {
    if(matrix[i][j] > max){
      max = matrix[i][j]
    }
  } 
  }
  return max
}

//one line version

function maxTwoDimArray(matrix) {
return matrix.flat().reduce((a,b) => Math.max(a,b))
}
