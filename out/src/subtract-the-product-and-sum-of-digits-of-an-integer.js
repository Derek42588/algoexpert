"use strict";
// subtract-the-product-and-sum-of-digits-of-an-integer.ts
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
// Example 1:
// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
var returnProdAndSumOfDigits = function (num) {
    var prod = 1;
    var sum = 0;
    num.toString().split('').forEach(function (num) {
        prod = prod * Number(num);
        sum += Number(num);
    });
    return prod - sum;
};
returnProdAndSumOfDigits(234);
//# sourceMappingURL=subtract-the-product-and-sum-of-digits-of-an-integer.js.map