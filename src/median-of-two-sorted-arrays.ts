/*

https://leetcode.com/problems/median-of-two-sorted-arrays/

*/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

  let sortedBoth:number[] = []
  sortedBoth.push(...nums1)
  sortedBoth.push(...nums2)

  sortedBoth.sort(function(a, b) {return (a-b)})

  if (sortedBoth.length % 2 === 0) {
    let middle = sortedBoth.length / 2
    let answer = ((sortedBoth[middle] + sortedBoth[middle-1] ) / 2 )
    debugger;

    return answer
  } else {
    let middle = (sortedBoth.length) / 2 - .5
    let answer = sortedBoth[middle]
    debugger;
    return answer
  }
  };

findMedianSortedArrays([3], [-2, -1])