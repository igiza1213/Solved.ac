import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = Number(stdinInput.trim());
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  console.log(sum);
};

solution(input);
