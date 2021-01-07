"use strict";
/*
https://leetcode.com/problems/contains-duplicate/
*/
function containsDuplicate(nums) {
    var cache = {};
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (!cache[num]) {
            cache[num] = true;
        }
        else {
            debugger;
            return true;
        }
    }
    debugger;
    return false;
}
containsDuplicate([1, 2, 3, 1]);
//# sourceMappingURL=contains-duplicate.js.map