function rearrangeArr(arr, n) {
  let pos = 0;
  let a = new Array(n);
  // let a = [];
  let i = 0;
  let j = n - 1;
  while (i < j) {
    a[pos++] = arr[j--];
    a[pos++] = arr[i++];
  }
  if (arr.length % 2 !== 0) {
    a[pos] = arr[i];
  }

  for (i = 0; i < n; i++) {
    arr[i] = a[i];
  }
  return arr;
}
let arr = [1, 2, 3, 4, 5, 6];
const res = rearrangeArr(arr, arr.length);
console.log(res);
