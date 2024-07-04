import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const N = stdinInput
    .trim()

  console.log(N.charCodeAt(0))
};

solution(input);
