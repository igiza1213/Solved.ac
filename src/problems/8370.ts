import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput
    .trim()
    .split(" ")
    .map(Number)

  console.log(arr[0] * arr[1] + arr[2] * arr[3]);
};

solution(input);
