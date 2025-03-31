export class Heap<T> {
  size: number = 0;
  heap: T[] = [];
  private comparator: (a: T, b: T) => boolean;

  constructor(
    comparator: "MIN" | "MAX" | ((a: T, b: T) => boolean) = "MAX",
    list?: T[]
  ) {
    switch (comparator) {
      case "MAX":
        this.comparator = (a: T, b: T) => a > b;
        break;
      case "MIN":
        this.comparator = (a: T, b: T) => a < b;
        break;
      default:
        this.comparator = comparator;
        break;
    }

    this.heap = [];
    if (list?.length) {
      for (const item of list) {
        this.insert(item);
      }
    }
  }

  peek = () => this.heap[1];

  insert(item: T) {
    let i = ++this.size;
    while (i > 1 && this.comparator(item, this.heap[Math.trunc(i / 2)])) {
      this.heap[i] = this.heap[Math.trunc(i / 2)];
      i = Math.trunc(i / 2);
    }
    this.heap[i] = item;
  }

  delete() {
    if (!this.size) {
      return 0;
    }

    let item = this.heap[1];
    let last = this.heap[this.size--];

    let [parent, child] = [1, 2];

    while (child <= this.size) {
      if (
        child < this.size &&
        this.comparator(this.heap[child + 1], this.heap[child])
      )
        child++;

      if (this.comparator(last, this.heap[child]) || last === this.heap[child])
        break;
      else {
        this.heap[parent] = this.heap[child];
        parent = child;
        child *= 2;
      }
    }
    this.heap[parent] = last;
    return item;
  }
}

export class DeleteableHeap<T> {
  readonly data: Heap<T>;
  readonly deleted: Heap<T>;
  constructor(
    comparator: "MIN" | "MAX" | ((a: T, b: T) => boolean) = "MAX",
    list?: T[]
  ) {
    this.data = new Heap<T>(comparator, list);
    this.deleted = new Heap<T>(comparator, list);
  }

  getSize() {
    this.adjust();
    return this.data.size;
  }

  insert(item: T) {
    this.data.insert(item);
  }

  delete(item: T) {
    this.deleted.insert(item);
  }

  peek() {
    this.adjust();
    return this.data.peek();
  }

  adjust() {
    while (this.deleted.size > 0 && this.data.peek() === this.deleted.peek()) {
      this.data.delete();
      this.deleted.delete();
    }
  }

  clear() {
    this.data.heap = [];
    this.deleted.heap = [];
    this.data.size = 0;
    this.deleted.size = 0;
  }
}

// import fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
// var input = fs.readFileSync(__dirname + filePath).toString();

// export const solution = (stdinInput: string) => {
//   const [[T], ...arr] = stdinInput
//     .trim()
//     .split("\n")
//     .map((v) => v.split(" "));

//   let result: string[] = [];

//   let com: string,
//     value: number,
//     n: number,
//     index = 0,
//     deleted: number;
//   for (let i = 0; i < +T; i++) {
//     n = +arr[index];
//     let maxHeap = new DeleteableHeap<number>("MAX");
//     let minHeap = new DeleteableHeap<number>("MIN");

//     for (let ii = ++index; ii < index + n; ii++) {
//       // console.log(index, ii, arr[ii], maxHeap.data.heap);
//       [com, value] = [arr[ii][0], +arr[ii][1]];
//       if (com === "I") {
//         maxHeap.insert(value);
//         minHeap.insert(value);
//       } else {
//         if (maxHeap.getSize() == 0) continue;

//         deleted = value === -1 ? minHeap.peek() : maxHeap.peek();
//         maxHeap.delete(deleted);
//         minHeap.delete(deleted);
//       }
//     }
//     if (maxHeap.getSize() === 0) {
//       result.push("EMPTY");
//     } else {
//       result.push(`${maxHeap.peek()} ${minHeap.peek()}`);
//     }

//     index += n;
//   }

//   console.log(result.join("\n"));
// };

// solution(input);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class MaxHeap {
  heap: (number | null)[];
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (
      currentIndex > 1 &&
      this.heap[currentIndex]! > this.heap[parentIndex]!
    ) {
      const tmp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[parentIndex];
      this.heap[parentIndex] = tmp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length < 2) {
      return;
    }

    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const value = this.heap[1];
    this.heap[1] = this.heap.pop()!;

    let currentIndex = 1;
    let leftChildIndex = 2;
    let rightChildIndex = 3;

    while (leftChildIndex < this.heap.length) {
      let swapIndex = leftChildIndex;

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex]! > this.heap[leftChildIndex]!
      ) {
        swapIndex = rightChildIndex;
      }

      if (this.heap[currentIndex]! > this.heap[swapIndex]!) {
        break;
      }

      const tmp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[swapIndex];
      this.heap[swapIndex] = tmp;

      currentIndex = swapIndex;
      leftChildIndex = currentIndex * 2;
      rightChildIndex = currentIndex * 2 + 1;
    }

    return value;
  }

  length() {
    return this.heap.length - 1;
  }

  clear() {
    this.heap = [null];
  }
}

class MinHeap {
  heap: (number | null)[];
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (
      currentIndex > 1 &&
      this.heap[currentIndex]! < this.heap[parentIndex]!
    ) {
      const tmp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[parentIndex];
      this.heap[parentIndex] = tmp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length < 2) {
      return;
    }

    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const value = this.heap[1];
    this.heap[1] = this.heap.pop()!;

    let currentIndex = 1;
    let leftChildIndex = 2;
    let rightChildIndex = 3;

    while (leftChildIndex < this.heap.length) {
      let swapIndex = leftChildIndex;

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex]! < this.heap[leftChildIndex]!
      ) {
        swapIndex = rightChildIndex;
      }

      if (this.heap[currentIndex]! < this.heap[swapIndex]!) {
        break;
      }

      const tmp = this.heap[currentIndex];
      this.heap[currentIndex] = this.heap[swapIndex];
      this.heap[swapIndex] = tmp;

      currentIndex = swapIndex;
      leftChildIndex = currentIndex * 2;
      rightChildIndex = currentIndex * 2 + 1;
    }

    return value;
  }

  length() {
    return this.heap.length - 1;
  }

  clear() {
    this.heap = [null];
  }
}

const maxHeap = new MaxHeap();
const minHeap = new MinHeap();
let actual_quantity = new Map();
let index = 0;
let EndIndex = 0;
let answer = "";

rl.on("line", (line) => {
  if (index === 0) {
    index++;
    return;
  }

  if (index > EndIndex) {
    EndIndex = +line + index++;
    //초기화 로직
    maxHeap.clear();
    minHeap.clear();
    actual_quantity.clear();
    return;
  }

  let [cmd, value] = line.split(" ");
  value = +value;

  if (cmd === "I") {
    maxHeap.push(value);
    minHeap.push(value);

    if (actual_quantity.get(value) > 0) {
      actual_quantity.set(value, actual_quantity.get(value) + 1);
    } else {
      actual_quantity.set(value, 1);
    }
  }

  if (cmd === "D" && value === 1) {
    let max = maxHeap.pop();
    while (maxHeap.length() > 0 && actual_quantity.get(max) < 1) {
      max = maxHeap.pop();
    }
    actual_quantity.set(max, actual_quantity.get(max) - 1);
  }

  if (cmd === "D" && value === -1) {
    let min = minHeap.pop();
    while (minHeap.length() > 0 && actual_quantity.get(min) < 1) {
      min = minHeap.pop();
    }
    actual_quantity.set(min, actual_quantity.get(min) - 1);
  }

  if (index === EndIndex) {
    let max: null | number = null;
    let min: null | number = null;

    while (maxHeap.length() > 0) {
      let value = maxHeap.pop();
      if (actual_quantity.get(value) > 0) {
        max = value!;
        break;
      }
    }

    while (minHeap.length() > 0) {
      let value = minHeap.pop();
      if (actual_quantity.get(value) > 0) {
        min = value!;
        break;
      }
    }

    if (max === null || min === null) {
      answer += "EMPTY\n";
    } else {
      answer += `${max} ${min}\n`;
    }
  }
  index++;
});

rl.on("close", () => {
  console.log(answer);
});
