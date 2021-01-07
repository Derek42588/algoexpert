/*

spiral-traverse.ts
https://www.algoexpert.io/questions/Spiral%20Traverse

Complexity Analyses:

Time: O(n)
Space: O(n) n is total elements

 */

export function spiralTraverse(array: number[][]) {
  // Write your code here.
  let returnArray: number[] = [];

  let endingColumn = array[0].length - 1;
  let startingColumn = 0;
  let startingRow = 0;
  let endingRow = array.length - 1;

  while (startingRow <= endingRow && startingColumn <= endingColumn) {
    debugger;
    for (let i = startingColumn; i <= endingColumn; i++) {
      returnArray.push(array[startingRow][i]);
    }

    for (let i = startingRow + 1; i <= endingRow; i++) {
      returnArray.push(array[i][endingColumn]);
    }

    for (let i = endingColumn - 1; i >= startingColumn; i--) {
      if (startingRow === endingRow) break;
      returnArray.push(array[endingRow][i]);
    }

    for (let i = endingRow - 1; i > startingRow; i--) {
      if (startingColumn === endingColumn) break;
      returnArray.push(array[i][startingColumn]);
    }

    startingRow++;
    endingRow--;
    endingColumn--;
    startingColumn++;
    debugger;
  }
  debugger;
  return returnArray;
}

//recursive attempt
// basically the same, not going to attempt.

// export function spiralTraverse(array: number[][]) {
//   // Write your code here.
//   let returnArray: number[] = [];

//   let endingColumn = array[0].length - 1;
//   let startingColumn = 0;
//   let startingRow = 0;
//   let endingRow = array.length - 1;

//   debugger;
//   return returnArray;
// }

// function traverse(returnArray:number[], initialArray: number[][], startingColumn: number, endingColumn: number, startingRow: number, endingRow: number) {

//   //base case
//   if (startingColumn > endingColumn || startingRow > endingRow) {
//     return
//   }
//   traverse()

// }

spiralTraverse([
  [1, 2, 3, 4],
  [10, 11, 12, 5],
  [9, 8, 7, 6],
]);
