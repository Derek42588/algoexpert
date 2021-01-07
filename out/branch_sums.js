"use strict";
/*

branch_sums.ts
https://www.algoexpert.io/questions/Branch%20Sums


O(n) time and O(n) space
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.branchSums = void 0;
var BinaryTree = /** @class */ (function () {
    function BinaryTree(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return BinaryTree;
}());
function branchSums(root) {
    // Write your code here.
    // HINT: needs recursion
    var sums = [];
    branchSumsHelper(root, 0, sums);
    debugger;
    return sums;
}
exports.branchSums = branchSums;
function branchSumsHelper(node, runningSum, runningSums) {
    if (!node)
        return;
    var newRunningSum = runningSum + node.value;
    if (!node.left && !node.right) {
        runningSums.push(newRunningSum);
    }
    branchSumsHelper(node.left, newRunningSum, runningSums);
    branchSumsHelper(node.right, newRunningSum, runningSums);
}
var node1 = new BinaryTree(1);
var node2 = new BinaryTree(2);
var node3 = new BinaryTree(3);
var node4 = new BinaryTree(4);
var node5 = new BinaryTree(5);
var node6 = new BinaryTree(8);
var node7 = new BinaryTree(9);
var node8 = new BinaryTree(10);
var node9 = new BinaryTree(6);
var node10 = new BinaryTree(7);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node4.left = node6;
node4.right = node7;
node5.left = node8;
node3.left = node9;
node3.right = node10;
branchSums(node1);
//# sourceMappingURL=branch_sums.js.map