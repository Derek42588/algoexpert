/*

first-factorial.ts

*/

function firstFactorialRecursive(n: number): number {
  let nums = getRecursiveFacto(n);
  function getRecursiveFacto(num: number): number {
    if (num === 1) {
      return 1;
    } else {
      return num * getRecursiveFacto(num - 1);
    }
  }
  return nums;
}

function firstFactorialIterative(n: number): number {
  let returnNum: number = 1;

  for (let i = 1; i <= n; i++) {
    returnNum *= i;
  }
  return returnNum;
}

console.log(firstFactorialIterative(4));
