"use strict";
/*

binary-search.ts
https://www.algoexpert.io/questions/Binary%20Search

Should be O(logn), since we're doing a logarithmic, binary search (time).  Should be O(1) space

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
// export function binarySearch(array: number[], target: number): number {
//   // Write your code here.
//   let pointer = Math.floor(array.length / 2);
//   debugger;
//   let origArray = array;
//   while (pointer >= 0 && pointer <= array.length - 1) {
//     if (array[pointer] === target) {
//       debugger;
//       return origArray.indexOf(target);
//     } else if (array[pointer] > target) {
//       // go halfway left
//       array = array.slice(0, pointer);
//       pointer = Math.floor((pointer - 1) / 2);
//       debugger;
//     } else {
//       // if array[pointer] < target
//       // go halfway right
//       array = array.slice(pointer);
//       pointer = Math.ceil(array.length / 2);
//       debugger;
//     }
//   }
//   debugger;
//   return -1;
// }
// He had iterative and recursive solution.  His iterative solution is essentially the same as what I wrote, below:
// export function binarySearch(array: number[], target: number): number {
//   // Write your code here.
//   return binarySearchHelper(array, target, 0, array.length - 1);
//   function binarySearchHelper(
//     array: number[],
//     target: number,
//     left: number,
//     right: number
//   ): number {
//     while (left <= right) {
//       const middle = Math.floor((left + right) / 2);
//       const potentialMatch = array[middle];
//       if (target === potentialMatch) {
//         return middle;
//       } else if (target < potentialMatch) {
//         right = middle - 1;
//       } else {
//         left = middle + 1;
//       }
//     }
//     return -1;
//   }
// }
// His recursive solution:
function binarySearch(array, target) {
    // Write your code here.
    return binarySearchHelper(array, target, 0, array.length - 1);
    function binarySearchHelper(array, target, left, right) {
        if (left > right)
            return -1;
        var middle = Math.floor(left + right / 2);
        var potentialMatch = array[middle];
        if (target === potentialMatch) {
            return middle;
        }
        else if (target < potentialMatch) {
            return binarySearchHelper(array, target, left, middle - 1);
        }
        else {
            return binarySearchHelper(array, target, middle + 1, right);
        }
    }
}
exports.binarySearch = binarySearch;
// binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33);
binarySearch([1, 5, 23, 111], 5);
//# sourceMappingURL=binary-search.js.map