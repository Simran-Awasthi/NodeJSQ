var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  let result = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(result) !== 0) {
      console.log(result, strs[i].indexOf(result), i);
      result = result.substring(0, result.length - 1);
      if (!result.length) return "";
    }
  }
  return result;
};
let strs = ["flight", "flower", "flow"];
let res = longestCommonPrefix(strs);
console.log(res);
