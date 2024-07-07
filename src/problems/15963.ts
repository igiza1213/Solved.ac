import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [N, M] = stdinInput.trim().split(" ").map(Number);
  console.log(N == M ? "1" : "0");
};

solution(input);
