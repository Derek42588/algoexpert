"use strict";
/*

first-factorial.ts

*/
function firstFactorialRecursive(n) {
    var nums = getRecursiveFacto(n);
    function getRecursiveFacto(num) {
        if (num === 1) {
            return 1;
        }
        else {
            return num * getRecursiveFacto(num - 1);
        }
    }
    return nums;
}
function firstFactorialIterative(n) {
    var returnNum = 1;
    for (var i = 1; i <= n; i++) {
        returnNum *= i;
    }
    return returnNum;
}
console.log(firstFactorialIterative(4));
//# sourceMappingURL=first-factorial.js.map