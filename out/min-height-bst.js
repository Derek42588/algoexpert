"use strict";
/*

min-height-bst.ts
https://www.algoexpert.io/questions/Min%20Height%20BST

Analyses -

Time: O(n)
Space: O(N)


*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.minHeightBst = void 0;
var BST = /** @class */ (function () {
    function BST(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    BST.prototype.insert = function (value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
            }
            else {
                this.left.insert(value);
            }
        }
        else {
            if (this.right === null) {
                this.right = new BST(value);
            }
            else {
                this.right.insert(value);
            }
        }
        return this;
    };
    return BST;
}());
function minHeightBst(array) {
    return constructMinHeightBST(array, null, 0, array.length - 1);
}
exports.minHeightBst = minHeightBst;
function constructMinHeightBST(array, root, startIdx, endIdx) {
    if (endIdx < startIdx)
        return null;
    var midPoint = Math.floor((startIdx + endIdx) / 2);
    if (root) {
        root.insert(array[midPoint]);
    }
    else {
        root = new BST(array[midPoint]);
    }
    constructMinHeightBST(array, root, startIdx, midPoint - 1);
    constructMinHeightBST(array, root, midPoint + 1, endIdx);
    return root;
}
minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22, 28, 32, 36]);
//# sourceMappingURL=min-height-bst.js.map