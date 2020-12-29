"use strict";
/*

longest-peak.ts
https://www.algoexpert.io/questions/Longest%20Peak

Complexity Analyses:

Time: O(N)
Space: O(1)

 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestPeak = void 0;
// export function longestPeak(array: number[]): number {
//   // Write your code here.
//   let longest: number = 0;
//   if (array.length <= 2) {
//     return longest;
//   }
//   let direction = 1;
//   let peakStart = 0;
//   let ascends: boolean = false;
//   let decends: boolean = false;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === array[i + 1] || i === array.length - 1) {
//       if (ascends && decends && i - peakStart + 1 > longest)
//         longest = i - peakStart + 1;
//       // debugger;
//       peakStart = i + 1;
//       direction = 1;
//       ascends = false;
//       decends = false;
//       // debugger;
//     } else if (direction > 0 && array[i] < array[i + 1] && !ascends) {
//       ascends = true;
//     } else if (direction > 0 && array[i] > array[i + 1]) {
//       // debugger;
//       direction = -1;
//       decends = true;
//       // debugger;
//     } else if (direction < 0 && array[i] < array[i + 1]) {
//       if (ascends && decends && i - peakStart + 1 > longest)
//         longest = i - peakStart + 1;
//       // debugger;
//       peakStart = i;
//       ascends = true;
//       decends = false;
//       direction = 1;
//       // debugger;
//     }
//   }
//   debugger;
//   return longest;
// }
//after watching into to explanation:
function longestPeak(array) {
    // Write your code here.
    var longest = 0;
    if (array.length <= 2) {
        return longest;
    }
    for (var i_1 = 1; i_1 <= array.length - 2; i_1++) {
        var isPeak = array[i_1] > array[i_1 + 1] && array[i_1] > array[i_1 - 1];
        if (isPeak) {
            debugger;
            var peakLength = expandOut(array, i_1 - 1, i_1 + 1);
            if (peakLength > longest)
                longest = peakLength;
        }
    }
    debugger;
    return longest;
}
exports.longestPeak = longestPeak;
function expandOut(array, left, right) {
    var length = 3;
    debugger;
    while (array[left] > array[left - 1]) {
        length++;
        left--;
        debugger;
    }
    while (array[right] > array[right + 1]) {
        length++;
        right++;
        debugger;
    }
    debugger;
    return length;
}
longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]);
// longestPeak([1, 2, 3, 4, 5, 6]);
// longestPeak([0, -1, -2, -3, -4]);
// longestPeak([0, 0, 0, 0, 0]);
//# sourceMappingURL=longest-peak.js.map