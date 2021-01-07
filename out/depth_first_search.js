"use strict";
/*

depth_first_search.ts
https://www.algoexpert.io/questions/Depth-first%20Search


time complexity: O(n) where n is the number of nodes, space complexity: O(n) where n is the number of nodes
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(name) {
        this.name = name;
        this.children = [];
    }
    Node.prototype.addChild = function (name) {
        this.children.push(new Node(name));
        return this;
    };
    Node.prototype.depthFirstSearch = function (array) {
        // Write your code here.
        array.push(this.name);
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.depthFirstSearch(array);
        }
        return array;
    };
    return Node;
}());
exports.Node = Node;
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
//# sourceMappingURL=depth_first_search.js.map