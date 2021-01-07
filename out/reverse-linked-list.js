"use strict";
/*
reverse-linked-list.ts
https://leetcode.com/problems/reverse-linked-list/
*/
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
var YetAnotherListNode = /** @class */ (function () {
    function YetAnotherListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return YetAnotherListNode;
}());
// function reverseList(
//   head: YetAnotherListNode | null
// ): YetAnotherListNode | null {
//   let prev = null;
//   let current = head;
//   let next = current?.next;
//   while (current !== null) {
//     next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//     debugger;
//   }
//   debugger;
//   return prev;
// }
function reverseList(head) {
    recursivizeList(null, head);
    function recursivizeList(previous, node) {
        // base case
        if (!node) {
            return;
        }
        else {
            var next = node.next;
            node.next = previous;
            head = node;
            recursivizeList(node, next);
        }
    }
    debugger;
    return head;
}
var listNodeOne = new YetAnotherListNode(1);
var listNodeTwo = new YetAnotherListNode(2);
var listNodeThree = new YetAnotherListNode(3);
var listNodeFour = new YetAnotherListNode(4);
var listNodeFivev = new YetAnotherListNode(5);
listNodeOne.next = listNodeTwo;
listNodeTwo.next = listNodeThree;
listNodeThree.next = listNodeFour;
listNodeFour.next = listNodeFivev;
listNodeOne.next = listNodeTwo;
reverseList(listNodeOne);
//# sourceMappingURL=reverse-linked-list.js.map