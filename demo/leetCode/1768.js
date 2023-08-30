var mergeAlternately = function (word1, word2) {
  //   let res = [];
  //   let i = 0,
  //     j = 0,
  //     k = 0;
  //   let altMode = false;
  //   while (k < word1.length + word2.length) {
  //     if (!altMode) {
  //       res.push(word1[i++]);
  //     } else {
  //       res.push(word2[j++]);
  //     }

  //     altMode = !altMode;
  //     if (i >= word1.length) {
  //       altMode = true;
  //     }
  //     if (j >= word2.length) {
  //       altMode = false;
  //     }
  //     k++;
  //   }
  //   return res.join("");
  const l1 = word1.length;
  const l2 = word2.length;
  let p = 0;
  let res = "";
  while (p < l1 && p < l2) {
    res += word1[p];
    res += word2[p];
    p++;
  }
  if (p < l1) {
    res += word1.substring(p);
  }
  if (p < l2) {
    res += word2.substring(p);
  }
  return res;
};
let word1 = "abc",
  word2 = "pqrst";
const res = mergeAlternately(word1, word2);
console.log(res);
