// // find-numbers-with-even-number-of-digits.ts
// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

function findNumbers(nums: number[]): number {
  return nums.reduce((acc: number, curr: number): number => {
    if (curr.toString().length % 2 === 0){
      debugger;
      acc++
    }
    return acc
  }, 0)

};

(findNumbers( [555,901,482,1771]));