import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

class Stack {
  arr: number[];
  index: number;
  size: number;

  constructor() {
    this.arr = [];
    this.index = 0;
    this.size = 0;
  }

  push(item: number) {
    this.arr[this.index++] = item;
    this.size++;
  }

  pop() {
    if (!this.size) return -1;
    const result = this.arr[--this.index];
    result && this.size--;
    return result;
  }
}

export const solution = (stdinInput: string) => {
  const [N, ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" "));

  const stack = new Stack();

  let result: number[] = [];

  arr.map((line) => {
    switch (line[0]) {
      case "pop":
        result.push(stack.pop());
        break;
      case "top":
        result.push(stack.arr[stack.size - 1] || -1);
        break;
      case "empty":
        result.push(stack.size ? 0 : 1);
        break;
      case "size":
        result.push(stack.size);
        break;
      default:
        stack.push(parseInt(line[1]));
        break;
    }
    console.log(stack.arr);
  });

  console.log(result.join("\n"));
};

solution(input);
