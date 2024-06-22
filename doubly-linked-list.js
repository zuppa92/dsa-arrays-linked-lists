/** Node: node for a doubly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** DoublyLinkedList: chained together nodes. */

class DoublyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) throw new Error("List is empty");

    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) throw new Error("List is empty");

    const shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }

    this.length--;
    return shiftedNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) throw new Error("Invalid index");

    let current;
    if (idx < this.length / 2) {
      current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        current = current.prev;
      }
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) throw new Error("Invalid index");

    let current;
    if (idx < this.length / 2) {
      current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        current = current.prev;
      }
    }

    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) throw new Error("Invalid index");

    const newNode = new Node(val);

    if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      let current;
      if (idx < this.length / 2) {
        current = this.head;
        for (let i = 0; i < idx - 1; i++) {
          current = current.next;
        }
      } else {
        current = this.tail;
        for (let i = this.length - 1; i >= idx; i--) {
          current = current.prev;
        }
      }

      newNode.next = current.next;
      newNode.prev = current;
      if (current.next) current.next.prev = newNode;
      current.next = newNode;
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) throw new Error("Invalid index");

    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let removedNode;
    if (idx < this.length / 2) {
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }
      removedNode = current.next;
      current.next = removedNode.next;
      if (removedNode.next) removedNode.next.prev = current;
    } else {
      let current = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        current = current.prev;
      }
      removedNode = current.prev;
      current.prev = removedNode.prev;
      if (removedNode.prev) removedNode.prev.next = current;
    }

    this.length--;
    return removedNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let current = this.head;
    let sum = 0;

    while (current) {
      sum += current.val;
      current = current.next;
    }

    return sum / this.length;
  }

  /** reverseInPlace(): reverse the doubly linked list in place. */

  reverseInPlace() {
    let current = this.head;
    let temp = null;

    // Swap next and prev for all nodes
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev; // move to the next node in the original list
    }

    // Swap head and tail
    if (temp) {
      this.tail = this.head;
      this.head = temp.prev;
    }
  }
}

module.exports = DoublyLinkedList;
