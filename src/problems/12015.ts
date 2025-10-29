const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n =0
let index = 0;
rl.on("line", (line) => {
  if (index == 0) {
n = +line
  } else {
    solution(line);
  }
});

export const solution = (stdinInput: string) => {
  const arr = stdinInput.trim().split(/\s/).map(Number);

  let dp = [1];

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(
      ...arr.slice(0, i).map((value, j) => (value < arr[i] ? dp[j] + 1 : dp[0]))
    );
  }
  console.log(Math.max(...dp));
};

