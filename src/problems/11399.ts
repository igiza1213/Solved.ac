import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split(/\s/).map(Number);

  arr.sort((a, b) => a - b);

  console.log(
    arr
      .map((value, i) => arr.slice(0, i + 1).reduce((a, b) => a + b, 0))
      .reduce((a, b) => a + b)
  );
};

solution(input);
