var isAnagram = function (s, t) {
  // if(s.length!==t.length){
  //     return false
  // }
  // let chars = new Map()

  // for(var i =0;i<s.length;i++){

  //     chars.set(s[i],chars.get(s[i])+1|| 1)
  // }
  // for(let j = 0 ; j<t.length;j++){
  // if(!chars.has(t[j])){
  //     return false
  // }
  // if(chars.has(t[j] )&& chars.get(t[j])<=0){
  // return false
  // }chars.set(t[j],chars.get(t[j])-1)
  // }
  // return true
  if (s.length !== t.length) {
    return false;
  }
  let chars = {};
  for (let i of s) {
    chars[i] = (chars[i] || 0) + 1;
  }
  for (let j in t) {
    if (!chars[j]) {
      return false;
    }
    chars[j] -= 1;
  }
  return true;
};
