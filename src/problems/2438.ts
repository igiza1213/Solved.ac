import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [range] = stdinInput
    .trim()
    .split(" ")
    .map((value) => parseInt(value));

  for (let i = 1; i <= range; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
};

solution(input);
