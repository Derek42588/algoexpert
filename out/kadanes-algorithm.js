"use strict";
/*

kadanes-algorithm.ts
https://www.algoexpert.io/questions/Kadane's%20Algorithm


Analyses -

Time: O(n)
Space: o(1)


*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.kadanesAlgorithm = void 0;
function kadanesAlgorithm(array) {
    var peak = -Infinity;
    var runningCount = 0;
    for (var i_1 = 0; i_1 < array.length; i_1++) {
        if (runningCount + array[i_1] < 0) {
            if (array[i_1] > peak)
                peak = array[i_1];
            runningCount = 0;
        }
        else {
            runningCount += array[i_1];
            if (runningCount > peak)
                peak = runningCount;
        }
    }
    debugger;
    return peak;
}
exports.kadanesAlgorithm = kadanesAlgorithm;
kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]);
kadanesAlgorithm([2, 3, 4, 5]);
kadanesAlgorithm([-2, 3, 4, 5]);
kadanesAlgorithm([3, -2, 4, 5]);
kadanesAlgorithm([1, 0, 0, 0, -2]);
kadanesAlgorithm([-5, -3, -2, 6]);
kadanesAlgorithm([-1000, -1000, 2, 4, -5, -6, -7, -8, -2, -100]);
kadanesAlgorithm([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]);
//# sourceMappingURL=kadanes-algorithm.js.map