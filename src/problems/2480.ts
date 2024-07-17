import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [a, b, c] = stdinInput
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  if (a == b && b == c) {
    console.log(10000 + a * 1000);
  } else if (a == b || b == c) {
    console.log(1000 + b * 100);
  } else {
    console.log(c * 100);
  }
};

solution(input);
