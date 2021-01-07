/*

move-element-to-end.ts
https://www.algoexpert.io/questions/Move%20Element%20To%20End

Complexity Analyses - 

Time: O(N)
Space: O(1)

*/

export function moveElementToEnd(array: number[], toMove: number) {
  // Write your code here.

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    while (left < right && array[right] === toMove) right--;
    if (array[left] === toMove) swap(left, right, array);
    left++;
  }

  debugger;
  return array;
}
function swap(i: number, j: number, array: number[]) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

moveElementToEnd([3, 1, 2, 4, 5], 2);
