import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

const dp: number[] = [];

const fel = (x: number): number => {
  if (dp[x]) return dp[x];

  let result = 0;
  for (let i = 1; i <= x / 2; i++) {
    result += fel(i);
  }
  dp[x] = result + 1;
  return result + 1;
};

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split(/\s/).map(Number);
  dp[1] = 1;

  console.log(arr.map((value) => fel(value)).join("\n"));
};

solution(input);
