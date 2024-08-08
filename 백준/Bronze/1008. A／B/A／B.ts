import fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString();

export const solution = (stdinInput: string) => {
  const [a, b] = stdinInput
    .trim()
    .split(" ")
    .map((value) => parseInt(value));

  console.log(a / b);
};

solution(input);
