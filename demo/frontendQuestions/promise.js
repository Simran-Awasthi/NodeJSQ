const asyncOperation = new Promise(function (resolve, reject) {

  setTimeout(() => {
    resolve("Operation succeeded!");
  }, 3000);
});
asyncOperation
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error(error);
  });
