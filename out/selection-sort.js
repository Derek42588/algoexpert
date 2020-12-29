"use strict";
/*

selection-sort.ts
https://www.algoexpert.io/questions/Selection%20Sort

Complexity Analyses:

Time: O(n^2)
Space: O(1)

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionSort = void 0;
function selectionSort(array) {
    // Write your code here.
    var left = 0;
    while (left < array.length - 1) {
        var needsSwap = false;
        var smallestRemaining = [array[left], left];
        for (var i_1 = left; i_1 < array.length; i_1++) {
            if (array[i_1] < smallestRemaining[0]) {
                smallestRemaining = [array[i_1], i_1];
                needsSwap = true;
            }
        }
        debugger;
        if (needsSwap) {
            selectionSwap(array, left, smallestRemaining[1]);
        }
        left++;
    }
    function selectionSwap(array, left, right) {
        var temp = array[right];
        array[right] = array[left];
        array[left] = temp;
        debugger;
    }
    debugger;
    return array;
}
exports.selectionSort = selectionSort;
selectionSort([8, 5, 2, 9, 5, 6, 3]);
//# sourceMappingURL=selection-sort.js.map