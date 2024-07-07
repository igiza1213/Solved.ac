import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [a, b] = stdinInput.trim().split("\n").map(BigInt);
  console.log([a + b, a - b, a * b].join("\n"));
};

solution(input);
