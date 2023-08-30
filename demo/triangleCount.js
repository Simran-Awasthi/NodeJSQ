function triangleCount(arr, n) {
  let count = 0;
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      for (var k = j + 1; k < n; k++) {
        if (
          arr[i] + arr[j] > arr[k] &&
          arr[j] + arr[k] > arr[i] &&
          arr[k] + arr[i] > arr[j]
        )
          count++;
      }
    }
  }
  return count;
}
const arr = [10, 21, 22, 100, 101, 200, 300];
const res = triangleCount(arr, arr.length);
console.log(res);
