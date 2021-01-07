"use strict";
/*

missing-number
https://leetcode.com/problems/missing-number/

*/
function missingNumber(nums) {
    nums.sort(function (a, b) { return a - b; });
    var counter = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== counter)
            return counter;
        counter++;
    }
    return -1;
}
missingNumber([3, 0, 1]);
//# sourceMappingURL=missing-number.js.map