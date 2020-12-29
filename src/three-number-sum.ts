/*

three-number-sum.ts
https://www.algoexpert.io/questions/Three%20Number%20Sum


Complexity Analyses:

Time: O(n^2)
Space: O(n)
*/

type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  // Write your code here.
  array.sort((a, b) => a - b);

  let triplets: Triplet[] = [];
  for (let i = 0; i < array.length; i++) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      if (array[i] + array[left] + array[right] === targetSum) {
        let trip: Triplet = [array[i], array[left], array[right]];
        triplets.push(trip);
        right--;
        left++;
      } else if (array[i] + array[left] + array[right] > targetSum) {
        right--;
        debugger;
      } else {
        left++;
        debugger;
      }
    }
  }
  return triplets;
}

threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
