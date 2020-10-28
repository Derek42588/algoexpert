"use strict";
/*to-lower-case.ts
https://leetcode.com/problems/to-lower-case/
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

Example 1:

Input: "Hello"
Output: "hello"

Example 2:

Input: "here"
Output: "here"

Example 3:

Input: "LOVELY"
Output: "lovely"

hints:
Most languages support lowercase conversion for a string data type.
However, that is certainly not the purpose of the problem.
Think about how the implementation of the lowercase function call can be done easily.

Think ASCII!

Think about the different capital letters and their ASCII codes
and how that relates to their lowercase counterparts.
Does there seem to be any pattern there? Any mathematical relationship that we can use?
*/
function toLowerCase(str) {
    // obviously, return str.toLowerCase()
    // but I'm assuming they dont want that
    for (var i = 0; i < str.length; i++) {
        var asciiVal = str.charCodeAt(i);
        if (asciiVal >= 65 && asciiVal <= 90) {
            str = str.replace(str[i], String.fromCharCode(asciiVal + 32));
        }
    }
    debugger;
    return str;
}
;
toLowerCase('FHuck');
//# sourceMappingURL=to-lower-case.js.map