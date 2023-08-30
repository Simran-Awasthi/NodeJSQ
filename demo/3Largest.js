function find3Largest(arr, n) {
  let first, second, third;
  first = second = third = 0;

  for (var i = 0; i < n; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second) {
      third = second;
      second = arr[i];
    } else if (arr[i] > third) third = arr[i];
  }

  return first, second, third;
}
const arr = [16, 17, 4, 3, 5, 2];
const res = find3Largest(arr, arr.length);
console.log(res);
