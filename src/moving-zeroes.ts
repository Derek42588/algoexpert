/*

moving-zeroes.ts
https://leetcode.com/problems/move-zeroes/

Given an array nums, write a 
function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Input: [0,0,1,0,3,12]

Output: [1,3,12,0,0,0]

considerations:

    You must do this in-place without making a copy of the array.
    Minimize the total number of operations.


Complexity Analyses:

Time: O(n)
Space: O(1)
*/

// function moveZeroes(nums: number[]): void {
//   for (let i = 0; i < nums.length; i++) {
//     nums.sp
//     if (nums[i] === 0) {
//       let nextNonZeroIndex = nextNonZero(nums, i + 1);
//       if (nextNonZeroIndex < 0) {
//         debugger;
//         break;
//       } else {
//         swap(nums, i, nextNonZeroIndex);
//       }
//     }
//   }
//   debugger;
// }

function moveZeroes(nums: number[]): void {
  for (let j = nums.length; j >= 0; j--) {
    if (nums[j] === 0) {
      debugger;
      nums.splice(j, 1);
      nums.push(0);
      debugger;
    }
  }
}

function nextNonZero(nums: number[], index: number): number {
  for (let i = index; i < nums.length; i++) {
    if (nums[i] !== 0) return i;
  }
  return -1;
}

function swap(nums: number[], left: number, right: number) {
  // debugger;
  let temp = nums[right];
  nums[right] = nums[left];
  nums[left] = temp;
  // debugger;
}
moveZeroes([0, 1, 0, 3, 12]);
// moveZeroes([]);
// moveZeroes([0, 0, 0, 0, 0, 0, 0]);
moveZeroes([1, 2, 3, 4, 5]);
moveZeroes([1, 2, 3, 4, 5, 0, 0, 0, 0, 0]);
