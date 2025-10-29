export class Heap<T> {
  size: number = 0;
  readonly heap: T[] = [];
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
}
