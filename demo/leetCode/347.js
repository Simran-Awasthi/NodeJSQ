var topKFrequent = function (nums, k) {
  let freqMap = new Map();
  nums.forEach((element) => {
    freqMap.set(element, freqMap.get(element) + 1 || 1);
  });

  let sortedFreq = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);
  console.log(sortedFreq);
  let res = [];
  for (var i = 0; i < k; i++) {
    res.push(sortedFreq[i][0]);
  }

  return res;
};
let arr = [1, 1, 1, 2, 2, 3];
let res = topKFrequent(arr, 2);
console.log(res);
