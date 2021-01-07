"use strict";
/*
maximum-depth-of-binary-tree.ts
https://leetcode.com/problems/maximum-depth-of-binary-tree/

*/
var YetAnotherTreeNode = /** @class */ (function () {
    function YetAnotherTreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return YetAnotherTreeNode;
}());
// Given binary tree [3,9,20,null,null,15,7],
function maxDepth(root) {
    if (!root) {
        return 0;
    }
    var max = 1;
    depthFirstSearch(root);
    function depthFirstSearch(node, depthCount) {
        if (depthCount === void 0) { depthCount = 1; }
        if (!node.right && !node.left) {
            if (depthCount > max) {
                debugger;
                max = depthCount;
            }
            return;
        }
        else {
            if (node.right) {
                depthFirstSearch(node.right, depthCount + 1);
            }
            if (node.left) {
                depthFirstSearch(node.left, depthCount + 1);
            }
        }
    }
    debugger;
    return max;
}
var nodea = new YetAnotherTreeNode(3);
var nodeb = new YetAnotherTreeNode(9);
var nodec = new YetAnotherTreeNode(20);
var noded = new YetAnotherTreeNode(15);
var nodee = new YetAnotherTreeNode(7);
nodea.left = nodeb;
nodea.right = nodec;
nodec.left = noded;
nodec.right = nodee;
maxDepth(nodea);
//# sourceMappingURL=maximum-depth-of-binary-tree.js.map