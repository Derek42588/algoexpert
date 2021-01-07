/*

merge-two-sorted-lists.ts
https://leetcode.com/problems/merge-two-sorted-lists/

Analyses:

Time: O (mologmo)
Space: ( m + o) where m is number of nodes in L1, o in L2

*/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// export function mergeTwoSortedLists(
//   listOne: ListNode | null,
//   listTwo: ListNode | null
// ): ListNode | null {
//   let listOneNode: ListNode | null = listOne;
//   let listTwoNode: ListNode | null = listTwo;

//   let valsToAddToReturnLL = [];
//   let root: ListNode | null = null;
//   let node: ListNode | null = null;

//   while (listOneNode) {
//     valsToAddToReturnLL.push(listOneNode.val);
//     listOneNode = listOneNode.next;
//   }
//   while (listTwoNode) {
//     valsToAddToReturnLL.push(listTwoNode.val);
//     listTwoNode = listTwoNode.next;
//   }

//   valsToAddToReturnLL.sort((a, b) => a - b);
//   // now the array should be sorted

//   for (let i = 0; i < valsToAddToReturnLL.length; i++) {
//     if (i === 0) {
//       root = new ListNode(valsToAddToReturnLL[i]);
//       node = root;
//     } else {
//       if (node) {
//         node.next = new ListNode(valsToAddToReturnLL[i]);
//         node = node.next;
//       }
//     }
//   }
//   debugger;

//   return root;
// }

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let listOneNode: ListNode | null = l1;
  let listTwoNode: ListNode | null = l2;

  let root: ListNode | null = null;
  let node: ListNode | null = null;

  while (listOneNode || listTwoNode) {
    if (!root) {
      root = returnLesserValues(listOneNode, listTwoNode);
      if (root) node = root;
      if (listOneNode) {
        listOneNode = listOneNode.next;
      }
      if (listTwoNode) {
        listTwoNode = listTwoNode.next;
      }
    } else {
      if (node) {
        // debugger;
        node.next = returnLesserValues(listOneNode, listTwoNode);
        // debugger;
        if (listOneNode && node.next && node.next.val === listOneNode.val) {
          listOneNode = listOneNode.next;
        }
        if (listTwoNode && node.next && node.next.val === listTwoNode.val) {
          listTwoNode = listTwoNode.next;
        }
        debugger;
        node = node.next;
      }
    }
  }

  debugger;
  return root;
}
function returnLesserValues(
  valOne: ListNode | null,
  valTwo: ListNode | null
): ListNode | null {
  let node: ListNode | null;

  if (valOne && valTwo) {
    if (valOne.val < valTwo.val) {
      node = new ListNode(valOne.val);
      // node.next = new ListNode(valTwo.val);
    } else {
      node = new ListNode(valTwo.val);
      // node.next = new ListNode(valOne.val);
    }
  } else if (valOne) {
    node = new ListNode(valOne.val);
  } else if (valTwo) {
    node = new ListNode(valTwo.val);
  } else {
    node = null;
  }

  debugger;
  return node;
}

// [ 1, 2, 4]
// [1, 3, 4]
let rootOne = new ListNode(1);
let r11 = new ListNode(2);
let r12 = new ListNode(4);
rootOne.next = r11;
r11.next = r12;

let rootTwo = new ListNode(1);
let r21 = new ListNode(3);
let r22 = new ListNode(4);

rootTwo.next = r21;
r21.next = r22;

mergeTwoLists(rootOne, rootTwo);
