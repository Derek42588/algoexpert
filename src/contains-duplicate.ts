/*
https://leetcode.com/problems/contains-duplicate/
*/

function containsDuplicate(nums: number[]): boolean {
  let cache: { [key: number]: boolean } = {};

  for (let num of nums) {
    if (!cache[num]) {
      cache[num] = true;
    } else {
      debugger;
      return true;
    }
  }
  debugger;
  return false;
}

containsDuplicate([1, 2, 3, 1]);
