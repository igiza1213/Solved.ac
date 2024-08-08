import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[x], [n], ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  console.log(
    x === arr.reduce((acc, cur) => acc + cur[0] * cur[1], 0) ? "Yes" : "No"
  );
};

solution(input);
