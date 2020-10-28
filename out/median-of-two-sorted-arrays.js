"use strict";
/*

https://leetcode.com/problems/median-of-two-sorted-arrays/

*/
function findMedianSortedArrays(nums1, nums2) {
    var sortedBoth = [];
    sortedBoth.push.apply(sortedBoth, nums1);
    sortedBoth.push.apply(sortedBoth, nums2);
    sortedBoth.sort(function (a, b) { return (a - b); });
    if (sortedBoth.length % 2 === 0) {
        var middle = sortedBoth.length / 2;
        var answer = ((sortedBoth[middle] + sortedBoth[middle - 1]) / 2);
        debugger;
        return answer;
    }
    else {
        var middle = (sortedBoth.length) / 2 - .5;
        var answer = sortedBoth[middle];
        debugger;
        return answer;
    }
}
;
findMedianSortedArrays([3], [-2, -1]);
//# sourceMappingURL=median-of-two-sorted-arrays.js.map