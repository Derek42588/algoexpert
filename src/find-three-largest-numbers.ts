/*

find-three-largest-numbers.ts
https://www.algoexpert.io/questions/Find%20Three%20Largest%20Numbers

Time Complexity: O(N) where N is the size of the array
Space Complexity: O(1)
*/

export function findThreeLargestNumbers(array: number[]): number[] {
  // Write your code here.

  let threeLargest: number[] = [];

  for (let num of array) {
    if (threeLargest.length < 3) {
      threeLargest.push(num);
      threeLargest.sort((a, b) => a - b);
    } else {
      debugger;
      if (num > threeLargest[2]) {
        threeLargest[0] = threeLargest[1];
        threeLargest[1] = threeLargest[2];
        threeLargest[2] = num;
      } else if (num > threeLargest[1]) {
        threeLargest[0] = threeLargest[1];
        threeLargest[1] = num;
      } else if (num > threeLargest[0]) {
        threeLargest[0] = num;
      }
    }
  }
  debugger;
  return threeLargest;
}

findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]);
