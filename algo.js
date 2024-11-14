// 155. Min Stack



// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.





var MinStack = function() {
    this.stack = [];     // Main stack to store all elements
    this.minStack = [];  // Auxiliary stack to store minimum values
  };
  
  /** 
   * @param {number} val
   * @return {void}
   */
  MinStack.prototype.push = function(val) {
    this.stack.push(val); // Push the value onto the main stack
    
    // If minStack is empty or val is smaller or equal to the top of minStack, push it to minStack
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  };
  
  /**
   * @return {void}
   */
  MinStack.prototype.pop = function() {
    // Pop the top value from the main stack
    const poppedValue = this.stack.pop();
    
    // If the popped value is the same as the top of minStack, pop it from minStack too
    if (poppedValue === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.top = function() {
    // Return the top value of the main stack
    return this.stack[this.stack.length - 1];
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.getMin = function() {
    // Return the top value of the minStack, which is the current minimum
    return this.minStack[this.minStack.length - 1];
  };
  