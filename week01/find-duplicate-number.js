/**
 * https://leetcode.com/problems/find-the-duplicate-number/
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  nums.sort();
  let currNum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (currNum === nums[i]) {
      return currNum;
    } else {
      currNum = nums[i];
    }
  }
};

const numsA = [1, 3, 4, 2, 2];
const answerA = findDuplicate(numsA);
console.log("answerA:", answerA);
