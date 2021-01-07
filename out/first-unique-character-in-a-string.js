"use strict";
/*

first-unique-character-in-a-string.ts
https://leetcode.com/problems/first-unique-character-in-a-string/

Analyses -

Time:
Space:


*/
// function firstUniqChar(s: string): number {
//   if (s.length === 1) return 0;
//   let chars: { [key: string]: number } = {};
//   for (let i = 0; i < s.length; i++) {
//     if (chars[s[i]]) {
//       chars[s[i]] += 1;
//     } else {
//       chars[s[i]] = 1;
//     }
//   }
//   for (let char in chars) {
//     debugger;
//     if (chars[char] === 1) {
//       return s.indexOf(char);
//     }
//   }
//   debugger;
//   return -1;
// }
function firstUniqChar(s) {
    if (s.length === 1)
        return 0;
    var i = 1;
    var right = 2;
    var left = 0;
    while (i < s.length && j < s.length) {
        if (s[i] === s[j]) {
            i++;
            j = i + 1;
        }
        else {
            if (j === s.length - 1) {
                debugger;
                return i;
            }
            else {
                j++;
            }
        }
    }
    return -1;
}
firstUniqChar('loveleetcode');
//# sourceMappingURL=first-unique-character-in-a-string.js.map