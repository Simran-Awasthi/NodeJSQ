//program of minmiax

function minMax(arr, n) {
  if (n == 0) {
    return -1;
  }
  let max = arr[0];
  let min = arr[0];
  for (var i = 1; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [min, max];
}
var arr = [-1, -2, -3];
var res = minMax(arr, arr.length);
console.log(res);
