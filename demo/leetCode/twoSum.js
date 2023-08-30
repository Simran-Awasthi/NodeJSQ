var twoSum = function (nums, target) {
  //   for (var i = 0; i < nums.length - 1; i++) {
  //     for (var j = i + 1; j < nums.length; j++) {
  //       if (nums[i] + nums[j] == target) {
  //         return [i, j];
  //       }
  //     }
  //   }
  //   return -1;
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[target - nums[i]] != undefined) {
      return [i, obj[target - nums[i]]];
    }
    obj[nums[i]] = i;
  }
};
let arr = [2, 7, 11, 15];
let res = twoSum(arr, 9);
console.log(res);
