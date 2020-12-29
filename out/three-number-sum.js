"use strict";
/*

three-number-sum.ts
https://www.algoexpert.io/questions/Three%20Number%20Sum


Complexity Analyses:

Time: O(n^2)
Space: O(n)
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.threeNumberSum = void 0;
function threeNumberSum(array, targetSum) {
    // Write your code here.
    array.sort(function (a, b) { return a - b; });
    var triplets = [];
    for (var i_1 = 0; i_1 < array.length; i_1++) {
        var left = i_1 + 1;
        var right = array.length - 1;
        while (left < right) {
            if (array[i_1] + array[left] + array[right] === targetSum) {
                var trip = [array[i_1], array[left], array[right]];
                triplets.push(trip);
                right--;
                left++;
            }
            else if (array[i_1] + array[left] + array[right] > targetSum) {
                right--;
                debugger;
            }
            else {
                left++;
                debugger;
            }
        }
    }
    return triplets;
}
exports.threeNumberSum = threeNumberSum;
threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
//# sourceMappingURL=three-number-sum.js.map