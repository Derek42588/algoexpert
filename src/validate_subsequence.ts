/* 

validate_subsequence.ts
https://www.algoexpert.io/questions/Validate%20Subsequence

*/

function isValidSubsequenceOne(array: number[], sequence: number[]): boolean {
  // Write your code here.

  let pointer: number = 0;

  for (let num of array) {
    if (num === sequence[pointer]) {
      pointer += 1;
    }
  }

  return pointer === sequence.length;
}

function isValidSubsequenceTwo(array: number[], sequence: number[]): boolean {
  // Write your code here.

  for (let num of array) {
  }

  return false;
}

isValidSubsequenceTwo([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);
