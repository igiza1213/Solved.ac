import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput.trim().split(" ").map(Number);

  arr.sort((a, b) => a - b);
  
  console.log(arr.join(" "));
};

solution(input);
