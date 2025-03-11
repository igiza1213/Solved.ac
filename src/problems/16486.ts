import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

const pi = 3.141592

export const solution = (stdinInput: string) => {
  const [a, b] = stdinInput.trim().split("\n").map(Number);

  console.log(2 * b * pi + a * 2);
  
};

solution(input);
