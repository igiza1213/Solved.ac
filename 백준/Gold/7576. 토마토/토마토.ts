import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

// m: 가로, n: 세로
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
}

export const solution = (stdinInput: string) => {
  const [[m, n], ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((value) => value.split(" ").map(Number));

  // console.log(m, n, arr);
  const queue = new Queue<number[]>();

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (arr[y][x] === 1) {
        queue.enqueue([y, x]);
      }
    }
  }

  let [x, y] = [0, 0],
    day = 0,
    [dx, dy] = [
      [-1, 1, 0, 0],
      [0, 0, -1, 1],
    ];
  while (queue.getSize()) {
    [y, x] = queue.dequeue()!;
    for (let i = 0; i < 4; i++) {
      let [ny, nx] = [dy[i] + y, dx[i] + x];

      if (0 <= ny && ny < n && 0 <= nx && nx < m && arr[ny][nx] === 0) {
        arr[ny][nx] = arr[y][x] + 1;
        queue.enqueue([ny, nx]);
      }
    }

    // console.log(arr);
  }

  try {
    day =
      Math.max(
        ...arr.map((value) => {
          value.map((v) => {
            if (v === 0) throw new Error("loop out");
          });
          return Math.max(...value);
        })
      ) - 1;
    console.log(day);
  } catch (error) {
    console.log(-1);
  }
};

solution(input);
