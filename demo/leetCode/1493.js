var longestSubarray = function (nums) {
  let i = 0,
    j = 0;
  let zeros = 0;
  let maxCount = 0;
  for (; i < nums.length; i++) {
    if (nums[i] == 0) {
      zeros++;
    }
    while (zeros > 1) {
      if (nums[j] == 0) {
        zeros--;
      }
      j++;
    }
    maxCount = Math.max(maxCount, i - j + 1 - zeros);
  }
  return maxCount == nums.length ? maxCount - 1 : maxCount;
};
