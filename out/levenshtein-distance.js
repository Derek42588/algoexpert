"use strict";
/*

levenshtein-distance.ts
https://www.algoexpert.io/questions/Levenshtein%20Distance

Analyses -

Time: O(NM) where N is number of chars in str1, m len str2
Space: O(nm) - its actually min of O(min(n, m)) -- well, my answer below is O(NM).  We can improve because
we are only ever using 2 rows: current and previous, so the optimal space complexity is O(min(n, m))

we'd want the string with the smallest length and have that be the "row" comparison


*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.levenshteinDistance = void 0;
function levenshteinDistance(str1, str2) {
    var editTable = [];
    for (var i_1 = 0; i_1 < str2.length + 1; i_1++) {
        var row = [];
        for (var j_1 = 0; j_1 < str1.length + 1; j_1++) {
            row.push(j_1);
        }
        row[0] = i_1;
        editTable.push(row);
    }
    debugger;
    for (var row = 1; row < str2.length + 1; row++) {
        for (var column = 1; column < str1.length + 1; column++) {
            if (str2[row - 1] === str1[column - 1]) {
                editTable[row][column] = editTable[row - 1][column - 1];
            }
            else {
                editTable[row][column] =
                    1 +
                        Math.min(editTable[row - 1][column - 1], editTable[row - 1][column], editTable[row][column - 1]);
            }
        }
    }
    debugger;
    return editTable[str2.length][str1.length];
}
exports.levenshteinDistance = levenshteinDistance;
levenshteinDistance('abc', 'yabd');
// levenshteinDistance('', '');
// levenshteinDistance('', 'abc');
// levenshteinDistance('abc', 'abc');
//# sourceMappingURL=levenshtein-distance.js.map