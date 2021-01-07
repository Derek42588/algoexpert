"use strict";
/*

node_depths.ts
https://www.algoexpert.io/questions/Node%20Depths

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeDepthsIterative = exports.nodeDepths = void 0;
var BinaryTree = /** @class */ (function () {
    function BinaryTree(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return BinaryTree;
}());
function nodeDepths(root) {
    // Write your code here.
    var nodeDepthSums = findTotalDepth(root, 0);
    debugger;
    return nodeDepthSums;
}
exports.nodeDepths = nodeDepths;
function findTotalDepth(node, depth) {
    if (!node)
        return 0;
    return (depth +
        findTotalDepth(node.left, depth + 1) +
        findTotalDepth(node.right, depth + 1));
}
function nodeDepthsIterative(root) {
    var totalSumOfDepths = 0;
    var stack = [
        { node: root, depth: 0 },
    ];
    while (stack.length > 0) {
        var _a = stack.pop(), node = _a.node, depth = _a.depth;
        // this is basically a guarantee that the properties will not be null or undefined (the exclamation point)
        if (node === null)
            continue;
        totalSumOfDepths += depth;
        stack.push({ node: node.left, depth: depth + 1 });
        stack.push({ node: node.right, depth: depth + 1 });
    }
    debugger;
    return totalSumOfDepths;
}
exports.nodeDepthsIterative = nodeDepthsIterative;
// This is the class of the input binary tree.
var node1 = new BinaryTree(1);
var node2 = new BinaryTree(2);
var node3 = new BinaryTree(3);
var node4 = new BinaryTree(4);
var node5 = new BinaryTree(5);
var node8 = new BinaryTree(8);
var node9 = new BinaryTree(9);
var node6 = new BinaryTree(6);
var node7 = new BinaryTree(7);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node4.left = node8;
node4.right = node9;
node3.left = node6;
node3.right = node7;
nodeDepthsIterative(node1);
//# sourceMappingURL=node_depths.js.map