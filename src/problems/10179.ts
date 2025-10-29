import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split(/\s/).map(Number);

  console.log(arr.map((v) => "$" + (v * 0.8).toFixed(2)).join("\n"));
};

solution(input);
