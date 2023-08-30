var removeElement = function (nums, val) {
  //   var i = 0;
  //   var k = 0;
  //   var j = nums.length - 1;
  //   while (i <= j) {
  //     if (nums[i] == val) {
  //       while (nums[j] == val && j > i) {
  //         j--;
  //         k++;
  //       }

  //       let temp = nums[i];
  //       nums[i] = nums[j];
  //       nums[j] = temp;
  //       j--;
  //       k++;
  //     }
  //     i++;
  //   }
  //   return nums.length - k;
  //   var j = 0;
  //   for (var i = 0; i < nums.length; i++) {
  //     if (nums[i] != val) {
  //       nums[j++] = nums[i];
  //     }
  //   }
  //   return j;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    console.log(left, right);
    if (nums[left] === val) {
      nums[left] = nums[right];
      right--;
    } else {
      left++;
    }
  }

  return left;
};
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let res = removeElement(nums, 2);
console.log(res);
console.log(nums);
