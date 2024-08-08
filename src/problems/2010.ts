import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[N, a, b], ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  const me = arr[a - 1][b - 1];

  const result: boolean[] = [];

  for (let i = 0; i < N; i++) {
    result.push(arr[a - 1][i] > me);
  }

  for (let i = 0; i < N; i++) {
    result.push(arr[i][b - 1] > me);
  }
  let ans = "HAPPY";
  result.map((value) => {
    if (value) ans = "ANGRY";
  });

  console.log(ans);
};

solution(input);
