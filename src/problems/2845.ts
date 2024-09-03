import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [l, p, ...arr] = stdinInput.trim().split(/\s/).map(Number);

  const n = l * p;

  console.log(arr.map((value) => value - n).join(" "));
};

solution(input);
