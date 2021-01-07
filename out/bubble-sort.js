"use strict";
/*

bubble-sort.ts
https://www.algoexpert.io/questions/Bubble%20Sort

Time Complexity: O(n^2)

Space Complexity: O(1)

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
function bubbleSort(array) {
    // Write your code here.
    var pointer = array.length - 1;
    var swappedAtLeastOnce = true;
    while (pointer > 0 && swappedAtLeastOnce) {
        swappedAtLeastOnce = false;
        for (var i_1 = 0; i_1 < pointer; i_1++) {
            if (array[i_1] > array[i_1 + 1]) {
                var left = array[i_1];
                var right = array[i_1 + 1];
                swappedAtLeastOnce = true;
                array[i_1] = right;
                array[i_1 + 1] = left;
            }
        }
        pointer--;
    }
    debugger;
    return array;
}
exports.bubbleSort = bubbleSort;
bubbleSort([8, 5, 2, 9, 5, 6, 3]);
//# sourceMappingURL=bubble-sort.js.map