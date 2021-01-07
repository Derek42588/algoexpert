"use strict";
/*

validate-bst.ts
https://www.algoexpert.io/questions/Validate%20BST

Analyses:

Time: O(N) where N is the nodes in the tree
Space: O(D) where D is the depth (height) of the tree (max number of calls on the stack )

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBst = void 0;
var BST = /** @class */ (function () {
    function BST(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return BST;
}());
function validateBst(tree, maxValue, minValue) {
    if (maxValue === void 0) { maxValue = Infinity; }
    if (minValue === void 0) { minValue = -Infinity; }
    return validateBstHelper(tree, -Infinity, Infinity);
}
exports.validateBst = validateBst;
function validateBstHelper(tree, minValue, maxValue) {
    debugger;
    if (tree === null)
        return true;
    if (tree.value < minValue || tree.value >= maxValue)
        return false;
    debugger;
    return (validateBstHelper(tree.left, minValue, tree.value) &&
        validateBstHelper(tree.right, tree.value, maxValue));
}
var root = new BST(10);
var node5 = new BST(5);
var node15 = new BST(15);
var node2 = new BST(2);
var node51 = new BST(5);
var node1 = new BST(1);
// let wrongNode = new BST(9);
var node13 = new BST(13);
var node22 = new BST(22);
var node14 = new BST(14);
var node11 = new BST(11);
root.left = node5;
root.right = node15;
node5.left = node2;
node5.right = node51;
node2.left = node1;
node15.left = node13;
node15.right = node22;
node13.right = node14;
node51.right = node11;
var check = validateBst(root);
debugger;
//# sourceMappingURL=validate-bst.js.map