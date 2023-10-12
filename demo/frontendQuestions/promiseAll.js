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
