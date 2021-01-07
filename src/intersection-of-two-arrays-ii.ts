/*

intersection-of-two-arrays-ii.ts
https://leetcode.com/problems/intersection-of-two-arrays-ii/

Analyeses - 

Time: 
Space:


*/

function intersect(nums1: number[], nums2: number[]): number[] {
  let longerArray: number[];
  let shorterArray: number[];

  let intersections: number[] = [];
  if (nums1.length === 0 || nums2.length === 0) return [];

  if (nums1.length > nums2.length) {
    longerArray = nums1;
    shorterArray = nums2;
  } else {
    longerArray = nums2;
    shorterArray = nums1;
  }
  let shorterArrayDict: { [key: string]: number } = {};
  let longerArrayDict: { [key: string]: number } = {};

  for (let num of shorterArray) {
    if (shorterArrayDict[num]) {
      shorterArrayDict[num]++;
    } else {
      shorterArrayDict[num] = 1;
    }
  }

  for (let num of longerArray) {
    if (shorterArrayDict[num]) {
      if (longerArrayDict[num]) {
        longerArrayDict[num]++;
      } else {
        longerArrayDict[num] = 1;
      }
    } else {
    }
  }

  if (
    Object.keys(longerArrayDict).length > Object.keys(shorterArrayDict).length
  ) {
    for (let key in longerArrayDict) {
      if (longerArrayDict[key] > shorterArrayDict[key]) {
        for (let i = 0; i < shorterArrayDict[key]; i++) {
          intersections.push(Number(key));
        }
      } else {
        for (let i = 0; i < longerArrayDict[key]; i++) {
          intersections.push(Number(key));
        }
      }
    }
  } else {
    for (let key in shorterArrayDict) {
      if (longerArrayDict[key] > shorterArrayDict[key]) {
        for (let i = 0; i < shorterArrayDict[key]; i++) {
          intersections.push(Number(key));
        }
      } else {
        for (let i = 0; i < longerArrayDict[key]; i++) {
          intersections.push(Number(key));
        }
      }
    }
  }

  debugger;
  return intersections;
}

// intersect([1, 2, 2, 1], [2, 2]);
intersect([1], [1]);
// intersect([4, 9, 5], [9, 4, 9, 8, 4, 9]);
