/*

node_depths.ts
https://www.algoexpert.io/questions/Node%20Depths

*/

class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function nodeDepths(root: BinaryTree): number {
  // Write your code here.

  let nodeDepthSums = findTotalDepth(root, 0);
  debugger;
  return nodeDepthSums;
}

function findTotalDepth(node: BinaryTree | null, depth: number): number {
  if (!node) return 0;

  return (
    depth +
    findTotalDepth(node.left, depth + 1) +
    findTotalDepth(node.right, depth + 1)
  );
}

export function nodeDepthsIterative(root: BinaryTree): number {
  let totalSumOfDepths: number = 0;
  let stack: { node: BinaryTree | null; depth: number }[] = [
    { node: root, depth: 0 },
  ];

  while (stack.length > 0) {
    const { node, depth } = stack.pop()!;
    // this is basically a guarantee that the properties will not be null or undefined (the exclamation point)
    if (node === null) continue;

    totalSumOfDepths += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }

  debugger;
  return totalSumOfDepths;
}
// This is the class of the input binary tree.

let node1 = new BinaryTree(1);
let node2 = new BinaryTree(2);
let node3 = new BinaryTree(3);
let node4 = new BinaryTree(4);
let node5 = new BinaryTree(5);
let node8 = new BinaryTree(8);
let node9 = new BinaryTree(9);
let node6 = new BinaryTree(6);
let node7 = new BinaryTree(7);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node4.left = node8;
node4.right = node9;
node3.left = node6;
node3.right = node7;

nodeDepthsIterative(node1);
