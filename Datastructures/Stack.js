const clear = () => console.clear();

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newHead = new Node(val);
    if (!this.first) {
      this.first = newHead;
      this.last = newHead;
    } else {
      newHead.next = this.first;
      this.first = newHead;
    }
    return this.size++;
  }
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    this.first = temp.next;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    return temp.val;
  }
}
