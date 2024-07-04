import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [T, ...N] = stdinInput.trim().split("\n");

  const num = N[0].split(" ").map(Number);
  console.log(Math.min(...num), Math.max(...num));
};

solution(input);
