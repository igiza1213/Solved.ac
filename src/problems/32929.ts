import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = +stdinInput.trim();

  console.log(["S", "U", "O"][Math.floor(n % 3)]);
};

solution(input);
