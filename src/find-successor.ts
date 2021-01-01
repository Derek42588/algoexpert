// This is an input class. Do not edit.
export class BinaryTree {
    value: number;
    left: BinaryTree | null;
    right: BinaryTree | null;
    parent: BinaryTree | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
    }
  }

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
  
export function getLeftMostChild(node: BinaryTree): BinaryTree | null{
    let currentNode = node;

    while (currentNode && currentNode.left) {
        currentNode = currentNode.left
    }

    return currentNode
}

export function getRightMostParent(node: BinaryTree): BinaryTree | null {
    let currentNode = node;

    while(currentNode.parent && currentNode.parent.right === currentNode){
        currentNode = currentNode.parent
    }
    return currentNode.parent
}
  
  export function findSuccessor(tree: BinaryTree, node: BinaryTree): BinaryTree | null {
    // Write your code here.

    if (node.right) return getLeftMostChild(node.right)
    else {
        return getRightMostParent(node)
    }
  }

let firstNode = new BinaryTree(1)
let secondNode = new BinaryTree(2)
let thirdNode = new BinaryTree(3)
let fourthNode = new BinaryTree(4)
let fifthNode = new BinaryTree(5)
let sixthNode = new BinaryTree(6)

firstNode.left = secondNode;
firstNode.right = thirdNode;
secondNode.left = fourthNode;
secondNode.right = fifthNode;
secondNode.parent = firstNode;
thirdNode.parent = firstNode
fourthNode.left = sixthNode
fourthNode.parent = secondNode;
fifthNode.parent = secondNode;
sixthNode.parent = fourthNode;

let nodeX = findSuccessor(firstNode, fifthNode)
debugger;
