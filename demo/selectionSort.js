const selectionSort = (arr) => {
  for (var i = 0; i < arr.length - 1; i++) {
    let min_idx = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min_idx];
    arr[min_idx] = temp;
  }
  return arr;
};

const arr = [5, 2, 3, 4, 1];
const res = selectionSort(arr, arr.length);
console.log(res);
