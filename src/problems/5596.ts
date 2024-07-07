import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [a, b] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  const [n, m] = [
    a.reduce((pre, cur) => pre + cur),
    b.reduce((pre, cur) => pre + cur),
  ];

  console.log(n >= m ? n : m);
};

solution(input);
