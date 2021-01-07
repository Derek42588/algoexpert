"use strict";
/*

insertion-sort.ts
https://www.algoexpert.io/questions/Insertion%20Sort

Time complexity: O(n^2)
Space: O(1)

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertionSort = void 0;
function insertionSort(array) {
    // Write your code here.
    for (var i_1 = 1; i_1 < array.length; i_1++) {
        sortSubArray(array, i_1, i_1 - 1);
    }
    function sortSubArray(array, right, left) {
        while (array[right] < array[left]) {
            debugger;
            var leftSwap = array[left];
            var rightSwap = array[right];
            array[right] = leftSwap;
            array[left] = rightSwap;
            left--;
            right--;
            debugger;
        }
    }
    debugger;
    return array;
}
exports.insertionSort = insertionSort;
insertionSort([8, 5, 2, 9, 5, 6, 3]);
//# sourceMappingURL=insertion-sort.js.map