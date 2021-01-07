"use strict";
/*

intersection-of-two-arrays-ii.ts
https://leetcode.com/problems/intersection-of-two-arrays-ii/

Analyeses -

Time:
Space:


*/
function intersect(nums1, nums2) {
    var longerArray;
    var shorterArray;
    var intersections = [];
    if (nums1.length === 0 || nums2.length === 0)
        return [];
    if (nums1.length > nums2.length) {
        longerArray = nums1;
        shorterArray = nums2;
    }
    else {
        longerArray = nums2;
        shorterArray = nums1;
    }
    var shorterArrayDict = {};
    var longerArrayDict = {};
    for (var _i = 0, shorterArray_1 = shorterArray; _i < shorterArray_1.length; _i++) {
        var num = shorterArray_1[_i];
        if (shorterArrayDict[num]) {
            shorterArrayDict[num]++;
        }
        else {
            shorterArrayDict[num] = 1;
        }
    }
    for (var _a = 0, longerArray_1 = longerArray; _a < longerArray_1.length; _a++) {
        var num = longerArray_1[_a];
        if (shorterArrayDict[num]) {
            if (longerArrayDict[num]) {
                longerArrayDict[num]++;
            }
            else {
                longerArrayDict[num] = 1;
            }
        }
        else {
        }
    }
    if (Object.keys(longerArrayDict).length > Object.keys(shorterArrayDict).length) {
        for (var key in longerArrayDict) {
            if (longerArrayDict[key] > shorterArrayDict[key]) {
                for (var i = 0; i < shorterArrayDict[key]; i++) {
                    intersections.push(Number(key));
                }
            }
            else {
                for (var i = 0; i < longerArrayDict[key]; i++) {
                    intersections.push(Number(key));
                }
            }
        }
    }
    else {
        for (var key in shorterArrayDict) {
            if (longerArrayDict[key] > shorterArrayDict[key]) {
                for (var i = 0; i < shorterArrayDict[key]; i++) {
                    intersections.push(Number(key));
                }
            }
            else {
                for (var i = 0; i < longerArrayDict[key]; i++) {
                    intersections.push(Number(key));
                }
            }
        }
    }
    debugger;
    return intersections;
}
// intersect([1, 2, 2, 1], [2, 2]);
intersect([1], [1]);
// intersect([4, 9, 5], [9, 4, 9, 8, 4, 9]);
//# sourceMappingURL=intersection-of-two-arrays-ii.js.map