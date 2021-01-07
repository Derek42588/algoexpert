"use strict";
/*

monotonic-array.ts
https://www.algoexpert.io/questions/Monotonic%20Array

Complexity Analyses -

Time: O(n)
Space: O(1)
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMonotonic = void 0;
function isMonotonic(array) {
    // Write your code here.
    if (array.length <= 2) {
        debugger;
        return true;
    }
    var left = 0;
    var right = 1;
    while (array[left] === array[right]) {
        left++;
        right++;
    }
    var decreasing = array[left] < array[right];
    for (var i_1 = 0; i_1 < array.length; i_1++) {
        if (!decreasing) {
            if (array[i_1] > array[i_1 - 1]) {
                debugger;
                return false;
            }
        }
        else {
            if (array[i_1] < array[i_1 - 1]) {
                debugger;
                return false;
            }
        }
    }
    debugger;
    return true;
}
exports.isMonotonic = isMonotonic;
// isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]);
isMonotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11]);
//# sourceMappingURL=monotonic-array.js.map