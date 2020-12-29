/*

invert-binary-tree.ts
https://www.algoexpert.io/questions/Invert%20Binary%20Tree
Analyses -

Time: O(n)
Space: O(D)


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

export function invertBinaryTree(node: BinaryTree | null) {
  if (node === null) return;
  let tempNode: BinaryTree | null = node.left;
  node.left = node.right;
  node.right = tempNode;
  invertBinaryTree(node.right);
  invertBinaryTree(node.left);
}

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

let nodeOne = new BinaryTree(1);
let nodeTwo = new BinaryTree(2);
let nodeThree = new BinaryTree(4);
let nodeFour = new BinaryTree(5);
nodeOne.left = nodeTwo;
nodeTwo.left = nodeThree;
nodeThree.left = nodeFour;
debugger;

invertBinaryTree(nodeOne);
debugger;
