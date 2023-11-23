const throttle = (func, delay) => {
  let isThrottled = false;
  return function (...args) {
    if (!isThrottled) {
      func(...args);
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, delay);
    }
  };
};
const throttledButtonClick = throttle(apiCallFunction, 1000);
