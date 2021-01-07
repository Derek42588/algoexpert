"use strict";
/*

invert-binary-tree.ts
https://www.algoexpert.io/questions/Invert%20Binary%20Tree
Analyses -

Time: O(n)
Space: O(D)


*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.invertBinaryTree = void 0;
var BinaryTree = /** @class */ (function () {
    function BinaryTree(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return BinaryTree;
}());
function invertBinaryTree(node) {
    if (node === null)
        return;
    var tempNode = node.left;
    node.left = node.right;
    node.right = tempNode;
    invertBinaryTree(node.right);
    invertBinaryTree(node.left);
}
exports.invertBinaryTree = invertBinaryTree;
// function invertSingleNode(node: BinaryTree | null) {
// }
// let nodeOne = new BinaryTree(1);
// let nodeTwo = new BinaryTree(2);
// let nodeThree = new BinaryTree(4);
// let nodeFour = new BinaryTree(5);
// let nodeFive = new BinaryTree(8);
// let nodeSix = new BinaryTree(9);
// let nodeSeven = new BinaryTree(3);
// let nodeEight = new BinaryTree(6);
// let nodeNine = new BinaryTree(7);
// nodeOne.left = nodeTwo;
// nodeOne.right = nodeSeven;
// nodeTwo.left = nodeThree;
// nodeTwo.right = nodeFour;
// nodeThree.left = nodeFive;
// nodeThree.right = nodeSix;
// nodeSeven.left = nodeEight;
// nodeSeven.right = nodeNine;
var nodeOne = new BinaryTree(1);
var nodeTwo = new BinaryTree(2);
var nodeThree = new BinaryTree(4);
var nodeFour = new BinaryTree(5);
nodeOne.left = nodeTwo;
nodeTwo.left = nodeThree;
nodeThree.left = nodeFour;
debugger;
invertBinaryTree(nodeOne);
debugger;
//# sourceMappingURL=invert-binary-tree.js.map