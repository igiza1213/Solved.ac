import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = Number(stdinInput.trim());

  console.log(n * 0.78, n * 0.8 + n * 0.2 * 0.78);
};

solution(input);
