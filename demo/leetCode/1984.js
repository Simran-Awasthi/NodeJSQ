var minimumDifference = function (nums, k) {
  let sortedNums = nums.sort((a, b) => a - b);
  console.log(sortedNums);
  let i = 0,
    j = 0 + k - 1;
  let minDiff = Number.MAX_SAFE_INTEGER;
  while (j < sortedNums.length) {
    let diff = Math.abs(sortedNums[i] - sortedNums[j]);
    minDiff = Math.min(minDiff, diff);
    i++;
    j++;
  }
  return minDiff;
};

let nums = [87063, 61094, 44530, 21297, 95857, 93551, 9918],
  k = 6;

let res = minimumDifference(nums, k);
console.log(res);
