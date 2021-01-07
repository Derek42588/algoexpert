"use strict";
/*

move-element-to-end.ts
https://www.algoexpert.io/questions/Move%20Element%20To%20End

Complexity Analyses -

Time: O(N)
Space: O(1)

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveElementToEnd = void 0;
function moveElementToEnd(array, toMove) {
    // Write your code here.
    var left = 0;
    var right = array.length - 1;
    while (left < right) {
        while (left < right && array[right] === toMove)
            right--;
        if (array[left] === toMove)
            swap(left, right, array);
        left++;
    }
    debugger;
    return array;
}
exports.moveElementToEnd = moveElementToEnd;
function swap(i, j, array) {
    var temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}
moveElementToEnd([3, 1, 2, 4, 5], 2);
//# sourceMappingURL=move-element-to-end.js.map