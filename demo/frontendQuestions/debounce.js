// function debounceInvocation(wait, func) {
//   let timeId = 0;
//   return function (...args) {
//     clearTimeout(timeId);
//     timeId = setTimeout(() => {
//       func.apply(this, args);
//     }, wait);
//   };
// }
const debounceSeach = (wait, func) => {
  let timeId = 0;
  return function (...args) {
    clearTimeout(timeId);
    timeId = setTimeout(() => {
      func(...args);
    }, wait);
  };
};
const debouncedSearch = debounce(searchFunction, 300);
 