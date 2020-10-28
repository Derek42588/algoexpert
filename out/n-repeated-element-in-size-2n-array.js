"use strict";
/*
n-repeated-element-in-size-2n-array.ts

https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

  In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.

*/
function repeatedNTimes(A) {
    var _loop_1 = function (num) {
        if ((A.filter(function (n) { return n === num; }).length) * 2 === A.length) {
            return { value: num };
        }
    };
    for (var _i = 0, A_1 = A; _i < A_1.length; _i++) {
        var num = A_1[_i];
        var state_1 = _loop_1(num);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return -1;
}
;
repeatedNTimes([2, 1, 2, 5, 3, 2]);
//# sourceMappingURL=n-repeated-element-in-size-2n-array.js.map