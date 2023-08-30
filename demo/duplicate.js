function containDuplicate(nums) {
  let found = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (found.has(nums[i])) {
      return true;
    } else {
      found.set(nums[i], i);
    }
  }
  return false;
}

let val = [1, 2, 3, 4];
let res = containDuplicate(val);
console.log(res);
