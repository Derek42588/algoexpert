/*

convert-sorted-array-to-binary-search-tree.ts
https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

*/


  class TreeNode127 {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)

      }
      
  }
 
// function findLeftLeaf (node: TreeNode127): TreeNode127 {
//     if (!node.left) return node

//     return findLeftLeaf(node.left)
//   }

//   function findRightLeaf (node: TreeNode127): TreeNode127 {
//     if (!node.right) return node

//     return findRightLeaf(node.right)
//   }
  
function addToTree(rootNode: TreeNode127, value: number): void {
  if (value < rootNode.val) {
    if (!rootNode.left) rootNode.left = new TreeNode127(value)
    else {
      addToTree(rootNode.left, value)
    }
  } else {
    if (!rootNode.right) rootNode.right = new TreeNode127(value) 
    else {
      addToTree(rootNode.right, value)
    }
  }
}
  

function sortedArrayToBST(nums: number[]): TreeNode127 | null {
  let rootIdx = Math.floor(nums.length/2)

  if (nums.length === 0) return null
  let rootNode = new TreeNode127(nums[rootIdx])

  for (let i = rootIdx - 1; i >=0; i--) {
    
    // leafNode.left = new TreeNode127(nums[i])
    addToTree(rootNode, nums[i])

  }
  // debugger;

  for (let i = nums.length - 1; i > rootIdx; i--) {
    addToTree(rootNode, nums[i])
  }

  debugger;

  return rootNode;
};

sortedArrayToBST([0,1,2,3,4,5])