import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [h, i, a, r, c] = stdinInput.trim().split(/\s/).map(Number);

  console.log(h * i - a * r * c);
};

solution(input);
