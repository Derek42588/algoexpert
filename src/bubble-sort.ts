/*

bubble-sort.ts
https://www.algoexpert.io/questions/Bubble%20Sort

Time Complexity: O(n^2)

Space Complexity: O(1)

*/

export function bubbleSort(array: number[]) {
  // Write your code here.

  let pointer = array.length - 1;
  let swappedAtLeastOnce = true;

  while (pointer > 0 && swappedAtLeastOnce) {
    swappedAtLeastOnce = false;

    for (let i = 0; i < pointer; i++) {
      if (array[i] > array[i + 1]) {
        let left = array[i];
        let right = array[i + 1];
        swappedAtLeastOnce = true;
        array[i] = right;
        array[i + 1] = left;
      }
    }
    pointer--;
  }

  debugger;
  return array;
}

bubbleSort([8, 5, 2, 9, 5, 6, 3]);
