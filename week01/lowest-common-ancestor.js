// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/submissions/

/**
 * Definition for a binary tree node.
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

const mockRoot = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
const mockP = 5;
const mockQ = 1;

var lowestCommonAncestor = function (root, p, q) {
  root.sort();
  console.log(root);
  //   if (!root) {
  //     return null;
  //   }

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

lowestCommonAncestor(mockRoot, mockP, mockQ);
