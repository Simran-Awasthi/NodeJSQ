// sort an arrary in a wave form

// const waveSort = (arr) => {
//   //  swapping of adjacent element

//   arr.sort((a, b) => a - b);
//   for (i = 0; i < arr.length - 1; i += 2) {
//     let temp = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = temp;
//   }
//   return arr;
// };

function swap() {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
const betterWaveSort = (arr) => {
  for (i = 0; i < n; i += 2) {
    if (i > 0 && arr[i - 1] > arr[i]) {
      swap(arr, i - 1, i);
    }
    if (i < n - 1 && arr[i] < arr[i + 1]) {
      swap(arr, i, i + 1);
    }
  }
  return arr;
};

const arr = [5, 2, 3, 4, 1];
const res = waveSort(arr, arr.length);
console.log(res);
