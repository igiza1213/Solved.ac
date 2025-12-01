import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = +stdinInput.trim();
  for (let i = 1; i <= n; i++) {
    console.log(`Hello World, Judge ${i}!`);
  }
};

solution(input);
