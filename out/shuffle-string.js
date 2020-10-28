"use strict";
// shuffle-string.ts
// https://leetcode.com/problems/shuffle-string/
var shuffleString = function (s, indices) {
    return indices.reduce(function (acc, curr, idx) {
        acc[curr] = s.charAt(idx);
        debugger;
        return acc;
    }, []).join('');
};
(shuffleString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));
//# sourceMappingURL=shuffle-string.js.map