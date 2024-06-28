import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [range, ...str] = stdinInput.trim().split("\n");

  for (let i = 0; i < +range; i++) {
    console.log(str[i][0] + str[i].slice(-1));
  }
};

solution(input);
