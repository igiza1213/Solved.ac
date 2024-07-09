import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

    arr.pop()

  console.log(arr.map((v) => (v[0] > v[1] ? "Yes" : "No")).join("\n"));
};

solution(input);
