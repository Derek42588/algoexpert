"use strict";
// range-sum-of-bst.ts
// https://leetcode.com/problems/range-sum-of-bst/
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function rangeSumBST(root, L, R) {
    var sum = 0;
    if (root == null) {
        return sum;
    }
    if (root.val > L) {
        sum += rangeSumBST(root.left, L, R);
    }
    if (root.val <= R && root.val >= L) {
        sum += root.val;
    }
    if (root.val < R) {
        sum += rangeSumBST(root.right, L, R);
    }
    return sum;
}
;
//# sourceMappingURL=range-sum-of-bst.js.map