import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[N], shirts, [T, P]] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  const shirt = shirts.reduce((pre, cur) => pre + Math.ceil(cur / T), 0);

  console.log(`${shirt}\n${Math.floor(N / P)} ${N % P}`);
};

solution(input);
