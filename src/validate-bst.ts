/*

validate-bst.ts
https://www.algoexpert.io/questions/Validate%20BST

Analyses:

Time: O(N) where N is the nodes in the tree
Space: O(D) where D is the depth (height) of the tree (max number of calls on the stack )

*/

class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function validateBst(
  tree: BST | null,
  maxValue: number = Infinity,
  minValue: number = -Infinity
): boolean {
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(
  tree: BST | null,
  minValue: number,
  maxValue: number
): boolean {
  debugger;
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;
  debugger;
  return (
    validateBstHelper(tree.left, minValue, tree.value) &&
    validateBstHelper(tree.right, tree.value, maxValue)
  );
}

let root = new BST(10);
let node5 = new BST(5);
let node15 = new BST(15);
let node2 = new BST(2);
let node51 = new BST(5);
let node1 = new BST(1);
// let wrongNode = new BST(9);
let node13 = new BST(13);
let node22 = new BST(22);
let node14 = new BST(14);
let node11 = new BST(11);

root.left = node5;
root.right = node15;
node5.left = node2;
node5.right = node51;
node2.left = node1;
node15.left = node13;
node15.right = node22;
node13.right = node14;
node51.right = node11;

let check = validateBst(root);
debugger;
