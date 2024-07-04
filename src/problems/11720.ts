import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [T, N] = stdinInput.trim().split("\n").map(line=>line.split("").map(Number))

  console.log(N.reduce((acc,pre)=>(acc+pre)));
};

solution(input);
