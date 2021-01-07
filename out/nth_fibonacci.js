"use strict";
/*
nth_fibonacci.ts
https://www.algoexpert.io/questions/Nth%20Fibonacci

time / space calc:

Time: O(2^n), O(n) space
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNthFib = void 0;
function getNthFib(n) {
    // Write your code here.
    function getFib(num) {
        if (num < 0) {
            return 0;
        }
        else if (num <= 1) {
            return num;
        }
        else {
            return getFib(num - 1) + getFib(num - 2);
        }
    }
    var x = getFib(n - 1);
    debugger;
    return x;
}
exports.getNthFib = getNthFib;
getNthFib(6);
getNthFib(2);
getNthFib(1);
//# sourceMappingURL=nth_fibonacci.js.map