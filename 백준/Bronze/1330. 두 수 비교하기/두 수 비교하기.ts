import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [a, b] = stdinInput
    .trim()
    .split(" ")
    .map((value) => parseInt(value));

  console.log(a === b ? "==" : a > b ? ">" : "<");
};

solution(input);
