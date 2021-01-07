/*

binary-tree-diameter.ts
https://www.algoexpert.io/questions/Binary%20Tree%20Diameter

Analyses -

Time:
Space: 


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

class TreeInfo {
  diameter: number;
  height: number;

  constructor(diameter: number, height: number) {
    this.diameter = diameter;
    this.height = height;
  }
}

export function binaryTreeDiameter(node: BinaryTree): number {
  return getTreeInfo(node).diameter;
}

function getTreeInfo(tree: BinaryTree | null): TreeInfo {
  if (tree === null) {
    return new TreeInfo(0, 0);
  }

  const leftTreeInfo = getTreeInfo(tree.left);
  const rightTreeInfo = getTreeInfo(tree.right);

  const logestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
  const maxDiameterSoFar = Math.max(
    leftTreeInfo.diameter,
    rightTreeInfo.diameter
  );
  const currentDiameter = Math.max(logestPathThroughRoot, maxDiameterSoFar);
  const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

  return new TreeInfo(currentDiameter, currentHeight);
}
let nodeOne = new BinaryTree(1);
let nodeTwo = new BinaryTree(3);
let nodeThree = new BinaryTree(2);
let nodeFour = new BinaryTree(7);
let nodeFive = new BinaryTree(4);
let nodeSix = new BinaryTree(8);
let nodeSeven = new BinaryTree(5);
let nodeEight = new BinaryTree(9);
let nodeNine = new BinaryTree(6);

nodeOne.left = nodeTwo;
nodeOne.right = nodeThree;
nodeTwo.left = nodeFour;
nodeTwo.right = nodeFive;
nodeFive.right = nodeSeven;
nodeSeven.right = nodeNine;
nodeFour.left = nodeSix;
nodeSix.left = nodeEight;
binaryTreeDiameter(nodeOne);
