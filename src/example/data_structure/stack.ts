export class Stack {
  arr: number[];

  constructor() {
    this.arr = [];
  }

  push(item: number) {
    this.arr.push(item);
  }

  pop() {
    return this.arr.pop();
  }

  getSize() {
    return this.arr.length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }
}
