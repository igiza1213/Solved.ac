import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[N, M], x] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  let sum = 0;
  let maxSum = 0;

  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        sum = x[i] + x[j] + x[k];

        if (sum <= M && sum > maxSum) maxSum = sum;
      }
    }
  }

  console.log(maxSum);
};

solution(input);
