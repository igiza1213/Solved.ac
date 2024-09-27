import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, m] = stdinInput.trim().split(/\s/).map(Number);

  let sum = n;
  let div = n;

  while (Math.floor(div / m) > 0) {
    sum += Math.floor(div / m);
    div /= m;
  }

  console.log(sum);
};

solution(input);
