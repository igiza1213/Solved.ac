import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class Queue<T> {
  front: Node<T> | null;
  rear: Node<T> | null;
  size: number;

  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(item: T) {
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

  peak() {
    return this.front?.value;
  }

  getList() {
    let res: T[] = [];
    let point = this.front;
    for (let i = 0; i < this.size; i++) {
      res.push(point!.value);
      point = point!.next;
    }

    return res;
  }
}

type itemType = [number, 0 | 1];

export const solution = (stdinInput: string) => {
  const [[n], ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));

  arr.map(([N, M], idx) => {
    if (!(idx % 2)) {
      let queue = new Queue<itemType>();

      for (let i = 0; i < N; i++) {
        queue.enqueue([arr[idx + 1][i], i == M ? 1 : 0]);
      }

      for (let i = 0; ; ) {
        let max = Math.max(...queue.getList().map((v) => v[0]));

        if (queue.peak()![0] === max) {
          let r = queue.dequeue()!;
          if (r[1]) {
            console.log(i + 1);
            break;
          }
          i++;
        } else queue.enqueue(queue.dequeue()!);
      }
    }
  });
};

solution(input);
