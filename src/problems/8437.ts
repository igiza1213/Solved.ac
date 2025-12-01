import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [X, Y] = stdinInput.trim().split(/\s/).map(BigInt);

  console.log(((X + Y) / BigInt(2)).toString());
  console.log(((X - Y) / BigInt(2)).toString());
};

solution(input);
