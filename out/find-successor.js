"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSuccessor = exports.getRightMostParent = exports.getLeftMostChild = exports.BinaryTree = void 0;
// This is an input class. Do not edit.
var BinaryTree = /** @class */ (function () {
    function BinaryTree(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
//   export function inOrderTraverseInSearchOfSuccessor(tree: BinaryTree | null, targetNode: BinaryTree, array: BinaryTree[] = []): BinaryTree | null{
//     inOrderTraverseInSearchOfSuccessorHelper(tree, array)
//     function inOrderTraverseInSearchOfSuccessorHelper(tree: BinaryTree| null, array: BinaryTree[]) {
//         if (tree === null) return array;
//         else {
//           inOrderTraverseInSearchOfSuccessorHelper(tree.left, array);
//           array.push(tree);
//           inOrderTraverseInSearchOfSuccessorHelper(tree.right, array);
//         }
//         return array;
//       }
//       let successorNode = null;
//       for (let i = 0; i < array.length; i ++){
//         if (array[i] === targetNode){
//             successorNode = array[i + 1]
//             break;
//         }
//       }
//       return successorNode
//     }
function getLeftMostChild(node) {
    var currentNode = node.right;
    while (currentNode && currentNode.left) {
        currentNode = currentNode.left;
    }
    return currentNode;
}
exports.getLeftMostChild = getLeftMostChild;
function getRightMostParent(node) {
    var currentNode = node;
    while (currentNode.parent && currentNode.parent.right === currentNode) {
        currentNode = currentNode.parent;
    }
    return currentNode.parent;
}
exports.getRightMostParent = getRightMostParent;
function findSuccessor(tree, node) {
    // Write your code here.
    if (node.right)
        return getLeftMostChild(node);
    else {
        return getRightMostParent(node);
    }
}
exports.findSuccessor = findSuccessor;
var firstNode = new BinaryTree(1);
var secondNode = new BinaryTree(2);
var thirdNode = new BinaryTree(3);
var fourthNode = new BinaryTree(4);
var fifthNode = new BinaryTree(5);
var sixthNode = new BinaryTree(6);
firstNode.left = secondNode;
firstNode.right = thirdNode;
secondNode.left = fourthNode;
secondNode.right = fifthNode;
secondNode.parent = firstNode;
thirdNode.parent = firstNode;
fourthNode.left = sixthNode;
fourthNode.parent = secondNode;
fifthNode.parent = secondNode;
sixthNode.parent = fourthNode;
var nodeX = findSuccessor(firstNode, fifthNode);
debugger;
//# sourceMappingURL=find-successor.js.map