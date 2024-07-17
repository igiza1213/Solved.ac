import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [a, b, c] = stdinInput.trim().split(/\s/).map(Number);

  console.log(Math.floor(((a + 1) * (b + 1)) / (c + 1) - 1));
};

solution(input);
