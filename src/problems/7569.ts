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

function chunk<T>(data: T[] = [], size = 1) {
  const arr: T[][] = [];

  for (let i = 0; i < data.length; i += size) {
    arr.push(data.slice(i, i + size));
  }

  return arr;
}

export const solution = (stdinInput: string) => {
  const [[m, n, h], ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((value) => value.split(" ").map(Number));

  const queue = new Queue<number[]>();

  const list = chunk(arr, n);

  for (let z = 0; z < h; z++) {
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < m; x++) {
        if (list[z][y][x] === 1) {
          queue.enqueue([z, y, x]);
        }
      }
    }
  }

  let [x, y, z] = [0, 0, 0],
    day = 0,
    [dx, dy, dz] = [
      [0, 0, -1, 1, 0, 0],
      [0, 0, 0, 0, -1, 1],
      [-1, 1, 0, 0, 0, 0],
    ];
  while (queue.getSize()) {
    [z, y, x] = queue.dequeue()!;
    for (let i = 0; i < 6; i++) {
      let [nz, ny, nx] = [dz[i] + z, dy[i] + y, dx[i] + x];

      if (
        0 <= ny &&
        ny < n &&
        0 <= nx &&
        nx < m &&
        0 <= nz &&
        nz < h &&
        list[nz][ny][nx] === 0
      ) {
        list[nz][ny][nx] = list[z][y][x] + 1;
        queue.enqueue([nz, ny, nx]);
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
