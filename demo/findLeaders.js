function findLeaders(arr, n) {
  let leaders = [];
  let max = arr[n - 1];
  for (var i = n - 2; i >= 0; i--) {
    if (max < arr[i]) {
      max = arr[i];
      leaders.push(arr[i]);
    }
  }
  leaders.push(arr[n - 1]);
  return leaders;
}
const arr = [16, 17, 4, 3, 5, 2];
const res = findLeaders(arr, arr.length);
console.log(res);
