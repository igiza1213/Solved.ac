import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [t, s] = stdinInput.trim().split(/\s/).map(Number);

  console.log(!(t >= 12 && t <= 16) || s ? 280 : 320);
};

solution(input);
