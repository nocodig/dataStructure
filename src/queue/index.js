class Queue {
  constructor() {
    this.list = [];
  }

  /**
   * 向队尾添加新元素
   */
  enqueue() {
    this.list.push(...arguments);
  }

  /**
   * 弹出队首元素
   */
  dequeue() {
    return this.list.shift();
  }

  /**
   * 返回队首元素
   */
  front() {
    return this.list[0]
  }

  /**
   * 队列是否为空
   */
  isEmpty() {
    return this.list === 0
  }

  /**
   * 清空队列
   */
  clear() {
    this.list.length = 0;
  }

  /**
   * 队列大小
   */
  size() {
    return this.list.length;
  }
}

const testQueue = new Queue();

console.log(`队列是否为空：${testQueue.isEmpty()}`);

testQueue.enqueue(10, 20, 30);

console.log(`队列是否为空：${testQueue.isEmpty()}`);

console.log(`testQueue 大小: ${testQueue.size()}`)

console.log(`弹出元素：${testQueue.dequeue()}`);

console.log(`testQueue 大小: ${testQueue.size()}`)

console.log(`队列顶元素：${testQueue.front()}`);

testQueue.clear();


console.log(`清空队列是否为空：${testQueue.isEmpty()}`);

console.log(`清空后大小: ${testQueue.size()}`)

// TODO: 循环队列实现？？？？


