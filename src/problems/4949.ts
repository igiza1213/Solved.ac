import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput.trim().split("\n");

  arr.pop();

  arr.map((line) => {
    let stack: string[] = [];
    line.split("").map((value) => {
      if (value === "(" || value === "[") stack.push(value);
      if (value === ")") {
        if (stack[stack.length - 1] === "(") stack.pop();
        else stack.push(value);
      }
      if (value === "]") {
        if (stack[stack.length - 1] === "[") stack.pop();
        else stack.push(value);
      }
    });
    console.log(stack.length === 0 ? "yes" : "no");
  });
};

solution(input);
