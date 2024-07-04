import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput.trim().split("\n").map(Number);

  let result = [];
  for (let i = 1; i < arr.length + 3; i++) {
    if (arr.includes(i)) continue;
    result.push(i);
  }

  result.sort((a, b) => a - b)
  console.log(result.join("\n"))
};

solution(input);
