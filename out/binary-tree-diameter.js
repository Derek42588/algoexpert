"use strict";
/*

binary-tree-diameter.ts
https://www.algoexpert.io/questions/Binary%20Tree%20Diameter

Analyses -

Time:
Space:


*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryTreeDiameter = void 0;
var BinaryTree = /** @class */ (function () {
    function BinaryTree(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return BinaryTree;
}());
var TreeInfo = /** @class */ (function () {
    function TreeInfo(diameter, height) {
        this.diameter = diameter;
        this.height = height;
    }
    return TreeInfo;
}());
function binaryTreeDiameter(node) {
    return getTreeInfo(node).diameter;
}
exports.binaryTreeDiameter = binaryTreeDiameter;
function getTreeInfo(tree) {
    if (tree === null) {
        return new TreeInfo(0, 0);
    }
    var leftTreeInfo = getTreeInfo(tree.left);
    var rightTreeInfo = getTreeInfo(tree.right);
    var logestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
    var maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
    var currentDiameter = Math.max(logestPathThroughRoot, maxDiameterSoFar);
    var currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);
    return new TreeInfo(currentDiameter, currentHeight);
}
var nodeOne = new BinaryTree(1);
var nodeTwo = new BinaryTree(3);
var nodeThree = new BinaryTree(2);
var nodeFour = new BinaryTree(7);
var nodeFive = new BinaryTree(4);
var nodeSix = new BinaryTree(8);
var nodeSeven = new BinaryTree(5);
var nodeEight = new BinaryTree(9);
var nodeNine = new BinaryTree(6);
nodeOne.left = nodeTwo;
nodeOne.right = nodeThree;
nodeTwo.left = nodeFour;
nodeTwo.right = nodeFive;
nodeFive.right = nodeSeven;
nodeSeven.right = nodeNine;
nodeFour.left = nodeSix;
nodeSix.left = nodeEight;
binaryTreeDiameter(nodeOne);
//# sourceMappingURL=binary-tree-diameter.js.map