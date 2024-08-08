import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [T, ...N] = stdinInput
    .trim()
    .split("\n").map((value) => value.split(" ").map(Number))
  

  N.map((value, i) => console.log(value[0] + value[1]))
};

solution(input);
