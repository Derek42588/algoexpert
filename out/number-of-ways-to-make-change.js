"use strict";
/*

number-of-ways-to-make-change.ts
https://www.algoexpert.io/questions/Number%20Of%20Ways%20To%20Make%20Change

Analyses -

Time: O(nd) where D is the number of elements in the denoms array
Space: o(n)

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberOfWaysToMakeChange = void 0;
function numberOfWaysToMakeChange(n, denoms) {
    if (n === 0)
        return 1;
    var ways = Array(n + 1).fill(0);
    ways[0] = 1;
    for (var i_1 = 0; i_1 <= denoms.length; i_1++) {
        for (var j_1 = 0; j_1 < ways.length; j_1++) {
            if (denoms[i_1] <= j_1) {
                ways[j_1] += ways[j_1 - denoms[i_1]];
            }
        }
    }
    debugger;
    return ways[n];
}
exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;
numberOfWaysToMakeChange(6, [10, 5, 1]); // shhould output 2, 6x1 and 5x1 + 1x1
numberOfWaysToMakeChange(6, [5]); // should return 0? I believe?
//# sourceMappingURL=number-of-ways-to-make-change.js.map