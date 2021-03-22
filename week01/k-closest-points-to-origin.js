// https://leetcode.com/problems/k-closest-points-to-origin/solution/

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

const pointsA = [
  [1, 3],
  [-2, 2],
];
const kA = 1;

const pointsB = [
  [3, 3],
  [5, -1],
  [-2, 4],
];
const kB = 2;

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

const answerA = kClosest(pointsA, kA);
console.log("answerA:", answerA);

const answerB = kClosest(pointsB, kB);
console.log("answerB:", answerB);
