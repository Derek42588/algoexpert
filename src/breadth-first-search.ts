/*

breadth-first-search.ts
https://www.algoexpert.io/questions/Breadth-first%20Search

Analyses:

Time: O(N) where N is the number of nodes in the graph/tree
Space: O(W) where W is the greatest breadth level of the tree

not remotely how he put it:

Time: O(v + e ) time
Space: O (v) space - where V is the number of vertices and E is the number of edges

*/

class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string): Node {
    this.children.push(new Node(name));
    return this;
  }

  directlyAddChild(node: Node): Node {
    this.children.push(node);
    return this;
  }

  breadthFirstSearch(array: string[] = [], queue: Node[] = []): string[] {
    // queue.push(this);
    // let current: Node = this;
    debugger;
    if (queue.length === 0) {
      queue.push(this);
    }

    while (queue.length > 0) {
      let current = queue[0];
      array.push(current.name);

      for (let childNode of current.children) {
        queue.push(childNode);
      }

      queue.shift();
      debugger;
    }

    debugger;
    return array;
  }
}

let root = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
let g = new Node('g');
let h = new Node('h');
let i = new Node('i');
let j = new Node('j');
let k = new Node('k');

root.directlyAddChild(b);
root.directlyAddChild(c);
root.directlyAddChild(d);
b.directlyAddChild(e);
b.directlyAddChild(f);
f.directlyAddChild(i);
f.directlyAddChild(j);
d.directlyAddChild(g);
d.directlyAddChild(h);
g.directlyAddChild(k);

root.breadthFirstSearch();
