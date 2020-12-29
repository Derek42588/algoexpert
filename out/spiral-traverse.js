"use strict";
/*

spiral-traverse.ts
https://www.algoexpert.io/questions/Spiral%20Traverse

Complexity Analyses:

Time: O(n)
Space: O(n) n is total elements

 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.spiralTraverse = void 0;
function spiralTraverse(array) {
    // Write your code here.
    var returnArray = [];
    var endingColumn = array[0].length - 1;
    var startingColumn = 0;
    var startingRow = 0;
    var endingRow = array.length - 1;
    while (startingRow <= endingRow && startingColumn <= endingColumn) {
        debugger;
        for (var i_1 = startingColumn; i_1 <= endingColumn; i_1++) {
            returnArray.push(array[startingRow][i_1]);
        }
        for (var i_2 = startingRow + 1; i_2 <= endingRow; i_2++) {
            returnArray.push(array[i_2][endingColumn]);
        }
        for (var i_3 = endingColumn - 1; i_3 >= startingColumn; i_3--) {
            if (startingRow === endingRow)
                break;
            returnArray.push(array[endingRow][i_3]);
        }
        for (var i_4 = endingRow - 1; i_4 > startingRow; i_4--) {
            if (startingColumn === endingColumn)
                break;
            returnArray.push(array[i_4][startingColumn]);
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
exports.spiralTraverse = spiralTraverse;
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
//# sourceMappingURL=spiral-traverse.js.map