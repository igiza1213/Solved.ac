import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = Number(stdinInput.trim());

  for (let i = 0; i < n; i++) {
    console.log("*".repeat(n - i));
  }
};

solution(input);
