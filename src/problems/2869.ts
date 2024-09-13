import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [a, b, v] = stdinInput.trim().split(" ").map(Number);

  console.log(Math.ceil((v - a) / (a - b) + 1));
};

solution(input);
