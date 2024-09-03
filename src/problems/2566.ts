import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput.trim().split(/\s/).map(Number);

  const max = Math.max(...arr);

  const row = Math.floor(arr.indexOf(max) / 9) + 1;
  const col = (arr.indexOf(max) % 9) + 1;

  console.log(max + "\n" + row, col);
};

solution(input);
