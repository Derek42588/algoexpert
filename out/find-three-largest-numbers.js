"use strict";
/*

find-three-largest-numbers.ts
https://www.algoexpert.io/questions/Find%20Three%20Largest%20Numbers

Time Complexity: O(N) where N is the size of the array
Space Complexity: O(1)
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.findThreeLargestNumbers = void 0;
function findThreeLargestNumbers(array) {
    // Write your code here.
    var threeLargest = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var num = array_1[_i];
        if (threeLargest.length < 3) {
            threeLargest.push(num);
            threeLargest.sort(function (a, b) { return a - b; });
        }
        else {
            debugger;
            if (num > threeLargest[2]) {
                threeLargest[0] = threeLargest[1];
                threeLargest[1] = threeLargest[2];
                threeLargest[2] = num;
            }
            else if (num > threeLargest[1]) {
                threeLargest[0] = threeLargest[1];
                threeLargest[1] = num;
            }
            else if (num > threeLargest[0]) {
                threeLargest[0] = num;
            }
        }
    }
    debugger;
    return threeLargest;
}
exports.findThreeLargestNumbers = findThreeLargestNumbers;
findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]);
//# sourceMappingURL=find-three-largest-numbers.js.map