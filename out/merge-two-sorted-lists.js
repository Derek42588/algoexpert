"use strict";
/*

merge-two-sorted-lists.ts
https://leetcode.com/problems/merge-two-sorted-lists/

Analyses:

Time: O (mologmo)
Space: ( m + o) where m is number of nodes in L1, o in L2

*/
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
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
function mergeTwoLists(l1, l2) {
    var listOneNode = l1;
    var listTwoNode = l2;
    var root = null;
    var node = null;
    while (listOneNode || listTwoNode) {
        if (!root) {
            root = returnLesserValues(listOneNode, listTwoNode);
            if (root)
                node = root;
            if (listOneNode) {
                listOneNode = listOneNode.next;
            }
            if (listTwoNode) {
                listTwoNode = listTwoNode.next;
            }
        }
        else {
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
function returnLesserValues(valOne, valTwo) {
    var node;
    if (valOne && valTwo) {
        if (valOne.val < valTwo.val) {
            node = new ListNode(valOne.val);
            // node.next = new ListNode(valTwo.val);
        }
        else {
            node = new ListNode(valTwo.val);
            // node.next = new ListNode(valOne.val);
        }
    }
    else if (valOne) {
        node = new ListNode(valOne.val);
    }
    else if (valTwo) {
        node = new ListNode(valTwo.val);
    }
    else {
        node = null;
    }
    debugger;
    return node;
}
// [ 1, 2, 4]
// [1, 3, 4]
var rootOne = new ListNode(1);
var r11 = new ListNode(2);
var r12 = new ListNode(4);
rootOne.next = r11;
r11.next = r12;
var rootTwo = new ListNode(1);
var r21 = new ListNode(3);
var r22 = new ListNode(4);
rootTwo.next = r21;
r21.next = r22;
mergeTwoLists(rootOne, rootTwo);
//# sourceMappingURL=merge-two-sorted-lists.js.map