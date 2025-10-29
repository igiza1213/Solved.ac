import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = +stdinInput.trim();

  const dp: number[] = [0, 0];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[Math.floor(i / 2)] + 1);
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[Math.floor(i / 3)] + 1);
  }

  console.log(dp[n]);
};

solution(input);
