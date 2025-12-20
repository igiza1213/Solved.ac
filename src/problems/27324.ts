import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = stdinInput.trim();

  console.log(n[0] === n[1] ? 1 : 0);
};

solution(input);
