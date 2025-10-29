import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[N], ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  arr.sort((a, b) => (a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]));

  let res = 0;
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i][0] >= res) {
      res = arr[i][1];
      cnt++;
    }
  }

  console.log(cnt);
};

solution(input);
