/*

array-of-products.ts
https://www.algoexpert.io/questions/Array%20Of%20Products

Complexity analyses:

Time: O(n^2)
Space: O(N)

*/

// export function arrayOfProducts(arr: number[]): number[] {
//   let returnArray: number[] = [];

//   for (let i = 0; i < arr.length; i++) {
//     let product = 1;
//     for (let j = 0; j < arr.length; j++) {
//       if (j !== i) {
//         product *= arr[j];
//       }
//     }
//     returnArray.push(product);
//   }
//   debugger;
//   return returnArray;
// }

//tried above with a nested for loop just to get it done.
// I believe there must be a better time complexity solution, otherwise this problem isn't difficult at all
// nor is it interesting

export function arrayOfProducts(arr: number[]): number[] {
  let products: number[] = new Array(arr.length).fill(1);
  let leftProducts: number[] = new Array(arr.length).fill(1);
  let rightProducts: number[] = new Array(arr.length).fill(1);

  let leftRunningProduct = 1;
  for (let i = 0; i < arr.length; i++) {
    leftProducts[i] = leftRunningProduct;
    leftRunningProduct *= arr[i];
    debugger;
  }

  let rightRunningProduct = 1;

  for (let j = arr.length - 1; j >= 0; j--) {
    rightProducts[j] = rightRunningProduct;
    rightRunningProduct *= arr[j];
    debugger;
  }

  for (let i = 0; i < arr.length; i++) {
    products[i] = leftProducts[i] * rightProducts[i];
    debugger;
  }

  return products;
}

arrayOfProducts([5, 1, 4, 2]);
