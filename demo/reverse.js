//  inplace

function reverseString(arr, n) {
  //   while (start < end) {
  //     let temp = arr[start];
  //     arr[start] = arr[end];
  //     arr[end] = temp;
  //     start++;
  //     end--;
  //   }
  // }
  // function printArr(arr, size) {
  //   for (var i = 0; i < size; i++) {
  //     console.log(arr[i]);
  //   }
  // }
  // var arr = [1, 2, 3, 4, 5, 6];
  // var n = 6;

  // printArr(arr, n);

  // reverseString(arr, 0, n - 1);
  // console.log("Reversed array is");
  // printArr(arr, n);

  // new variable
  let rev = [];
  for (var i = n - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  return rev;
}
var arr = [1, 2, 3];
var res = reverseString(arr, arr.length);
console.log(res);
