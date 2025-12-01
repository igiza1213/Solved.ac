import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = +stdinInput.trim();
  const rounds = n + 1;
  console.log(rounds * 2, rounds * 3);
};

solution(input);
