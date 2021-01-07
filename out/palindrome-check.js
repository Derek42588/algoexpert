"use strict";
/*

palindrome-check.ts
https://www.algoexpert.io/questions/Palindrome%20Check

Complexity Analyses:

Time: O(n)
Space: O(1)

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
// export function isPalindrome(string: string) {
//   // Write your code here.
//   if (string.length === 1) {
//     return true;
//   }
//   let checkString = true;
//   let left = 0;
//   let right = string.length - 1;
//   while (left < right) {
//     if (string[left] !== string[right]) {
//       debugger;
//       return false;
//     }
//     left++;
//     right--;
//   }
//   debugger;
//   return checkString;
// }
// He does a very interesting recursive solution:
function isPalindrome(string, i) {
    if (i === void 0) { i = 0; }
    // Write your code here.
    var j = string.length - 1 - i;
    return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
}
exports.isPalindrome = isPalindrome;
isPalindrome('abcdcba');
//# sourceMappingURL=palindrome-check.js.map