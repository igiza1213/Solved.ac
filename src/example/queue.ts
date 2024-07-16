class Node {
  value: number;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  front: Node | null;
  rear: Node | null;
  size: number;

  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(item: number) {
    const newNode = new Node(item);
    if (!this.front || !this.rear) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.front) return null;

    const temp = this.front;
    if (this.front === this.rear) {
      this.rear = null;
    }
    this.front = this.front.next;
    this.size--;
    return temp.value;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.front == null && this.rear === null;
  }
}
