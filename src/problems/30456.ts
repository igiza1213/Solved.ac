import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  let [n, l] = stdinInput.trim().split(/\s/);

  console.log("1".repeat(+l - 1) + n);
};

solution(input);
