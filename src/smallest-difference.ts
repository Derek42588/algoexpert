/*

smallest-difference.ts
https://www.algoexpert.io/questions/Smallest%20Difference

Complexity Analyses

Time: O(n^2)

//

This solution is O(n^2), but optimal is O(nlogn + mlogm), where n is length of array 1 and m is lenght of array 2
Space: O(1)

*/

// export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
//   // Write your code here.
//   arrayOne.sort((a, b) => a - b);
//   arrayTwo.sort((a, b) => a - b);
//   let smallestDiff = [arrayOne[0], arrayTwo[0]];

//   for (let i = 0; i < arrayOne.length; i++) {
//     let initialSignum: number = 1;

//     for (let j = 0; j < arrayTwo.length; j++) {
//       let potentialCombo = arrayTwo[j] - arrayOne[i];
//       if (
//         Math.abs(potentialCombo) < Math.abs(smallestDiff[1] - smallestDiff[0])
//       ) {
//         debugger;
//         smallestDiff = [arrayOne[i], arrayTwo[j]];
//       }

//       if (j === 0) {
//         initialSignum = arrayTwo[j] - arrayOne[i];
//       } else {
//         if (initialSignum * potentialCombo < 0) {
//           break;
//         }
//       }
//     }
//   }

//   debugger;
//   return smallestDiff;
// }

export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let idxOne = 0;
  let idxTwo = 0;
  let smallest = Infinity;
  let current = Infinity;

  let smallestPair: number[] = [];

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];

    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      idxOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      idxTwo++;
    } else {
      return [firstNum, secondNum];
    }

    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }

  debugger;
  return smallestPair;
}

smallestDifference([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17]);
