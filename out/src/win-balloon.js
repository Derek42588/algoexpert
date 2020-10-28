"use strict";
/*A string S consisting of uppercase English letters is given.
In one move we can delete seven letters from S, forming the word
"BALLOON" (one 'B', one 'A', two 'L's, two 'O's and one 'N'), and
leave a shorter word in S. If the remaining letters in the shortened
S are sucient to allow another instance of the word "BALLOON" to be removed,
next move can be done. What is the maximum number of such moves that we can apply to S?
Write a function:
      int solution(char *S);
that, given a string S of length N, returns the maximum number of moves that can be applied.
Examples:
1. Given S = "BAONXXOLL", the function should return 1.
2. Given S = "BAOOLLNNOLOLGBAX", the function should return 2.
3. Given S = "QAWABAWONL", the function should return 0.
4. Given S = "ONLABLABLOON", the function should return 1.

B - 1
A - 1
L - 2
O - 2
N - 1
*/
var balloonFunc = function (str) {
    var successes = 0;
    var foundBalloons = {};
    var KEY = {
        'B': 1,
        'A': 1,
        'L': 2,
        'O': 2,
        'N': 1
    };
    var _loop_1 = function (i) {
        var char = Object.keys(KEY)[i];
        var matchingChars = str.split('').filter(function (c) { return c === char; });
        foundBalloons[char] = matchingChars.length;
    };
    for (var i = 0; i < Object.keys(KEY).length; i++) {
        _loop_1(i);
    }
    if (Object.values(foundBalloons).includes(0)) {
        //return 0 early
        return successes;
    }
    else {
        var checker = true;
        while (checker) {
            for (var _i = 0, _a = Object.keys(KEY); _i < _a.length; _i++) {
                var char = _a[_i];
                if (foundBalloons[char] && foundBalloons[char] >= KEY[char]) {
                    foundBalloons[char] -= KEY[char];
                    if (Object.keys(KEY).indexOf(char) === Object.keys(KEY).length - 1) {
                        successes++;
                    }
                }
                else {
                    return successes;
                }
            }
        }
        return successes;
    }
};
var x = balloonFunc('BAONXXOLL');
var xx = balloonFunc('BAOOLLNNOLOLGBAX');
var xxx = balloonFunc('QAWABAWONL');
var xxxx = balloonFunc('ONLABLABLOON');
debugger;
//# sourceMappingURL=win-balloon.js.map