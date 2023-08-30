var canBeIncreasing = function (nums) {
  var max = nums[0];
  let removed = [];
  for (var i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      removed.push(nums[i - 1]);
      if (max > nums[i] && removed.length > 0) {
        return false;
      } else {
        max = nums[i];
      }
    }
  }
  return removed.length < 2;
};
let nums = [2, 3, 1, 2];
let res = canBeIncreasing(nums);
console.log(res);
