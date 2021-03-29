/**
 * WIP: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * Definition for a binary tree node:
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function (root, p, q) {
  root.sort();
  console.log(root);
  if (!root.length()) {
    return null;
  }

  //   if (root.val === p.val || root.val === q.val) {
  //     return root;
  //   }

  //   const left = lowestCommonAncestor(root.left, p, q); // 5
  //   const right = lowestCommonAncestor(root.right, p, q); // 1

  //   if (!left && !right) {
  //     return root;
  //   } else if (!left) {
  //     return left;
  //   } else {
  //     return right;
  //   }
};

const rootA = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
const pA = 5;
const qA = 1;
const answerA = lowestCommonAncestor(rootA, pA, qA); // 3
console.log("answerA:", answerA);

const rootB = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
const pB = 5;
const qB = 4;
console.log("answerB:", answerB);
const answerB = lowestCommonAncestor(rootB, pB, qB); // 5
