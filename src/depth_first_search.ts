/*

depth_first_search.ts
https://www.algoexpert.io/questions/Depth-first%20Search


time complexity: O(n) where n is the number of nodes, space complexity: O(n) where n is the number of nodes
*/

export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array: string[]) {
    // Write your code here.
    array.push(this.name);
    for (let child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}

// let b = new Node('b')
// let c = new Node('c')
// let d = new Node('d')
// let e = new Node('e')
// let f = new Node('f')
// let g = new Node('g')
// let h = new Node('h')
// let i = new Node('i')
// let j = new Node('j')
// let k = new Node('k')
