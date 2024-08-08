import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [a, b] = stdinInput.trim().split(/\s/).map(BigInt);
  const c = a * b;
  console.log(c.toString());
};

solution(input);
