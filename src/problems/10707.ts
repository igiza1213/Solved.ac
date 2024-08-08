import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [a, b, c, d, e] = stdinInput.trim().split(/\s/).map(Number);

  const x = a * e;
  const y = b + d * Math.max(0, e - c);
  console.log(Math.min(x, y));
};

solution(input);
