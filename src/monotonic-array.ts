/*

monotonic-array.ts
https://www.algoexpert.io/questions/Monotonic%20Array

Complexity Analyses -

Time: O(n)
Space: O(1)
*/

export function isMonotonic(array: number[]) {
  // Write your code here.

  if (array.length <= 2) {
    debugger;
    return true;
  }

  let left = 0;
  let right = 1;
  while (array[left] === array[right]) {
    left++;
    right++;
  }

  let decreasing = array[left] < array[right];
  for (let i = 0; i < array.length; i++) {
    if (!decreasing) {
      if (array[i] > array[i - 1]) {
        debugger;
        return false;
      }
    } else {
      if (array[i] < array[i - 1]) {
        debugger;
        return false;
      }
    }
  }

  debugger;
  return true;
}

// isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]);
isMonotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11]);
