"use strict";
/*

single-cycle-check.ts
https://www.algoexpert.io/questions/Single%20Cycle%20Check

Analyses:

Time: O(n)
Space: O(n) -- can I improve on this? what do I need to keep track of?

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasSingleCycle = void 0;
function hasSingleCycle(array) {
    var numVisits = 0;
    var idx = 0;
    while (numVisits < array.length) {
        if (numVisits > 0 && idx === 0)
            return false;
        numVisits++;
        idx = wrapIndices(array.length, idx, array[idx]);
    }
    debugger;
    return idx === 0;
}
exports.hasSingleCycle = hasSingleCycle;
function wrapIndices(arrLength, idx, jump) {
    var newIdx = (idx + jump) % arrLength;
    return newIdx >= 0 ? newIdx : newIdx + arrLength;
}
hasSingleCycle([2, 3, 1, -4, -4, 2]);
// if (i + array[i] >= array.length || i + array[i] < 0) {
//   allVisitedOnce[wrapIndices(array.length, i, array[i])] = !allVisitedOnce[
//     wrapIndices(array.length, i, array[i])
//   ];
//   numVisits++;
//   if (!allVisitedOnce[wrapIndices(array.length, i, array[i])]) return false;
// } else {
//   allVisitedOnce[i + array[i]] = !allVisitedOnce[i + array[i]];
//   numVisits++;
//   if (!allVisitedOnce[i + array[i]]) return false;
// }
//# sourceMappingURL=single-cycle-check.js.map