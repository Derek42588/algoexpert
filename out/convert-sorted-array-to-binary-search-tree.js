"use strict";
/*

convert-sorted-array-to-binary-search-tree.ts
https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

*/
var TreeNode127 = /** @class */ (function () {
    function TreeNode127(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode127;
}());
// function findLeftLeaf (node: TreeNode127): TreeNode127 {
//     if (!node.left) return node
//     return findLeftLeaf(node.left)
//   }
//   function findRightLeaf (node: TreeNode127): TreeNode127 {
//     if (!node.right) return node
//     return findRightLeaf(node.right)
//   }
function addToTree(rootNode, value) {
    if (value < rootNode.val) {
        if (!rootNode.left)
            rootNode.left = new TreeNode127(value);
        else {
            addToTree(rootNode.left, value);
        }
    }
    else {
        if (!rootNode.right)
            rootNode.right = new TreeNode127(value);
        else {
            addToTree(rootNode.right, value);
        }
    }
}
function sortedArrayToBST(nums) {
    var rootIdx = Math.floor(nums.length / 2);
    if (nums.length === 0)
        return null;
    var rootNode = new TreeNode127(nums[rootIdx]);
    for (var i = rootIdx - 1; i >= 0; i--) {
        // leafNode.left = new TreeNode127(nums[i])
        addToTree(rootNode, nums[i]);
    }
    // debugger;
    for (var i = nums.length - 1; i > rootIdx; i--) {
        addToTree(rootNode, nums[i]);
    }
    debugger;
    return rootNode;
}
;
sortedArrayToBST([0, 1, 2, 3, 4, 5]);
//# sourceMappingURL=convert-sorted-array-to-binary-search-tree.js.map