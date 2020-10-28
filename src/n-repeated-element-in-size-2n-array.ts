/*
n-repeated-element-in-size-2n-array.ts

https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

  In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.

*/

function repeatedNTimes(A: number[]): number {

  for (let num of A) {
    if ((A.filter(n => n === num).length) * 2 === A.length) {
      return num
    }
  }
  return -1

};

repeatedNTimes([2,1,2,5,3,2])