import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const T = stdinInput.trim().split(" ");

  console.log(T[0] ? T.length : 0);
};

solution(input);
