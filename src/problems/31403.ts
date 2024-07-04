import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [a, b, c] = stdinInput.trim().split("\n")
  console.log(+a + +b - +c);
  console.log(+(a + b) - +c);

};

solution(input);
