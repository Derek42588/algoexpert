/*

min-height-bst.ts
https://www.algoexpert.io/questions/Min%20Height%20BST

Analyses -

Time: O(n)
Space: O(N)


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
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }
}

export function minHeightBst(array: number[]): BST | null {
  return constructMinHeightBST(array, null, 0, array.length - 1);
}

function constructMinHeightBST(
  array: number[],
  root: BST | null,
  startIdx: number,
  endIdx: number
): BST | null {
  if (endIdx < startIdx) return null;
  let midPoint = Math.floor((startIdx + endIdx) / 2);

  if (root) {
    root.insert(array[midPoint]);
  } else {
    root = new BST(array[midPoint]);
  }

  constructMinHeightBST(array, root, startIdx, midPoint - 1);
  constructMinHeightBST(array, root, midPoint + 1, endIdx);

  return root;
}

minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22, 28, 32, 36]);
