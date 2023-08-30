function binarySearch(arr, n, x) {
  var left = 0;
  var right = n - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((right + left) / 2);
    if (arr[mid] == x) {
      return mid;
    } else if (arr[mid] > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return mid + 1;
}

arr = [1, 3, 5, 6];

let res = binarySearch(arr, arr.length, 7);
console.log(res);
