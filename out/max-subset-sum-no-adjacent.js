"use strict";
/*

max-subset-sum-no-adjacent.ts
https://www.algoexpert.io/questions/Max%20Subset%20Sum%20No%20Adjacent

Analyses -

Time:
Space:


*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxSubsetSumNoAdjacent = void 0;
function maxSubsetSumNoAdjacent(array) {
    if (array.length === 0)
        return 0;
    if (array.length === 1)
        return array[0];
    var maxSums = array.slice(); //
    maxSums[1] = Math.max(array[0], array[1]);
    for (var i_1 = 2; i_1 < array.length; i_1++) {
        maxSums[i_1] = Math.max(maxSums[i_1 - 1], maxSums[i_1 - 2] + array[i_1]);
    }
    debugger;
    return maxSums[maxSums.length - 1];
}
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
maxSubsetSumNoAdjacent([4, 3, 5, 200, 5, 3]); // 33
maxSubsetSumNoAdjacent([1, 15, 2]); // 15
maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]); // 330
// [ 75, 105, 135, 120, 75, 90 ]
// maxSubsetSumNoAdjacent([1, 2]);
// maxSubsetSumNoAdjacent([1, 15, 2]);
// maxSubsetSumNoAdjacent([15, 2, 2]);
//# sourceMappingURL=max-subset-sum-no-adjacent.js.map