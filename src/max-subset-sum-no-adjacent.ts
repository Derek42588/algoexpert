/*

max-subset-sum-no-adjacent.ts
https://www.algoexpert.io/questions/Max%20Subset%20Sum%20No%20Adjacent

Analyses -

Time:
Space: 


*/

export function maxSubsetSumNoAdjacent(array: number[]): number {
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];

  let maxSums = array.slice(); //
  maxSums[1] = Math.max(array[0], array[1]);

  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
  }
  debugger;
  return maxSums[maxSums.length - 1];
}

maxSubsetSumNoAdjacent([4, 3, 5, 200, 5, 3]); // 33
maxSubsetSumNoAdjacent([1, 15, 2]); // 15
maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]); // 330
// [ 75, 105, 135, 120, 75, 90 ]
// maxSubsetSumNoAdjacent([1, 2]);
// maxSubsetSumNoAdjacent([1, 15, 2]);
// maxSubsetSumNoAdjacent([15, 2, 2]);
