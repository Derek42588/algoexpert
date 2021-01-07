/*

majority-element.ts
https://leetcode.com/problems/majority-element/

Time Complexity: O(n)
Space Complexity: O(1)
*/

function majorityElement(nums: number[]): number {
  let cache: { [key: number]: number } = {};

  for (let num of nums) {
    if (!cache[num]) {
      cache[num] = 1;
    } else {
      cache[num] += 1;
    }
    if (cache[num] >= nums.length / 2) {
      debugger;
      return num;
    }
  }
  return 1;
}

majorityElement([3, 2, 3]);
