import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput.trim().split(/\s/).map(Number);

  console.log(arr.sort((a, b) => a - b)[1]);
};

solution(input);
