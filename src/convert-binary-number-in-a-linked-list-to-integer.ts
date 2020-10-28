// convert-binary-number-in-a-linked-list-to-integer.ts
// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0: val)
    this.next = (next === undefined ? null : next)
  }
}

// I don't really understand what << is doing here.


const getDecimalValue = (head: ListNode | null, prev: number = 0): number => !head ? prev : getDecimalValue(head.next, prev << 1 | head.val)

let a = new ListNode(1)
let b = new ListNode(0)
let c = new ListNode(1)
a.next = b
b.next = c

