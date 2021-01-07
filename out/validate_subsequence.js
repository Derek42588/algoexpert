"use strict";
/*

validate_subsequence.ts
https://www.algoexpert.io/questions/Validate%20Subsequence

*/
function isValidSubsequenceOne(array, sequence) {
    // Write your code here.
    var pointer = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var num = array_1[_i];
        if (num === sequence[pointer]) {
            pointer += 1;
        }
    }
    return pointer === sequence.length;
}
function isValidSubsequenceTwo(array, sequence) {
    // Write your code here.
    for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
        var num = array_2[_i];
    }
    return false;
}
isValidSubsequenceTwo([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);
//# sourceMappingURL=validate_subsequence.js.map