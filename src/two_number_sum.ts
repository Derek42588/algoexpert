/*

two_number_sum.ts
https://www.algoexpert.io/questions/Two%20Number%20Sum

this is the one that Daniel showed me, so I have an advantage.

I know they did it with nested loops, a hash table, and with a while with two pointers, after sorting. 


*/

function twoNumberSumOne(arr: number[], targetSum: number): number[] {
  // run time O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        debugger;
        return [arr[i], arr[j]];
      }
    }
  }
  debugger;
  return [];
}

function twoNumberSumTwo(array: number[], targetSum: number): number[] {
  let cache: { [key: number]: boolean } = {};

  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in cache) {
      debugger;
      return [potentialMatch, num];
    } else {
      debugger;
      cache[num] = true;
    }
  }
  debugger;
  return [];
}

function twoNumberSumThree(arr: number[], targetSum: number): number[] {
  //run time of O(nlogn), due to the quick sort

  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[right] + arr[left] > targetSum) {
      right--;
    } else if (arr[right] + arr[left] < targetSum) {
      left++;
    } else {
      debugger;

      return [arr[right], arr[left]];
    }
  }
  debugger;
  return [];
}
twoNumberSumTwo([3, 5, -4, 8, 11, 1, -1, 6], 10);
