import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput.trim().split("\n").map(Number);

  console.log(arr.reduce((acc, cur) => (cur < 40 ? 40 : cur) + acc, 0) / 5);
};

solution(input);
