// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

var a3 = new ListNode(3, null);
var a2 = new ListNode(4, a3);
var a1 = new ListNode(2, a2);

var b3 = new ListNode(4, null);
var b2 = new ListNode(6, b3);
var b1 = new ListNode(5, b2);

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(a1, b1, c1 = null) {
  let new1 = null;
  let remainder = 0;
  if (a1.next !== null && b1.next !== null) {
    remainder = a1.val + b1.val > 9 ? (a1.val + b1.val) % 10 : 0;
    new1 = new ListNode(remainder > 0 ? 0 : a1.val + b1.val, new1);
    c1 = c1 || c1.next === null ? new1 : new1.next;
    addTwoNumbers(a1.next, b1.next, c1);
  } else {
    return c1;
  }
};

console.log(addTwoNumbers(a1, b1, new ListNode(0, null)));
