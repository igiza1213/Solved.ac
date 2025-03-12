import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

// dp[i][j]: i는 자릿수, j는 j로 끝나는 수
// 점화식 dp[i][j] = dp[i-1][j-1] + dp[i-1][j+1]

export const solution = (stdinInput: string) => {
  const n = +stdinInput.trim();
  const mod = 1000000000;

  let dp: number[][] = Array.from(Array(n + 1), () => Array(10).fill(0));

  for (let i = 1; i <= 9; i++) {
    dp[1][i] = 1;
  }

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= 9; j++) {
      dp[i][j] = 0;
      if (j - 1 >= 0) dp[i][j] += dp[i - 1][j - 1];
      if (j + 1 <= 9) dp[i][j] += dp[i - 1][j + 1];
      dp[i][j] %= mod;
    }
  }

  console.log(dp[n].reduce((acc, cur) => acc + cur, 0) % mod);
};

solution(input);
