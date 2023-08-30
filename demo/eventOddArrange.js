const eventOddArrange = (arr, n) => {
  for (var i = 0; i < n; i++) {
    if ((i + 1) % 2 == 0) {
      // swap two elements
      if (arr[i] < arr[i - 1]) {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      }
    } else {
      // swap two elements
      if (arr[i] > arr[i - 1]) {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      }
    }
  }
  return arr;
};
let arr = [1, 2, 2, 1];
let res = eventOddArrange(arr, arr.length);
console.log(res);
