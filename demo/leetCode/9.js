var isPalindrome = function (x) {
  let sum = 0;
  let temp = x;
  while (temp > 0) {
    let digit = temp % 10;
    sum = sum * 10 + digit;
    temp = Math.floor(temp / 10);
  }

  return sum == x;
};
let x = -121;
let res = isPalindrome(x);

console.log(res);
