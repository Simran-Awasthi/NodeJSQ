var leftRightDifference = function (nums) {
  let ans = [];
  let left = Array(nums.length);
  let right = Array(nums.length);
  for (var i = 0; i < nums.length; i++) {
    if (i > 0) {
      left[i] = nums[i - 1] + left[i - 1];
      right[i] = right[i - 1] - nums[i];
    } else {
      left[i] = 0;
      right[i] = 0;
      for (var j = i + 1; j < nums.length; j++) {
        right[i] += nums[j];
      }
    }

    ans.push(Math.abs(left[i] - right[i]));
  }
  return ans;
};
let res = leftRightDifference([10, 4, 8, 3]);
console.log(res);
