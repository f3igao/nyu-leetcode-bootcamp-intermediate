/**
 * WIP: https://leetcode.com/problems/k-closest-points-to-origin/solution/
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

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function buildTree(points) {
  const tree = new Array();
  // create tree
  points.forEach((point) => {
    const newNode = TreeNode(point);
    if (tree.length) {
      const currNode = tree[0];
      if(!currNode.left && !currNode.right) {

      } else {

      }
    } else {
      // set newNode as root node
      tree.push(newNode);
    }
  });
}

var kClosest = function (points, k) {
  const pointsObjs = [];
  const finalPoints = [];

  // find distance to origin for each point
  points.forEach((point, i) => {
    const distance = Math.sqrt(point[0] ** 2 + point[1] ** 2);
    const distanceObj = {
      distance: distance,
      index: i,
      point: point,
    };
    pointsObjs.push(distanceObj);
  });

  // sort pointsObjs array by distance asc
  pointsObjs.sort((a, b) => a.distance - b.distance);

  for (let i = 0; i < k; i++) {
    const point = pointsObjs[i].point;
    finalPoints.push(point);
  }
  return finalPoints;
};

const pointsA = [
  [1, 3],
  [-2, 2],
];
const kA = 1;
const answerA = kClosest(pointsA, kA);
console.log("answerA:", answerA);

const pointsB = [
  [3, 3],
  [5, -1],
  [-2, 4],
];
const kB = 2;
const answerB = kClosest(pointsB, kB);
console.log("answerB:", answerB);
