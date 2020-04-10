/**
 * initialize your data structure here.
 */
var MinStack = function () {
  // current minimum
  this.min = Infinity;

  // stack to hold objects
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  // set new min
  this.min = Math.min(this.min, x);

  // push new "node" to stack
  this.stack.push({
    val: x,
    min: this.min,
  });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // pop from stack
  this.stack.pop();

  // set new min to next in stack
  if (this.stack.length > 0) {
    this.min = this.stack[this.stack.length - 1].min;
  } else {
    // reset
    this.min = Infinity;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  // get top of stack's val
  return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  // get top of stack's min
  return this.stack[this.stack.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
