/*
nth_fibonacci.ts
https://www.algoexpert.io/questions/Nth%20Fibonacci

time / space calc:

Time: O(2^n), O(n) space
*/

export function getNthFib(n: number): number {
  // Write your code here.

  function getFib(num: number): number {
    if (num < 0) {
      return 0;
    } else if (num <= 1) {
      return num;
    } else {
      return getFib(num - 1) + getFib(num - 2);
    }
  }
  let x = getFib(n - 1);
  debugger;
  return x;
}

getNthFib(6);
getNthFib(2);
getNthFib(1);
