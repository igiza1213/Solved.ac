import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [...T] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  T.map((value, i) => {
    console.log(value[1] ? value[0] + value[1] : "");
  });
};

solution(input);
