class Stack {
  constructor() {
    this.list = [];
  }

  /**
   * 向栈内添加元素
   * @param {*} args 
   */
  push() {
    this.list.push(...arguments);
  }

  /**
   * 弹出栈顶元素
   */
  pop() {
    return this.list.pop();
  }

  /**
   * 获取栈顶元素
   */
  peek() {
    return this.list[this.list.length - 1];
  }

  /**
   * 判断栈是否为空
   */
  isEmpty() {
    return this.list.length === 0;
  }

  /**
   * 清空栈
   */
  clear() {
    this.list.length = 0;
  }

  /**
   * 获取栈大小
   */
  size() {
    return this.list.length;
  }
}

const testSatck = new Stack();

console.log(`栈是否为空：${testSatck.isEmpty()}`);

testSatck.push(10, 20, 30);

console.log(`栈是否为空：${testSatck.isEmpty()}`);

console.log(`testStack 大小: ${testSatck.size()}`)

console.log(`弹出元素：${testSatck.pop()}`);

console.log(`testStack 大小: ${testSatck.size()}`)

console.log(`栈顶元素：${testSatck.peek()}`);

testSatck.clear();


console.log(`清空栈是否为空：${testSatck.isEmpty()}`);

console.log(`清空后大小: ${testSatck.size()}`)

module.exports = Stack;

