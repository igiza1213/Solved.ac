import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [a, b, c] = stdinInput.trim().split(/\s/).map(BigInt);

  c * BigInt(2) <= a + b
    ? console.log((a + b - c * BigInt(2)).toString())
    : console.log((a + b).toString());
};

solution(input);
