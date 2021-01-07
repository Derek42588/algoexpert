"use strict";
/*

Analyses:

O(N) Space & Time

*/
var firstDuplicateValue = function (arr) {
    var hasAppearedDict = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (hasAppearedDict[num.toString()])
            return num;
        else {
            hasAppearedDict[num.toString()] = true;
        }
    }
    return -1;
};
var x = firstDuplicateValue([2, 1, 5, 3, 3, 8, 4]);
debugger;
//# sourceMappingURL=first-duplicate-value.js.map