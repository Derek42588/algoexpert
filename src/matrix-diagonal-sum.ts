/*
matrix-diagonal-sum.ts
https://leetcode.com/problems/matrix-diagonal-sum/

Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary 
diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.

*/

function diagonalSum(mat: number[][]): number {

  if (mat.length === 1) {
    return mat[0][0]
  }
  let primDiagSum: number = 0;
  let secDiagSum: number = 0;
  for (let i: number = 0; i < mat.length; i++){
    primDiagSum += mat[i][i]
  }

  for (let j: number = mat.length -1, k: number = 0; j >= 0 && k < mat.length; j--, k++) {
    secDiagSum += mat[k][j]
  }

  if (mat.length % 2 !== 0) {
    // taking out the double counted middle, if exists
    primDiagSum -= mat[(mat.length - 1 )/ 2][(mat.length - 1 )/ 2]
  }

  return primDiagSum += secDiagSum
};

diagonalSum( [[5]])