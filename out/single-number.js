"use strict";
// https://leetcode.com/problems/single-number/
function singleNumber(nums) {
    return nums.reduce(function (prev, curr) { return prev ^ curr; });
}
55;
console.log(singleNumber([1, 2, 2, 1, 3]));
//# sourceMappingURL=single-number.js.map