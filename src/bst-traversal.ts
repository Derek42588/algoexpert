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

class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number): BST {
    if (value >= this.value && this.right === null) {
      this.right = new BST(value);
    } else if (value < this.value && this.left === null) {
      this.left = new BST(value);
    } else {
      if (value < this.value) {
        this.left?.insert(value);
      } else {
        this.right?.insert(value);
      }
    }
    return this;
  }
}

export function inOrderTraverse(
  tree: BST | null,
  array: number[] = []
): number[] {
  inOrderTraversalHelper(tree, array);
  function inOrderTraversalHelper(tree: BST | null, array: number[]): number[] {
    if (tree === null) return array;
    else {
      inOrderTraversalHelper(tree.left, array);
      array.push(tree.value);
      inOrderTraversalHelper(tree.right, array);
    }
    return array;
  }
  return array;
}

export function preOrderTraverse(
  tree: BST | null,
  array: number[] = []
): number[] {
  preOrderTraversalHelper(tree, array);
  function preOrderTraversalHelper(
    tree: BST | null,
    array: number[]
  ): number[] {
    if (tree === null) return array;
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
export function postOrderTraverse(
  tree: BST | null,
  array: number[] = []
): number[] {
  preOrderTraversalHelper(tree, array);
  function preOrderTraversalHelper(
    tree: BST | null,
    array: number[]
  ): number[] {
    if (tree === null) return array;
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

let root = new BST(10);
root.insert(5);
root.insert(2);
root.insert(5);
root.insert(1);
root.insert(15);
root.insert(22);

postOrderTraverse(root);
