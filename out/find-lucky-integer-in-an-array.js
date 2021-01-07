"use strict";
/*

find-lucky-integer-in-an-array.ts
https://leetcode.com/problems/find-lucky-integer-in-an-array/

I believe O(N) time, O(N) Space
*/
function findLucky(arr) {
    var cache = {};
    var lucky = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (!cache[num]) {
            cache[num] = 1;
        }
        else {
            cache[num]++;
        }
    }
    for (var _a = 0, _b = Object.entries(cache); _a < _b.length; _a++) {
        var _c = _b[_a], key = _c[0], value = _c[1];
        if (Number(key) === value) {
            lucky.push(value);
        }
    }
    if (lucky.length === 0) {
        return -1;
    }
    return Math.max.apply(Math, lucky);
}
findLucky([7, 7, 7, 7, 7, 7, 7]);
//# sourceMappingURL=find-lucky-integer-in-an-array.js.map