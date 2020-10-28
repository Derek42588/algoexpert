"use strict";
// valid-palindrome.ts
// https://leetcode.com/problems/valid-palindrome/
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
//my first working solution:
// const isPalindrome = (s: string): boolean => {
//   let onlyChars = s.toUpperCase().match(/[A-Z0-9]/g)?.join('')
//   if (onlyChars === '') {
//     return true
//   }
//   if (onlyChars){
//       let halfOne: string[] = onlyChars.substr(0, onlyChars.length / 2).split('')
//       let halfTwo: string[] = onlyChars.substr(onlyChars.length / 2).split('')
//       if (onlyChars.length % 2 !== 0) {
//         debugger;
//         halfTwo.shift()
//       }
//       while (halfOne.length && halfTwo.length) {
//         let a = halfOne.shift()
//         let b = halfTwo.pop()
//         if (a !== b) {
//           debugger;
//           return false
//         }
//     }
//   }
//   debugger;
//   return true
// }
//after watching solution intro/pseudo:
// const isPalindrome = (s: string): boolean => {
//   let onlyAlphaNums: string | undefined = s.toUpperCase().match(/[A-Z0-9]/g)?.join('')
//   if (onlyAlphaNums === undefined) {
//     return true
//   }
//   let left: number = 0
//   let right: number = onlyAlphaNums.length - 1
//   while (left < right) {
//     debugger;
//     if (onlyAlphaNums.charAt(left) !== onlyAlphaNums.charAt(right)){
//       debugger
//       return false
//     }
//     left++
//     right--
//     debugger
//   }
//   debugger;
//   return true
// }
//his solution
exports.isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[\W_]/g, '');
    var left = 0;
    var right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
exports.isPalindrome('race a car');
//# sourceMappingURL=valid-palindrome.js.map