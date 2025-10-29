export class Heap<T> {
  /** @type T[] */
  heap: T[] = [];
  size: number = 0;

  peak = () => this.heap[0];

  insert(item: T) {
    let i = ++this.size;
    while (i > 1 && item > this.heap[Math.trunc(i / 2)]) {
      this.heap[i] = this.heap[Math.trunc(i / 2)];
      i = Math.trunc(i / 2);
    }
    this.heap[i] = item;
  }

  delete() {
    let item = this.heap[1];
    let last = this.heap[this.size--];

    let [parent, child] = [1, 2];

    while (child <= this.size) {
      if (child < this.size && this.heap[child] < this.heap[child + 1]) child++;

      if (last >= this.heap[child]) break;
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

export class PriorityQueue<T> extends Heap<T> {
  enqueue = (item: T) => this.insert(item);
  dequeue = () => this.delete();
  isEmpty = () => this.heap.length <= 0;
}