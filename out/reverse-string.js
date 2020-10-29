"use strict";
/*

https://leetcode.com/problems/reverse-string/

Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

 
*/
function reverseString(s) {
    // s = s.reduce<string[]>((prev, curr, currIndex, currArray) => {
    //   let currChar = currArray[currArray.length - 1 - currIndex];
    //   prev.push(currChar);
    //   return prev;
    // }, []);
    // debugger;
    for (var i = 0; i < s.length; i++) {
        if (i < s.length / 2) {
            var currChar = s[i];
            var swapChar = s[s.length - 1 - i];
            s[i] = swapChar;
            s[s.length - 1 - i] = currChar;
            debugger;
        }
    }
}
console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
reverseString(['h', 'a', 'l', 'o']);
//# sourceMappingURL=reverse-string.js.map