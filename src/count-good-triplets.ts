// count-good-triplets.ts
// https://leetcode.com/problems/count-good-triplets/

//hints even recommend brute force and loops

// first problems with my solution -> looping, but I dont account for all possible combinations.  I go through one iteration,

//pretty much all solutions are similar to mine.  One thing I didnt consider is exiting the loop early if the condition doesnt match,
// i.e, i nthe J loop, does the first condition not meatch?  then return.  Otherwise condinue to the K loop

function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
  let goodTrips = 0


  arr.forEach((num, index) => {
    if (index < arr.length - 2) {
      let otherNums = arr.slice(index + 1)
      for (let j = 0; j < otherNums.length; j++){
        let num2 = otherNums[j]
        for (let k = j + 1; k < otherNums.length; k++) {
          let num3 = otherNums[k]
          if (
            Math.abs(num - otherNums[j]) <= a
            &&
            Math.abs(otherNums[j] - otherNums[k]) <= b
            &&
            Math.abs(num - otherNums[k]) <= c
          ){
            debugger;
            goodTrips++
          }
        }
      }
    }
  })
  return goodTrips
};

