/*

kadanes-algorithm.ts
https://www.algoexpert.io/questions/Kadane's%20Algorithm


Analyses -

Time: O(n)
Space: o(1)


*/

export function kadanesAlgorithm(array: number[]) {
  let peak: number = -Infinity;

  let runningCount: number = 0;
  for (let i = 0; i < array.length; i++) {
    if (runningCount + array[i] < 0) {
      if (array[i] > peak) peak = array[i];
      runningCount = 0;
    } else {
      runningCount += array[i];
      if (runningCount > peak) peak = runningCount;
    }
  }

  debugger;
  return peak;
}

kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]);
kadanesAlgorithm([2, 3, 4, 5]);
kadanesAlgorithm([-2, 3, 4, 5]);
kadanesAlgorithm([3, -2, 4, 5]);
kadanesAlgorithm([1, 0, 0, 0, -2]);
kadanesAlgorithm([-5, -3, -2, 6]);
kadanesAlgorithm([-1000, -1000, 2, 4, -5, -6, -7, -8, -2, -100]);

kadanesAlgorithm([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]);
