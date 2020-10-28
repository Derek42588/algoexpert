// https://leetcode.com/problems/single-number/

function singleNumber(nums: number[]): number {
  return nums.reduce((prev, curr) => prev ^ curr);
}
55;
console.log(singleNumber([1, 2, 2, 1, 3]));
