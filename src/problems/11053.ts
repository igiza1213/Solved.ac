import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [n, ...arr] = stdinInput.trim().split(/\s/).map(Number);

  let dp = [1];

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(
      ...arr.slice(0, i).map((value, j) => (value < arr[i] ? dp[j] + 1 : dp[0]))
    );
  }

  let max = Math.max(...dp);
  console.log(max);

  for(let i = n-1; i>=0; i--){
    
  }
};

solution(input);
