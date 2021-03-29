/**
 * WIP: https://leetcode.com/problems/copy-list-with-random-pointer/
 * Definition for a Node:
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

var copyRandomList = function (head) {
  if (!head) {
    return null;
  }

  const map = new Map();
  let currNode = null;

  currNode = head;
  while(currNode) {
      map.set(currNode, new Node(currNode.val, null, null));
      currNode = currNode
  }
};

const headA = [
  [7, null],
  [13, 0],
  [11, 4],
  [10, 2],
  [1, 0],
];
const answerA = copyRandomList(headA);
console.log("answerA:", answerA);

// const headB = [
//   [1, 1],
//   [2, 1],
// ];
// const answerB = copyRandomList(headB);
// console.log("answerB:", answerB);

// const headC = [
//   [3, null],
//   [3, 0],
//   [3, null],
// ];
// const answerC = copyRandomList(headC);
// console.log("answerC:", answerC);

// const headD = [];
// const answerD = copyRandomList(headD);
// console.log("answerD:", answerD);
