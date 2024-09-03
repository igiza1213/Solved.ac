import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [a, b, c, d, e] = stdinInput.trim().split(/\s/).map(Number);

  console.log(Math.min(a, b, c) + Math.min(d, e) - 50);
};

solution(input);
