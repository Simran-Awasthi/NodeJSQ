function leftRotate(arr, d, n) {
  for (var i = 0; i < d; i++) {
    let temp = arr[0];

    for (var j = 0; j < n - 1; j++) {
      arr[j] = arr[j + 1];
    }
    arr[j] = temp;
  }
  return arr;
}
var arr = [1, 2, 3, 4, 5, 6];
var d = 2;
const res = leftRotate(arr, d, arr.length);
console.log(res);
//  RIGHT ROTATION
// const rightRotation = (arr, d, n) => {
//   for (var i = n - 1; i < d; i--) {
//     let temp = arr[n];

//     for (var j = n - 1; j < n - 1; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = temp;
//   }
//   return arr;
// };
// var arr = [1, 2, 3, 4, 5, 6];
// var d = 2;
// const res = rightRotation(arr, d, arr.length);
// console.log(res);
// rotation using reversal technique
// const rev = (arr, n, d) => {
//   let i = 0;
//   let j = n - 1;
// while (i < j) {
//
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }
//   for (j = n - 1; j >= n / 2; j--) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//   }
//   return arr;
// };

// function rotateReversal(arr, n, d) {
//   let i = 0;
//   let j = n - 1;
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
//   i = 0;
//   j = n - d - 1;
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }

//   i = n - d;
//   j = n - 1;
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }

//   return arr;
// }
// function run(arr, n, d) {
//   start = performance.now();
//   rev(arr, n, d);
//   first = performance.now() - start;
//   start = performance.now();
//   rotateReversal(arr, n, d);
//   second = performance.now() - start;
//   return [first, second];
// }

// var arr = [1, 2, 3, 4, 5, 6, 7];
// var d = 2;
// const res = rotateReversal(arr, arr.length, d);
// console.log(res);
