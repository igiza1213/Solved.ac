import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

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

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split(/\s/).map(Number);

  const result: number[] = [];

  arr.pop();

  const queue = new Queue();

  arr.map((value, i) => {
    if (value) {
      if (queue.getSize() == n) {
        return;
      }
      queue.enqueue(value);
    } else {
      queue.dequeue();
    }
  });

  const size = queue.getSize();

  if (!size) {
    console.log("empty");
  } else {
    for (let i = 0; i < size; i++) {
      result.push(queue.dequeue()!);
    }

    console.log(result.join(" "));
  }
};

solution(input);
