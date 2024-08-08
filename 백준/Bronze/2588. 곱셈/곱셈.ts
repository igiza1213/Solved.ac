import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [a, b] = stdinInput.trim().split("\n").map(Number);

  console.log((b % 10) * a);
  console.log(Math.floor((b % 100) / 10) * a);
  console.log(Math.floor(b / 100) * a);
  console.log(a * b);
};

solution(input);
