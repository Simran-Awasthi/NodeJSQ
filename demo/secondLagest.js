function secondLagest(arr, n) {
  let max = [];
  let secondMax = [];
  for (var i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }
  return max, secondMax;
}
let arr = [4, 8, 32, 6, 7, 15];
const res = secondLagest(arr, arr.length);
console.log(res);
