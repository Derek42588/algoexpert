"use strict";
// convert-binary-number-in-a-linked-list-to-integer.ts
// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val === undefined ? 0: val)
//     this.next = (next === undefined ? null : next)
//   }
// }
// I don't really understand what << is doing here.
var getDecimalValue = function (head, prev) {
    if (prev === void 0) { prev = 0; }
    return !head ? prev : getDecimalValue(head.next, (prev << 1) | head.val);
};
var a = new ListNode(1);
var b = new ListNode(0);
var c = new ListNode(1);
a.next = b;
b.next = c;
//# sourceMappingURL=convert-binary-number-in-a-linked-list-to-integer.js.map