/*

number-of-ways-to-make-change.ts
https://www.algoexpert.io/questions/Number%20Of%20Ways%20To%20Make%20Change

Analyses -

Time: O(nd) where D is the number of elements in the denoms array
Space: o(n)

*/

export function numberOfWaysToMakeChange(n: number, denoms: number[]): number {
  if (n === 0) return 1;

  let ways = Array(n + 1).fill(0);
  ways[0] = 1;

  for (let i = 0; i <= denoms.length; i++) {
    for (let j = 0; j < ways.length; j++) {
      if (denoms[i] <= j) {
        ways[j] += ways[j - denoms[i]];
      }
    }
  }
  debugger;
  return ways[n];
}

numberOfWaysToMakeChange(6, [10, 5, 1]); // shhould output 2, 6x1 and 5x1 + 1x1
numberOfWaysToMakeChange(6, [5]); // should return 0? I believe?
