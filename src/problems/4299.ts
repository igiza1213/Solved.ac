import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [add, sub] = stdinInput.trim().split(" ").map(Number);
  const b = (add - sub) / 2;
  const a = add - b;
  if (add + sub < 0 || add - sub < 0 || (add + sub) % 2) console.log(-1);
  else console.log(Math.max(a, b), Math.min(a, b));
};

solution(input);
