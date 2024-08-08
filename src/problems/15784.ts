import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput.trim().split("\n").map(Number);

  arr.shift();

  const result = arr.reduce((acc, cur) => acc + cur - 1, 0);

  console.log(result + 1);

};

solution(input);
