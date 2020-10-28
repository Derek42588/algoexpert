"use strict";
/*
sum-of-all-odd-length-subarrays.ts
https://leetcode.com/problems/sum-of-all-odd-length-subarrays/


Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd-length subarrays of arr.

 

Example 1:

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

Example 2:

Input: arr = [1,2]
Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.

Example 3:

Input: arr = [10,11,12]
Output: 66

*/
function subSub(subArr) {
    var subTotal = 0;
    for (var _i = 0, subArr_1 = subArr; _i < subArr_1.length; _i++) {
        var num = subArr_1[_i];
        subTotal += num;
    }
    return subTotal;
}
function sumOddLengthSubarrays(arr) {
    var biggestSub;
    arr.length % 2 === 0 ? biggestSub = arr.length - 1 : biggestSub = arr.length;
    var totalSum = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = biggestSub; j >= 0; j -= 2) {
            //5
            if (i + j <= arr.length) {
                totalSum += subSub(arr.slice(i, i + j));
            }
        }
    }
    return totalSum;
}
;
sumOddLengthSubarrays([10, 11, 12]);
//# sourceMappingURL=sum-of-all-odd-length-subarrays.js.map