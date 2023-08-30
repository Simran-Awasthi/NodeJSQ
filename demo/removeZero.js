// const removeZero = (arr, n) => {
//   let pos = 0;
//   for (var i = 0; i < n; i++) {
//     if (arr[i] != 0) {
//       arr[pos] = arr[i];
//       pos += 1;
//     }
//   }
//   for (var i = pos; i < n; i++) {
//     arr[i] = 0;
//   }
//   return arr;
// };
var moveZeroes = function (nums) {
  let pos = 0;
  let res = new Array(nums.length);
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      res[pos] = nums[i];
      pos++;
    }
  }
  res.fill(0, pos);

  nums.splice(0, nums.length, ...res);
  return nums;
};

let arr = [1, 3, 4, 0, 8, 7, 0, 0, 6, 0, 0, 5];
const res = moveZeroes(arr, arr.length);
console.log(arr);
