import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split(/\s/).map(Number);

  arr.sort((a, b) => a - b);

  console.log(arr[0] * arr[arr.length - 1]);
};

solution(input);
