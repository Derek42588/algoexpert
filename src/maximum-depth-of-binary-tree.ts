/*
maximum-depth-of-binary-tree.ts
https://leetcode.com/problems/maximum-depth-of-binary-tree/

*/

class YetAnotherTreeNode {
  val: number;
  left: YetAnotherTreeNode | null;
  right: YetAnotherTreeNode | null;
  constructor(
    val?: number,
    left?: YetAnotherTreeNode | null,
    right?: YetAnotherTreeNode | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// Given binary tree [3,9,20,null,null,15,7],

function maxDepth(root: YetAnotherTreeNode | null): number {
  if (!root) {
    return 0;
  }
  let max: number = 1;
  depthFirstSearch(root);
  function depthFirstSearch(node: YetAnotherTreeNode, depthCount: number = 1) {
    if (!node.right && !node.left) {
      if (depthCount > max) {
        debugger;
        max = depthCount;
      }
      return;
    } else {
      if (node.right) {
        depthFirstSearch(node.right, depthCount + 1);
      }

      if (node.left) {
        depthFirstSearch(node.left, depthCount + 1);
      }
    }
  }
  debugger;
  return max;
}

let nodea = new YetAnotherTreeNode(3);
let nodeb = new YetAnotherTreeNode(9);
let nodec = new YetAnotherTreeNode(20);
let noded = new YetAnotherTreeNode(15);
let nodee = new YetAnotherTreeNode(7);

nodea.left = nodeb;
nodea.right = nodec;
nodec.left = noded;
nodec.right = nodee;

maxDepth(nodea);
