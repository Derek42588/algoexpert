/*

min-number-of-coins-for-change.ts
https://www.algoexpert.io/questions/Min%20Number%20Of%20Coins%20For%20Change

Analyses -

Time: O(nd)
Space: O(n)


*/

export function minNumberOfCoinsForChange(n: number, denoms: number[]): number {
  let ways: number[] = Array(n + 1).fill(Infinity);

  // denoms = denoms.sort((a, b) => a - b);
  ways[0] = 0;

  for (let i = 0; i < denoms.length; i++) {
    for (let j = 0; j < ways.length; j++) {
      if (denoms[i] <= j) {
        ways[j] = Math.min(ways[j], ways[j - denoms[i]] + 1);
      }
    }
    debugger;
  }
  return ways[n] !== Infinity ? ways[n] : -1;
}

// minNumberOfCoinsForChange(24, [1, 5, 10]); // should return 3
minNumberOfCoinsForChange(3, [2, 1]);
