var canPlaceFlowers = function (flowerbed, n) {
  // let i = 0;
  // let j = 0;
  // let count = 0;
  // while (i < flowerbed.length - 1 && j < flowerbed.length) {
  //   if (flowerbed[i] == 0) {
  //     j = i;
  //     console.log(i, j);
  //     while (flowerbed[j] == 0 && j < flowerbed.length) {
  //       j++;
  //       console.log(i, j);
  //     }
  //     if (j - i >= 2) {
  //       count++;
  //       console.log(count);
  //     }
  //     i == j;
  //   }
  //   i++;
  // }
  // return count == n;
  let i = 0;
  let count = 0;
  // if (flowerbed.length == 1) {
  //   return flowerbed[0] == 0;
  // }
  while (i < flowerbed.length) {
    if (flowerbed[i] == 0) {
      if (
        i < flowerbed.length - 2 &&
        flowerbed[i + 1] == 0 &&
        flowerbed[i + 2] == 0
      ) {
        count++;
        i = i + 1;
      } else if (
        flowerbed[i + 1] == 0 &&
        (i == flowerbed.length - 2 || i == 0)
      ) {
        count++;
      } else if (flowerbed[i] == 0 && flowerbed.length == 1) {
        count++;
      }
      console.log(count);
    }
    i++;
  }
  return count == n;
};
let num = [0];
let res = canPlaceFlowers(num, 1);
console.log(res);
