import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput.trim().split("\n");

  arr.shift();

  console.log(arr.map((value, i) => i + 1 + ". " + value).join("\n"));
};

solution(input);
