const DoublyLinkedList = require('./doubly-linked-list');

describe("DoublyLinkedList", function() {
  let list;

  beforeEach(function() {
    list = new DoublyLinkedList();
  });

  test("push adds to the end of the list", function() {
    list.push(1);
    list.push(2);
    expect(list.length).toBe(2);
    expect(list.head.val).toBe(1);
    expect(list.tail.val).toBe(2);
  });

  test("unshift adds to the start of the list", function() {
    list.unshift(1);
    list.unshift(2);
    expect(list.length).toBe(2);
    expect(list.head.val).toBe(2);
    expect(list.tail.val).toBe(1);
  });

  test("pop removes from the end of the list", function() {
    list.push(1);
    list.push(2);
    expect(list.pop()).toBe(2);
    expect(list.length).toBe(1);
    expect(list.head.val).toBe(1);
    expect(list.tail.val).toBe(1);
  });

  test("shift removes from the start of the list", function() {
    list.push(1);
    list.push(2);
    expect(list.shift()).toBe(1);
    expect(list.length).toBe(1);
    expect(list.head.val).toBe(2);
    expect(list.tail.val).toBe(2);
  });

  test("getAt retrieves the correct value", function() {
    list.push(1);
    list.push(2);
    expect(list.getAt(0)).toBe(1);
    expect(list.getAt(1)).toBe(2);
  });

  test("setAt sets the correct value", function() {
    list.push(1);
    list.push(2);
    list.setAt(1, 3);
    expect(list.getAt(1)).toBe(3);
  });

  test("insertAt inserts correctly", function() {
    list.push(1);
    list.push(3);
    list.insertAt(1, 2);
    expect(list.getAt(1)).toBe(2);
    expect(list.length).toBe(3);
  });

  test("removeAt removes correctly", function() {
    list.push(1);
    list.push(2);
    list.push(3);
    expect(list.removeAt(1)).toBe(2);
    expect(list.length).toBe(2);
    expect(list.getAt(1)).toBe(3);
  });

  test("average calculates correctly", function() {
    list.push(1);
    list.push(2);
    list.push(3);
    expect(list.average()).toBe(2);
  });

  test("reverseInPlace reverses the list", function() {
    const list = new DoublyLinkedList([1, 2, 3, 4]);
    list.reverseInPlace();
    expect(list.head.val).toBe(4);
    expect(list.head.next.val).toBe(3);
    expect(list.head.next.next.val).toBe(2);
    expect(list.head.next.next.next.val).toBe(1);
    expect(list.tail.val).toBe(1);
    expect(list.tail.prev.val).toBe(2);
    expect(list.tail.prev.prev.val).toBe(3);
    expect(list.tail.prev.prev.prev.val).toBe(4);
    expect(list.tail.next).toBe(null);
  });
});
