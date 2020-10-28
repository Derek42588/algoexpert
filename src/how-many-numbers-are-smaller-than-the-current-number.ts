// how-many-numbers-are-smaller-than-the-current-number.ts

// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

// const smallerNumbersThanCurrent = (nums: number[]): number[] => {
  // let smallerNums: number[] = []
  // for (let i = 0; i < nums.length; i++){
  //   let count: number = 0
  //   for (let j = 0; j < nums.length; j++) {
  //     if (nums[i] > nums[j]){
  //       count++
  //     }
  //   }
  //   smallerNums.push(count)
  // }
  // debugger;
  // return smallerNums
// }


const smallerNumbersThanCurrent = (nums: number[]): number[] => {
  return nums.reduce((acc: number[], current: number, idx: number, arr: number[]): number[] => {
    let y = arr.filter((val, idx, array) => {
      let butts = array[idx]
      debugger;

      return array[idx] < val}
      )
    acc.push(y.length)
    debugger;

    return acc
  }, [])
}
smallerNumbersThanCurrent([6,5,4,8])