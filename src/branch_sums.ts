/*

branch_sums.ts
https://www.algoexpert.io/questions/Branch%20Sums


O(n) time and O(n) space
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

export function branchSums(root: BinaryTree): number[] {
  // Write your code here.

  // HINT: needs recursion

  let sums: number[] = [];

  branchSumsHelper(root, 0, sums);

  debugger;
  return sums;
}

function branchSumsHelper(
  node: BinaryTree | null,
  runningSum: number,
  runningSums: number[]
) {
  if (!node) return;
  const newRunningSum = runningSum + node.value;
  if (!node.left && !node.right) {
    runningSums.push(newRunningSum);
  }
  branchSumsHelper(node.left, newRunningSum, runningSums);
  branchSumsHelper(node.right, newRunningSum, runningSums);
}

let node1 = new BinaryTree(1);
let node2 = new BinaryTree(2);
let node3 = new BinaryTree(3);
let node4 = new BinaryTree(4);
let node5 = new BinaryTree(5);
let node6 = new BinaryTree(8);
let node7 = new BinaryTree(9);
let node8 = new BinaryTree(10);
let node9 = new BinaryTree(6);
let node10 = new BinaryTree(7);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node4.left = node6;
node4.right = node7;
node5.left = node8;
node3.left = node9;
node3.right = node10;

branchSums(node1);
