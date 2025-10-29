import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [N, K, ...arr] = stdinInput.trim().split(/\s/).map(Number);
  let res = 0;
  let cnt = 0;
  while (res < K) {
    cnt++;
    for (let i = N - 1; i >= 0; i--) {
      if (arr[i] <= K - res) {
        res += arr[i];
        break;
      }
    }
  }

  console.log(cnt);
};

solution(input);
