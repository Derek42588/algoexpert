/*

missing-number
https://leetcode.com/problems/missing-number/

*/

function missingNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== counter) return counter;
    counter++;
  }

  return -1;
}

missingNumber([3, 0, 1]);
