import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const T = Number(stdinInput.trim());

  for (let i = 1; i <= T; i++) {
    for (let j = 1; j <= T; j++) {
      process.stdout.write(j + i > T ? "*" : " ");
    }
    console.log();
  }
};

solution(input);
