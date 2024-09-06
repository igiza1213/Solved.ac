import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [T, ...arr] = stdinInput.trim().split(/\s/).map(Number);

  arr[T-1][T-1]
};

solution(input);
