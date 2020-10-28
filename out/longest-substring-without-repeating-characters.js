"use strict";
/*
longest-substring-without-repeating-characters
https://leetcode.com/problems/longest-substring-without-repeating-characters/

*/
function lengthOfLongestSubstring(s) {
    var longest = 0;
    if (s.length === 0 || s.length === 1) {
        return s.length;
    }
    for (var i = 0; i < s.length; i++) {
        var subStr = s.slice(i);
        var repeats = [];
        if (subStr.length >= longest) {
            for (var j = 0; j < subStr.length; j++) {
                if (!repeats.includes(subStr[j])) {
                    repeats.push(subStr[j]);
                    if (j === subStr.length - 1) {
                        if (repeats.length > longest) {
                            longest = repeats.length;
                        }
                        repeats = [];
                    }
                }
                else {
                    if (repeats.length > longest) {
                        longest = repeats.length;
                        repeats = [];
                    }
                    break;
                }
            }
        }
    }
    return longest;
}
;
console.log(lengthOfLongestSubstring('jbpnbwwd'));
//# sourceMappingURL=longest-substring-without-repeating-characters.js.map