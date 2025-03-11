import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[n, m, d], ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));
  const sortedArr = arr.map((value) => value.sort((a, b) => a - b));

  let result = true;

  for (let i = 0; i < m && result; i++) {
    for (let j = 1; j < n && result; j++) {
      if (sortedArr[j][i] + d <= sortedArr[j - 1][i]) {
        result = false;
      }
    }
  }

  console.log(result ? "YES" : "NO");
};

solution(input);
