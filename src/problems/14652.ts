import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, m, k] = stdinInput.trim().split(" ").map(Number);

  console.log(Math.floor(k / m), k % m);
};

solution(input);
