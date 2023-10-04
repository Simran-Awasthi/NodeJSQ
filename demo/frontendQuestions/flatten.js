// basic approach//
function flattern(val) {
  let res = [];
  let copy = val.slice();
  while (copy.length) {
    const item = copy.shift();
    console.log(item, copy);
    if (Array.isArray(item)) {
      copy.unshift(...item);
      console.log(item, copy);
    } else {
      res.push(item);
    }
  }
  return res;
}
//Recursive approach with Array.reduce
function flatten(value) {
  return value.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
    []
  );
}
arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let res = flattern(arr);
console.log(res);
