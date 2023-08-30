function singleOccurence(arr, n) {
  //   for (var i = 0; i < n; i++) {
  //     let count = 0;
  //     for (var j = 0; j < n; j++) {
  //       if (arr[i] === arr[j]) {
  //         count++;
  //         console.log(arr);
  //       }
  //     }
  //     if (count === 1) {
  //       return arr[i];
  //     }
  //   }
  //   return -1;

  let numberCount = new Map();
  for (var i = 0; i < n; i++) {
    if (numberCount.has(arr[i])) {
      numberCount.set(arr[i], numberCount.get(arr[i]) + 1);
    } else {
      numberCount.set(arr[i], 1);
    }
  }
  for (let i = 0; i < n; i++) {
    if (numberCount.get(arr[i]) == 1) {
      return arr[i];
    }
  }

  return -1;
}
function findSingle(ar, ar_size) {
  // Do XOR of all elements and return
  let res = ar[0];
  for (let i = 1; i < ar_size; i++) res = res ^ ar[i];

  return res;
}

// const arr = [3, 5, 4, 5, 3, 4, 6];
// const res = singleOccurence(arr, arr.length);
// console.log(res);
const arr1 = [3, 5, 4, 5, 3, 4, 6];
const res1 = findSingle(arr1, arr1.length);
console.log(res1);
