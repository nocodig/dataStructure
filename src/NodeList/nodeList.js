const Node = require('./node')

class NodeList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  /**
   * 向链表末尾添加值
   * @param {*} ele 向链表中添加的值
   */
  append(ele) {
    if(!this.head) {
      this.head = new Node(ele);
    } else {
      let current;

      current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = new Node(ele);
    }

    this.length++;
  }

  /**
   * 查询该值在链表中的索引
   * @param {*} ele 查询索引的值
   */
  indexOf(ele) {
    let index = -1;
    let current = this.head;

    while(current) {
      index++;
      if (current.val === ele) {
        return index;
      }
      current = current.next;
    }

    return -1;
  }

  /**
   * 向固定位置添加一个值
   * @param {*} position 位置
   * @param {*} ele 值
   */
  insert(position, ele) {
    const node = new Node(ele);

    if (position < 0 || this.length < position) {
      return;
    } else {
      let current = this.head;
      let currentIndex = 0

      if (position === 0) {
        node.next = current;
        this.head = node;
      } else {
        while(currentIndex + 1 !== position) {
          current = current.next;
          currentIndex = this.indexOf(current.val);
        }
  
        node.next = current.next;
        current.next = node;
      }

      this.length++;
    }
  }

  /**
   * 将值为element的节点移除
   * @param {*} element 值
   */
  remove(element) {
    let pre = this.head;
    let current = this.head;

    if (!current) {
      return;
    }
    
    while(current.val !== element) {
      pre = current;
      current = current.next;
    }
    
    if (pre === this.head) {
      this.head = current.next;
    } else {
      pre.next = current.next;
    }

    this.length--;
  }

  /**
   * 移除该索引位置的节点
   * @param {*} position 索引
   */
  removeAt(position) {
    let current = this.head;
    let pre = this.head;

    if (position < 0 || this.length < position) {
      return;
    }

    if (position === 0) {
      this.head = current.next;
    } else {
      while(current) {
        if(this.indexOf(current.val) === position) {
          pre.next = current.next;
        }
        pre = current;
        current = current.next;
      }
    }

    this.length--;
  }

  /**
   * 获取头部节点
   */
  getHead() {
    return this.head;
  }

  /**
   * 链表是否为空
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * 链表大小
   */
  size() {
    return this.length;
  }

  toString() {
    let current = this.head;
    let str = '';

    while(current) {
      str += `,${current.val}`;
      current = current.next;
    }

    return str.slice(1);
  }
}

const nodlist = new NodeList();
nodlist.append(2);
nodlist.append(3);
nodlist.append(4);
nodlist.append(5);

console.log(nodlist.indexOf(2000))

// nodlist.insert(4,10)

// nodlist.remove(4)

nodlist.removeAt(1)

console.log(nodlist.toString())