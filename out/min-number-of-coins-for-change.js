"use strict";
/*

min-number-of-coins-for-change.ts
https://www.algoexpert.io/questions/Min%20Number%20Of%20Coins%20For%20Change

Analyses -

Time: O(nd)
Space: O(n)


*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.minNumberOfCoinsForChange = void 0;
function minNumberOfCoinsForChange(n, denoms) {
    var ways = Array(n + 1).fill(Infinity);
    // denoms = denoms.sort((a, b) => a - b);
    ways[0] = 0;
    for (var i_1 = 0; i_1 < denoms.length; i_1++) {
        for (var j_1 = 0; j_1 < ways.length; j_1++) {
            if (denoms[i_1] <= j_1) {
                ways[j_1] = Math.min(ways[j_1], ways[j_1 - denoms[i_1]] + 1);
            }
        }
        debugger;
    }
    return ways[n] !== Infinity ? ways[n] : -1;
}
exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;
// minNumberOfCoinsForChange(24, [1, 5, 10]); // should return 3
minNumberOfCoinsForChange(3, [2, 1]);
//# sourceMappingURL=min-number-of-coins-for-change.js.map