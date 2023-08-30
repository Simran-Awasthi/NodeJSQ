var MinStack = function () {
  this.data = [];
  this.minArr = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.data.push(val);
  let minEl = this.minArr[this.minArr.length - 1];
  if (minEl !== undefined && minEl < val) {
    this.minArr.push(minEl);
  } else {
    this.minArr.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.data.pop();

  //   this.minEl = this.minArr[this.topEl];
  this.minArr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.data[this.data.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  console.log(this.data, this.minArr);
  return this.minArr[this.minArr.length - 1];
};
// Your MinStack object will be instantiated and called as such:
var obj = new MinStack();
let op = ["MinStack", "push", "push", "push", "getMin", "pop", "getMin"];
let params = [[], [0], [1], [0], [], [], []];
for (let i = 1; i < op.length; i++) {
  switch (op[i]) {
    case "push":
      obj.push(params[i][0]);
      break;
    case "pop":
      obj.pop();
      break;
    case "top":
      var res = obj.top();

      console.log(res);
      break;
    case "getMin":
      var res = obj.getMin();
      console.log(res);
  }
}
