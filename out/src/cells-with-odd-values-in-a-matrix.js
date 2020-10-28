"use strict";
/*
cells-with-odd-values-in-a-matrix.ts
https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/

Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where indices[i] = [ri, ci]. For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.

Return the number of cells with odd values in the matrix after applying the increment to all indices.

 

Example 1:

Input: n = 2, m = 3, indices = [[0,1],[1,1]]
Output: 6
Explanation: Initial matrix = [[0,0,0],[0,0,0]].
After applying first increment it becomes [[1,2,1],[0,1,0]].
The final matrix will be [[1,3,1],[1,3,1]] which contains 6 odd numbers.

Example 2:

Input: n = 2, m = 2, indices = [[1,1],[0,0]]
Output: 0
Explanation: Final matrix = [[2,2],[2,2]]. There is no odd number in the final matrix.

 

Constraints:

    1 <= n <= 50
    1 <= m <= 50
    1 <= indices.length <= 100
    0 <= indices[i][0] < n
    0 <= indices[i][1] < m

hints:
Simulation : With small constraints, it is possible to apply changes to each row and column and count odd cells after applying it.
You can accumulate the number you should add to each row and column and then you can count the number of odd cells.
*/
//initial solution:
// const updateOdds = (num: number, currOdds: number): number => {
//   (num % 2 === 0) ? currOdds-- : currOdds++
//   return currOdds
// }
// function oddCells(n: number, m: number, indices: number[][]): number {
//   let numOdds = 0
//   let matrix: number[][] = []
//   for (let i = 0; i < n; i ++) {
//     let row: number[] = []
//     for (let j = 0; j < m; j++) {
//       row.push(0)
//     }
//     matrix.push(row)
//   }
//   for (let index of indices){
//     for (let i = 0; i < m; i ++) {
//       matrix[index[0]][i] += 1
//       numOdds = updateOdds(matrix[index[0]][i], numOdds)
//     }
//     for(let i = 0; i < n; i ++) {
//       matrix[i][index[1]] += 1
//       numOdds = updateOdds(matrix[i][index[1]] , numOdds)
//     }
//   }
//   return numOdds
// };
// other solution:
var oddCells = function (n, m, indices) {
    var nn = Array(n).fill(false);
    var mm = Array(m).fill(false);
    indices.forEach(function (_a) {
        var x = _a[0], y = _a[1];
        nn[x] = !nn[x];
        mm[y] = !mm[y];
    });
    var numR = nn.reduce(function (acc, cur) { return (cur ? acc + 1 : acc); }, 0);
    var numC = mm.reduce(function (acc, cur) { return (cur ? acc + 1 : acc); }, 0);
    var x = numR * m + numC * n - 2 * numR * numC;
    debugger;
    return x;
};
oddCells(2, 3, [[0, 1], [1, 1]]);
//# sourceMappingURL=cells-with-odd-values-in-a-matrix.js.map