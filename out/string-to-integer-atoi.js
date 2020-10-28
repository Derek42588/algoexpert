"use strict";
// https://leetcode.com/problems/string-to-integer-atoi/
//
function parseNum(numString) {
    if (isNaN(Number(numString))) {
        return 0;
    }
    else {
        if (Number(numString) > 2147483647) {
            return 2147483647;
        }
        else if (Number(numString) < -2147483648) {
            return -2147483648;
        }
        else {
            return Number(numString);
        }
    }
}
function myAtoi(s) {
    var returnNum = '';
    s = s.trim();
    if (isNaN(Number(s[0]))) {
        if (s[0] !== '-' && s[0] !== '+') {
            return 0;
        }
        else {
            if (s[0] === '-') {
                returnNum += '-';
            }
            s = s.slice(1);
        }
    }
    for (var i = 0; i < s.length; i++) {
        var char = s.charCodeAt(i);
        var currChar = s[i];
        if (isNaN(Number(currChar)) || currChar === ' ') {
            return parseNum(returnNum);
        }
        if ((i === 0 && currChar === '-') || (char >= 48 && char <= 57)) {
            returnNum += currChar;
        }
    }
    return parseNum(returnNum);
}
;
console.log(myAtoi("   +0 123"));
//# sourceMappingURL=string-to-integer-atoi.js.map