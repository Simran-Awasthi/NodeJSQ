const findSubSum = (arr, n, target) => {
  //   for (var i = 0; i < n - 1; i++) {
  //     var sum = arr[i];
  //     let k = i + 1;
  //     for (; k < n; k++) {
  //       sum += arr[k];
  //       if (sum >= target) {
  //         break;
  //       }
  //     }

  //     if (sum == target) {
  //       return [i, k];
  //     }
  //   }
  //   return -1;
  let sum = arr[0];
  var start = 0;
  for (var i = 1; i < n; i++) {
    sum += arr[i];

    while (sum > target) {
      sum -= arr[start];
      start++;
    }
    if (sum == target) {
      return [start, i];
    }
  }
  return -1;
};
const arr = [1, 4, 20, 3, 10, 5];
// const arr = [1, 4, 0, 0, 3, 10, 5];
const res = findSubSum(arr, arr.length, 33);
console.log(res);
