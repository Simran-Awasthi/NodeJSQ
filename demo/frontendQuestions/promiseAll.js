function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("fail"));
    }
    const countItemValue = 0;
    const res = [];
    if (promises.length === 0) {
      return resolve(res);
    }
    promises.forEach((promises, index) => {
      Promise.resolve(promises)
        .then((result) => {
          res[index] = result;
          countItemValue++;

          if (countItemValue === promises.length) {
            resolve(res);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

promiseAll([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // [1, 2, 3]
  })
  .catch((error) => {
    console.error(error);
  });
