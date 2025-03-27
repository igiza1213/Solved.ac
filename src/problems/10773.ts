import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [k, ...arr] = stdinInput.trim().split("\n").map(Number);

  let stack: number[] = [];

  arr.map((value) => {
    if (value === 0) stack.pop();
    else stack.push(value);
  });

  console.log(stack.reduce((acc, cur) => acc + cur, 0));
};

solution(input);
