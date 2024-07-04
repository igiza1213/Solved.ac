import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [...N] = stdinInput.trim().split("\n").map(Number)
  const max = Math.max(...N)
  console.log(max);
  console.log(N.indexOf(max) + 1)
};

solution(input);
