/*

find-lucky-integer-in-an-array.ts
https://leetcode.com/problems/find-lucky-integer-in-an-array/

I believe O(N) time, O(N) Space
*/

function findLucky(arr: number[]): number {
  let cache: { [key: string]: number } = {};
  let lucky: number[] = [];
  for (let num of arr) {
    if (!cache[num]) {
      cache[num] = 1;
    } else {
      cache[num]++;
    }
  }

  for (let [key, value] of Object.entries(cache)) {
    if (Number(key) === value) {
      lucky.push(value);
    }
  }

  if (lucky.length === 0) {
    return -1;
  }

  return Math.max(...lucky);
}

findLucky([7, 7, 7, 7, 7, 7, 7]);
