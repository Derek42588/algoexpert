"use strict";
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
var Node = /** @class */ (function () {
    function Node(name) {
        this.name = name;
        this.children = [];
    }
    Node.prototype.addChild = function (name) {
        this.children.push(new Node(name));
        return this;
    };
    Node.prototype.directlyAddChild = function (node) {
        this.children.push(node);
        return this;
    };
    Node.prototype.breadthFirstSearch = function (array, queue) {
        if (array === void 0) { array = []; }
        if (queue === void 0) { queue = []; }
        // queue.push(this);
        // let current: Node = this;
        debugger;
        if (queue.length === 0) {
            queue.push(this);
        }
        while (queue.length > 0) {
            var current = queue[0];
            array.push(current.name);
            for (var _i = 0, _a = current.children; _i < _a.length; _i++) {
                var childNode = _a[_i];
                queue.push(childNode);
            }
            queue.shift();
            debugger;
        }
        debugger;
        return array;
    };
    return Node;
}());
var root = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');
var g = new Node('g');
var h = new Node('h');
var i = new Node('i');
var j = new Node('j');
var k = new Node('k');
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
//# sourceMappingURL=breadth-first-search.js.map