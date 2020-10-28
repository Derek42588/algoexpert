"use strict";
// Minimum Time Visiting All Points
// minimum-time-visiting-all-points.ts
// https://leetcode.com/problems/minimum-time-visiting-all-points/
// On a plane there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points.
// You can move according to the next rules:
//     In one second always you can either move vertically, horizontally by 
//     one unit or diagonally (it means to move one unit vertically and one unit horizontally in one second).
//     You have to visit the points in the same order as they appear in the array.
// What to solve -- how to determine what move to make?  E, NE, N, NW, W, SW, S, SE?
// if neither x or y === x or y of next point, move diagonally?
// const minTimeToVisitAllPoints = (points: number[][]): number => {
//   let seconds: number = 0
//   for(let i = 0; i < points.length - 1; i++) {
//     let point: number[] = points[i]
//     let nextPoint: number[] = points[i+1]
//     let xClosest = Math.abs((nextPoint[0] - point[0])) < Math.abs((nextPoint[1] - point[1]))
//     let measureAxis: number
//     xClosest ? measureAxis = 0 : measureAxis =1
//     debugger
//     while (point[0] !== nextPoint[0] && point[1] !== nextPoint[1]) {
//         if (nextPoint[measureAxis] < point[measureAxis]) {
//           point[0] = point[0] - 1
//           point[1] = point[1] - 1
//           seconds++
//           //go diagonally back
//         } else {
//           // go diagonally forward
//           point[0] = point[0] + 1
//           point[1] = point[1] + 1
//           seconds++
//         }
//         debugger;
//       }
//      debugger;
//      while (point[0] !== nextPoint[0]) {
//        debugger
//        if (nextPoint[0] < 0) {
//          point[0] = point[0] -1
//          seconds++
//        } else {
//          point[0] = point[0] + 1
//          seconds++
//        }
//      }
//      while(point[1] !== nextPoint[1]){
//       debugger
//        if (nextPoint[1] < 0) {
//          point[1] = point[1] -1
//          seconds++
//        } else {
//          point[1] = point[1] + 1
//          seconds++
//        }
//        debugger
//      }
//      debugger
//     }
//     debugger
//   return seconds
// };
// my solution worked locally, but failed for exceeding time limit on leetcode (long array).  SImple solution from LC:
// hints I should have read:
// To walk from point A to point B there will be an optimal strategy to walk ?
// Advance in diagonal as possible then after that go in straight line.
// Repeat the process until visiting all the points.
var minTimeToVisitAllPoints = function (points) {
    var seconds = 0;
    for (var i = 1; i < points.length; i++) {
        var pointOne = points[i];
        var pointTwo = points[i - 1];
        seconds += Math.max(Math.abs(pointTwo[0] - pointOne[0]), Math.abs(pointTwo[1] - pointOne[1]));
    }
    debugger;
    return seconds;
};
minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]]);
//# sourceMappingURL=minimum-time-visiting-all-points.js.map