"use strict";
// jewels-and-stones.ts
// https://leetcode.com/problems/jewels-and-stones/
function numJewelsInStones(J, S) {
    var numJewels = 0;
    for (var _i = 0, J_1 = J; _i < J_1.length; _i++) {
        var char = J_1[_i];
        for (var _a = 0, S_1 = S; _a < S_1.length; _a++) {
            var c_1 = S_1[_a];
            if (c_1 === char) {
                numJewels++;
            }
        }
        debugger;
    }
    return numJewels;
}
;
numJewelsInStones('aA', 'aAAbbbbb');
//# sourceMappingURL=jewels-and-stones.js.map