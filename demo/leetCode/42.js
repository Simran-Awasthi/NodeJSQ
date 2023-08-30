var trap = function (height) {
  let rightMax = [];
  let lm = 0,
    rm = 0;
  let i = 0;
  let j = 0;

  //   for (let i = 1; i < height.length; i++) {
  //     lm = Math.max(lm, height[i - 1]);
  //     leftMax[i] = lm;
  //   }

  //   for (let i = height.length - 2; i >= 0; i--) {

  //     rm = Math.max(rm, height[i + 1]);
  //     rightMax[i] = rm;
  //   }
  //   rightMax.push(0);
  //   console.log(rightMax);
  j = height.length - 1;

  let res = 0;

  while (i <= j) {
    lm = Math.max(lm, i > 0 ? height[i - 1] : 0);
    rm = Math.max(rm, j < height.length - 1 ? height[j + 1] : 0);
    let limit = Math.min(lm, rm);
    if (lm <= rm) {
      console.log(height[i], height[j], limit, lm, rm);
      if (limit - height[i] > 0) {
        res += limit - height[i];
      }
      i++;
    } else {
      console.log(height[i], height[j], limit, lm, rm);
      if (limit - height[j] > 0) {
        res += limit - height[j];
      }
      j--;
    }
  }
  return res;
};
let height = [4, 2, 0, 3, 2, 5];
let res = trap(height);
console.log(res);
