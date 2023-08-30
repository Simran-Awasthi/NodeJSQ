function evenOdd(arr, n) {
  let a = [];
  let pos = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) {
      a[pos] = arr[i];
      pos += 1;
    }
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 != 0) {
      a[pos] = arr[i];
      pos += 1;
    }
  }

  return a;
}

// function evenOdd(arr, n) {
//   let index = -1;
//   for (let i = 0; i < n; i++) {
//     if (arr[i] % 2 == 0) {
//       index++;
//       let temp = arr[i];
//       arr[i] = arr[index];
//       arr[index] = temp;
//     }
//   }
//   return arr;
// }
var arr = [2, 1, 3, 4, 5, 6, 7];
var res = evenOdd(arr, arr.length);
console.log(res);
