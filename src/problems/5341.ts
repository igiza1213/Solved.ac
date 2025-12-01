import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput.trim().split(/\s/).map(Number);

  arr.pop();

  const result = arr.map((value) => (value * (value + 1)) / 2);

  console.log(result.join("\n"));
};

solution(input);
