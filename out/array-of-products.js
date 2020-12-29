"use strict";
/*

array-of-products.ts
https://www.algoexpert.io/questions/Array%20Of%20Products

Complexity analyses:

Time: O(n^2)
Space: O(N)

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayOfProducts = void 0;
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
function arrayOfProducts(arr) {
    var products = new Array(arr.length).fill(1);
    var leftProducts = new Array(arr.length).fill(1);
    var rightProducts = new Array(arr.length).fill(1);
    var leftRunningProduct = 1;
    for (var i_1 = 0; i_1 < arr.length; i_1++) {
        leftProducts[i_1] = leftRunningProduct;
        leftRunningProduct *= arr[i_1];
        debugger;
    }
    var rightRunningProduct = 1;
    for (var j_1 = arr.length - 1; j_1 >= 0; j_1--) {
        rightProducts[j_1] = rightRunningProduct;
        rightRunningProduct *= arr[j_1];
        debugger;
    }
    for (var i_2 = 0; i_2 < arr.length; i_2++) {
        products[i_2] = leftProducts[i_2] * rightProducts[i_2];
        debugger;
    }
    return products;
}
exports.arrayOfProducts = arrayOfProducts;
arrayOfProducts([5, 1, 4, 2]);
//# sourceMappingURL=array-of-products.js.map