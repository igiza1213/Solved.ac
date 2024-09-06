import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [r, c, n] = stdinInput.trim().split(" ").map(Number);
  console.log(Math.ceil(r / n) * Math.ceil(c / n));
};

solution(input);
