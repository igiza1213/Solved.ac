import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(0, "utf-8").toString();
// var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  let [n, ...arr] = stdinInput.trim().split("\n").map(Number);

  let sum = 0;

  arr.sort((a, b) => b - a);

  for (let i = 0; i < n; i++) {
    if ((i + 1) % 3) sum += arr[i];
  }
  console.log(sum);
};

solution(input);
