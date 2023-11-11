function PerformTask(callback) {
  setTimeout(() => {
    console.log("Task completed!");
    callback();
  }, 2000);
  function handleSubmit() {
    console.log("callback executed");
  }
}
PerformTask(handleSubmit);
