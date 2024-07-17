import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [a, b, c, d] = stdinInput.trim().split(/\s/).map(Number);

  console.log(56 * a + 24 * b + 14 * c + 6 * d);
};

solution(input);
