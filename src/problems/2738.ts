import fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
var input = fs.readFileSync(__dirname + filePath).toString();

export const solution = (stdinInput: string) => {
  const arr = stdinInput
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

  const [N, M] = arr.shift();

  let result = new Array(N).fill(0).map(() => new Array(M).fill(0));

  for (let i = 0; i < N; i++) {
    result[i] = arr[i].map((value, index) => value + arr[i + N][index]);
  }

  console.log(result.map(line=>line.join(" ")).join("\n"));
};

solution(input);
