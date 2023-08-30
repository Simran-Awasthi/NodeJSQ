function binarySearch(arr, data) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (data === arr[mid]) {
      return mid;
    } else if (data < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

let arr = [1, 2, 3, 12, 16, 14];
let data = 19;
let res = binarySearch(arr, data);
console.log(res);
