import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [a, b] = stdinInput
    .trim()
    .split(" ")
    .map((value) => Number(value));

  console.log(((a * b) / 2).toFixed(1));
};

solution(input);
