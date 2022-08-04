/**
 * 链表节点声明
 */
class Node<T> {
  val: T;
  next: null | Node<any>;

  constructor(value:T) {
    this.val = value;
    this.next = null
  }
}

export default Node;