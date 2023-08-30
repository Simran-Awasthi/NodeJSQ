var containsDuplicate = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < i; j++) {
      let isDuplicate = nums[j] === num[i];
      return true;
    }
  }
  return false;
};
let num = [1, 2, 3, 1];
let res = containsDuplicate(num);
console.log(res);
