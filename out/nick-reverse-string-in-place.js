"use strict";
/*

https://leetcode.com/problems/reverse-words-in-a-string-iii/
*/
function reverseWords(s) {
    var returnStr = '';
    var word = '';
    for (var i = 0; i < s.length; i++) {
        if (s[i] !== ' ' && i !== s.length - 1) {
            word += s[i];
        }
        else {
            if (i === s.length - 1) {
                returnStr += s[i];
            }
            for (var j = word.length - 1; j >= 0; j--) {
                returnStr += word[j];
            }
            if (i !== s.length - 1) {
                returnStr += ' ';
            }
            word = '';
        }
    }
    return returnStr;
}
function reveseWordsWithMethods(s) {
    var arrStrs = [];
    s.split(' ').forEach(function (s) {
        arrStrs.push(s.split('').reverse().join(''));
    });
    return arrStrs.join(' ');
}
reveseWordsWithMethods("Let's take LeetCode contest");
//# sourceMappingURL=nick-reverse-string-in-place.js.map