"use strict";
// // find-numbers-with-even-number-of-digits.ts
// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
function findNumbers(nums) {
    return nums.reduce(function (acc, curr) {
        if (curr.toString().length % 2 === 0) {
            debugger;
            acc++;
        }
        return acc;
    }, 0);
}
;
(findNumbers([555, 901, 482, 1771]));
//# sourceMappingURL=find-numbers-with-even-number-of-digits.js.map