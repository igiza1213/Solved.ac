import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [N, ...arr] = stdinInput.trim().split("\n").map(Number);

  console.log(arr.sort((a, b) => a - b).join("\n"));
};

solution(input);
