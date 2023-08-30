var strStr = function (haystack, needle) {
  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[0]) {
      let j = i + 1;
      k = 1;
      while (haystack[j] == needle[k] && k < needle.length) {
        j++;
        k++;
      }
      console.log(i, j, k);
      if (k == needle.length) {
        return i;
      }
    }
  }
  return -1;
};
let haystack = "mississippi";
let needle = "issip";
let res = strStr(haystack, needle);
console.log(res);
