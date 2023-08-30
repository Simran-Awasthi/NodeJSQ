// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");
// var pressedCount = 0;
// var triggerCount = 0;
// // const debouncedCount = _.debounce(() => {
// //   count.innerHTML = ++triggerCount;
// // }, 800);
// const throttledCount = _.throttle(() => {
//   count.innerHTML = ++triggerCount;
// }, 800);
// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   throttledCount();
// });
const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".incremnet_pressed");
const count = document.querySelector(".increment_count");
var pressedCount = 0;
var triggerCount = 0;
const debouncedCount = _.debounce(() => {
  count.innerHTML = ++triggerCount;
}, 800);
