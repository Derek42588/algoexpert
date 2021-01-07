"use strict";
/*

two_number_sum.ts
https://www.algoexpert.io/questions/Two%20Number%20Sum

this is the one that Daniel showed me, so I have an advantage.

I know they did it with nested loops, a hash table, and with a while with two pointers, after sorting.


*/
function twoNumberSumOne(arr, targetSum) {
    // run time O(n^2)
    for (var i_1 = 0; i_1 < arr.length; i_1++) {
        for (var j_1 = i_1 + 1; j_1 < arr.length; j_1++) {
            if (arr[i_1] + arr[j_1] === targetSum) {
                debugger;
                return [arr[i_1], arr[j_1]];
            }
        }
    }
    debugger;
    return [];
}
function twoNumberSumTwo(array, targetSum) {
    var cache = {};
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var num = array_1[_i];
        var potentialMatch = targetSum - num;
        if (potentialMatch in cache) {
            debugger;
            return [potentialMatch, num];
        }
        else {
            debugger;
            cache[num] = true;
        }
    }
    debugger;
    return [];
}
function twoNumberSumThree(arr, targetSum) {
    //run time of O(nlogn), due to the quick sort
    arr.sort(function (a, b) { return a - b; });
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        if (arr[right] + arr[left] > targetSum) {
            right--;
        }
        else if (arr[right] + arr[left] < targetSum) {
            left++;
        }
        else {
            debugger;
            return [arr[right], arr[left]];
        }
    }
    debugger;
    return [];
}
twoNumberSumTwo([3, 5, -4, 8, 11, 1, -1, 6], 10);
//# sourceMappingURL=two_number_sum.js.map