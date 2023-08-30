// const add = (a, b) => {
//   return a + b;
// };
// const sum = (n) => {
//   let count = 0;
//   for (var i = 1; i <= n; i++) {
//     count = add(count, i);
//   }
//   return count;
// };
// const res = sum(10);
// console.log(res);

// const largestNumber = (n) => {
//   let max = arr[0];
//   for (var i = 1; i < n; i++) {
//     if (arr[i] > max) {
//       arr[i] = max;
//     }
//   }
//   return max;
// };
// const res = largestNumber[(1, 3, 4, 5, 7)];
// const search = (arr, n, x) => {
//   let last = arr[n - 1];
//   arr[n - 1] = key;
//   for (var i = 0; i < n; i++) {
//     if (arr[i] == x) {
//       return i;
//     }
//   }
//   return -1;
// };
// let arr = [3, 5, 7, 6];
// let x = 7;
// let n = arr.length;

// let result = search(arr, n, x);
// if (result == -1) {
//   console.log("Element is not present in array");
// } else console.log("Element is present at index " + result);
// const sentinelSearch = (arr, n, key) => {
//   let last = arr[n - 1];
//   arr[n - 1] = key;
//   let i = 0;
//   while (arr[i] != key) {
//     i++;
//   }
//   arr[n - 1] = last;
//   if (i < n - 1 || arr[n - 1] == key) {
//     return i;
//   }
//   return -1;
// };

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let key = 5;
// let n = arr.length;

// let index = sentinelSearch(arr, n, key);
// if (index === -1) {
//   console.log(`${key} is not found in the array: ${arr}`);
// } else console.log(`${key} is present at index ${index} in the array: ${arr}`);

// const largest = (arr, n) => {
//   let x = [0];
//   let y = [0];
//   for (i = 1; i < n; i++) {
//     if (arr[i] > x) {
//       x == arr[i];
//     } else if (arr[i] > y) {
//       arr[i] == y;
//     }
//     return x, y;
//     return -1;
//   }
// };
