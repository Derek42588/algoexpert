"use strict";
// running-sum-of-1d-array.ts
// https://leetcode.com/problems/running-sum-of-1d-array/
function runningSum(nums) {
    var returnNums = [];
    nums.forEach(function (num, index) {
        index === 0 ? returnNums.push(num) : returnNums.push(num + returnNums[index - 1]);
    });
    return returnNums;
}
;
(runningSum([1, 2, 3, 4]));
//# sourceMappingURL=running-sum-of-1d-array.js.map