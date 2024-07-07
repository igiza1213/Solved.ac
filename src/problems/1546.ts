import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[T], arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  const m = Math.max(...arr);

  console.log(
    arr.map((value) => (value / m) * 100).reduce((acc, cur) => acc + cur) / T
  );
};

solution(input);
