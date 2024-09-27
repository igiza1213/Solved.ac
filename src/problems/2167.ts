import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const [[n, m], ...arr] = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  const result: number[] = [];

  const newArr = arr.slice(n + 1);

  newArr.map(([i, j, x, y]) => {
    let sum = 0;

    for (let a = i; a <= x; a++) {
      for (let b = j; b <= y; b++) {
        sum += arr[a - 1][b - 1];
      }
    }
    result.push(sum);
  });

  console.log(result.join("\n"));
};

solution(input);
