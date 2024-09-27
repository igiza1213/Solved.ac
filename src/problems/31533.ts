import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  let [a, m, n] = stdinInput.trim().split(/\s/).map(Number);

  const s = Math.min(m, n) / a;

  console.log(Math.min(s * 2, Math.max(m, n)));
};

solution(input);
