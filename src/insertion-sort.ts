/*

insertion-sort.ts
https://www.algoexpert.io/questions/Insertion%20Sort

Time complexity: O(n^2)
Space: O(1)

*/

export function insertionSort(array: number[]) {
  // Write your code here.
  for (let i: number = 1; i < array.length; i++) {
    sortSubArray(array, i, i - 1);
  }

  function sortSubArray(array: number[], right: number, left: number) {
    while (array[right] < array[left]) {
      debugger;
      let leftSwap = array[left];
      let rightSwap = array[right];

      array[right] = leftSwap;
      array[left] = rightSwap;

      left--;
      right--;
      debugger;
    }
  }

  debugger;
  return array;
}

insertionSort([8, 5, 2, 9, 5, 6, 3]);
