import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const n = +stdinInput.trim();

  let dp = Array.from({ length: 5001 }, () => 5001);

  [dp[3], dp[5]] = [1, 1];

  for (let i = 6; i <= n; i++) {
    dp[i] = Math.min(dp[i - 3], dp[i - 5]) + 1;
  }

  console.log(dp)

  if (dp[n] >= 5001) {
    console.log(-1);
  } else {
    console.log(dp[n]);
  }
};

solution(input);
