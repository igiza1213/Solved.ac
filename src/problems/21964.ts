import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, s] = stdinInput.trim().split(/\s/);

  console.log(s.slice(Number(n) - 5));
};

solution(input);
