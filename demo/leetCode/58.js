var lengthOfLastWord = function (s) {
  // var i = 0;
  // var j = 1;
  // var len = 0;
  // while (i < s.length) {
  //   if (s[i] !== " ") {
  //     j = i;
  //     while (s[j] !== " " && j < s.length) {
  //       j++;
  //     }

  //     len = j - i;
  //     i = j;
  //   }
  //   i++;
  // }
  // return len;
  let i = s.length - 1;
  let length = 0;
  while (s[i] == " ") {
    i--;
  }
  while (i >= 0 && s[i] != " ") {
    length++;
    i--;
  }
  return length;
};
let str = "  fly me   to   the moon  ";
let res = lengthOfLastWord(str);
console.log(res);
