/*

selection-sort.ts
https://www.algoexpert.io/questions/Selection%20Sort

Complexity Analyses:

Time: O(n^2)
Space: O(1)

*/

export function selectionSort(array: number[]) {
  // Write your code here.

  let left = 0;

  while (left < array.length - 1) {
    let needsSwap = false;
    let smallestRemaining = [array[left], left];
    for (let i = left; i < array.length; i++) {
      if (array[i] < smallestRemaining[0]) {
        smallestRemaining = [array[i], i];
        needsSwap = true;
      }
    }
    debugger;
    if (needsSwap) {
      selectionSwap(array, left, smallestRemaining[1]);
    }
    left++;
  }

  function selectionSwap(array: number[], left: number, right: number) {
    let temp = array[right];
    array[right] = array[left];
    array[left] = temp;
    debugger;
  }
  debugger;
  return array;
}

selectionSort([8, 5, 2, 9, 5, 6, 3]);
