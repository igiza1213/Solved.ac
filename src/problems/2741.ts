import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n] = stdinInput.trim().split("\n").map(Number);

  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
};

solution(input);
