import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [N, M, A, B] = stdinInput.trim().split(/\s/).map(BigInt);
  console.log((A * B).toString());
};

solution(input);
