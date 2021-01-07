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

class YetAnotherListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

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

function reverseList(
  head: YetAnotherListNode | null
): YetAnotherListNode | null {
  recursivizeList(null, head);

  function recursivizeList(
    previous: YetAnotherListNode | null,
    node: YetAnotherListNode | null
  ) {
    // base case
    if (!node) {
      return;
    } else {
      let next = node.next;
      node.next = previous;
      head = node;
      recursivizeList(node, next);
    }
  }

  debugger;
  return head;
}

let listNodeOne = new YetAnotherListNode(1);
let listNodeTwo = new YetAnotherListNode(2);
let listNodeThree = new YetAnotherListNode(3);
let listNodeFour = new YetAnotherListNode(4);
let listNodeFivev = new YetAnotherListNode(5);
listNodeOne.next = listNodeTwo;
listNodeTwo.next = listNodeThree;
listNodeThree.next = listNodeFour;
listNodeFour.next = listNodeFivev;
listNodeOne.next = listNodeTwo;

reverseList(listNodeOne);
