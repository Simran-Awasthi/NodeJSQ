var wordPattern = function (pattern, s) {
  let letterMapper = new Map();
  let wordMapper = new Map();
  let words = s.split(" ");
  if (pattern.length !== words.length) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    if (letterMapper.has(pattern[i])) {
      if (letterMapper.get(pattern[i]) !== words[i]) {
        return false;
      }
    } else {
      if (wordMapper.has(words[i])) {
        return false;
      }
      letterMapper.set(pattern[i], words[i]);
      wordMapper.set(words[i], pattern[i]);
    }
  }
  return true;
};

let pattern = "abba";
let s = "aa aa aa aa";
let res = wordPattern(pattern, s);
console.log(res);
