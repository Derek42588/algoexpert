// running-sum-of-1d-array.ts
// https://leetcode.com/problems/running-sum-of-1d-array/

function runningSum(nums: number[]): number[] {
  let returnNums: number[] = []
  
    nums.forEach((num: number, index: number) => {
      index === 0 ? returnNums.push(num) : returnNums.push(num + returnNums[index -1])
    })

    return returnNums
  };

(runningSum([1,2,3,4]))