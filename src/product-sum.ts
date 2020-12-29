/*

product-sum.ts
https://www.algoexpert.io/questions/Product%20Sum

guess at the complexity for this first solution:

O(d) space where d is the depth of the special array?  
O(n * d) time?

probably not a good solution.

*/

// type SpecialArray = Array<number | SpecialArray>;

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.

// function factorial(num: number): number {
//   let facto: number = 1;
//   for (let i = 1; i <= num; i++) {
//     facto = facto * i;
//   }
//   debugger;
//   return facto;
// }
// export function productSum(array: any) {
//   // Write your code here.

//   let sum: number = 0;
//   let innerArrays = [];
//   for (let item of array) {
//     if (Array.isArray(item)) {
//       innerArrays.push([2, ...item]);
//     } else {
//       sum += item;
//       // debugger;
//     }
//   }

//   while (innerArrays.length > 0) {
//     let innerArray = innerArrays.shift();
//     let multiplier: number = innerArray?.shift();

//     if (innerArray && innerArray.length > 0)
//       for (let item of innerArray) {
//         if (Array.isArray(item)) {
//           innerArrays.push([multiplier + 1, ...item]);
//           // debugger;
//         } else {
//           sum += factorial(multiplier) * item;
//         }
//       }
//   }
//   return sum;
// }

// productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]);
// productSum([[[[[5]]]]]);

/*

Recursive solution attempt:

time and space complexity guess:

factorial caclulation should be o(n) time? 
recursive call should be where d is maximum depth,
time is O(d^n)
and space is O(d) 

since fibonacci is a recursive solution where every call can call a max of 2 recursive calls, and its time
complexity is O(2^n).

Ours is a solution where every call can call a maximum of D recursive calls, so its time complexity is O(d^n)

*/

function factorial(num: number): number {
  let facto: number = 1;
  for (let i = 1; i <= num; i++) {
    facto = facto * i;
  }
  return facto;
}
// export function productSumRecursive(array: any): number {
//   let sum: number = 0;
//   reduceInnerArrays(0, array);
//   function reduceInnerArrays(multiplier: number, item: number | number[]) {
//     if (!Array.isArray(item)) {
//       sum += factorial(multiplier) * item;
//     } else {
//       for (let i of item) {
//         reduceInnerArrays(multiplier + 1, i);
//       }
//       // reduceInnerArray(multiplier + 1, item);
//     }
//   }
//   debugger;
//   return sum;
// }

/*
 his solution doesnt call recursively until we get to an array which is probably better

 I wrote it without doing two calls again, because maybe I'm misunderstanding.  No reason to do the initial
 iteration if its included in the recursive calls.
 This solution solves the problem of needing a factorial though.  Did not consider "inner sum"

 time complexity is O(N) which is not the original elements of the original array, but all of the elements inside
 each nested sub array: eg 9 total elements, 3 nested sub arrays, N = 12 not 9

 space complexity is O(D)

*/
export function productSumRecursive(
  array: any,
  multiplier: number = 1
): number {
  let sum: number = 0;

  for (let item of array) {
    if (Array.isArray(item)) {
      sum += productSumRecursive(item, multiplier + 1);
    } else {
      sum += item;
    }
  }
  debugger;
  return sum * multiplier;
}
productSumRecursive([5, 2, [7, -1], 3, [6, [-13, 8], 4]]);
productSumRecursive([[[[[5]]]]]);
