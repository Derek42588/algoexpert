// range-sum-of-bst.ts
// https://leetcode.com/problems/range-sum-of-bst/

  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }

  function rangeSumBST(root: TreeNode | null, L: number, R: number) {
    var sum: number = 0;
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
};




