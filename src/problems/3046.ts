import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [r, s] = stdinInput.trim().split(" ").map(Number);

  console.log(s * 2 - r);
};

solution(input);
