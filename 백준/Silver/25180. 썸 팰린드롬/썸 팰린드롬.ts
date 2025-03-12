import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = +stdinInput.trim();

  const len = Math.floor((n - 1) / 9) + 1;

  console.log(n % 2 && !(len % 2) ? len + 1 : len);
};

solution(input);
