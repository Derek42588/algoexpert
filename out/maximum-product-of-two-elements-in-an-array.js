"use strict";
/*
maximum-product-of-two-elements-in-an-array.ts
https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

 

Example 1:

Input: nums = [3,4,5,2]
Output: 12
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.

Example 2:

Input: nums = [1,5,4,5]
Output: 16
Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

Example 3:

Input: nums = [3,7]
Output: 12

Hint : Use brute force: two loops to select i and j, then select the maximum value of (nums[i]-1)*(nums[j]-1).
*/
function maxProduct(nums) {
    var highestNum = Math.max.apply(Math, nums);
    nums.splice(nums.indexOf(highestNum), 1);
    var secondHighest = Math.max.apply(Math, nums);
    return (highestNum - 1) * (secondHighest - 1);
}
;
maxProduct([3, 7]);
//# sourceMappingURL=maximum-product-of-two-elements-in-an-array.js.map