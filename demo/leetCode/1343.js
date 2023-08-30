var numOfSubarrays = function (arr, k, threshold) {
  let count = 0;
  let sum = 0;
  let i = 0;
  for (var e = i; e < i + k; e++) {
    sum += arr[e];
  }
  for (i = 0; i + k <= arr.length; i++) {
    if (Math.floor(sum / k) >= threshold) {
      count++;
    }

    sum -= arr[i];
    sum += arr[i + k];
  }
  return count;
};
let arr = [1, 1, 1, 1, 1];
let k = 1;
let threshold = 0;
let res = numOfSubarrays(arr, k, threshold);
console.log(res);
