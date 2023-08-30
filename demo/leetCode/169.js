var majorityElement = function (nums) {
  let count = new Map();
  let maxCount = Math.floor(nums / 2);
  let majority = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (count.has(nums[i])) {
      count.set(nums[i], count.get(nums[i]) + 1);
    } else {
      count.set(nums[i], 1);
    }
    console.log(count);
    if (count.get(nums[i]) > count.get(majority)) {
      majority = nums[i];
    }
  }
  return majority;
};
let num = [6, 5, 5];
let res = majorityElement(num);
console.log(res);
