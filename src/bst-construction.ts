/*

bst-construction.ts

https://www.algoexpert.io/questions/BST%20Construction

Complexity Analyses:

(various functions?)

Insertion:
Time: O(logn)
Space: O(1)

Contains:
Time: O(logn)
Space: O(1)

Remove:
Time: O(logn)
Space: O(1)
*/

export class BST {
  value: number;
  right: BST | null;
  left: BST | null;

  constructor(value: number) {
    (this.value = value), (this.right = null);
    this.left = null;
  }

  insert(value: number): BST {
    if (value < this.value) {
      this.left === null
        ? (this.left = new BST(value))
        : this.left.insert(value);
    } else {
      this.right === null
        ? (this.right = new BST(value))
        : this.right.insert(value);
    }
    return this;
  }

  contains(value: number): boolean {
    if (value === this.value) {
      return true;
    } else if (value >= this.value && this.right) {
      return this.right.contains(value);
    } else if (value < this.value && this.left) {
      return this.left.contains(value);
    }

    return false;
  }

  findSuccessor(): number {
    // base case? this.left == null

    if (this.left === null) {
      return this.value;
    } else {
      return this.left.findSuccessor();
    }
  }

  remove(value: number, parent: BST | null = null): BST {
    // first find the value you're trying to remove

    if (value < this.value) {
      if (this.left) this.left.remove(value, this);
    } else if (value > this.value) {
      if (this.right) this.right.remove(value, this);
    } else {
      // then do necessary operations
      // case when theres two children
      // case when theres one
      //case when theres none
      // their solution is written in the above order

      if (this.left && this.right) {
        this.value = this.right.findSuccessor();
        this.right.remove(this.value, this);
      } else if (parent === null) {
        // this is if its the root node
        if (this.left !== null) {
          // root node, right is null, left is not
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right !== null) {
          // root node, left is null, right is not
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        }
      } else if (parent.left === this) {
        // the logic down there is just pulling up the remaining node.  this is only reached if the deletion node is
        // one or less nodes.
        parent.left = this.left !== null ? this.left : this.right;
      } else if (parent.right === this) {
        // the logic down there is just pulling up the remaining node.  this is only reached if the deletion node is
        // one or less nodes.
        parent.right = this.left !== null ? this.left : this.right;
      }
    }

    return this;
  }
}
let root = new BST(10);
root.insert(5);
root.insert(15);
root.insert(2);
root.insert(5);
root.insert(13);
root.insert(22);
root.insert(1);
root.insert(14);
root.insert(12);
debugger;
root.remove(10);
// debugger;

root.contains(15);
debugger;
