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

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const q = new Queue<string>();
let result: string[] = [];
let n = 0;
readline
  .on("line", (line: any) => {
    q.enqueue(line);
  })
  .on("close", () => {
    const T = +q.dequeue()!;
    for (let i = 0; i < +T; i++) {
      n = +q.dequeue()!;
      solution();
    }
    console.log(result.join("\n"));
  });

export const solution = () => {
  let maxHeap = new DeleteableHeap<number>("MAX");
  let minHeap = new DeleteableHeap<number>("MIN");

  for (let ii = 0; ii < n; ii++) {
    let l = q.dequeue()?.split(" ")!;

    let [com, value] = [l[0], +l[1]];
    // console.log(n, ii, [com, value], maxHeap.data.heap);

    if (com === "I") {
      maxHeap.insert(value);
      minHeap.insert(value);
    } else {
      if (maxHeap.getSize() == 0) continue;

      let deleted = value === -1 ? minHeap.peek() : maxHeap.peek();
      maxHeap.delete(deleted);
      minHeap.delete(deleted);
    }
  }
  if (maxHeap.getSize() === 0) {
    result.push("EMPTY");
  } else {
    result.push(`${maxHeap.peek()} ${minHeap.peek()}`);
  }
};
