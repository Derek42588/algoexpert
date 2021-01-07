"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findClosestValueInBstRecursive = exports.findClosestValueInBst = void 0;
var BST = /** @class */ (function () {
    function BST(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return BST;
}());
/*

Should be an O(n) time with O(1) space solution
Or maybe I'm misunderstanding, because his optimal says average: O(logn) with worst O(n)

so, worst is O(n), meaning O(logn) is on average faster than O(n).

Since we're traversing a BST, we will be doing O(logn) time.  But dont we also have to do O(n) functions on each node?  Why
is it not O(nlogn)?

*/
function findClosestValueInBst(tree, target) {
    // Write your code here.
    // when do I know I've found the closest possible?
    // target -= value
    var closest = tree;
    var currNode = tree;
    while (currNode) {
        if (currNode.value === target) {
            return currNode.value;
        }
        if (Math.abs(target - currNode.value) < Math.abs(target - closest.value)) {
            closest = currNode;
        }
        debugger;
        if (currNode.value > target) {
            debugger;
            currNode = currNode.left;
        }
        else {
            debugger;
            currNode = currNode.right;
        }
    }
    debugger;
    return closest.value;
}
exports.findClosestValueInBst = findClosestValueInBst;
function findClosestValueInBstRecursive(tree, target) {
    var closest = tree;
    return findClosestValueInBstHelper(tree, target, closest);
}
exports.findClosestValueInBstRecursive = findClosestValueInBstRecursive;
function findClosestValueInBstHelper(tree, target, closest) {
    if (tree === null) {
        return closest.value;
    }
    if (Math.abs(target - closest.value) > Math.abs(target - tree.value)) {
        closest = tree;
    }
    if (target < tree.value) {
        return findClosestValueInBstHelper(tree.left, target, closest);
    }
    else if (target > tree.value) {
        return findClosestValueInBstHelper(tree.right, target, closest);
    }
    else {
        return closest.value;
    }
}
var node1 = new BST(10);
var node2 = new BST(5);
var node3 = new BST(15);
var node4 = new BST(2);
var node5 = new BST(5);
var node6 = new BST(1);
var node7 = new BST(13);
var node8 = new BST(22);
var node9 = new BST(14);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node4.left = node6;
node3.left = node7;
node3.right = node8;
node7.right = node9;
findClosestValueInBstRecursive(node1, 12);
//# sourceMappingURL=find_closest_value_in_bst.js.map