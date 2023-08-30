var nextGreaterElement = function (nums1, nums2) {
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) {
        if (j < nums2.length - 1 && nums2[j + 1] > nums2[j]) {
          result.push(nums2[j + 1]);
        } else {
          result.push(-1);
        }
      }
    }
  }
  return result;
};

let nums1 = [4, 1, 2];
let nums2 = [1, 3, 4, 2];
let res = nextGreaterElement(nums1, nums2);
console.log(res);
