"use strict";
/*

bst-traversal.ts
https://www.algoexpert.io/questions/BST%20Traversal

Analyses -

Time: O(N)
Space: O(D) thats the call stack, but do we also consider the return array?  the array size
will be O(N), isnt that worse case scenario than O(D)?  Do we consider both?  O (D * N) ?
If I had to guess, I think its O(N)

for all?

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.postOrderTraverse = exports.preOrderTraverse = exports.inOrderTraverse = void 0;
var BST = /** @class */ (function () {
    function BST(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    BST.prototype.insert = function (value) {
        var _a, _b;
        if (value >= this.value && this.right === null) {
            this.right = new BST(value);
        }
        else if (value < this.value && this.left === null) {
            this.left = new BST(value);
        }
        else {
            if (value < this.value) {
                (_a = this.left) === null || _a === void 0 ? void 0 : _a.insert(value);
            }
            else {
                (_b = this.right) === null || _b === void 0 ? void 0 : _b.insert(value);
            }
        }
        return this;
    };
    return BST;
}());
function inOrderTraverse(tree, array) {
    if (array === void 0) { array = []; }
    inOrderTraversalHelper(tree, array);
    function inOrderTraversalHelper(tree, array) {
        if (tree === null)
            return array;
        else {
            inOrderTraversalHelper(tree.left, array);
            array.push(tree.value);
            inOrderTraversalHelper(tree.right, array);
        }
        return array;
    }
    return array;
}
exports.inOrderTraverse = inOrderTraverse;
function preOrderTraverse(tree, array) {
    if (array === void 0) { array = []; }
    preOrderTraversalHelper(tree, array);
    function preOrderTraversalHelper(tree, array) {
        if (tree === null)
            return array;
        else {
            array.push(tree.value);
            preOrderTraversalHelper(tree.left, array);
            preOrderTraversalHelper(tree.right, array);
        }
        return array;
    }
    debugger;
    return array;
}
exports.preOrderTraverse = preOrderTraverse;
function postOrderTraverse(tree, array) {
    if (array === void 0) { array = []; }
    preOrderTraversalHelper(tree, array);
    function preOrderTraversalHelper(tree, array) {
        if (tree === null)
            return array;
        else {
            preOrderTraversalHelper(tree.left, array);
            preOrderTraversalHelper(tree.right, array);
            array.push(tree.value);
        }
        return array;
    }
    debugger;
    return array;
}
exports.postOrderTraverse = postOrderTraverse;
var root = new BST(10);
root.insert(5);
root.insert(2);
root.insert(5);
root.insert(1);
root.insert(15);
root.insert(22);
postOrderTraverse(root);
//# sourceMappingURL=bst-traversal.js.map