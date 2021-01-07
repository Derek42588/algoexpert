"use strict";
/*

majority-element.ts
https://leetcode.com/problems/majority-element/

Time Complexity: O(n)
Space Complexity: O(1)
*/
function majorityElement(nums) {
    var cache = {};
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (!cache[num]) {
            cache[num] = 1;
        }
        else {
            cache[num] += 1;
        }
        if (cache[num] >= nums.length / 2) {
            debugger;
            return num;
        }
    }
    return 1;
}
majorityElement([3, 2, 3]);
//# sourceMappingURL=majority-element.js.map