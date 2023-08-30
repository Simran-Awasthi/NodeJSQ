// var productExceptSelf = function (nums) {
//   let pl = new Array(nums.length);
//   let pr = new Array(nums.length);
//   let res = new Array(nums.length);
//   pl[0] = 1;
//   pr[0] = 1;

//   for (let i = 0; i < nums.length - 1; i++) {
//     pl[i + 1] = pl[i] * nums[i];
//   }

//   for (let i = 0; i < nums.length - 1; i++) {
//     pr[i + 1] = pr[i] * nums[nums.length - 1 - i];
//   }
//   for (let i = 0; i < nums.length; i++) {
//     res[i] = pl[i] * pr[nums.length - 1 - i];
//   }

//   return res;
// };
function productExceptSelf(nums) {
  const answer = [];
  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }
  console.log(answer);
  for (let i = nums.length - 2; i >= 0; i--) {
    postfix *= nums[i + 1];
    answer[i] *= postfix;
  }
  return answer;
}
let nums = [1, 2, 3, 4];
let res = productExceptSelf(nums);
console.log(res);
