"use strict";
/*
https://leetcode.com/problems/destination-city/
*/
//paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
function destCity(paths) {
    var dictionary = {};
    // populating
    for (var _i = 0, paths_1 = paths; _i < paths_1.length; _i++) {
        var path = paths_1[_i];
        if (!dictionary[path[0]]) {
            dictionary[path[0]] = true;
        }
    }
    for (var _a = 0, paths_2 = paths; _a < paths_2.length; _a++) {
        var path = paths_2[_a];
        for (var _b = 0, path_1 = path; _b < path_1.length; _b++) {
            var innerPath = path_1[_b];
            if (!dictionary[innerPath]) {
                debugger;
                return innerPath;
            }
        }
    }
    // debugger;
    return '';
}
;
destCity([["A", "Z"]]);
//# sourceMappingURL=destination-city.js.map