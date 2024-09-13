import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [a, b, c] = stdinInput.trim().split(/\s/).map(Number);
  const hour = a + Math.floor((b + c) / 60);
  console.log(hour >= 24 ? hour - 24 : hour, (b + c) % 60);
};

solution(input);
