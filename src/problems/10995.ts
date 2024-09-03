import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = Number(stdinInput.trim());

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n * 2; j++) {
      i % 2
        ? process.stdout.write(j % 2 ? "*" : " ")
        : process.stdout.write(j % 2 ? " " : "*");
    }
    console.log();
  }
};

solution(input);
