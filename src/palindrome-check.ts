/*

palindrome-check.ts
https://www.algoexpert.io/questions/Palindrome%20Check

Complexity Analyses:

Time: O(n)
Space: O(1)

*/

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

export function isPalindrome(string: string, i = 0): boolean {
  // Write your code here.
  const j = string.length - 1 - i;

  return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
}
isPalindrome('abcdcba');
