// number-of-steps-to-reduce-a-number-to-zero.ts

// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

function numberOfSteps(num:number): number {
  let steps: number = 0

  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2
      steps++
    } else {
      num--
      steps++
    }
    debugger;
  }
  return steps
}

numberOfSteps(8)