const countBy = (arr, iteratee) => {
  const result = {};
  const getKey =
    typeof iteratee === "function" ? iteratee : (value) => value[iteratee];
  for (let element of arr) {
    const key = getKey(element);
    if (!(key in element)) {
      result[key] = 0;
    } else {
      result[key]++;
    }
  }
  return result;
};
