import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput.trim().split("\n").map(Number);

  const res = arr.map((value) => value % 42);

  const result = res.filter((value, i) => res.indexOf(value) === i);

  console.log(result.length);
};

solution(input);
